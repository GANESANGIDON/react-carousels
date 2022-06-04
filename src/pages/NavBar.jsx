import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar bg="info" className="mb-3 px-4" expand = "sm">
        <Navbar.Brand href = "/" className="text-dark txt-bld-700"><code>&lt;</code>Carousels<code>&gt;</code></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Link to="/" className="nav-links">
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
    </>
  );
}
