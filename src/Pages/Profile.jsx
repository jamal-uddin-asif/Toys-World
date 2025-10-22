import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Container from "../Components/Container";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div >
    <Container className={'flex justify-center items-center min-h-[80vh] '}>
      <div className="py-7 rounded-2xl p-4 bg-amber-100">
        <div>
          {user?.photoURL !== null ? (
            <img className="rounded-full" src={user?.photoURL} alt="" />
          ): (<h1>UserImg comming soon</h1>)}
         
        </div>
        <div>
          <h1 className="text-2xl font-semibold ">{user?.displayName}</h1>

        </div>
      </div>
    </Container>
    </div>
  );
};

export default Profile;
