import React from "react";
import img from '../../assets/images/treatment.png'

const AboutUs = () => {
  return (
    <div className="mb-24 md:mb-32 md:mt-10 px-4 md:px-7">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="mx-auto lg:w-2/4">
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
          <div className="lg:w-1/3 pb-5 md:pb-0 order-first md:order-last">
            <img
              src={img}
              className=" rounded-lg shadow-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
