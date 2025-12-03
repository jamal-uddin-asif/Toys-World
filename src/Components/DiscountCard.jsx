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
          <div>
            
          </div>
          <div className="p-2 hover:scale-105 transition ease-in-out rounded-xl md:grid grid-cols-12 bg-linear-to-r from-white to-green-200">
            <div className="sm:flex gap-3 col-span-5">
              {/* <img className="h-[110px] w-[100px]" src={pictureURL} alt="" /> */}
                <h1 className="text-2xl text-purple-800">{toyName}</h1>
              <div>

                <p className="font-semibold text-black">Discount price: {updatePrice} $</p>
                <p className="text-yellow-500">Rating: {rating}</p>
              </div>
            </div>
            <div className="text-center flex justify-center items-center  col-span-7">
              <p className="text-5xl text-black">{discount}% Discount</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DiscountCard;
