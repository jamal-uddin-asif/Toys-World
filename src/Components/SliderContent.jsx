import React, { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const SliderContent = ({ toyImg, heading, sub_heading }) => {

    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <div className="relative bg-black">
      <div className="">
        <img className="sm:h-[400px] opacity-55 w-full object-cover" src={toyImg} alt="" />
      </div>
      <div data-aos="fade-up" className="absolute md:space-y-7 p-10 space-y-2 text-center text-white inset-0 flex justify-center flex-col items-center">
        <h1 className="lg:text-5xl sm:4xl  text-2xl ">{heading}</h1>
        <p className="md:text-2xl ">{sub_heading}</p>
      </div>
    </div>
  );
};

export default SliderContent;
