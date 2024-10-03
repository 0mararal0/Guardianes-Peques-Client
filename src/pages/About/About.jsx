import React from "react";
import "./styleAbout.css";
import imagenUno from "../../assets/images/XEKFGJNTN5G2TLE4HLGXU5LN5U.avif";

export const About = () => {
  
  return (
    <>
      <section className="section-class" style={{ backgroundImage: `url(${imagenUno})` }}>
      <h1 className="titulo-p">Acerca de nosotros</h1>
        <div className="fondo">
          <div className="div-cards container-xxl">

            <div className="card">
              <h3 className="titulo">familias y cuidadores.</h3>
              <p className="texto">
                Guardianes & Peques es una plataforma creada con el objetivo de
                ofrecer atención de calidad a los pequeños de la casa.
              </p>
            </div>

            <div className="card">
              <h3 className="titulo">Objetivo.</h3>
              <p className="texto">
                Facilitamos a las familias la búsqueda de cuidadores especializados
                que se adapten a sus necesidades, al tiempo que brindamos
                oportunidades laborales a profesionales en el ámbito del cuidado
                infantil.
              </p>
            </div>

            <div className="card">
              <h3 className="titulo">¿Qué ofrecemos?</h3>
              <p className="texto">
                Para las familias, proporcionamos una solución accesible y
                completa que simplifica la búsqueda de niñeras y educadores.
              </p>
            </div>
            

            <div className="card">
              <h3 className="titulo">Facilidades laborales</h3>
              <p className="texto">
                Para los cuidadores, ofrecemos una plataforma donde pueden descubrir
                oportunidades laborales de calidad y conectar con familias que
                valoran su experiencia y dedicación.
              </p>
            </div>

            <div className="card">
              <h3 className="titulo">Otros cuidados</h3>
              <p className="texto">
                Cuidadores con experiencia en necesidades especiales y otros
                profesionales del cuidado infantil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};