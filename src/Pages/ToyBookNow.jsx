import React from "react";
import { toast } from "react-toastify";

const ToyBookNow = () => {
    
  const handleTryNow = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    // .log({name, email})
    if (name && email) {
      toast.success("Good Job😊");
      e.target.reset();

      return;
    } else {
      toast.error("Fill the form");
    }
  };
  return (
    <div>
      {/* form  */}
      <div className="max-w-sm ">
        <form onSubmit={handleTryNow} className="card-body">
          <fieldset className="fieldset">
        <h1 className="p-2 flex-1 text-2xl font-bold text-left">
          Book Now
        </h1>
            {/* Name  */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input focus:outline-0  p-2  border-b  "
              placeholder="Name"
              name="name"
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input  focus:outline-0  border-b p-2"
              placeholder="Email"
              name="email"
            />
          </fieldset>
          <button className="btn bg-amber-300 btn-outline text-black mt-4">Book now</button>
        </form>
      </div>
    </div>
  );
};

export default ToyBookNow;
