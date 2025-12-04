import React, { useEffect } from "react";
import Container from "../Components/Container";
import Heading from "../Components/Shard/Heading";
import { MdEmail, MdHomeWork } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log({ name, email, message });
    if (!name || !email || !message) {
      return toast.error("Your message is not completed");
    } else {
      toast.success("Thanks for contact");
    }
  };

     useEffect(()=>{
           window.scrollTo(0, 0);
      },[])
  return (
    <div className="py-5">
      <Heading
        heading={"Get in Touch With Us"}
        sub_heading={
          "We’re here to help with any questions, feedback, or support you need."
        }
      ></Heading>
      <Container>
        <div className="md:flex p-2 justify-around items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gray-300 p-3 rounded-xl">
                <MdHomeWork size={25} />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Address</h1>
                <p>Chattogram, feni</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-300 p-3 rounded-xl">
                <FaPhoneAlt size={23} />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Phone</h1>
                <p>+8801699999999</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-300 p-3 rounded-xl">
                <MdEmail size={22} />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Email</h1>
                <p>asifzehendmg@gmail.com</p>
              </div>
            </div>
          </div>

          <div className=" flex items-center">
            <title>Toys-world-Login</title>
            <div className="card bg-base-100 shadow-2xl border-gray-400 mx-auto  w-full max-w-sm shrink-0 ">
              <form onSubmit={handleSubmit} className="card-body">
                <h1 className="font-semibold  text-xl ">Send Message</h1>
                <fieldset className="fieldset">
                  <label className="label">Full Name</label>
                  <input
                    type="text"
                    className="input border-0  focus:outline-0  border-b p-0"
                    placeholder="Full Name"
                    name="name"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input border-0  focus:outline-0  border-b p-0"
                    placeholder="Email"
                    name="email"
                  />
                  <div className="relative">
                    <label className="label">Type Your message</label>
                    <textarea
                      name="message"
                      className="textarea"
                      rows={10}
                      id=""
                    ></textarea>
                  </div>

                  <div className="mt-2"></div>
                  <button className="btn btn-secondary text-text-white mt-4">
                    Send
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
