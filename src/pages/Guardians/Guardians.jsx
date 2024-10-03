import axios from "axios";
import React, { useEffect, useState } from "react";
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
      });
  }, [deleted]);
  console.log(deleted);
  console.log(dataGuardian);

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
      });
  };

  if (dataGuardian.length === 0) {
    return <h3>...un momento por favor</h3>;
  }

  return (
    <>
      <div className="d-flex gap-5 shadow-lg flex-wrap">
        {dataGuardian.length !== 0 &&
          dataGuardian?.map((elem) => {
            return (
              <div key={elem.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={elem?.foto} />
                  <Card.Body>
                    <Card.Title>
                      {elem?.nombre} {elem?.apellidos}
                      {}
                    </Card.Title>
                    <Card.Text>{elem?.comentario}</Card.Text>
                  </Card.Body>
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
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
};
