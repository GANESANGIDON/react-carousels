import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar bg="danger" className="mb-3 d-flex justify-content-around">
          <Link to="/">
              <h1 className="nav-links">Bootstrap</h1>
          </Link>
          <Link to="/slick">
              <h1 className="nav-links">Slick</h1>
          </Link>
      </Navbar>
    </>
  );
}
