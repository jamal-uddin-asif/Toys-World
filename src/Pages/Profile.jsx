import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Container from "../Components/Container";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const createAt = user?.metadata.creationTime;
  const userCreateAt = new Date(createAt).toLocaleDateString()
  
  console.log(user);
  const handleUpdateProfile =(e)=>{
    e.preventDefault()
    const displayName = e.target.name.value
    const photoURL = e.target.photo.value

    const update = {displayName, photoURL}

    updateUserProfile(update)
    .then(()=>{
      toast.success("Profile updated")
      setUser({...user, update})
    })
    .catch(err=>{
      setUser(user)
      console.log(err)
    })
  }
  return (
    <div>
      <Container className={"md:flex p-4 justify-center items-center min-h-[80vh] "}>
        <div className="py-7 md:px-17 rounded-2xl p-4 bg-amber-100">
          <div>
            {user?.photoURL !== null ? (
              <img className="rounded-full w-40 h-40" src={user?.photoURL} alt="" />
            ) : (
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/ios-filled/50/user.png"
                alt="user"
              />
            )}
          </div>
            <h1 className="text-2xl font-semibold ">Your Name: {user?.displayName}</h1>
          <hr />
          <div className="text-gray-600 py-4 ">
            <p className="text-xl">Your email: {user?.email}</p>
            <p>Your account create at: {userCreateAt}</p>
          </div>
          <hr />
          <div className="text-center py-4 text-gray-400">
            <h1>New feature coming soon</h1>
          </div>
        </div>
        <div  className="flex-1">
          <form onSubmit={handleUpdateProfile} className="card-body">
          <h1 className="text-2xl font-semibold text-purple-800">Update Your profile</h1>
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
            </fieldset>
            <button  className="text-left btn bg-purple-800 text-white">Save change</button>
          </form>
        </div>
      </Container>
     
    </div>
  );
};

export default Profile;
