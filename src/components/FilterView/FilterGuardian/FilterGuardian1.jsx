import { useState } from "react";
import Form from "react-bootstrap/Form";

export const FilterGuardian1 = ({
  setComponentView,
  setProgress,
  setDataGuardian,
}) => {
  const [guardianData, setGuardianData] = useState({
    nombre: "",
    apellidos: "",
    localidad: "",
    provincia: "",
    nacimiento: "",
    telefono: "",
    email: "",
    foto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuardianData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextView = () => {
    setComponentView(2);
    setProgress((100 / 4) * 2);
    setDataGuardian(guardianData);
  };

  const isFormValid = Object.values(guardianData).every(
    (field) => field !== ""
  );

  return (
    <>
      <div className="containerFilterClient1 mx-auto my-5">
        <h3 className="titleFilterClient1">Sobre Ti</h3>
        <Form>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={guardianData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formApellidos">
            <Form.Label>Apellidos:</Form.Label>
            <Form.Control
              type="text"
              name="apellidos"
              value={guardianData.apellidos}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formLocalidad">
            <Form.Label>Localidad:</Form.Label>
            <Form.Control
              type="text"
              name="localidad"
              value={guardianData.localidad}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formProvincia">
            <Form.Label>Provincia:</Form.Label>
            <Form.Control
              type="text"
              name="provincia"
              value={guardianData.provincia}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formNacimiento">
            <Form.Label>Fecha de Nacimiento:</Form.Label>
            <Form.Control
              type="date"
              name="nacimiento"
              value={guardianData.nacimiento}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTelefono">
            <Form.Label>Teléfono:</Form.Label>
            <Form.Control
              type="tel"
              name="telefono"
              value={guardianData.telefono}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={guardianData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formFoto">
            <Form.Label>Foto:</Form.Label>
            <Form.Control
              type="text"
              name="foto"
              value={guardianData.foto}
              onChange={handleChange}
              placeholder="URL de la foto"
            />
          </Form.Group>
        </Form>
        <button
          className="btnFormClient"
          onClick={handleNextView}
          disabled={!isFormValid}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
