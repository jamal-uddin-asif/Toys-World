import React from "react";

const Heading = ({heading, sub_heading}) => {
  return (
    <div className="flex bg-cyan-950 md:my-10 my-4 text-white space-y-4 text-center justify-center flex-col items-center py-9">
      <h1 className="sm:text-5xl text-3xl font-bold ">{heading}</h1>
      <p>{sub_heading}</p>
    </div>
  );
};

export default Heading;
