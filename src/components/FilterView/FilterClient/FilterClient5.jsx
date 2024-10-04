import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

export const FilterClient5 = ({
  setComponentView,
  setProgress,
  setDataClient,
  dataClient,
}) => {
  const [dataGuardianSelect, setDataGuardianSelect] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/guardian`)
      .then((res) => {
        let prov = res.data.filter((elem) => {
          //Edad del niño
          if (dataClient.edadNiño.bebe && !elem.edadesSeleccionadas.bebe)
            return false;
          if (dataClient.edadNiño.pequeño && !elem.edadesSeleccionadas.pequeño)
            return false;
          if (
            dataClient.edadNiño.prescolar &&
            !elem.edadesSeleccionadas.prescolar
          )
            return false;
          if (dataClient.edadNiño.escolar && !elem.edadesSeleccionadas.escolar)
            return false;
          if (
            dataClient.edadNiño.adolescente &&
            !elem.edadesSeleccionadas.adolescente
          )
            return false;

          //Tareas
          if (dataClient.tareas.cocinar && !elem.serviciosSeleccionados.cocinar)
            return false;
          if (
            dataClient.tareas.recogida &&
            !elem.serviciosSeleccionados.recogida
          )
            return false;
          if (dataClient.tareas.tareas && !elem.serviciosSeleccionados.tareas)
            return false;
          if (
            dataClient.tareas.actividades &&
            !elem.serviciosSeleccionados.actividades
          )
            return false;
          if (dataClient.tareas.dormir && !elem.serviciosSeleccionados.dormir)
            return false;

          //dias de la semana
          if (dataClient.reservationWeek.L && !elem.diasSemana.L) return false;
          if (dataClient.reservationWeek.M && !elem.diasSemana.M) return false;
          if (dataClient.reservationWeek.X && !elem.diasSemana.X) return false;
          if (dataClient.reservationWeek.J && !elem.diasSemana.J) return false;
          if (dataClient.reservationWeek.V && !elem.diasSemana.V) return false;
          if (dataClient.reservationWeek.S && !elem.diasSemana.S) return false;
          if (dataClient.reservationWeek.D && !elem.diasSemana.D) return false;
          //que correspondan las horas en serviciosSeleccionados
          const [horaInicio, minInicio] = elem.horaInicio
            .split(":")
            .map(Number);
          const [horaFin, minFin] = elem.horaFin.split(":").map(Number);
          const [horaInicioClient, minInicioClient] = dataClient.reservationHour
            .split(":")
            .map(Number);
          if (horaInicioClient < horaInicio && horaInicioClient > horaFin)
            return false;
          if (horaInicioClient === horaInicio && minInicio > minInicioClient)
            return false;
          if (horaInicioClient + parseInt(dataClient.reservationTime) > horaFin)
            return false;
          if (
            dataClient.poblacion.toUpperCase() !== elem.provincia.toUpperCase()
          )
            return false;

          return true;
        });

        setDataGuardianSelect(prov);
      })

      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, []);

  const handleSubmit = (id) => {
    setComponentView(6);
    setProgress((100 / 6) * 6);
    setDataClient((prov) => ({
      ...prov,
      guardianId: id,
    }));
  };
  return (
    <>
      <div className="containerFilterClient1 d-flex flex-column mx-auto ">
        <h3 className="titleFilterClient1">Guardianes disponibles</h3>
        <div className="d-flex flex-wrap">
          {dataGuardianSelect?.length !== 0 ? (
            dataGuardianSelect.map((elem) => {
              return (
                <Card key={elem.id} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={elem.foto} />
                  <Card.Body>
                    <Card.Title>
                      {elem.nombre} {elem.apellidos}
                    </Card.Title>
                    <Card.Text>{elem.comentario}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      {elem.teléfono} {elem.email}{" "}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {elem.localidad} {elem.provincia}
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <button
                      className="btnFilterClient1 btnFormClient"
                      onClick={() => handleSubmit(elem.id)}
                    >
                      Reservar{" "}
                    </button>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <div>
              <p className="title2FilterClient1">
                Ahora no hay ningun guardian disponible
              </p>
              <p className="title2FilterClient1">
                Quieres volver a rellenar el formulario?
              </p>
              <div className=" d-flex gap-4 justify-content-center">
                <button
                  className="btnFilterClient1 btnFormClient"
                  onClick={() => navigate("/filter")}
                >
                  Si
                </button>
                <button
                  className="btnFilterClient1 btnFormClient"
                  onClick={() => navigate("/")}
                >
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
