import React from "react";
import bg from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      className="md:mt-60 py-28 px-4 lg:px-0"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <div >
      <div className="text-center">
            <h4 className="text-2xl font-semibold text-primary">
            Contact Us
            </h4>
            <h2 className="text-4xl text-white pb-14">Stay connected with us</h2>
        </div>
        <div className="lg:w-1/3 mx-auto">
        <input type="text" placeholder="Enter Your Name" className="input w-full mb-5" /><br />
        <input type="text" placeholder="Enter Your Email" className="input w-full mb-5" /><br />
        <textarea className="textarea w-full h-40" placeholder="Your Message"></textarea>
        <div className="w-1/4 mx-auto pt-10">
        <button className="btn border-none bg-primary w-full text-white mx-auto">Submit</button>

        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
