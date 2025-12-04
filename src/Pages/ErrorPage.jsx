import React from "react";
import notFoundImg from '../assets/error.jpg'

const ErrorPage = () => {
  return (
    <div className="flex text-center justify-center items-center h-screen">
      <div>
        <img className="max-w-[400px]" src={notFoundImg} alt="" />
        <h1 className="text-3xl">Oops, page not found!</h1>
        <p className="text-6xl text-center text-purple-900 font-bold">404</p>
      </div>
    </div>
  );
};

export default ErrorPage;
