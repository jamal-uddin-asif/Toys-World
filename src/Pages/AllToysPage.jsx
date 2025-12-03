import React from 'react';
import { useLoaderData } from 'react-router';
import Container from '../Components/Container';
import ToyCard from '../Components/ToyCard';

const AllToysPage = () => {
    const allToys = useLoaderData()
    console.log(allToys)
    return (
        <Container>
        <div className='  py-8'>   
            
            <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3'>
                {allToys.map(toy=><ToyCard toy={toy}></ToyCard>)}
            </div>
        </div>
        </Container>
    );
};

export default AllToysPage;