import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import Tost from "../Tost/Tost";

const BookingModal = ({ treatment, selecteDate, setTreatment, refetch}) => {
  const { name, slots } = treatment;
  const date = format(selecteDate, "PP");
  const {user} = useContext(AuthContext);

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patientName: patientName,
      slot, 
      email,
      phone
    }

    fetch(`http://localhost:5000/appointmentBookings`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        console.log(data);
        refetch();
        notifySuccess();
        setTreatment(null);
      } else {
        notifyError(data);
        setTreatment(null);
      }
    })
  }


  const notifySuccess = () =>
  toast.success("Bookings SuccessFully", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const notifyError = (data) =>
  toast.error(`${data.message}`, {
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
    
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="py-4">
            <form onSubmit={handleBookingSubmit}>
              <input
                type="text"
                value={date}
                className="input w-full mb-3 bg-gray-200"
                readOnly
              />
              <select name="slot" className="select w-full mb-3 bg-gray-200">
                {slots.map((slot, i) => (
                  <option key={i}>{slot}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Full Name"
                defaultValue={user.displayName}
                className="input input-bordered w-full mb-3 bg-gray-200"
                name="name"
                readOnly
              />
              <input
                type="email"
                placeholder="Email"
                defaultValue={user.email}
                className="input input-bordered w-full mb-3 bg-gray-200"
                name="email"
                readOnly
              />
               <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="input input-bordered w-full mb-3"
                name="phone"
              />
              <input type="submit" className="btn btn-accent w-full text-white" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
