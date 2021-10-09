import React from "react";
import "./card.css";

const Card = (props) => {

  return (
    <div className="card">
        <h3>Character</h3>
        <div>
          <img src={props.url} alt="Personaje de kimetsu "></img>
        </div>
        <div className="name">{props.name}</div>
      </div>
  );
}
 
export default Card;

