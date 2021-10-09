import React from "react";
import { Imagen, Tarjeta, Texto } from "../estilos/Tarjeta";


const Card = (props) => {
  return (
    <Tarjeta>
        <h3>Character</h3>
        <div>
          <Imagen src={props.url} alt="Personaje de kimetsu "></Imagen>
        </div>
        <Texto>{props.name}</Texto>
      </Tarjeta>
  );
}
 
export default Card;
