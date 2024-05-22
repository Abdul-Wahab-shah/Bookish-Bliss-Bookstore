import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div id="my_modal_3" className="h-screen flex justify-center items-center">
        <div className="relative bg-white dark:bg-slate-800 border rounded-md p-10">
          <form method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle bg-white dark:bg-slate-800 absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg dark:text-white">Signup</h3>
          <div className="mt-5 space-y-2">
            <label htmlFor="name" className="block dark:text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              required
              className="bg-white dark:bg-slate-700 dark:text-white w-80 h-10 px-3 border dark:border-gray-600 outline-none rounded-md"
            />
          </div>
          <div className="mt-5 space-y-2">
            <label htmlFor="email" className="block dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              required
              className="bg-white dark:bg-slate-700 dark:text-white w-80 h-10 px-3 border dark:border-gray-600 outline-none rounded-md"
            />
          </div>
          <div className="mt-9 space-y-2">
            <label htmlFor="password" className="block dark:text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              required
              className="bg-white dark:bg-slate-700 dark:text-white h-10 w-80 px-3 border dark:border-gray-600 outline-none rounded-md"
            />
          </div>
          <div className="flex mt-5 justify-between items-center">
            <button className="py-2 px-3 rounded-md bg-black text-white border-none hover:bg-red-500">
              Signup
            </button>
            <div>
              <span className="dark:text-white">
                Have an account?{" "}
                <button
                  onClick={handleLoginClick}
                  className="text-blue-400 cursor-pointer"
                >
                  Login
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
