import "./styleFooter.css";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgGitHub from "../../assets/images/github-Photoroom.png"


export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-contenedor">
        <Nav className="d-flex justify-content-center align-items-center text-link">
          <Nav.Link as={Link} to="/legalNotice" className="tipo-letra">Legal Notice</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="tipo-letra">Contact</Nav.Link>
          <div>
            <a href="https://github.com/0mararal0/Proyecto-Guardianes-Peques" target="_blank" rel="noopener noreferrer">
              <img src={imgGitHub} alt="GitHub" className="footer-icon" />
            </a>
          </div>
        </Nav>
        <hr />
        <p className="text-footer">
          Guardianes & Peques es una plataforma online que conecta a familias con cuidadores
          especializados en el cuidado de bebés y niños pequeños. A través de nuestro sitio, 
          las familias pueden ponerse en contacto con los guardianes, revisar sus perfiles y 
          encontrar al cuidador ideal para sus pequeños.
        </p>
        <hr />
        <p className="text-footer-copy">Copyright © 2024 Material UI SAS, trading as MUI.
        </p>
      </Container>
    </footer>
  );
};
