import React from "react";
import Container from "../Components/Container";
import Heading from "../Components/Shard/Heading";
import aboutUsImg from "../assets/aboutUs.jpg";
import { useNavigate } from "react-router";

const AboutUs = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Heading
          heading={"Who We Are"}
          sub_heading={
              "A small dream that grew into a world full of toys and endless smiles."
          }
          ></Heading>
          <Container>

        <div className="md:flex p-2  justify-between ">
          <div className="flex-3">
            <h1 className="text-3xl md:text-5xl font-bold border-b pb-3">
              <span className="">About</span> Us
            </h1>
            <div className="md:p-4 p-2 text-blue-900">
              Toys World was created with one simple belief: every child
              deserves a childhood filled with joy, imagination, and meaningful
              play. What began as a small initiative to bring quality toys to
              families has now grown into a trusted destination for parents who
              want safe, engaging, and educational products for their children.
              We carefully select each toy with love and responsibility,
              ensuring it supports creativity, learning, and emotional
              development. From colorful puzzles to interactive play sets, our
              collection is designed to help children explore, dream, and grow.
              At Toys World, our dedication goes beyond selling toys. We aim to
              create memorable experiences that bring families closer, encourage
              curiosity, and spark lifelong creativity. With honesty, safety,
              and quality as our core values, we continue to build a world where
              every child can discover the magic of play.
            </div>
            <button onClick={()=>navigate(-1)} className="btn bg-amber-300">Prev</button>
          </div>
          <div className="flex-2">
            <img src={aboutUsImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
