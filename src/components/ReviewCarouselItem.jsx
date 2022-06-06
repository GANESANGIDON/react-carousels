import { React, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "../assets/css/reviewCarouselItem.css";
import useCollapse from "react-collapsed";

export default function ReviewCarouselItem({ data, index, slideId }) {

  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

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
          <Card.Text
            className="review-card-text"
          >
            {data.description}
          </Card.Text>
            <Button
              {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
              })}
            >
              {isExpanded ? "Collapse" : "Expand"}
            </Button>
            <section {...getCollapseProps()}>
              Collapsed content 🙈 Lorem ipsum dolor sit amet consectetur
              adipisicing elit.eligendi consequuntur non quo cupiditate!
              Sapiente.
            </section>
        </Card.Body>
      </Card>
    </>
  );
}
