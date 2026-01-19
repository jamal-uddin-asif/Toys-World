import React, { useEffect } from "react";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router";
import Container from "../Components/Container";
import ToyCard from "../Components/ToyCard";
import Marquee from "react-fast-marquee";
import Banner from "../Components/Banner";
import Toys from "./Toys";
import Reviews from "../Components/Reviews";
import SectionTitle from "../Components/Shard/SectionTitle";

const Home = () => {
  const toys = useLoaderData();
  // console.log(toys);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-100 ">
      <title>Toys-world-Home</title>
      <Slider></Slider>
      <SectionTitle
        className={"py-15 mt-5"}
        title={"Make Playtime Special"}
        sub_title={"Let your child explore a world full of imagination."}
      />
      <Container>
        <Toys toys={toys}></Toys>

        <div className="bg-white py-7 rounded-2xl my-15 md:my-20">
          <div className="py-7 text-center space-y-1">
            <h1 className="text-center  text-3xl  font-bold ">HighLights</h1>
            <p className="text-gray-400 text-xl">
              “Explore new arrivals & best-selling collections.
            </p>
          </div>

          <Marquee>
            {toys.map((toy) => (
              <img
                className="h-14 md:h-30 mr-15  sm:mr-30"
                src={toy.pictureURL}
                alt=""
              />
            ))}
          </Marquee>
        </div>
      </Container>

      <Banner></Banner>

      <Container>
        <Reviews></Reviews>
      </Container>

      <div></div>
    </div>
  );
};

export default Home;
