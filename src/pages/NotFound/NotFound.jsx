import React from "react";
import imagenNotFound from "../../assets/images/bebe_not_found.jpg";
import "./styleNotFound.css";

export const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={imagenNotFound} alt="imagen" className="full-image" /> {/* Clase para la imagen */}
      <div className="not-found-div"> {/* Contenedor para el contenido superpuesto */}
        <h1>404</h1>
        <h2>Página No Encontrada</h2>
        <a href="/" className="button">
          <p>Lo sentimos, la página no existe volver a inicio.</p>
        </a>
      </div>
    </div>
  );
};