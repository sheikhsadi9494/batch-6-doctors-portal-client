import React from "react";
import img from "../../assets/images/people1.png";

const Testimonial = () => {
  const review = [
    {
      id: 1,
      img: img,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
    },
    {
      id: 2,
      img: img,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
    },
    {
      id: 3,
      img: img,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
    },
  ];
  return (
    <div className="md:w-4/5 mx-auto px-4 md:mt-32 mt-24 mb-24">
      <div>
        <h4 className="text-2xl pb-1 text-secondary font-bold">Testimonial</h4>
        <h1 className="text-4xl ">What Our Patients Says</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 mt-14 gap-y-10">
          {review.map((singleReview) => (
            <div key={singleReview.id}>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <p>{singleReview.review}</p>
                  <div className="card-actions items-center pt-8 justify-start">
                    
                        <img className="rounded-full" style={{width: '70px', border: '3px solid #19D3AE'}} src={singleReview.img} alt="" />
                    
                    <div>
                        <p className="text-xl font-bold">{singleReview.name}</p>
                        <p>{singleReview.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
