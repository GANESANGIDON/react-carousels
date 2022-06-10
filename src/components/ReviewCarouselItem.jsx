import { React } from "react";
import { Card } from "react-bootstrap";
import "../assets/css/reviewCarouselItem.css";
import ShowMoreText from "react-show-more-text";

export default function ReviewCarouselItem({ data, index, slideId }) {
  const showProps = {
    lines: 3,
    more: "Show more",
    less: "Show less",
    className: "content-css",
    anchorClass: "my-anchor-css-class",
    expanded: false,
    width: 280,
    truncatedEndingComponent: "... ",
  };

  return (
    <>
      <Card
        key={data.id}
        className="review-card"
        id={index === slideId ? "review-activeCard" : ""}
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
          <hr />
          <ShowMoreText {...showProps}>
            <Card.Text className="review-card-text">
              {data.description}
            </Card.Text>
          </ShowMoreText>
        </Card.Body>
      </Card>
    </>
  );
}
