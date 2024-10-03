import "./styleFilter.css";
import { Link } from "react-router-dom";
import iconoNiño from "../../assets/images/iconoNiño.png";
import iconoCasa from "../../assets/images/iconCasa.png";

export const Filter = () => {
  return (
    <>
      <section className="container-xxl text-center containerFilter">
        <h3>¡Hola! ¿Qué estás buscando?</h3>
        <Link to={"/filterClient"} style={{ textDecoration: "none" }}>
          <div className="containerLinkFilter">
            <img src={iconoNiño} alt="niño" />
            <p>Guardianes</p>
          </div>
        </Link>
        <Link to={"/filterGuardian"} style={{ textDecoration: "none" }}>
          <div className="containerLinkFilter">
            <img src={iconoCasa} alt="niño" />
            <p>Un trabajo</p>
          </div>
        </Link>
      </section>
    </>
  );
};
