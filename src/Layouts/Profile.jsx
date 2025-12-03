import React, { useContext,  } from "react";
import { AuthContext } from "../Context/AuthContext";
import Container from "../Components/Container";
import { Link, Outlet } from "react-router";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";
import { CiUser } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { toast } from "react-toastify";


const Profile = () => {
  const { user , signout} = useContext(AuthContext);
  const createAt = user?.metadata.creationTime;
  const userCreateAt = new Date(createAt).toLocaleDateString();

  // console.log(user);
 
 const handleSignOut = ( ) =>{
    signout()
    .then(()=>{
        toast.success('Log Out Successful')
    })
 }
  return (
    <div>
        <Navber></Navber>
      <title>Toys-world-Profile</title>
      <Container
        className={"md:flex p-4  justify-center items-center gap-10 min-h-[80vh] "}
      >
        <div
          
          className="py-7  flex-2 md:py-25 md:px-17 rounded-2xl p-4 bg-cyan-900 shadow-2xl "
        >
          <div className="mx-auto">
            {user?.photoURL !== null ? (
              <img
                className="rounded-full mx-auto w-40 h-40"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <img
              className="mx-auto"
                width="70"
                height="70"
                src="https://img.icons8.com/ios-filled/50/user.png"
                alt="user"
              />
            )}
          </div>
          <h1 className="text-2xl my-2 text-white text-center font-semibold ">
          {user?.displayName}
          </h1>
          <hr />
          <div className="text-white py-4 "> 
            <div>
                <Link to='/profile'>
                <button className="btn  w-full mb-2 bg-amber-400"><CiUser size={25}/>Account Details</button>
                </Link>
            </div>
            <div>
            <Link to={'/profile/update_profile'}>
                <button className="btn w-full mb-2 bg-amber-400"><GrUpdate size={18}/> Update profile</button>
            </Link>
            </div>
            {/* <p className="text-xl">Your email: {user?.email}</p>
            <p>Your account create at: {userCreateAt}</p> */}
          </div>
          <hr />
          <div className="text-center py-4 text-gray-400">
                  <div>
         
                <button onClick={handleSignOut} className="btn w-full mb-2 bg-amber-400"><IoLogOutOutline size={26} />
 Log Out</button>
          
            </div>
          </div>
        </div>
        <div  className="flex-3">
            <Outlet></Outlet>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
