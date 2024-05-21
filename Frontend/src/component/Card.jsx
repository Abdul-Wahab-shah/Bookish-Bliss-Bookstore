import React from "react";


function Card({item}) {
    
  return (
    <>
      <div>
        <div className="card w-96 shadow-xl my-10 hover:scale-105 duration-200">
          <figure>
            <img
              src={item.Image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            {item.name}
              <div className="badge badge-secondary  bg-red-500">{item.Category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{item.Price}</div>
              {/* <div className="badge badge-outline">Fashion</div> */}
              <div className="  px-1.5 py-1 rounded-md text-[15px]  text-white bg-black hover:bg-red-500">Buy Now</div>
        
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
