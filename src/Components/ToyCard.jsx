import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const {toyId, pictureURL, toyName, rating, availableQuantity, price } = toy;
  return (
    <div className=" hover:-translate-y-2 transition ease-in-out bg-white border-gray-300 rounded-2xl shadow-xl  ">
      <div>
        <img
          className="h-[150px] hover:scale-105 transition-all w-full object-cover"
          src={pictureURL}
          alt=""
        />
      </div>
      <div className="p-3">
        <h1 className="text-2xl text-center font-mono  py-5 headerFont">{toyName}</h1>
        <div className="flex justify-between items-center  text-white p-2 rounded-xl">
          <div className="text-amber-800 font-semibold">
            <p className="">Remaining: {availableQuantity}</p>
            <p className="flex items-center">{rating} <Star className="h-4 "  color="yellow" ></Star></p>
          </div>
          <p className="text-2xl text-amber-800 font-bold">{price} $</p>
        </div>
      <Link to={`/toy/${toyId}`} className="btn  mt-1 w-full rounded-xl bg-cyan-950 text-white hover:bg-secondary font-bold">
        View More
      </Link>
      </div>
    </div>
  );
};

export default ToyCard;
