import React from "react";

function Login() {
  return (
    // <div>Login</div>
    <>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-white dark:bg-slate-800">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle bg-white  absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-5 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="bg-white  dark:text-slate-800 w-80 h-10 px-3 border outline-none rounded-md"
            />
          </div>
          <div className="mt-9 space-y-2 ">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              required
              className="bg-white dark:text-slate-800 h-10 w-80 px-3 border outline-none rounded-md"
            />
          </div>
          <div className="flex mt-5 justify-between">
          <button className="py-2 px-3 rounded-md bg-black text-white  border-none hover:bg-red-500">
            Login
          </button>
          <div>
            <span>Not Register? <a href="/signup" className=" text-blue-400 ">Signup</a></span>
          </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Login;
