import { React, useState } from "react";
import ToggleText  from '../components/ToggleText.jsx';
import Slider from "react-slick";
import reviewData from "../assets/json/reviewData.json";

export default function SlickCarousel() {
  const [slideId, setSlideId] = useState(0);
  const responsiveness = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // autoplay: true,
    // autoplaySpeed: 4000,
    lazyLoad: true,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: "true",
    responsive: [...responsiveness],
    beforeChange: (current, next) => {
      setSlideId(next);
    },
  };

  return (
    <>
      <Slider {...settings}>
        {reviewData.candidate.map((data, index) => {
          return (
            <ToggleText
              key={data.id}
              data={data}
              index={index}
              slideId={slideId}
            />
          );
        })}
      </Slider>
    </>
  );

}
