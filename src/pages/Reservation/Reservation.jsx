import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

export const Reservation = () => {
  const [reservas, setReservas] = useState();
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/guardian?_embed=client")
      .then((res) => {
        setReservas(res.data);
        setDeleted(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deleted]);

  const handleDeleted = (id) => {
    axios
      .delete(`http://localhost:4000/client/${id}`)
      .then((res) => {
        console.log("datos borrados correctamente", res.data);
        setDeleted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <h2>Reservas</h2>
        {reservas?.map((guardian) => {
          return (
            <div key={guardian.id}>
              <h3>
                {guardian.client.length !== 0 && (
                  <p>Guardian {guardian.nombre}</p>
                )}
              </h3>
              {guardian.client.length !== 0 &&
                guardian.client.map((res) => {
                  return (
                    <div key={res.id}>
                      <Card>
                        <Card.Header as="h5"></Card.Header>
                        <Card.Body>
                          <Card.Title>
                            {res.nombre} {res.apellidos} {res.telefono}
                          </Card.Title>
                          <Card.Text>
                            {res.direcion} {res.ciudad}
                            {res.poblacion}
                          </Card.Text>
                          <Card.Text>
                            {res.niños === "1" && "Un niño"}
                            {res.niños === "2" && "Dos niños"}
                            {res.niños === "3 niños" && "Tres"}
                            {res.niños === "4" && "Cuatro o mas niños"} con edad{" "}
                            {res.edadNiño.bebe && "- bebé"}
                            {res.edadNiño.pequeño && "- pequeño"}
                            {res.edadNiño.prescolar && "- prescolar"}
                            {res.edadNiño.escolar && "- escolar"}
                            {res.edadNiño.adolescente && "- adolescente"}
                          </Card.Text>
                          <Card.Text>
                            Día de la reserva {res.reservationDay[0]} /
                            {res.reservationDay[1]} /{res.reservationDay[2]}, a
                            las {res.reservationHour[0]}:
                            {res.reservationHour[1]}
                          </Card.Text>
                          <div className="row">
                            {res.tareas.cocinar && (
                              <Card.Text className="col-2">COCINAR</Card.Text>
                            )}
                            {res.tareas.actividades && (
                              <Card.Text className="col-2">
                                ACTIVIDADES
                              </Card.Text>
                            )}
                            {res.tareas.baño && (
                              <Card.Text className="col-2">BAÑO</Card.Text>
                            )}
                            {res.tareas.deberes && (
                              <Card.Text className="col-2">DEBERES</Card.Text>
                            )}
                            {res.tareas.dormir && (
                              <Card.Text className="col-2">DORMIR</Card.Text>
                            )}
                            {res.tareas.recogida && (
                              <Card.Text className="col-2">RECOGIDA</Card.Text>
                            )}
                            {res.tareas.tareas && (
                              <Card.Text className="col-2">
                                TAREAS-CASA
                              </Card.Text>
                            )}
                          </div>
                          <Card.Text>Precio {guardian.tarifa}</Card.Text>

                          <Button
                            variant="primary"
                            onClick={() => handleDeleted(res.id)}
                          >
                            Eliminar
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </>
  );
};
