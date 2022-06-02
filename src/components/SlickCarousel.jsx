import React from "react";
import Slider from "react-slick";
import "../assets/css/slickCarousel.css";
import carouselData from "../assets/json/carouselData.json";

export default function NetflixCarousel() {
  const breakpoints = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [...breakpoints],
  };

  return (
    <>
      <Slider {...settings}>
        {carouselData.images.map((data) => {
          return (
            <div key={data.id} className="img-container">
              <img src={data.src} alt={`img ${data.id}`} />
            </div>
          );
        })}
      </Slider>
    </>
  );
}
