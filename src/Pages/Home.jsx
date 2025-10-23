import React from "react";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router";
import Container from "../Components/Container";
import ToyCard from "../Components/ToyCard";
import Marquee from "react-fast-marquee";
import Banner from "../Components/Banner";

const Home = () => {
  const toys = useLoaderData();
  // console.log(toys);

  return (
    <div className="bg-gray-100">
      <title>Toys-world-Home</title>
      <Container>
        <Slider></Slider>
       
        <div className="bg-white py-7 rounded-2xl">
          <h1 className="text-center py-8 text-5xl font-bold bg-linear-to-r from-purple-200 to-red-950 text-transparent bg-clip-text">HighLights</h1>
          <Marquee>
            {toys.map(toy=> <img className="h-14 mr-30" src={toy.pictureURL} alt="" />)}
          </Marquee>

        </div>
          <Banner></Banner>
        <div className="flex justify-center items-center py-9">
          <h1 className="sm:text-5xl text-3xl font-bold text-purple-800">Popular Toys</h1>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {toys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy}></ToyCard>
          ))}
        </div>


        <div>

        </div>
        
      </Container>
    </div>
  );
};

export default Home;
