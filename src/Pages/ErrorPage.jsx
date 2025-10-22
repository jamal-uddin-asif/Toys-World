import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-3xl">Oops, page not found!</h1>
        <p className="text-6xl text-center text-purple-900 font-bold">404</p>
      </div>
    </div>
  );
};

export default ErrorPage;
