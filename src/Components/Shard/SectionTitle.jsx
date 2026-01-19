import React from "react";

const SectionTitle = ({title, sub_title, className}) => {
  return (
    <div >
      <div className={`${className} flex bg-cyan-950 md:mb-10 text-white space-y-4 text-center justify-center flex-col items-center py-9`}>
        <h1 className="sm:text-5xl text-3xl font-bold ">
         {title}
        </h1>
        <p>{sub_title}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
