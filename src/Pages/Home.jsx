import React from "react";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router";
import Container from "../Components/Container";
import ToyCard from "../Components/ToyCard";
import Marquee from "react-fast-marquee";
import Banner from "../Components/Banner";
import Toys from "./Toys";

const Home = () => {
  const toys = useLoaderData();
  // console.log(toys);

  return (
    <div className="bg-gray-100">
      <title>Toys-world-Home</title>
      <Container>
        <Slider></Slider>
        <Toys toys={toys}></Toys>
     


        {/* <div className="bg-white py-7 rounded-2xl">
          <div className="py-7 text-center space-y-1">
            <h1 className="text-center  text-3xl sm:text-5xl font-bold bg-linear-to-br from-gray-200 to-purple-950 text-transparent bg-clip-text">
              HighLights
            </h1>
            <p className="text-gray-400 text-xl">We have more toys.</p>
          </div>

          <Marquee>
            {toys.map((toy) => (
              <img
                className="h-14 mr-15 rounded-full sm:mr-30"
                src={toy.pictureURL}
                alt=""
              />
            ))}
          </Marquee>
        </div> */}
        <Banner></Banner>

        <div></div>
      </Container>
    </div>
  );
};

export default Home;
