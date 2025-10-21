import React from "react";
import { useLoaderData, useParams } from "react-router";
import Container from "../Components/Container";

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
  return (
    <Container>
    <div className="md:flex p-3 gap-10 py-9">

      <div className="max-h-[500px]">
        <img className="lg:h-[450px] md:h-[350px] mx-auto max-h-[450px]" src={pictureURL} alt="" />
      </div>


      <div className="flex-1">
        <div className="flex  text-3xl font-bold space-x-2" >
          <h1>{toyName}</h1>
          <p className="text-red-700">{price} $</p>
        </div>
        {/* devider  */}
        <div className="border border-gray-200 w-full my-4" ></div>

        <div>
            <h5>Rating: {rating}</h5>
            <p>Reminig: {availableQuantity}</p>
        </div>
        
       {/* devider  */}
        <div className="border border-gray-200 w-full my-4" ></div>
        <div className="" >
            <p >Seller Name: {sellerName}</p>
            <p >Seller Email: {sellerEmail}</p>
        </div>

          {/* devider  */}
        <div className="border border-gray-200 w-full my-4" ></div>
        
        <div className="text-gray-400 space-y-3">
            <p>Subcategory: {subCategory}</p>
            <p >Description: {description}</p>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default ToyDetails;
