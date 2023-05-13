import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="navbar sticky-top" bg="dark" variant="dark">
        <Navbar.Brand href="/" >LH104729</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/"> Home </Nav.Link>
          <Nav.Link href="/about"> About </Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default Header