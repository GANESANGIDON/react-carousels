import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./reactOwl.css";
// import carouselData from "../slick-carousel/carouselData.json";
import { Row } from "react-bootstrap";

export default function ReactOwl() {
  const options = {
    items: 1,
    stagePadding: 40,
    loop: true,
    // autoplaySpeed: 2000,
    // autoplay: true,
    dots: true,
    nav: true,
  };

  const arr1 = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="w-100 my-4">
        <Row className="col-11 col-xl-10 px-xl-5 mx-auto">
          <OwlCarousel {...options}>
            {arr1.map((data) => {
              return (
                <>
                  <div key={data} className="certificate-img-container">
                    <a
                      href="https://www.linkedin.com/posts/anirudh-bahal-a6b791230_log2base2-coding-cprogramming-activity-6942835422012002305-fbpX?utm_source=linkedin_share&utm_medium=member_desktop_web"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="img-link"
                    >
                      <img
                        className="certificate-img"
                        src="images/certificate-image.png"
                        alt="img1"
                      />
                    </a>
                  </div>
                </>
              );
            })}
          </OwlCarousel>
        </Row>
      </div>
    </>
  );
}
