import React from 'react';
import { useLoaderData } from 'react-router';
import DiscountCard from '../Components/DiscountCard';

const Discount = () => {
    const toys = useLoaderData()
    // console.log(toys)
    return (
        <div className='space-y-3 bg-gray-200 my-3'>
            <title>Toys-world-Discount</title>
           {
            toys.map(toy=><DiscountCard key={toy.toyId} toy={toy}></DiscountCard>)
           }
        </div>
    );
};

export default Discount;