import React from "react";
import { Card } from "react-bootstrap";

export default function CertificatesItem({ slideId, index }) {
  return (
    <>
      {/* <Card
        className="bg-transparent border-0 certificate-card"
        id={index === slideId ? "active-certificate-card" : ""}
        style={{ height: "600px" }}
      > */}
      <div>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:6941017378050703360"
          frameborder="0"
          title="Embedded post"
          // style={{ minHeight: "500px",minWidth:'300px' }}
        ></iframe>
      </div>

      {/* <Card.Img src="images/certificate-template.png" alt="certificate" /> */}
      {/* <Card.Text className="mt-1">
          Lorem ipsum dolor sit amet consectetur tenetur.
        </Card.Text> */}
      {/* </Card> */}
    </>
  );
}
