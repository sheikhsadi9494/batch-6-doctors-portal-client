import React from "react";
import doc from "../../assets/images/doctor-small.png";
import bg from "../../assets/images/appointment.png";

const AboutAppoitment = () => {
  return (
    <div
      className="md:mt-60"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="mx-auto py-20 lg:w-2/4">
            <h4
              className='text-2xl pb-1 text-secondary font-bold'
            >
              Appoitment
            </h4>
            <h1 className="text-5xl text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page{" "}
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
          <div className="order-first hidden md:block md:order-last">
            <img src={doc} className=" rounded-lg -mt-32 -mb-14 " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAppoitment;
