import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const {toyId, pictureURL, toyName, rating, availableQuantity, price } = toy;
  return (
    <div className="border hover:-translate-y-2 transition ease-in-out bg-white border-gray-300 rounded-2xl shadow-sm p-3 ">
      <div>
        <img
          className="h-[300px] w-full object-cover"
          src={pictureURL}
          alt=""
        />
      </div>
      <div className="">
        <h1 className="text-3xl font-bold py-9 headerFont">{toyName}</h1>
        <div className="flex justify-between items-center bg-gray-300 text-white p-2 rounded-xl">
          <div className="text-amber-800 font-semibold">
            <p className=""> Remining: {availableQuantity}</p>
            <p className="flex items-center">{rating} <Star className="h-4 "  color="yellow" ></Star></p>
          </div>
          <p className="text-2xl text-amber-800 font-bold">{price} $</p>
        </div>
      </div>
      <Link to={`/toy/${toyId}`} className="btn mt-1 w-full rounded-xl bg-purple-400 text-white hover:bg-purple-800 font-bold">
        View More
      </Link>
    </div>
  );
};

export default ToyCard;
