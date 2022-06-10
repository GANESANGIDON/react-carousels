import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import {
  NavBar,
  BsCarousel,
  SlickCarousel,
  ReactOwl,
  ReviewCarousel,
} from "./pages";
import Certificates from "./components/certificates/Certificates";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BsCarousel />} />
        <Route path="/slick" element={<SlickCarousel />} />
        <Route path="/owl" element={<ReactOwl />} />
        <Route path="/review" element={<ReviewCarousel />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </>
  );
}

export default App;
