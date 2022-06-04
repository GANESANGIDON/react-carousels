import { React, useState } from "react";
import Slider from "react-slick";
import reviewData from "../assets/json/reviewData.json";
import { Button, Card } from "react-bootstrap";
import "../assets/css/reviewCarouselItem.css";
// import {FaAngleUp, FaAngleDown} from 'react-icons/fa';

export default function ReviewCarouselItem() {
  const [slideId, setSlideId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleText = () => {
    const reviewText = document.getElementById("review-activeCard-text");
    if (reviewText.style.display === "-webkit-box") {
      reviewText.style.display = "block";
    } else {
      reviewText.style.display = "-webkit-box";
    }
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

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
    beforeChange: (current, next) => {
      setSlideId(next);
    },
  };

  return (
    <>
      <Slider {...settings}>
        {reviewData.candidate.map((data, index) => {
          return (
            <Card
              key={data.id}
              className={
                index === slideId
                  ? "review-card review-activeCard"
                  : "review-card"
              }
            >
              <Card.Body>
                <Card.Img
                  src={data.img}
                  className="review-card-img img-thumbnail mx-auto"
                  alt={`candidate-${data.id}`}
                />
                <Card.Title className="review-card-title text-center">
                  {data.name}
                </Card.Title>
                <Card.Subtitle className="text-center">
                  <p className="text-muted">{data.country}</p>
                </Card.Subtitle>
                <Card.Text
                  className="review-card-text"
                  id={index === slideId ? "review-activeCard-text" : ""}
                >
                  {data.description}
                </Card.Text>
                <Button
                  size="sm"
                  className="form-control"
                  id={index === slideId ? "review-activeCard-btn" : ""}
                  onClick={handleText}
                >
                  Show {isOpen ? "less" : "more"}
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Slider>
    </>
  );
}
