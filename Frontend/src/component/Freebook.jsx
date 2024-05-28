import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:4000/book");
        if (Array.isArray(response.data)) {
          const data = response.data.filter((data) => data.Category === "Free");
          setBook(data);
        } else {
          console.log("API did not return an array");
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
        <div className="slider-container">
          <Slider {...settings}>
            {Array.isArray(book) && book.length > 0 ? (
              book.map((item) => <Card item={item} key={item.id} />)
            ) : (
              <p>No books available.</p>
            )}
          </Slider>
        </div>
      </div>
      <style jsx>{`
        .slick-prev:before,
        .slick-next:before {
          color: red;
        }
      `}</style>
    </>
  );
}

export default Freebook;
