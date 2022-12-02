import React from "react";
import bannerImage from '../../assets/images/chair.png'
import bannerbg from '../../assets/images/bg.png'

const Banner = () => {
  return (
    <div style={{backgroundImage: `url(${bannerbg})`, backgroundSize: 'cover'}} className="hero  py-10 md:py-32">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="">
          <img
            src={bannerImage}
            className="rounded-lg shadow-2xl"
            alt="doc chire"
          />
        </div>
        <div className="">
          <h1 className="text-5xl font-bold pt-6 md:pt-0 pb">Your New Smile Starts <br className="hidden md:block" /> Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
