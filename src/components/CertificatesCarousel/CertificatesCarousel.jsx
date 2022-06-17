import React from "react";
import Slider from "react-slick";
import { Row } from "react-bootstrap";
import CertificatesItem from "./CertificatesItem";
// import CertificatesData from "./CertificatesData.json";

import "./certificatesCarousel.css";

export default function CertificatesCarousel() {

  const responsiveness = [
    {
      breakpoint: 2560,
      settings: {
        slidesToShow: 2,
        centerPadding: '6%',
      },
    },
    // {
    //   breakpoint: 1440,
    //   settings: {
    //     slidesToShow: 2,
    //     centerPadding: '6%',
    //   },
    // },
    // {
    //   breakpoint: 1200,
    //   settings: {
    //     slidesToShow: 2,
    //     centerPadding: '6%',
    //   },
    // },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        centerPadding: '16%',
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerPadding: '11%',
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        centerPadding: '0px',
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
    focusOnSelect: true,
    centerMode: true,
    className: "center",
    centerPadding: '10%',
    cssEase: "linear",
    responsive: [...responsiveness],
  };

  const arr = [1,2,3,4,5];

  return (
    <>
      <div className="w-100 my-4">
        <Row className="col-11 col-xl-10 px-sm-3 px-lg-1 px-xl-4 mx-auto">
          <div id="certificate-heading" className = "text-center py-4">See Our Learner's Certificate on LinkedIn</div>
          <Slider {...settings}>
            {arr.map((data) => {
              return (
                <CertificatesItem key = {data} />
              );
            })}
          </Slider>
        </Row>
      </div>
    </>
  );
}
