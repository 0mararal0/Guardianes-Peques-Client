import React from "react";
import "./stylePosibleError.css"
import imgError from "../../assets/images/img_error2.webp"

export const PosibleError = () => {
  return (
    <div className="not-found-container">
      <img src={imgError} alt="imagen" className="full-image" /> {/* Cambia la clase a "full-image" */}
      <div className="not-found-div">
        <h1>Error 501</h1>
        <h2>Problema inesperado, lo sentimos</h2>
        <a href="/" className="button">
          <p>volver a inicio.</p>
        </a>
      </div>
    </div>
  );
};