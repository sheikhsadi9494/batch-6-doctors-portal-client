import React from "react";
import img1 from '../../assets/icons/clock.svg';
import img2 from '../../assets/icons/marker.svg';
import img3 from '../../assets/icons/phone.svg';

const AboutUsCard = () => {
  const cardInfo = [
    {
      id: 1,
      title: "Opening Hours",
      info: "Lorem Ipsum is simply dummy text of the pri",
      img: img1
    },
    {
      id: 2,
      title: "Visit our location",
      info: "Brooklyn, NY 10036, United States",
      img: img2
    },
    {
      id: 3,
      title: "Contact us now",
      info: "+000 123 456789",
      img: img3
    },
  ];

  return (
    <div className="px-4 md:px-7 pt-6 pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-10">
        {cardInfo.map((service) => (
          <div key={service.id}>
            <div style={{background: 'linear-gradient(to right, #19D3AE , #0FCFEC)'}} className="card card-side bg-#19D3AE h-100 px-5 py-7 shadow-xl">
              <figure>
                <img src={service.img} alt="Movie" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsCard;
