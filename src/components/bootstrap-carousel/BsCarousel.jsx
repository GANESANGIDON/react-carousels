import React from "react";
import { Carousel } from "react-bootstrap";
import "./bsCarousel.css";
import carouselData from "../slick-carousel/carouselData.json";

export default function BsCarousel() {
  return (
    <>
      <Carousel>
        {carouselData.images.map((data) => {
          return (
            <Carousel.Item key={data.id}>
              <img
                className="d-block carousel-img"
                src={data.src}
                alt={`Slide ${data.id}`}
              />
              <Carousel.Caption>
                <h1>{`Slide ${data.id}`}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
