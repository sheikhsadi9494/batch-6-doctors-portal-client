import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import Tost from "../Tost/Tost";
import Appointment from "./Appointment";
import AppointmentCard from "./AppointmentCard";

const Services = ({selecteDate, services, refetch}) => {
    const [treatment, setTreatment] = useState(null);

  return (
    <div>
      <Tost/>
      <div className="mt-20 mb-20">
        <h1 className="text-center text-secondary mb-16 text-3xl">
          Available Services on {format(selecteDate, "PP")}
        </h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-11 px-4 lg:px-7">
            {
                services.map((service) => <AppointmentCard setTreatment={setTreatment} key={service._id} service={service}></AppointmentCard>)
            }
        </div>
        {
          treatment && <BookingModal refetch={refetch} treatment={treatment} selecteDate={selecteDate} setTreatment={setTreatment} />
        }
        
      </div>
    </div>
  );
};

export default Services;
