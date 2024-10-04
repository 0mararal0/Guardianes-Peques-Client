import "./styleNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

export const NavbarApp = () => {
  return (
    <header className="header">
      <Navbar expand="lg" className="header-navBar">
        <Container fluid className="contenedor-nav">
          <Navbar.Brand href="/">
            <img className="logoNavbarApp" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="header-nav">
              <Nav.Link href="/" className="tipo-letra">
                Home
              </Nav.Link>
              <Nav.Link href="/guardians" className="tipo-letra">
                Guardianes
              </Nav.Link>
              <Nav.Link href="/reservation" className="tipo-letra">
                Reservas
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="tipo-letra">
                Sobre Nosotros
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
