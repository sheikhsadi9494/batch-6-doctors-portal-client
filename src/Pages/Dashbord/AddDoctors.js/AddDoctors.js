import { useQuery } from "@tanstack/react-query";
import { Result } from "postcss";
import React from "react";
import { useForm } from "react-hook-form";
import { json, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import Tost from "../../Tost/Tost";


const AddDoctors = () => {
   
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageApi = process.env.REACT_APP_imgbb_key;

  const { data: specialtis, isLoading } = useQuery({
    queryKey: ["treatmentsSpecialty"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/treatmentsSpecialty`);
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading/>;
  }

 

  const handleAddDoctor = (data, event) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageApi}`, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(img => {
        if(img.success){
          const doctorData = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: img.data.url
          }
          fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization : `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(doctorData)
          })
          .then(res => res.json())
          .then(data => {
            notifySuccess();
            event.target.reset();
            console.log(data)
          })

        }
    })
  };

  const notifySuccess = () =>
  toast.success("Promoterd to admin SuccessFully", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return (
    <div>
      <Tost/>
      <h2 className="text-3xl font-semibold mb-8 text-center mt-8">
        Add A New Doctor
      </h2>
      <div className="md:w-2/4 lg:w-2/4 md:mx-auto border shadow-xl bg-white mx-4 rounded-2xl px-6 py-11">
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full mb-3 mt-1"
            {...register("name", { required: "full name is required" })}
          />
          {errors.name && (
            <p className="text-red-600 -mt-1">{errors.name.message}</p>
          )}

          <br />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mb-3 mt-1"
            {...register("email", { required: "email is required" })}
          />
          {errors.email && (
            <p className="text-red-600 -mt-1">{errors.email.message}</p>
          )}
          <br />
          <label htmlFor="">Select Specialty</label>
          <select
            className="select select-bordered w-full mt-1 mb-3"
            {...register("specialty", { required: "Specialty is required" })}
          >
            {specialtis.map((specialty) => (
              <option key={specialty._id}>{specialty.name}</option>
            ))}
          </select>
          {errors.specialty && (
            <p className="text-red-600 -mt-5">{errors.specialty.message}</p>
          )}
          <br />
          <label htmlFor="">Image</label>
          <input
            type="file"
            className="input input-bordered w-full mb-5 mt-1"
            {...register("image", { required: "image name is required" })}
          />
          {errors.image && (
            <p className="text-red-600 -mt-1">{errors.img.message}</p>
          )}

          <input className="btn btn-accent w-full text-white" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
