
import styled from "styled-components";

const Contenedor = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
width: 100%;
`;
const Select = styled.select`
width: 500px;
    height: 30px;
    align-self: center;
    font-size: 20px;
    text-align: center;
    border: none;
    border-bottom: 1px solid grey;
    outline: none;
`;
const Imagen = styled.img`
max-width: 700px;
max-height: 700px;
box-shadow: 1px 1px 20px rgba(0, 0, 0, 1);
border-radius: 10px;
transition: 500ms;

&:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    transition: 500ms;
}

`;
const Texto = styled.div`
  align-content: center;
  font-size: 16px;
`;
 
export {Contenedor,Select, Imagen, Texto};
