import "./styleFilterClient.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export const FilterClient1 = ({
  setComponentView,
  setProgress,
  setDataClient,
}) => {
  const [kidAge, setKidAge] = useState({
    bebe: false,
    pequeño: false,
    prescolar: false,
    escolar: false,
    adolescente: false,
  });

  const [kid, setKid] = useState(null);

  const handleKids = (e) => {
    setKid(e.target.id);
  };

  const handleAge = (value) => {
    setKidAge((prev) => ({ ...prev, [value]: !prev[value] }));
  };

  const handleNextView = () => {
    setComponentView(2);
    setProgress((100 / 5) * 2);
    setDataClient((prev) => ({
      ...prev,
      niños: kid,
      edadNiño: kidAge,
    }));
  };

  return (
    <>
      <div className="containerFilterClient1 d-flex flex-column mx-auto ">
        <div className="container-xxl containerFormFilterClient1">
          <h3 className="titleFilterClient1">Detalles</h3>
          <h4 className="title2FilterClient1">¿Cuántos niños tienes?</h4>
          <Form className="kidsFilterClient1">
            <div>
              <Form.Check
                inline
                label="1 niño"
                name="group1"
                type={"radio"}
                id={"1"}
                onChange={handleKids}
              />
              <Form.Check
                inline
                label="2 niños"
                name="group1"
                type={"radio"}
                id={"2"}
                onChange={handleKids}
              />
            </div>
            <div>
              <Form.Check
                inline
                label="3 niños"
                name="group1"
                type={"radio"}
                id={"3"}
                onChange={handleKids}
              />
              <Form.Check
                inline
                label="+4 niños"
                name="group1"
                type={"radio"}
                id={"4"}
                onChange={handleKids}
              />
            </div>
          </Form>
          <h4 className="title2FilterClient1">¿Qué edad tienen?</h4>
          <ToggleButtonGroup
            type="checkbox"
            className="d-flex gap-2 flex-wrap w-50 buttonFilterClient1 m-3"
          >
            {Object.keys(kidAge).map((age) => (
              <ToggleButton
                key={age}
                id={age}
                value={age}
                checked={kidAge[age]}
                onChange={() => handleAge(age)}
              >
                {age.charAt(0).toUpperCase() + age.slice(1)}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
        {kid === null || Object.values(kidAge).every((age) => !age) ? (
          <button disabled className="btnFilterClient1">
            Siguiente
          </button>
        ) : (
          <button className="btnFilterClient1" onClick={handleNextView}>
            Siguiente
          </button>
        )}
      </div>
    </>
  );
};
