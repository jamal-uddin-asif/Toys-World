import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import Container from "../Components/Container";
import { toast } from "react-toastify";
import ToyBookNow from "./ToyBookNow";

const ToyDetails = () => {
  const { id } = useParams();
  const toys = useLoaderData();

  const clickedToy = toys.find((toy) => toy.toyId === Number(id));
  const {
    toyId,
    pictureURL,
    toyName,
    rating,
    availableQuantity,
    price,
    subCategory,
    sellerName,
    sellerEmail,
    description,
  } = clickedToy;
  console.log(clickedToy);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">

    <Container>
      <title>Toys-world-Details</title>
      <div className="md:flex  p-3 gap-10 py-9 ">
        <div className="max-h-[500px] flex-1">
          <img
            className="lg:h-[450px] md:h-[350px] mx-auto max-h-[450px]"
            src={pictureURL}
            alt=""
            />
        </div>

        <div  className="flex-1 bg-cyan-950 text-white rounded-2xl shadow-xl p-4">
          <div className="flex justify-between text-2xl  md:text-3xl font-bold space-x-2">
            <h1>{toyName}</h1>
            <p className="">{price} $</p>
          </div>
          {/* devider  */}
          <div className="border border-gray-200 w-full my-4"></div>

          <div>
            <h5>Rating: {rating}</h5>
            <p>Reminig: {availableQuantity}</p>
          </div>

          {/* devider  */}
          <div className="border border-gray-200 w-full my-4"></div>
          <div className="">
            <p>Seller Name: {sellerName}</p>
            <p>Seller Email: {sellerEmail}</p>
          </div>

          {/* devider  */}
          <div className="border border-gray-200 w-full my-4"></div>

          <div className="text-gray-400 space-y-3">
            <p>Subcategory: {subCategory}</p>
            <p>Description: {description}</p>
          </div>
        <ToyBookNow></ToyBookNow>
        </div>

      </div>

    </Container>
            </div>
  );
};

export default ToyDetails;
