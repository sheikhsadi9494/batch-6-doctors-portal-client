import React from "react";
import img1 from "../../assets/images/fluoride.png";
import img2 from "../../assets/images/cavity.png";
import img3 from "../../assets/images/whitening.png";

const WeProvidedServices = () => {
  const services = [
    {
      id: 1,
      title: "Fluoride Treatment",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: img1,
    },
    {
      id: 2,
      title: "Cavity Filling",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: img2,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: img3,
    },
  ];
  return (
    <div className="px-4 md:px-7 pt-6 pb-28">
        <div className="text-center">
            <h4 className="text-2xl font-semibold text-primary">
            OUR SERVICES
            </h4>
            <h2 className="text-4xl pb-14">Services We Provide</h2>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-10">
        {services.map((service) => (
          <div key={service.id}>
            <div className="card pt-14 shadow-xl">
              <figure>
                <img src={service.img} alt="Shoes" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-2xl font-semibold text-center">{service.title}</h2>
                <p>{service.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeProvidedServices;
