import { useState } from "react";
import Form from "react-bootstrap/Form";

export const FilterGuardian2 = ({
  setComponentView,
  setProgress,
  setDataGuardian,
}) => {
  const serviciosData = {
    cocinar: false,
    recogida: false,
    tareas: false,
    actividades: false,
    dormir: false,
  };

  const edadesIniciales = {
    bebe: false,
    pequeño: false,
    prescolar: false,
    escolar: false,
    adolescente: false,
  };

  const [serviciosSeleccionados, setServiciosSeleccionados] =
    useState(serviciosData);
  const [edadesSeleccionadas, setEdadesSeleccionadas] =
    useState(edadesIniciales);
  const [guardianData, setGuardianData] = useState({
    numeroNiños: "1",
  });
  const [error, setError] = useState("");

  // Manejo del cambio en la cantidad de niños
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuardianData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdadChange = (edad) => {
    setEdadesSeleccionadas((prev) => ({
      ...prev,
      [edad]: !prev[edad],
    }));
  };

  const handleServicioClick = (servicio) => {
    setServiciosSeleccionados((prev) => ({
      ...prev,
      [servicio]: !prev[servicio],
    }));
    if (!serviciosSeleccionados[servicio]) {
      setError("");
    }
  };

  const handleNextView = () => {
    const atLeastOneAgeSelected = Object.values(edadesSeleccionadas).some(
      (selected) => selected
    );

    if (!atLeastOneAgeSelected) {
      setError(
        "Debes seleccionar al menos una categoría de edad que puedas cuidar."
      );
      return;
    }
    setComponentView(3);
    setProgress((100 / 4) * 3);
    setDataGuardian((prev) => ({
      ...prev,
      numeroNiños: guardianData.numeroNiños,
      edadesSeleccionadas,
      serviciosSeleccionados,
    }));
  };

  return (
    <>
      <div className="containerFilterClient1 mx-auto my-5">
        <h3 style={{ marginTop: "20px" }} className="titleFilterClient1">
          Número de peques que puedes cuidar:
        </h3>
        <Form.Group controlId="formNumeroNiños">
          <Form.Control
            type="number"
            name="numeroNiños"
            value={guardianData.numeroNiños}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </Form.Group>

        <h4 style={{ marginTop: "20px" }}>Edad peques:</h4>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {Object.keys(edadesIniciales).map((edad) => (
            <div key={edad} style={{ flex: "1 1 150px" }}>
              <Form.Check
                type="checkbox"
                label={edad.charAt(0).toUpperCase() + edad.slice(1)}
                checked={edadesSeleccionadas[edad]}
                onChange={() => handleEdadChange(edad)}
              />
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: "20px" }}>Servicios adicionales (opcional):</h3>
        {error && <div style={{ color: "red" }}>{error}</div>}

        <div
          className="servicios-list"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          {Object.keys(serviciosData).map((servicio) => (
            <div
              key={servicio}
              className={`servicio-item ${
                serviciosSeleccionados[servicio] ? "selected" : ""
              }`}
              onClick={() => handleServicioClick(servicio)}
              style={{
                cursor: "pointer",
                padding: "10px",
                margin: "5px",
                color: serviciosSeleccionados[servicio] ? "#fff" : "#000",
                borderRadius: "5px",
                backgroundColor: serviciosSeleccionados[servicio]
                  ? "#007bff"
                  : "#f8f9fa",
              }}
            >
              {servicio.charAt(0).toUpperCase() + servicio.slice(1)}
            </div>
          ))}
        </div>
        <button className="btnFormClient" onClick={handleNextView}>
          Siguiente
        </button>
      </div>
    </>
  );
};
