import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import DiscountCard from "../Components/DiscountCard";
import Heading from "../Components/Shard/Heading";
import Container from "../Components/Container";
import SectionTitle from "../Components/Shard/SectionTitle";

const Discount = () => {
  const toys = useLoaderData();
  // console.log(toys)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="space-y-3 bg-gray-200 pb-5">
      <title>Toys-world-Discount</title>

      <SectionTitle className={'py-20'} title={'"Big Discounts on Kids’ Toys!"'} sub_title={'"Play More, Pay Less — Limited Time Offer!"'}/>
      <Container>
        <div className="grid px-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
          {toys.map((toy) => (
            <DiscountCard key={toy.toyId} toy={toy}></DiscountCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Discount;
