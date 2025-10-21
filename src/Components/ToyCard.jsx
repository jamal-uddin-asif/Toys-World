import React from "react";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const {toyId, pictureURL, toyName, rating, availableQuantity, price } = toy;
  return (
    <div className="border bg-white border-gray-300 rounded-2xl shadow-sm p-3 ">
      <div>
        <img
          className="h-[300px] w-full object-cover"
          src={pictureURL}
          alt=""
        />
      </div>
      <div className="">
        <h1 className="text-3xl font-bold py-9 ">{toyName}</h1>
        <div className="flex justify-between items-center bg-black text-white p-2 rounded-xl">
          <div className="text-purple-400">
            <p className=""> Remining: {availableQuantity}</p>
            <p>{rating}</p>
          </div>
          <p className="text-2xl font-bold">{price} $</p>
        </div>
      </div>
      <Link to={`/toy/${toyId}`} className="btn mt-1 w-full rounded-xl bg-red-700 text-white hover:bg-red-800 font-bold">
        View More
      </Link>
    </div>
  );
};

export default ToyCard;
