import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const NavbarPage = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className=" margen fondoo collapse show  animate__animated animate__fadeIn navbar navbar-expand-lg navbar-transparent" 
        fixed="top"
        color-on-scroll="200"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav  " className="fondoo2">
            <Nav className="mr-auto " id="navigation-bar">
              <Nav.Link href="#features" className="navbar-custom menus ">
                ABOUT
              </Nav.Link>
              <Nav.Link href="#pricing" className="navbar-custom menus">
                SKILLS
              </Nav.Link>
              <Nav.Link href="#pricing" className="navbar-custom menus">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link href="#pricing" className="navbar-custom menus">
                EXPERIENCE
              </Nav.Link>
              <Nav.Link href="#pricing" className="navbar-custom menus">
                MESSI
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
