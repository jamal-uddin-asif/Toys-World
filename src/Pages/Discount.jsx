import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import DiscountCard from '../Components/DiscountCard';
import Heading from '../Components/Shard/Heading';

const Discount = () => {
    const toys = useLoaderData()
    // console.log(toys)
    useEffect(()=>{
         window.scrollTo(0, 0);
    },[])
    return (
        <div className='space-y-3 bg-gray-200 py-5'>
            <title>Toys-world-Discount</title>
            <Heading heading={'Big Discounts on Kids’ Toys!'} sub_heading={'Play More, Pay Less — Limited Time Offer!'}></Heading>
           {
            toys.map(toy=><DiscountCard key={toy.toyId} toy={toy}></DiscountCard>)
           }
        </div>
    );
};

export default Discount;