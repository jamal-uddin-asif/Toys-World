import React from 'react';
import ToyCard from '../Components/ToyCard';

const Toys = ({toys}) => {
    return (
        <div>
        <div className="flex bg-cyan-950 md:my-10 text-white space-y-4 text-center justify-center flex-col items-center py-9">
          <h1 className="sm:text-5xl text-3xl font-bold ">
            Make Playtime Special
          </h1>
          <p>Let your child explore a world full of imagination.</p>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-0 space-y-2  p-2.5">
          {toys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy}></ToyCard>
          ))}
        </div>
        </div>
    );
};

export default Toys;