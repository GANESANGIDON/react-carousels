import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/reactOwl.css";
import carouselData from "../assets/json/carouselData.json";

export default function ReactOwl() {
  const options = {
    items: 3,
    loop: true,
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
