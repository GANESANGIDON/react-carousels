import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  return (
    <>
      <div className="w-100 bg-primary bg-gradient fixed-top">
        <Navbar
          className="col-11 col-xl-10 px-sm-3 px-lg-1 px-xl-4 mx-auto py-1"
          expand="md"
        >
          <Navbar.Brand href="/" className="text-light nav-heading">
            <code>&lt;</code>Carousels<code>&gt;</code>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-links">
                Certificates
              </Link>
              <Link to="/bs" className="nav-links">
                Bootstrap
              </Link>
              <Link to="/slick" className="nav-links">
                Slick
              </Link>
              <Link to="/owl" className="nav-links">
                Owl
              </Link>
              <Link to="/review" className="nav-links">
                Review
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
