import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home">PNTA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link1">Link 1</Nav.Link>
          <Nav.Link href="#link2">Link 2</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CNavbar;
