import React from "react";
import Container from "./Container";

const DiscountCard = ({ toy }) => {
  const {
    toyName,
    availableQuantity,
    description,
    discount,
    pictureURL,
    price,
    rating,
    sellerEmail,
    sellerName,
    subCategory,
  } = toy;
  const updatePrice = (price-discount).toFixed(2)
  return (
    <>
      <div className="">
        <Container>
          <div className="p-2 md:grid grid-cols-12 bg-linear-to-r from-green-500 to-green-800">
            <div className="sm:flex gap-3 col-span-5">
              <img className="h-[110px] w-[100px]" src={pictureURL} alt="" />
              <div>
                <h1 className="text-2xl text-purple-800">{toyName}</h1>

                <p className="font-semibold text-white">Discount price: {updatePrice} $</p>
                <p className="text-yellow-500">Rating: {rating}</p>
                <p className="font-semibold">SubCategory: {subCategory}</p>
              </div>
            </div>
            <div className="text-center flex justify-center items-center  col-span-7">
              <p className="text-5xl text-white">{discount}% Discount</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DiscountCard;
