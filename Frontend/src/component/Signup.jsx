import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Login from "./Login";
import { Link } from "react-router-dom";
import toast from "react-hot-toast"
import axios from "axios";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post("http://localhost:4000/user/signup", userinfo);
      console.log(res.data);
      if (res.data) {
        toast.success('Successfully created!');
        setRegistrationSuccess(true);
      }
      localStorage.setItem("Users",JSON.stringify(res.data))
    } catch (err) {
     if(err.response){
      console.log(err);
      toast("Error: " + err.response.data.message);
     }

    }
  };

  const handleLoginFormButtonClick = () => {
    const modal = document.getElementById("my_modal_3");
    modal.showModal();
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="relative bg-white dark:bg-slate-800 border rounded-md p-10">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              type="button"
              className="btn btn-sm btn-circle bg-white dark:bg-slate-800 absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg dark:text-white">Signup</h3>
            <div className="mt-5 space-y-2">
              <label htmlFor="name" className="block dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                {...register("fullname", { required: true })}
                className="bg-white dark:bg-slate-700 dark:text-white w-80 h-10 px-3 border dark:border-gray-600 outline-none rounded-md"
              />
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-500"> This field is required</span>
              )}
            </div>
            <div className="mt-5 space-y-2">
              <label htmlFor="email" className="block dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
                className="bg-white dark:bg-slate-700 dark:text-white w-80 h-10 px-3 border dark:border-gray-600 outline-none rounded-md"
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            <div className="mt-9 space-y-2">
              <label htmlFor="password" className="block dark:text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
                className="bg-white dark:bg-slate-700 dark:text-white h-10 w-80 px-3 border dark:border-gray-600 outline-none rounded-md"
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex mt-5 justify-between items-center">
              <button
                type="submit"
                className="py-2 px-3 rounded-md bg-black text-white border-none hover:bg-red-500"
              >
                Signup
              </button>
              <div>
                <span className="dark:text-white">
                  Have an account?{" "}
                  <button
                    onClick={handleLoginFormButtonClick}
                    className="text-blue-400 cursor-pointer"
                  >
                    Login
                  </button>
                </span>
                <Login />
              </div>
            </div>
          </form>
          {registrationSuccess && <p>You are successfully registered!</p>}
        </div>
      </div>
    </>
  );
}

export default Signup;
