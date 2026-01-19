import React from 'react';
import ToyCard from '../Components/ToyCard';

const Toys = ({toys}) => {
    return (
        <div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-0 space-y-2  p-2.5">
          {toys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy}></ToyCard>
          ))}
        </div>
        </div>
    );
};

export default Toys;