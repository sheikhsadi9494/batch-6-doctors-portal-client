import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoitmentBanner from "./AppoitmentBanner";
import Services from "./Services";

const Appointment = () => {
  const [selecteDate, setSelecteDate] = useState(new Date());

  const date = format(selecteDate, "PP");

  const {
    data: services = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["treatmentsOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/treatmentsOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  // if (isLoading) {
  //   return (
  //     <div className="w-2/4 md:w-1/4 mx-auto mt-40">
  //       <progress className="progress progress-primary w-full mx-auto"></progress>
  //       <p className="text-center font-bold text-xl">Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <AppoitmentBanner
        selecteDate={selecteDate}
        setSelecteDate={setSelecteDate}
      />
      <Services
        services={services}
        selecteDate={selecteDate}
        refetch={refetch}
      />
    </div>
  );
};

export default Appointment;
