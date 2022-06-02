import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar, BsCarousel, SlickCarousel } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BsCarousel />} />
        <Route path="/slick" element={<SlickCarousel />} />
      </Routes>
    </>
  );
}

export default App;
