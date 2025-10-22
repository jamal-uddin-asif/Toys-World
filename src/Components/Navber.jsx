import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Container from "./Container";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Navber = () => {
  const { user, signout } = useContext(AuthContext);
  console.log(user);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/profile"}>Profile</NavLink>
        </li>
      )}
    </>
  );

  const handleSignOut = () => {
    signout()
      .then(() => {
        toast.success("SignOut successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-linear-to-l from-pink-950 to-purple-950 text-white">
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
                className="menu z-10 text-black  menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl bg-linear-to-r from-purple-300 to-purple-900 text-transparent bg-clip-text">
              Toys World
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex relative">
                <h1 className=" font-semibold text-">{user?.displayName}</h1>
                <Link to={'/profile'}>
                  <img
                    className="w-12 h-12 mr-3 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </Link>
                <button
                  onClick={handleSignOut}
                  className="bg-gradient-to-r from-purple-500 to-purple-900 p-2 rounded-xl font-semibold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to={"/signin"} className="btn">
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
