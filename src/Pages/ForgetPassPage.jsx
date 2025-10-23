import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const ForgetPassPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resetPassword } = useContext(AuthContext);

  const email = location.state;
  console.log(email);

  const handleResetPass = (e) => {
    e.preventDefault();
    console.log("reset btn");
    console.log(email);
    resetPassword(email)
      .then(() => {
        toast("Check Your Email");
        window.location.href = "https://mail.google.com/mail/u/0/#inbox"
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-[calc(100vh-325px)] flex justify-center items-center">
      <title>Toys-world-Reset Password</title>
      <div>
        <label className="text-gray-300">Email</label>
        <input
          value={email}
          name="email"
          className="input focus:outline-0 border-0 border-b bg-linear-to-b from-purple-100 to-pink-100"
          type="email"
          placeholder="Your Email"
        />

        <button
          onClick={handleResetPass}
          className="btn mt-2 bg-linear-to-b  from-purple-100 to-pink-100 text-purple-800"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgetPassPage;
