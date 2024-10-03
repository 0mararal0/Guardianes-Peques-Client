import "./styleHome.css";
import { Link } from "react-router-dom";
import foto1 from "../../assets/images/padreHijo-removebg-preview.png";
import fotoHome from "../../assets/images/cuidadora_pagina_home.jpg"

export const Home = () => {
  return (
    <>
      <section className="containerSection1Home d-flex justify-content-center">
        <img src={fotoHome} alt="imagen" />
        <div className="div-home my-auto">
          <h1>Personas de confianza cerca de ti</h1>
          <div className="boton-centro">
            <Link to={"/filter"}>
              <p>Guardianes</p>
            </Link>
          </div>
          <Link to={"/filterGuardian"}>
            <p>¿Quieres trabajar con nosotros? Encuentra un trabajo</p>
          </Link>
        </div>
      </section>
    </>
  );
};
