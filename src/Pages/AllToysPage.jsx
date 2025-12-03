import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Container from '../Components/Container';
import ToyCard from '../Components/ToyCard';
import bannerImg from "../assets/Map.webp";
import toy from "../assets/7032082_40705 (1).jpg";


const AllToysPage = () => {
    const allToysInitila = useLoaderData()
    const [allToys, setAlltoys] = useState(allToysInitila)
    const [searchText, setSearchText] = useState('')
    const [sortText, setSortText] = useState('')


    useEffect(()=>{
        const text = searchText.toLocaleLowerCase()
        if(searchText){
            const filtered = allToys.filter(toy=> toy.toyName.toLowerCase().includes(text))
            setAlltoys(filtered)
            console.log(filtered)
        }else{
            setAlltoys(allToysInitila)
        }
    },[searchText])

    useEffect(()=>{
        const copyToyArray = [...allToys]
        if(sortText === 'desc'){
                  const sorted = copyToyArray.sort((a, b)=>  a.price - b.price)
            setAlltoys(sorted)
        }
        if(sortText === 'ace'){
             const sorted = copyToyArray.sort((a, b)=>  b.price - a.price)
            setAlltoys(sorted)
        }
    },[sortText, allToys])
   
    return (
        <Container>
        <div className='px-2  pb-8'>   
                <div

      className={` sm:rounded-2xl overflow-hidden my-5 md:my-10 `}
      // style={{backgroundImage: `url(${bannerImg})` }}
    >
      <div className="relative">
        <div className="bg-black">
          <img className="opacity-50 h-[200px] md:h-[400px] w-full" src={bannerImg} alt="" />
        </div>
        <div data-aos='fade-down' className="absolute font-semibold inset-0 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-white text-2xl md:text-6xl">Find Your Perfect Toy</h1>
            <p className="text-white text-xl md:text-3xl">Browse by age, category, brand, or price to find exactly what you need.</p>
          </div>
        </div>
      </div>
    </div>
            <div className='md:grid grid-cols-12 gap-4'>
                <div className='col-span-3    h-screen md:sticky top-20 shadow-2xl p-2 md:p-4'>
                    <h1 className='text-2xl font-semibold'>Find Your toys</h1>
                    <div className='py-2'>
                        <label className='label'>Search </label>
                        <input onChange={(e)=> setSearchText(e.target.value)} className='input focus:outline-0 ' placeholder='Search toys ' type="text" />
                    </div>
                    <div>
                        <label className='label'>Sort by price</label>
                        <select onChange={(e)=> setSortText(e.target.value)}  className='select  focus:outline-0 ' name="" id="">
                            <option value="ace">High to low</option>
                            <option value="desc">Low to high</option>
                        </select>
                    </div>

                    <div >
                        <img src={toy} alt="" />
                    </div>
                </div>  
            <div className='grid col-span-9  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {allToys.map(toy=><ToyCard toy={toy}></ToyCard>)}
            </div>
            </div>
        </div>
        </Container>
    );
};

export default AllToysPage;