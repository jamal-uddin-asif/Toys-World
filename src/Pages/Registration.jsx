import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Registration = () => {

  const { createUser, googleSignIn, updateUserProfile, signout } = useContext(AuthContext);
  const [passErr, setPassErr] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state || '/'


  const handleRegis = (e) => {
    e.preventDefault();
    setPassErr('')

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ name, photo, email, password });

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;


    if (!passwordRegex.test(password)) {
      setPassErr("Password must be 6 character with one upperCase and one lowerCase");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUserProfile({displayName: name, photoURL: photo})
        .then(()=>{
            signout()
            .then(()=>{
                
            })
            .catch(err=>{
              console.log(err)
            })
        })
        .catch(err=>{
          console.log(err)
        })
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result=>{

      navigate(from)
      toast.success('Signin successful')

    })
    .catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="h-screen flex items-center">
      <div className="card bg-base-100 border border-gray-400 mx-auto  w-full max-w-sm shrink-0 ">
        <form onSubmit={handleRegis} className="card-body">
          <h1 className="font-semibold  text-xl ">Create an account</h1>
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input focus:outline-0  border-0  border-b-1 p-0"
              placeholder="First name"
              name="name"
            />
            {/* Photo  */}
            <label className="label">Photo</label>
            <input
              type="text"
              className="input border-0  focus:outline-0  border-b p-0"
              placeholder="Photo URL"
              name="photo"
            />
            {/* email  */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input border-0  focus:outline-0  border-b p-0"
              placeholder="Email"
              name="email"
            />
            {/* pass  */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input border-0   focus:outline-0 border-b p-0"
              placeholder="Password"
              name="password"
            />
            <p className="text-red-700">{passErr}</p>
            <button className="btn btn-secondary text-black mt-4">
              Register
            </button>
            {/* google  */}
            <button type="button" onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="25"
                height="25"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p className="py-3">
              Already have an account?{" "}
              <Link to={"/signin"} className="text-secondary ">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Registration;
