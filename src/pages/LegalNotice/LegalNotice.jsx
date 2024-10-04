import "./styleLegalNotice.css";
import { Link } from "react-router-dom";

export const LegalNotice = () => {
  return (
    <main className="main-legal">
      <section className="section-noticiasLegal">
        <div className="datos">
          <h1>Aviso Legal</h1>
          <ul>
            <li>Compañía: Guardinaes & peques</li>
            <li>Dirección: calle dolores 14</li>
            <li>Codigo postal: 20016</li>
            <li>
              Email:{" "}
              <a href="mailto:guardianes@hotmal.com">guardianes@hotmal.com</a>
            </li>
            <li>
              Link web: <a href="http://localhost:5173/">Visitar web</a>
            </li>
            <li>Telefono:645777812 </li>
            <li>Responsable del contenido: Alberto, Miguel. </li>
          </ul>
        </div>

        <div className="legal">
          <p>
            <h3>Guardianes & Peques Legal:®</h3>
            Copyright Care.com Europe GmbH. Todos los contenidos, incluidos como
            parte de bases de datos u otros derechos de propiedad industrial,
            están protegidos por derechos de autor. Todos los derechos
            reservados. Está estrictamente prohibida la reimpresión o
            publicación pública, especialmente en otros sitios web y servicios
            en línea, la creación de enlaces a la página de Guardianes & Peques,
            o la reproducción de contenidos en cualquier formato, como CD-ROM,
            DVD-ROM, etc., incluso parcialmente, sin una autorización previa por
            escrito de Guardianes & Peques. En caso de que en este sitio se
            proporcionen enlaces o hipervínculos a otros sitios de Internet,
            Guardianes & Peques no ejerce control alguno sobre esos sitios ni
            sobre sus contenidos. Guardianes & Peques no asume responsabilidad
            alguna por los contenidos de enlaces que conduzcan a sitios web de
            terceros. La inclusión de estos enlaces no implica ningún tipo de
            asociación, fusión o participación con las entidades conectadas.
          </p>
        </div>

        <Link to="/contact" className="button-legal">
          <p>Contacto</p>
        </Link>
      </section>
    </main>
  );
};
