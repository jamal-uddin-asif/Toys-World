import React from "react";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router";
import Container from "../Components/Container";
import ToyCard from "../Components/ToyCard";

const Home = () => {
  const toys = useLoaderData();
  console.log(toys);

  return (
    <div className="bg-gray-100">
      <Container>
        <Slider></Slider>
        <div className="grid grid-cols-3 gap-4 ">
          {toys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy}></ToyCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
