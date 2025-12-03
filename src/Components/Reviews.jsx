import React, { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewsCard";
// import ReviewCard from "./ReviewCard";

const Reviews = () => {

  const [reviews, setReviews] = useState([])
  console.log(reviews)

  useEffect(()=>{
    fetch('./reviews.json').then(res=>res.json()).then(data=>setReviews(data))
  },[])

  return (
    <div className="my-10">
      <div className="text-center md:space-y-6 md:my-10 space-y-3 mb-5">
        <h1 className="text-3xl font-bold">What our customers are sayings</h1>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3  ">
    
            {reviews?.map((reviews) => (
                <ReviewCard reviews={reviews}></ReviewCard>
           
            ))}
      
      </div>
    </div>
  );
};

export default Reviews;
