import "./styleGuardians.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Guardians = () => {
  const [dataGuardian, setDataGuardian] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/guardian`)
      .then((res) => {
        setDataGuardian(res.data);
        setDeleted(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, [deleted]);

  const handleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/guardian/${id}`)
      .then((res) => {
        console.log("datos borrados correctamente", res.data);
        setDeleted(true);
        setDataGuardian("");
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  };

  if (dataGuardian.length === 0) {
    return <h3>...un momento por favor</h3>;
  }

  return (
    <>
      <div className="d-flex justify-content-center shadow-lg flex-wrap containerGuardians">
        <h3 className="titleGuardians">Guardianes</h3>
        {dataGuardian.length !== 0 &&
          dataGuardian?.map((elem) => {
            return (
              <div key={elem.id}>
                <Card style={{ width: "23rem", minHeight: "600px" }}>
                  <Card.Img variant="top" src={elem?.foto} />
                  <Card.Body>
                    <Card.Title>
                      {elem?.nombre} {elem?.apellidos}
                      {}
                    </Card.Title>
                    <Card.Text>{elem?.comentario}</Card.Text>
                  </Card.Body>
                  <div className="d-flex gap-3">
                    <Button
                      variant="primary"
                      onClick={() => handleDelete(elem.id)}
                    >
                      Eliminar
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => navigate(`/editGuardian/${elem.id}`)}
                    >
                      Editar
                    </Button>
                  </div>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
};
