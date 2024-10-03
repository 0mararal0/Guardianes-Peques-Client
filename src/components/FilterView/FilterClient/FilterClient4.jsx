import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export const FilterClient4 = ({
  setComponentView,
  setProgress,
  setDataClient,
}) => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [floor, setFloor] = useState("");
  const [letter, setLetter] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setComponentView(5);
      setProgress((100 / 6) * 5);
      setDataClient((prov) => ({
        ...prov,
        nombre: name,
        apellidos: lastname,
        email: email,
        direcion: address,
        piso: floor,
        letra: letter,
        zip: zip,
        ciudad: city,
        poblacion: country,
        telefono: phone,
      }));
    }

    setValidated(true);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleFloor = (e) => {
    setFloor(e.target.value);
  };
  const handleLetter = (e) => {
    setLetter(e.target.value);
  };
  const handleZip = (e) => {
    setZip(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <>
      <div className="containerFilterClient1 d-flex flex-column mx-auto">
        <h3 className="titleFilterClient1">Ya estamos acabando</h3>
        <p className="title2FilterClient1">Datos personales</p>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={handleName}
                required
                type="text"
                placeholder="Nombre"
                value={name}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Obligatorio!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                onChange={handleLastName}
                required
                type="text"
                placeholder="Apellidos"
                value={lastname}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Obligatorio!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  onChange={handleEmail}
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={email}
                />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Obligatorio!
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                onChange={handleAddress}
                type="text"
                placeholder="Dirección"
                required
                value={address}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Obligatorio!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationCustom04">
              <Form.Label>Piso</Form.Label>
              <Form.Control
                onChange={handleFloor}
                type="text"
                placeholder="Piso"
                required
                value={floor}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Obligatorio!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationCustom04">
              <Form.Label>Letra</Form.Label>
              <Form.Control
                onChange={handleLetter}
                type="text"
                placeholder="Letra"
                required
                value={letter}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Obligatorio!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationCustom04">
              <Form.Label>C.P.</Form.Label>
              <Form.Control
                onChange={handleZip}
                type="text"
                placeholder="Código Postal"
                required
                value={zip}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Obligatorio!
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="5" controlId="validationCustom04">
              <Form.Label>Localidad</Form.Label>
              <Form.Control
                onChange={handleCity}
                type="text"
                placeholder="Localidad"
                required
                value={city}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Obligatorio!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="validationCustom05">
              <Form.Label>Población</Form.Label>
              <Form.Control
                onChange={handleCountry}
                type="text"
                placeholder="Población"
                required
                value={country}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Obligatorio!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationCustom05">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                onChange={handlePhone}
                type="tel"
                placeholder="Teléfono"
                required
                value={phone}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Obligatorio!
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="w-100 text-center">
            <button className="btnFilterClient1 " type="submit">
              Siguiente
            </button>
          </div>
          {/*  <Button>Submit form</Button> */}
        </Form>
      </div>
    </>
  );
};
