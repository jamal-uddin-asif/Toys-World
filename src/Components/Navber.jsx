import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigation } from "react-router";
import Container from "./Container";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { ClipLoader, RotateLoader } from "react-spinners";

const Navber = () => {
  const { user, signout, loading } = useContext(AuthContext);
  // const navigation = useNavigation()
  // console.log(loading)
  // console.log(user);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
          <li>
            <NavLink to={"/discount"}>Discount</NavLink>
          </li>
      {user && (
        <>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    signout()
      .then(() => {
        toast.success("SignOut successful");
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div className="bg-cyan-950 text-white ">
      {/* bg-linear-to-l from-pink-950 to-purple-950  */}
      <Container>
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu bg-cyan-800 z-10 text-black  menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <img className="w-12" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-toys-black-friday-cyber-monday-flaticons-flat-flat-icons.png" alt="" />
            <Link to={'/'} className="btn hidden md:block btn-ghost text-2xl bg-linear-to-r from-purple-300 to-purple-900 text-transparent bg-clip-text">
              Toys World
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-yellow-400">{links}</ul>
          </div>
          <div className="navbar-end">
            {loading ? (
              <ClipLoader color="white" />
            ) : user ? (
              <div className="flex relative ">
                <div className="text-transparent hover:text-yellow-400">
                  <h1 className={`font-semibold absolute -left-4 -top-4   `}>
                    {user?.displayName}
                  </h1>
                  <Link to={"/profile"}>
                    <img
                      className="w-12 h-12 mr-3 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </Link>
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-amber-400 p-2 rounded-sm text-black  font-semibold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to={"/signin"} className="btn text-yellow-600 ">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
