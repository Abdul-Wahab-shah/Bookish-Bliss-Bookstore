import React from "react";
import Bannerimage from "../../public/Banner_image.jpg";

function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-5 flex flex-col md:flex-row py-10 ">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="   md:space-y-11 space-y-6">
            <h1 className=" md:pt-36 pt-12 text-4xl font-bold">
              {" "}
              Hello, Welcome here to learn something{" "}
              <span className="text-red-500">new everyday...</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              autem nam, eveniet aliquid ex iste inventore ipsa repellat sed
              vero! Tenetur inventore quia maiores alias earum aut, officia vero
              delectus?
            </p>
            <div>
              <label className="py-3 px-3 border rounded-md flex items-center gap-2 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 text-red-500 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow outline-none bg-white text-slate-600 text-[14px]"
                  placeholder="Email"
                />
              </label>
            </div>
          </div>
          <button className="btn mt-6 bg-black text-white  border-none hover:bg-red-500">
            Secondary
          </button>
        </div>
        <div className="w-full md:w-1/2 order-1">
          <img src={Bannerimage} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
