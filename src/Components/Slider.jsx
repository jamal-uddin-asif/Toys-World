import React from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import baby from "../assets/baby.jpg";
import putul from "../assets/putul.jpg";
import toy1 from "../assets/toy1.jpg";
import toy2 from "../assets/toy2.jpg";
import toy3 from "../assets/toy3.jpg";
import { register } from "swiper/element/bundle";
import SliderContent from "./SliderContent";
register();

const Slider = () => {
  return (
    <div className=" py-7">
      <swiper-container 
      speed="500"
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      navigation={true}
       modules={[Pagination, Navigation, Autoplay]}
       loop="true" 
       Navigation="auto">
        <swiper-slide>
          <SliderContent
            toyImg={baby}
            heading={"Build Memories with Every Toy"}
            sub_heading={"Top-quality toys curated for smiles and imagination."}
          ></SliderContent>
        </swiper-slide>
        <swiper-slide>
          <SliderContent
            toyImg={toy1}
            heading={"Your Child’s New Favorites Await"}
            sub_heading={"Safe, durable & loved by kids of all ages"}
          ></SliderContent>
        </swiper-slide>
        <swiper-slide>
          <SliderContent
            toyImg={toy2}
            heading={"Discover the Magic of Play"}
            sub_heading={
              "Find toys that spark creativity, learning & endless fun!"
            }
          ></SliderContent>
        </swiper-slide>
        <swiper-slide>
          <SliderContent
            toyImg={toy3}
            heading={"Explore. Imagine. Play."}
            sub_heading={
              "Shop trending toys with safe delivery & exciting offers."
            }
          ></SliderContent>
        </swiper-slide>
        <swiper-slide>
          <SliderContent
            toyImg={putul}
            heading={"Playtime Just Got Better"}
            sub_heading={"Explore new arrivals designed for joy.”"}
          ></SliderContent>
        </swiper-slide>
        ...
      </swiper-container>
    </div>
  );
};

export default Slider;
