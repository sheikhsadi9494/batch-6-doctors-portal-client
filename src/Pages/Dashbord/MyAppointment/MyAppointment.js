import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const { data: bookedAppointments = [] } = useQuery({
    queryKey: ["bookedAppointments", user.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookedAppointments?email=${user.email}`, {
        headers: {
            authorization: `bearer ${localStorage.getItem('token')}`
        }
      });
      const data = res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <div className=" px-4 lg:px-0 lg:w-4/5 mx-auto mt-14">
          <h1 className="text-3xl pb-5">My Appointment</h1>
          <table className="table w-full">
            {/* <!-- head -->  */}
            <thead>
              <tr>
                <th></th>
                <th>Treatment</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {bookedAppointments.map((appointment, index) => (
                <tr key={appointment._id}>
                  <th>{index + 1}</th>
                  <td>{appointment.treatment}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.slot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
