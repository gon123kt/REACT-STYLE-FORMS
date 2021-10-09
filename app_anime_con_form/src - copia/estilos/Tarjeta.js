
import styled from "styled-components";

const Tarjeta = styled.div`
  width: 400px;
  height: 500px;
  margin: 15px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  text-align: center;
  background-color: rgb(48, 41, 41);
  color: white;
  overflow: hidden;
  max-height: 400px;
`;
const Imagen = styled.img`
  max-width: 100%;
  object-fit: cover;
  transition: 500ms;
`;
const Texto = styled.div`
  align-content: center;
  font-size: 16px;
`;
 
export {Tarjeta, Imagen, Texto};

