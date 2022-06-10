import { React, useState } from "react";
import Slider from "react-slick";
import { Row } from "react-bootstrap";
import CertificatesItem from "./CertificatesItem";
import "./certificatesCarousel.css";

export default function CertificatesCarousel() {
  const [slideId, setSlideId] = useState(0);

  const responsiveness = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ];

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    // pauseOnHover: true,
    focusOnSelect: true,
    cssEase: "ease",
    responsive: [...responsiveness],
    // beforeChange: (current, next) => {
    //   setSlideId(next);
    // },
  };

  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="w-100 my-3">
        <Row className="col-11 col-xl-10 px-xl-3 mx-auto">
          <Slider {...settings}>
            {arr.map((data, index) => {
              return (
                <CertificatesItem key={data} slideId={slideId} index={index} />
              );
            })}
          </Slider>
        </Row>
      </div>
    </>
  );
}
