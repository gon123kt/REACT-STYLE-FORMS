import { useHistory, useParams } from "react-router";
import Card from "../card";
import data from "../../data/data.json";
import styled from "styled-components";
import { Tarjeta, Texto } from "../../estilos/Tarjeta";
import React from 'react';


const Character = (index) => {
  const params = useParams();
  const element = data.Characters.find((element) => element.id === params.id);
  console.log(element.id);
  const history = useHistory();
  const volver = () => {
    history.push("/");
  };
  return (
    <>
    <Tarjeta2>
    <Boton
        type="button"
        onClick={() => {
          volver();
        }}
      >
        <Texto>Volver Al inicio</Texto>
      </Boton>
    <Card
        name={element.name + " " + element.lastname}
        url={element.photo}
      ></Card>
    </Tarjeta2>
      
      
    </>
  );
}
const Boton = styled.div`
background: #5B69E2;
width: 8rem; /* 250px */
margin-left: 1.25rem; /* 20px */
border: none;
border-radius: 0.625rem; /* 10px */
color: #fff;
font-family: 'Work Sans', sans-serif;
height: 2rem; /* 60px */
padding: 1.25rem 1.87rem; /* 20px 30px */
font-size: 1.25rem; /* 20px */
font-weight: 500;
cursor: pointer;
text-decoration: none;
display: inline-flex;
justify-content: space-between;
align-items: center;
outline: none;
`;
const Tarjeta2 = styled.div`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  align-item:center;
  text-align: center;
  background-color: #FCF6F5;
  color: white;
  overflow: hidden;
`;
export default Character;
