import React from "react";
import list from "../../public/list.json"
import Card from "../component/Card"

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-5">
        <div className="text-center pt-28 space-y-6 justify-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Dolor sit amet consectetur{" "}
            <span className="text-red-500">adipisicing!</span>
          </h1>
          <p className="text-[17px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            consequuntur natus velit reprehenderit libero aliquid cumque
            asperiores soluta? Error minima iusto tenetur quidem repellendus
            maiores sapiente, fuga optio suscipit in quia quis, recusandae
            asperiores! Veniam harum dignissimos quos mollitia molestiae ratione
            consequatur voluptas dolorum a necessitatibus?
          </p>
          <button className="btn mt-6 bg-black text-white  border-none hover:bg-red-500">Buy Now</button>
        </div>
        <div className="mt-12 grid grid-cols-1  md:grid-cols-3  "> 
          {list.map((item)=>(
            <Card item={item} key={item.id}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
