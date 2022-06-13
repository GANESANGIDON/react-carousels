import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./reactOwl.css";
import carouselData from "../slick-carousel/carouselData.json";

export default function ReactOwl() {
  const options = {
    items: 3,
    loop: true,
    autoplaySpeed: 2000,
    autoplay: true,
    dots: true,
    nav: true,
  };

  return (
    <OwlCarousel {...options}>
      {carouselData.images.map((data) => {
        return (
          <div className="item" key={data.id}>
            <img src={data.src} alt={`img ${data.id}`} />
          </div>
        );
      })}
    </OwlCarousel>
  );
}
