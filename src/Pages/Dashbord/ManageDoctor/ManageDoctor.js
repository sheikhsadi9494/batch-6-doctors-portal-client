import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../Loading/Loading";
import Tost from "../../Tost/Tost";
import DoctorDeleteModal from "../DoctorDeleteModal/DoctorDeleteModal";

const ManageDoctor = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const { data: doctors = [], isLoading, refetch} = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    <Loading />;
  }

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/doctors/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          setDeleteDoctor(null)
        }
      });
  };
  return (
    <div>
      <Tost />
      <div className="overflow-x-auto">
        <div className=" px-4 lg:px-0 lg:w-4/5 mx-auto mt-14">
          <h1 className="text-3xl pb-5">Manage Doctors</h1>
          <table className="table w-full">
            {/* <!-- head -->  */}
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Speciality</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {doctors.map((doctor, index) => (
                <tr key={doctor._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={doctor.image} alt="doctor" />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <label
                      onClick={() => setDeleteDoctor(doctor)}
                      htmlFor="doctor-delete-modal"
                      className="btn btn-error btn-sm"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {deleteDoctor && (
          <DoctorDeleteModal
            deleteDoctor={deleteDoctor}
            setDeleteDoctor={setDeleteDoctor}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default ManageDoctor;
