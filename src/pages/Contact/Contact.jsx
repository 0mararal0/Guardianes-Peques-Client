import React, { useState } from "react";
import "./styleContact.css";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "telefono" && isNaN(value)) {
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (
      formData.nombre.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.telefono.trim() !== "" &&
      formData.mensaje.trim() !== ""
    ) {
      setIsChecked(true);

      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
    } else {
      setIsChecked(false);
    }
  };

  return (
    <>
      <section className="contact-container">
        <div className="contact-section">
          <h1>Encuentra tu guardián aquí.</h1>
          <Link to="/filterClient" className="submit-button">
            Guardian
          </Link>
        </div>

        <div className="contact-section">
          <h1>Trabaja con nosotros.</h1>
          <Link to="/filterGuardian" className="submit-button">
            Únete al equipo
          </Link>
        </div>

        <div className="form-section">
          <h2>Contáctanos</h2>
          <form className="contact-form">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Tu número de teléfono"
              value={formData.telefono}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              placeholder="Escribe tu mensaje aquí"
              value={formData.mensaje}
              onChange={handleInputChange}
              required
            ></textarea>

            <div className="submit-button-container">
              <button
                type="submit"
                className="submit-button"
                onClick={handleButtonClick}
              >
                Enviar mensaje
              </button>
            </div>

            {isChecked && (
              <span className="check-mark">✔ Mensaje enviado con éxito</span>
            )}
          </form>
        </div>
      </section>
    </>
  );
};
