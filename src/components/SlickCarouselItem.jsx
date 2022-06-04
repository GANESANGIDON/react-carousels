import { React, useState } from "react";
import Slider from "react-slick";
import "../assets/css/slickCarouselItem.css";
import carouselData from "../assets/json/carouselData.json";

export default function SlickCarouseItem() {
  const [slideId, setSlideId] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: true,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: "true",
    beforeChange: (current, next) => {
      setSlideId(next);
    },
  };

  return (
    <>
      <Slider {...settings}>
        {carouselData.images.map((data, index) => {
          return (
            <div
              key={data.id}
              className={
                index === slideId
                  ? "slick_slide slick_activeSlide"
                  : "slick_slide"
              }
            >
              <img src={data.src} alt={`img ${data.id}`} />
            </div>
          );
        })}
      </Slider>
    </>
  );
}
