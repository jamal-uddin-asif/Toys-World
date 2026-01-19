import React from "react";
import { FaStar, FaTags, FaShoppingCart } from "react-icons/fa";
import { HiFire } from "react-icons/hi";

const DiscountCard = ({ toy }) => {
  const {
    toyName,
    pictureURL,
    price,
    discount,
    rating,
    subCategory,
  } = toy;

  // Logic: Original Price - Discount (Flat value)
  const updatedPrice = (price - discount).toFixed(2);

  return (
    <div className="group relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
      
      {/* Left Side: Image Section */}
      <div className="relative w-full flex-1  md:h-auto overflow-hidden bg-gray-100">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          src={pictureURL || "https://via.placeholder.com/300"}
          alt={toyName}
        />
        {/* Floating Category Tag */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <p className="text-[10px] uppercase tracking-widest font-bold text-indigo-600">
            {subCategory}
          </p>
        </div>
      </div>

      {/* Right Side: Content Section */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-white to-slate-50">
        
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight leading-tight mb-2">
              {toyName}
            </h2>
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar />
              <span className="text-sm font-bold text-slate-600 ml-1">{rating}</span>
              <span className="text-xs text-slate-400 font-medium">(Reviews)</span>
            </div>
          </div>
          
          {/* Unique Discount Shape */}
          <div className="flex flex-col items-center bg-rose-50 text-rose-600 px-4 py-2 rounded-2xl border border-rose-100 animate-pulse">
            <HiFire className="text-xl" />
            <span className="text-lg font-black">{discount}$</span>
            <span className="text-[10px] uppercase font-bold">Off</span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end">
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm line-through decoration-rose-400 decoration-2">
              ${price.toFixed(2)}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-3xl font-black text-slate-900">${updatedPrice}</span>
              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded">
                BEST DEAL
              </span>
            </div>
          </div>

      
        </div>
      </div>

      {/* Unique Design Element: Decorative tag icon in background */}
      <FaTags className="absolute -bottom-4 -right-4 text-8xl text-slate-100/50 -rotate-12 pointer-events-none" />
    </div>
  );
};

export default DiscountCard;