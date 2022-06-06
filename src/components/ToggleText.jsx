import React from "react";
import ShowMoreText from "react-show-more-text";
import { Card } from "react-bootstrap";

export default function ToggleText( {data, index, slideId}) {
  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };
  return (
    <>
      <Card.Body className="bg-light mx-2 text-card" id = {index === slideId?"text-activeCard":""}>
        <ShowMoreText
          /* Default options */
          lines={2}
          more="Show more"
          less="Show less"
          className="content-css"
          anchorClass="my-anchor-css-class"
          onClick={executeOnClick}
          expanded={false}
          width={280}
          truncatedEndingComponent={"... "}
        >
          {data.description}
        </ShowMoreText>
      </Card.Body>
    </>
  );
}
