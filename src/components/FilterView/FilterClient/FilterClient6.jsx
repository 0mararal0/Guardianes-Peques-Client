import axios from "axios";
import React, { useEffect, useState } from "react";

export const FilterClient6 = ({
  setComponentView,
  setProgress,
  setDataClient,
  dataClient,
}) => {
  const [dataGuardian, setDataGuardian] = useState();
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/guardian/${dataClient.guardianId} `
      )
      .then((res) => {
        setDataGuardian(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/client`, dataClient)
      .then((res) => {
        console.log("datos enviados correctamente", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <h3>Resumen de la reserva</h3>
        <p>Hola {dataClient.nombre} estos son los datos de tu reserva</p>
        <p>
          El servicio es para {dataClient.direcion} piso {dataClient.piso} letra{" "}
          {dataClient.letra}{" "}
        </p>
        <p>
          Localidad {dataClient.ciudad} provincia {dataClient.poblacion}
        </p>
        <p>
          te vamos a cuidar {dataClient.niños} niños en edad{" "}
          {dataClient.edadNiño.bebe && "bebé"}
          {dataClient.edadNiño.pequeño && "pequeño"}
          {dataClient.edadNiño.prescolar && "prescolar"}
          {dataClient.edadNiño.escolar && "escolar"}
          {dataClient.edadNiño.adolescente && "adolescente"}
        </p>
        <p>
          Tu contacto es a través del teléfono {dataClient.telefono} o del
          correo {dataClient.email}.
        </p>
        <p>
          El guardian que has elegido es {dataGuardian?.nombre}{" "}
          {dataGuardian?.apellidos}
        </p>
        <p>Su teléfono es {dataGuardian?.teléfono}</p>
        <p>confirmar reserva</p>
        <button onClick={handleSubmit}></button>
      </div>
    </>
  );
};
