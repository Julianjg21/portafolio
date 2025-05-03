import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function MainNavbar() {
  return (
    <Navbar
      bg="light"
      variant="light"
      className="border border-primary fw-bold sticky-top"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggle" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link">
              Inicio<span className="text-primary px-2  nav-lines">/</span>
            </Nav.Link>

            <Nav.Link href="#about" className="nav-link">
              Sobre mi <span className="text-primary px-2 nav-lines">/</span>
            </Nav.Link>
            <Nav.Link href="#resume">
              Formación y Experiencia
              <span className="text-primary px-2 nav-lines">/</span>
            </Nav.Link>
            <Nav.Link href="#projects">Proyectos</Nav.Link>
          </Nav>
          <Navbar.Brand className=" mx-auto fs-6 fw-medium" href="#home">
            Julian Jiménez <br />
            <span className="fs-6 text-secondary fw-medium ">
              Desarrollador Backend
            </span>
          </Navbar.Brand>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
