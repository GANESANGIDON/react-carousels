import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import {
  // NavBar,
  BsCarousel,
  SlickCarousel,
  ReactOwl,
  ReviewCarousel,
} from "./components";
import Certificates from "./components/CertificatesCarousel";
function App() {
  return (
    <div className="pt-1">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/bs" element={<BsCarousel />} />
        <Route path="/slick" element={<SlickCarousel />} />
        <Route path="/owl" element={<ReactOwl />} />
        <Route path="/review" element={<ReviewCarousel />} />
        <Route path="/" element={<Certificates />} />
      </Routes>
    </div>
  );
}

export default App;
