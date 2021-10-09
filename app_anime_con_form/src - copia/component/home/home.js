import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../card";
import data from "../../data/data.json";
import ContenedorCard from "../../estilos/ContenedorCard";


export default class Home extends React.Component {
  
  constructor(props) {
    super();
    this.state = {
      characters: data.Characters,
    };
  }
  render() {
    return (
      <ContenedorCard>
        {this.state.characters.map((index) => {
          return (
            <NavLink
              exact
              key={index.id}
              to={`/characterDetail/${index.id}`}
            >
              <Card
                name={index.name + " " + index.lastname}
                url={index.photo}
              />
            </NavLink>
          );
        })}
      </ContenedorCard>
    );
  }
  
}
