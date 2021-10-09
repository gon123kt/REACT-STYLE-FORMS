import React from "react";
import data from "../../data/data.json";

import { useState, useEffect } from "react";
import { Contenedor, Select } from "../../estilos/DetalleEstilo";
import { Imagen } from "../../estilos/Tarjeta";

const Detail = (props) => {
  const [selected, setSelected] = useState(data.Characters[0]);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    setCharacters(data.Characters);
    setSelected(data.Characters[0]);
  }, [data.Characters, characters]);

  const onChangeInput = (event) => {
    setSelected(
      characters.find((index) => index.id === event.target.value)
    );
  };
  return (
    <Contenedor>
      <Select
        onChange={(event) => {
          onChangeInput(event);
        }}
      >
        {characters.map((index) => (
          <option key={index.id} value={index.id}>
            {index.name + " " + index.lastname}
          </option>
        ))}
      </Select>
      <Contenedor className="container">
        <h3>{selected.name + " " + selected.lastname}</h3>
        <div>
          <Imagen src={selected.photo} alt="Personaje de Kimetsu"></Imagen>
        </div>
        <h3> Character Details</h3>
        <p> Edad: {selected.age + " años"}</p>
        <p> Altura: {selected.height + " cm"}</p>
        <p>Peso: {selected.weight + " kg"}</p>
      </Contenedor>
    </Contenedor>
  );
}
 
export default Detail;

