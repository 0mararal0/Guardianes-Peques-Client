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
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [tarifa, setTarifa] = useState(0);
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState("");

  const handleDiaChange = (dia) => {
    setDiasSemana((prev) => ({
      ...prev,
      [dia]: !prev[dia],
    }));
    setError("");
  };

  const handleNextView = () => {
    const diasSeleccionados = Object.values(diasSemana).filter(Boolean).length;
    if (diasSeleccionados === 0) {
      setError("Debes seleccionar al menos un día.");
      return;
    }

    if (!horaInicio || !horaFin || tarifa <= 0) {
      setError("Por favor, completa todos los campos obligatorios.");
      return;
    }

    if (tarifa < 1) {
      setError("La tarifa mínima es de 1.");
      return;
    }

    const [hInicio, mInicio] = horaInicio.split(":").map(Number);
    const [hFin, mFin] = horaFin.split(":").map(Number);
    const inicio = new Date();
    inicio.setHours(hInicio, mInicio);
    const fin = new Date();
    fin.setHours(hFin, mFin);

    const diferenciaHoras = (fin - inicio) / (1000 * 60 * 60);

    if (diferenciaHoras > 8) {
      setError(
        "La diferencia entre hora de inicio y hora de fin no puede exceder 8 horas."
      );
      return;
    }

    setError("");

    setDataGuardian((prevData) => ({
      ...prevData,
      diasSemana,
      horaInicio,
      horaFin,
      tarifa: parseFloat(tarifa),
      comentario,
    }));

    setProgress((100 / 4) * 4);
    setComponentView(4);
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
        <h3>Detalles del servicio</h3>
        <Form.Group controlId="formHoraInicio">
          <Form.Label>Hora diaria de inicio</Form.Label>
          <Form.Control
            type="time"
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
            isInvalid={!horaInicio && error}
          />
        </Form.Group>
        <Form.Group controlId="formHoraFin">
          <Form.Label>Hora diaria de fin</Form.Label>
          <Form.Control
            type="time"
            value={horaFin}
            onChange={(e) => setHoraFin(e.target.value)}
            isInvalid={!horaFin && error}
          />
        </Form.Group>
        <Form.Group controlId="formTarifa">
          <Form.Label>Tarifa por hora ($)</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={tarifa}
            onChange={(e) => setTarifa(e.target.value)}
            isInvalid={tarifa <= 0 && error}
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
          style={{ marginTop: "20px" }}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
