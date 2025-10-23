import React from "react";
import { useLoaderData, useParams } from "react-router";
import Container from "../Components/Container";
import { toast } from "react-toastify";

const ToyDetails = () => {
  const { id } = useParams();
  const toys = useLoaderData();
  const clickedToy = toys.find((toy) => toy.toyId === Number(id));
  const {
    toyId,
    pictureURL,
    toyName,
    rating,
    availableQuantity,
    price,
    subCategory,
    sellerName,
    sellerEmail,
    description,
  } = clickedToy;
  console.log(clickedToy);

  const handleTryNow = (e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    
    // console.log({name, email})
    if(name && email){
       toast.success('Good Job😊')
      e.target.reset();

      return
    }else{
      toast.error('Fill the form')

    }


  }
  return (
    <Container>
      <title>Toys-world-Details</title>
    <div className="md:flex p-3 gap-10 py-9">

      <div className="max-h-[500px]">
        <img className="lg:h-[450px] md:h-[350px] mx-auto max-h-[450px]" src={pictureURL} alt="" />
      </div>


      <div className="flex-1">
        <div className="flex  text-3xl font-bold space-x-2" >
          <h1>{toyName}</h1>
          <p className="text-red-700">{price} $</p>
        </div>
        {/* devider  */}
        <div className="border border-gray-200 w-full my-4" ></div>

        <div>
            <h5>Rating: {rating}</h5>
            <p>Reminig: {availableQuantity}</p>
        </div>
        
       {/* devider  */}
        <div className="border border-gray-200 w-full my-4" ></div>
        <div className="" >
            <p >Seller Name: {sellerName}</p>
            <p >Seller Email: {sellerEmail}</p>
        </div>

          {/* devider  */}
        <div className="border border-gray-200 w-full my-4" ></div>
        
        <div className="text-gray-400 space-y-3">
            <p>Subcategory: {subCategory}</p>
            <p >Description: {description}</p>
        </div>
      </div>
    </div>

    {/* form  */}
    <div className="md:flex justify-center items-center ">
      <h1 className="p-2 flex-1 md:text-end text-purple-800 font-bold md:text-5xl text-4xl">Try Now</h1>
      <form onSubmit={handleTryNow}  className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input focus:outline-0  border-0  border-b-1 p-0"
              placeholder="Name"
              name="name"
            />
        
            {/* email  */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input border-0 input focus:outline-0  border-b-1 p-0"
              placeholder="Email"
              name="email"
            />
           
          </fieldset>
            <button className="btn btn-secondary text-black mt-4">
              Try Now
            </button>
        </form>
    </div>
    </Container>
  );
};

export default ToyDetails;
