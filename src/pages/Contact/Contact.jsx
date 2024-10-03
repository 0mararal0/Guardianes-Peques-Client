import React from "react";
import "./styleContact.css";

export const Contact = () => {
  return (
    <div className="contact-container">

      /* Primera parte */
      <div className="contact-section">
        <h1>Encuentra tu guardián</h1>
        <button>Encuentra tu guardián</button>
        <p>
          O llámanos directamente al <a href="tel:+645777812">+645777812</a>
        </p>
      </div>

      /* Segunda parte */
      <div className="form-section">
        <div>
          <h2>¿Necesitas un cuidador?</h2>
          <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

            <button type="submit">Solicitud de llamada</button>
          </form>
        </div>

        /* Recordatorio del número de teléfono */
        <div className="phone">
          <h3>Recuerda:</h3>
          <p>Puedes llamarnos al:</p>
          <p>
            <strong>
              <a href="tel:+123456789">+1 234 567 89</a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};
