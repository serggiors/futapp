import React from "react";
import { Image } from "antd";
import { AboutContainer, NavLinks } from "./AboutElement";
import "./AboutSection.css";

import ComplejoUno from '../../assets/complejo-uno.jpg'
import ComplejoDos from '../../assets/complejo-dos.jpg'
import ComplejoTres from '../../assets/complejo-tres.jpg'
import ComplejoCuatro from '../../assets/complejo-cuatro.jpg'

const items = [
  {
    key: "1",
    img: `${ComplejoUno}`,
  },
  {
    key: "2",
    img: `${ComplejoDos}`,
  },
  {
    key: "3",
    img: `${ComplejoTres}`,
  },
  {
    key: "4",
    img: `${ComplejoCuatro}`,
  },
];

const AboutSection = () => {
  return (
    <AboutContainer id="nosotros"> 
      <div className="title">
        <div className="titleHolder">
          <h2>Complejo Deportivo</h2>
        </div>
      </div>
        <div className="twoColumns">
            <div className="columnLeft">
                <p>
                Disfruta de un predio extraordinario, ubicado en plena costanera
                sur, frente a la cancha del club BOCA UNIDOS.
                </p>
                <br />
                <p>
                {" "}
                Te ofrecemos las mejores{" "}
                <NavLinks to="canchas" 
                offset={-80}
                smooth 
                            duration={500}
                            spy
                            exact='true'>canchas de futbol 5, 7 y 11</NavLinks>
                {" "}
                con césped sintético de última generación,
                además de exclusivos servicios adicionales para que tu experiencia
                sea única.
                </p>
                <p>
                Además, con el alquiler de cualquiera de nuestras canchas, podés
                utilizar el sector de parrillas absolutamente sin cargo.
                </p>
                <br />
                <p>
                Contamos con seguridad y personal médico presente en el complejo
                las 24 horas.
                </p>
            </div>
            <div className="columnRight">
                <div className="fila-1">
                    <div className="image">
                        <div className="imageDimension">
                            <Image src={items[0].img} alt={items[0].key} />
                        </div>
                    </div>
                    <div className="image">
                        <div className="imageDimension">
                            <Image src={items[1].img} alt={items[1].key} />
                        </div>
                    </div>
                </div>
                <div className="fila-2">
                <div className="image">
                        <div className="imageDimension">
                            <Image src={items[2].img} alt={items[2].key} />
                        </div>
                    </div>
                    <div className="image">
                        <div className="imageDimension">
                            <Image src={items[3].img} alt={items[3].key} />
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </AboutContainer>
  );
};

export default AboutSection;
