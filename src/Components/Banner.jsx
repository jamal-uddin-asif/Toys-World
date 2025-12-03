import React from "react";
import bannerImg from "../assets/Rectangle_7.webp";

const Banner = () => {
  return (
    <div

      className={` sm:rounded-2xl overflow-hidden my-5 md:my-10 `}
      // style={{backgroundImage: `url(${bannerImg})` }}
    >
      <div className="relative">
        <div className="bg-black">
          <img className="opacity-50 " src={bannerImg} alt="" />
        </div>
        <div data-aos='fade-down' className="absolute font-semibold inset-0 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-white text-2xl md:text-6xl">For the kids</h1>
            <p className="text-white text-xl md:text-3xl">we have lots of toys. Check them out and buy some.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
