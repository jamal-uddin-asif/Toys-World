import React from "react";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import baby from '../assets/baby.jpg'
import putul from '../assets/putul.jpg'
import toy1 from '../assets/toy1.jpg'
import toy2 from '../assets/toy2.jpg'
import toy3 from '../assets/toy3.jpg'

import { register } from 'swiper/element/bundle';
import Container from "./Container";
register();


const Slider = () => {
    
  return (
    <div className=" py-7">
       

      <swiper-container speed="500" loop="true" Navigation='auto'>
        <swiper-slide><img className="sm:h-[400px] w-full object-cover" src={toy1} alt="" /></swiper-slide>
        <swiper-slide><img className="sm:h-[400px] w-full object-cover" src={baby} alt="" /></swiper-slide>
        <swiper-slide><img className="sm:h-[400px] w-full object-cover" src={toy2} alt="" /></swiper-slide>
        <swiper-slide><img className="sm:h-[400px] w-full object-cover" src={toy3} alt="" /></swiper-slide>
        <swiper-slide><img className="sm:h-[400px] w-full object-cover" src={putul} alt="" /></swiper-slide>
        ...
      </swiper-container>
      
    </div>
  );
};

export default Slider;
