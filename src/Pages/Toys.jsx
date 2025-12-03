import React from 'react';
import ToyCard from '../Components/ToyCard';

const Toys = ({toys}) => {
    return (
        <div>
        <div className="flex justify-center items-center py-9">
          <h1 className="sm:text-5xl text-3xl font-bold text-purple-800">
            Popular Toys
          </h1>
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