import React from "react";

const AppointmentCard = ({ service, setTreatment}) => {
  return (
    <div className="card bg-base-100 py-7 shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl text-secondary text-center font-semibold">
          {service.name}
        </h2>
        <p className="text-center font-semibold">
          {service?.slots?.length > 0 ? service.slots[0] : "Try another day"}
        </p>
        <p className="text-center font-semibold">
          {service.slots.length} {service.slots.length > 1 ? "Spaces" : "Space"}{" "}
          available
        </p>
        <div className="card-actions justify-end">
          <label
            style={{
              background: "linear-gradient(to right, #19D3AE , #0FCFEC)",
            }}
            htmlFor="booking-modal"
            className="btn border-none text-white mt-7 px-10 mx-auto"
            onClick={() => setTreatment(service)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
