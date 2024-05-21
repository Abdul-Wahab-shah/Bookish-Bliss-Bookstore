import React from "react";
import list from "../../public/list.json";
function Freebook() {
  const filterdata = list.filter((data) => data.Category === "Free ");
  console.log(filterdata);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-5">
        <div>
          <h1 className="font-extrabold text-xl">Free offer Courses</h1>
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            voluptatibus eos error incidunt odit molestiae, eius nesciunt
            expedita nihil sit?
          </p>
        </div>
      </div>
    </>
  );
}

export default Freebook;
