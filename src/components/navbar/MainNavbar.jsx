import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function MainNavbar() {
  return (
    <Navbar
      variant="secondary"
      className=" footer-navbar-color fw-bold sticky-top shadow"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggle " />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link text-light">
              Inicio
            </Nav.Link>

            <Nav.Link href="#about" className="nav-link text-light">
              Sobre mi
            </Nav.Link>
            <Nav.Link href="#resume" className="text-light">
              Formación y Experiencia

            </Nav.Link>
            <Nav.Link href="#projects" className="text-light">Proyectos</Nav.Link>
          </Nav>
          <Navbar.Brand className=" mx-auto fs-6 fw-medium" href="#home">
            Julian Jiménez <br />
            <span className="fs-6 text-secondary fw-medium">
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
