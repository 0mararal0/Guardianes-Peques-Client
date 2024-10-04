import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export const FilterGuardian4 = ({
  setComponentView,
  setProgress,
  setDataGuardian,
}) => {
  const [diasSemana, setDiasSemana] = useState({
    L: false,
    M: false,
    X: false,
    J: false,
    V: false,
    S: false,
    D: false,
  });
  const [horaInicio, setHoraInicio] = useState(""); // Hora de inicio (como string)
  const [horaFin, setHoraFin] = useState(""); // Hora de fin (como string)
  const [tarifa, setTarifa] = useState(0); // Tarifa por hora
  const [comentario, setComentario] = useState(""); // Comentarios adicionales
  const [error, setError] = useState(""); // Estado para mensajes de error

  const handleDiaChange = (dia) => {
    // Permitir seleccionar múltiples días
    setDiasSemana((prev) => ({
      ...prev,
      [dia]: !prev[dia],
    }));
    setError(""); // Limpiar mensaje de error al cambiar un día
  };

  const handleNextView = () => {
    // Validar si se seleccionó al menos un día
    const diasSeleccionados = Object.values(diasSemana).filter(Boolean).length;

    // Verifica las condiciones
    if (diasSeleccionados === 0) {
      setError("Debes seleccionar al menos un día.");
      return;
    }

    // Validar que los campos requeridos estén completos
    if (!horaInicio || !horaFin || tarifa <= 0) {
      setError("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Validar tarifa mínima
    if (tarifa < 1) {
      setError("La tarifa mínima es de 1.");
      return;
    }

    // Validar que la diferencia entre horaFin y horaInicio no exceda 8 horas
    const [hInicio, mInicio] = horaInicio.split(":").map(Number);
    const [hFin, mFin] = horaFin.split(":").map(Number);
    const inicio = new Date();
    inicio.setHours(hInicio, mInicio);
    const fin = new Date();
    fin.setHours(hFin, mFin);

    const diferenciaHoras = (fin - inicio) / (1000 * 60 * 60); // Diferencia en horas

    if (diferenciaHoras > 8) {
      setError(
        "La diferencia entre hora de inicio y hora de fin no puede exceder 8 horas."
      );
      return;
    }

    // Limpiar el mensaje de error si la validación es correcta
    setError("");

    // Guardar los datos del guardián y del servicio
    setDataGuardian((prevData) => ({
      ...prevData,
      diasSemana,
      horaInicio,
      horaFin,
      tarifa: parseFloat(tarifa),
      comentario,
    }));

    // Actualizar el progreso y cambiar la vista
    setProgress((100 / 4) * 4); // Ajustar el progreso
    setComponentView(4); // Pasar a la siguiente vista
  };

  // Estilos en línea
  const diasListStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const formCheckStyle = {
    marginBottom: "10px",
  };

  return (
    <>
      <div className="containerFilterClient1 mx-auto my-5">
        <h3 className="titleFilterClient1">Disponibilidad semanal</h3>
        <div style={diasListStyle}>
          {Object.keys(diasSemana).map((dia) => (
            <Form.Group
              key={dia}
              controlId={`formDia${dia}`}
              style={formCheckStyle}
            >
              <Form.Check
                type="checkbox"
                label={dia}
                checked={diasSemana[dia]}
                onChange={() => handleDiaChange(dia)}
              />
            </Form.Group>
          ))}
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Mostrar mensaje de error */}
        <h3>Detalles del servicio</h3>
        <Form.Group controlId="formHoraInicio">
          <Form.Label>Hora diaria de inicio</Form.Label>
          <Form.Control
            type="time"
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)} // Actualizar hora de inicio
            isInvalid={!horaInicio && error} // Validar si falta la hora de inicio
          />
        </Form.Group>
        <Form.Group controlId="formHoraFin">
          <Form.Label>Hora diaria de fin</Form.Label>
          <Form.Control
            type="time"
            value={horaFin}
            onChange={(e) => setHoraFin(e.target.value)} // Actualizar hora de fin
            isInvalid={!horaFin && error} // Validar si falta la hora de fin
          />
        </Form.Group>
        <Form.Group controlId="formTarifa">
          <Form.Label>Tarifa por hora ($)</Form.Label>
          <Form.Control
            type="number"
            min="1" // Valor mínimo de 1 para la tarifa
            value={tarifa}
            onChange={(e) => setTarifa(e.target.value)}
            isInvalid={tarifa <= 0 && error} // Validar si falta la tarifa
          />
        </Form.Group>
        <Form.Group controlId="formComentario">
          <Form.Label>Comentarios adicionales (opcional)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </Form.Group>
        <button
          className="btnFormClient"
          onClick={handleNextView}
          style={{ marginTop: "20px" }} // Estilo en línea para el botón
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
