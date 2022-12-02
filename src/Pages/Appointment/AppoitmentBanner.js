import React from "react";
import { DayPicker } from "react-day-picker";
import bannerImage from "../../assets/images/chair.png";
import bannerbg from "../../assets/images/bg.png";
import "react-day-picker/dist/style.css";

const AppoitmentBanner = ({selecteDate, setSelecteDate}) => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerbg})`, backgroundSize: "cover" }}
      className="hero min-h-screen pb-20 pt-10 md:py-0"
    >
      <div className="hero-content flex-col justify-evenly lg:flex-row-reverse">
        <div className="lg:w-2/4">
          <img
            src={bannerImage}
            className="rounded-lg shadow-2xl"
            alt="doc chire"
          />
        </div>

        <div className="bg-white p-3 mt-10 lg:mt-0 rounded-xl shadow-xl">
          <DayPicker
            mode="single"
            selected={selecteDate}
            onSelect={setSelecteDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppoitmentBanner;
