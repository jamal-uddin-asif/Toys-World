import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const { signInUser, googleSignIn, setLoading } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // const emailRef = useRef('')
  // const email = emailRef.current.value;
  const [email, setEmail] = useState("");

  const from = location.state || "/";


  const handleSignIn = (e) => {
    e.preventDefault();
    setErr("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email && !password) {
      setErr("Please Fill the form");
      return;
    }

    signInUser(email, password)
      .then((result) => {
        toast.success("SignIn successful");
        setLoading(false);
        // console.log(result);
        navigate(from);
      })
      .catch((err) => {
        setErr("Invalid Information");
        if(err.code === 'auth/missing-password'){
          toast.error('Please give your password')
        }
        if (err.code === "auth/invalid-credential") {
          toast.error('Opss! your information was wrong');
        }
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Signin successful");
        navigate(from);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div className="h-[85vh] flex items-center">
      <title>Toys-world-Login</title>
      <div className="card bg-base-100 border border-gray-400 mx-auto  w-full max-w-sm shrink-0 ">
        <form onSubmit={handleSignIn} className="card-body">
          <h1 className="font-semibold  text-xl ">Login</h1>
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              // ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="input border-0  focus:outline-0  border-b p-0"
              placeholder="Email"
              name="email"
            />
            {/* pass  */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={`${show ? "text" : "password"}`}
                className="input border-0   focus:outline-0 border-b p-0"
                placeholder="Password"
                name="password"
              />
              {show ? (
                <button
                  type="button"
                  onClick={() => setShow(false)}
                  className="absolute top-6 right-6 z-10"
                >
                  <Eye />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShow(true)}
                  className="absolute top-6 right-6 z-10"
                >
                  <EyeOff />
                </button>
              )}
            </div>
            <p className="text-red-600">{err}</p>

            <div className="mt-2">
              <Link
                state={email}
                to={"/forgetPassword"}
                className="link link-hover text-secondary "
              >
                Forgot password?
              </Link>
            </div>
            <button className="btn btn-secondary text-black mt-4">Login</button>
            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
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
          </fieldset>
        </form>
        <p className="text-center py-3.5">
          Dont have an account?{" "}
          <Link
            state={from}
            to={"/registration"}
            className="text-secondary ml-2"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
