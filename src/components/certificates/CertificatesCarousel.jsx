import { React, useState } from "react";
import Slider from "react-slick";
import { Row } from "react-bootstrap";
import CertificatesItem from "./CertificatesItem";
import "./certificatesCarousel.css";

export default function CertificatesCarousel() {
  const [slideId, setSlideId] = useState(0);

  const responsiveness = [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
      },
    },
  ];

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    // pauseOnHover: true,
    focusOnSelect: true,
    centerMode: true,
    className: "center",
    centerPadding: "100px",
    cssEase: "ease",
    responsive: [...responsiveness],
    beforeChange: (current, next) => {
      setSlideId(next);
    },
  };

  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="w-100 my-3 ms-auto">
        <Row className="col-12 col-xl-11 px-xl-3">
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
