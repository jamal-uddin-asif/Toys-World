import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { BiSolidSave } from "react-icons/bi";

const UpdateProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    const update = { displayName, photoURL };

    if (!displayName) {
      toast.error("Please give your name");
      return;
    }
    if (!photoURL) {
      toast.error("Please give your photoURL");
      return;
    }

    updateUserProfile(update)
      .then(() => {
        setUser({ ...user, update });
        toast.success("Profile updated");
        e.target.reset();
      })
      .catch((err) => {
        setUser(user);
        // console.log(err);
        toast.error(err.code);
      });
  };

  return (
    <div className="bg-white shadow-xl  rounded-2xl">
      <form onSubmit={handleUpdateProfile} className="card-body ">
        <h1 className="text-2xl font-semibold text-cyan-800">
          Update Your profile
        </h1>
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
        <button className="text-left max-w-40 btn bg-amber-400 text-black ">
         <BiSolidSave size={25} /> Save change
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
