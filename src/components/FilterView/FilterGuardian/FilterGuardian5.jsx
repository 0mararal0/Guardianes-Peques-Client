import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios"; // Asegúrate de importar axios

export const FilterGuardian5 = ({
  setComponentView,
  setProgress,
  dataGuardian,
}) => {
  console.log(dataGuardian);

  const handleSubmit = () => {
    axios
      .post("http://localhost:4000/guardian", dataGuardian)
      .then((res) => {
        console.log("datos enviados correctamente", res.data);
        // Aquí puedes agregar lógica adicional después de enviar los datos, 
        // como cambiar la vista o mostrar un mensaje de éxito
      })
      .catch((err) => {
        console.log(err);
        // Aquí puedes manejar el error, tal vez mostrando un mensaje al usuario
      });
  };

  return (
    <div className="container-xxl">
      <h3>Resumen de selección</h3>

      {/* Datos personales del Guardián */}
      <h4>Datos del Guardián:</h4>
      <p>
        <strong>Nombre:</strong> {dataGuardian.nombre || "No disponible"}
      </p>
      <p>
        <strong>Apellidos:</strong> {dataGuardian.apellidos || "No disponible"}
      </p>
      <p>
        <strong>Localidad:</strong> {dataGuardian.localidad || "No disponible"}
      </p>
      <p>
        <strong>Provincia:</strong> {dataGuardian.provincia || "No disponible"}
      </p>
      <p>
        <strong>Fecha de Nacimiento:</strong>{" "}
        {dataGuardian.nacimiento || "No disponible"}
      </p>
      <p>
        <strong>Teléfono:</strong> {dataGuardian.telefono || "No disponible"}
      </p>
      <p>
        <strong>Email:</strong> {dataGuardian.email || "No disponible"}
      </p>
      {dataGuardian.foto ? (
        <p>
          <strong>Foto:</strong>{" "}
          <img
            src={dataGuardian.foto}
            alt="Foto del guardián"
            style={{ width: "100px", height: "100px" }}
          />
        </p>
      ) : (
        <p>
          <strong>Foto:</strong> No disponible
        </p>
      )}

      {/* Días seleccionados */}
      <h4>Días seleccionados:</h4>
      <ul>
        {dataGuardian.diasSemana ? (
          Object.keys(dataGuardian.diasSemana).map((dia) =>
            dataGuardian.diasSemana[dia] ? <li key={dia}>{dia}</li> : null
          )
        ) : (
          <p>No se seleccionaron días</p>
        )}
      </ul>

      {/* Horas */}
      <h4>Horas:</h4>
      <p>
        <strong>Hora de inicio:</strong>{" "}
        {dataGuardian.horaInicio || "No disponible"}
      </p>
      <p>
        <strong>Hora de fin:</strong> {dataGuardian.horaFin || "No disponible"}
      </p>

      {/* Número de niños y edad */}
      <h4>Detalles de los niños:</h4>
      <p>
        <strong>Número de niños:</strong>{" "}
        {dataGuardian.numeroNiños || "No disponible"}
      </p>
      <ul>
        {dataGuardian.edadesSeleccionadas &&
        Object.keys(dataGuardian.edadesSeleccionadas).length > 0 ? (
          Object.keys(dataGuardian.edadesSeleccionadas).map(
            (key) =>
              dataGuardian.edadesSeleccionadas[key] && (
                <li key={key}>
                  {key === "bebe" && "Bebé "}
                  {key === "pequeño" && "Pequeño "}
                  {key === "prescolar" && "Preescolar "}
                  {key === "escolar" && "Escolar "}
                  {key === "adolescente" && "Adolescente "}
                </li>
              )
          )
        ) : (
          <li>No hay información de edad disponible.</li>
        )}
      </ul>

      {/* Tareas seleccionadas */}
      <h4>Tareas seleccionadas:</h4>
      <ul>
        {dataGuardian.cocinar && <li>Cocinar</li>}
        {dataGuardian.recogida && <li>Recogida</li>}
        {dataGuardian.tareas && <li>Ayuda con tareas</li>}
        {dataGuardian.actividades && <li>Actividades</li>}
        {dataGuardian.dormir && <li>Ayuda con el dormir</li>}
      </ul>

      {/* Tarifa */}
      <h4>Tarifa:</h4>
      <p>
        <strong>Tarifa por hora:</strong> $
        {dataGuardian.tarifa || "No disponible"}
      </p>

      {/* Comentarios adicionales */}
      <h4>Comentarios adicionales:</h4>
      <p>{dataGuardian.comentario || "Sin comentarios"}</p>

      {/* Botón para continuar */}
      <Button onClick={handleSubmit} style={{ marginTop: "20px" }}>
        Registrar
      </Button>
    </div>
  );
};