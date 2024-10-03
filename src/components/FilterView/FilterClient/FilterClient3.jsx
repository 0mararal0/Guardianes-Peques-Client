import { useState } from "react";
import Form from "react-bootstrap/Form";

export const FilterClient3 = ({
  setComponentView,
  setProgress,
  setDataClient,
}) => {
  const [week, setWeek] = useState({
    L: false,
    M: false,
    X: false,
    J: false,
    V: false,
    S: false,
    D: false,
  });
  const [dia, setDia] = useState();
  const [horaInicio, setHoraInicio] = useState();
  const [time, setTime] = useState();

  const handleWeek = (e) => {
    setWeek((prov) => ({ ...prov, [e.target.id]: e.target.checked }));
  };

  const handleNextView = () => {
    setComponentView(4);
    setProgress((100 / 5) * 4);
    setDataClient((prov) => ({
      ...prov,
      reservationWeek: week,
      reservationDay: dia,
      reservationHour: horaInicio,
      reservationTime: time,
    }));
  };

  return (
    <>
      <div className="containerFilterClient1 d-flex flex-column mx-auto gap-3">
        <h3 className="titleFilterClient1">Fechas</h3>
        <p className="title2FilterClient1">¿Para cuándo?</p>
        <Form onClick={handleWeek}>
          <div>
            <Form.Label>Días de la semana</Form.Label>

            <Form.Check
              inline
              label="L"
              name="group2"
              type={"checkbox"}
              id={"L"}
            />
            <Form.Check
              inline
              label="M"
              name="group2"
              type={"checkbox"}
              id={"M"}
            />
            <Form.Check
              inline
              label="X"
              name="group2"
              type={"checkbox"}
              id={"X"}
            />
            <Form.Check
              inline
              label="J"
              name="group2"
              type={"checkbox"}
              id={"J"}
            />
            <Form.Check
              inline
              label="V"
              name="group2"
              type={"checkbox"}
              id={"V"}
            />
            <Form.Check
              inline
              label="S"
              name="group2"
              type={"checkbox"}
              id={"S"}
            />
            <Form.Check
              inline
              label="D"
              name="group2"
              type={"checkbox"}
              id={"D"}
            />
          </div>
        </Form>
        <Form>
          <Form.Group controlId="dia">
            <Form.Label>¿Qué día lo necesitas?</Form.Label>
            <Form.Control
              type="date"
              name="dia"
              onChange={(e) => setDia(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formHoraInicio">
            <Form.Label>Hora de inicio</Form.Label>
            <Form.Control
              type="time"
              svalue={horaInicio}
              onChange={(e) => setHoraInicio(e.target.value)}
            />
          </Form.Group>

          <Form.Label>¿Cuántas horas lo necesitas?</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onClick={(e) => setTime(e.target.value)}
          >
            <option>Hora</option>
            <option value="1">1 hora</option>
            <option value="2">2 hora</option>
            <option value="3">3 hora</option>
            <option value="4">4 hora</option>
            <option value="5">5 hora</option>
            <option value="6">6 hora</option>
            <option value="7">7 hora</option>
            <option value="8">8 hora</option>
          </Form.Select>
        </Form>{" "}
        <button className="btnFilterClient1" onClick={handleNextView}>
          Siguiente
        </button>
      </div>
    </>
  );
};
