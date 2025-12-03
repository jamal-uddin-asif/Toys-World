import { Star } from "lucide-react";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const {toyId, pictureURL, toyName, rating, availableQuantity, price } = toy;
  return (
    <div className="flex flex-col hover:-translate-y-2 transition ease-in-out bg-white border-gray-300 rounded-2xl shadow-xl  ">
      <div>
        <img
          className="h-[150px] hover:scale-105 transition-all w-full object-cover"
          src={pictureURL}
          alt=""
        />
      </div>
      <div className="p-3 flex flex-col">
        <h1 className="text-2xl text-center font-mono  py-5 headerFont">{toyName}</h1>
        <div className=" flex-1  text-black p-2 rounded-xl">
          <div className="flex-1 font-semibold">
            <p className="">Remaining: {availableQuantity}</p>
            <p className="flex items-center">Rating: {rating} <FaStar color=""/></p>
          <p className="text-2xl  font-bold">$ {price}</p>
          </div>
        </div>
      <Link to={`/toy/${toyId}`} className="btn btn-outline text-black mt-1 w-full rounded-xl hover:bg-cyan-950  font-bold">
        View More
      </Link>
      </div>
    </div>
  );
};

export default ToyCard;
