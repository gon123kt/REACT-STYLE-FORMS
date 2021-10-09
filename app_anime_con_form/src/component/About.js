import React, {useState} from 'react';
import Boton from './../estilos/Boton';
import {ContenedorFormulario, Formulario, Input, ContenedorBoton, ContenedorTexto} from './../estilos/ElementosDeFormulario';
import { useHistory } from 'react-router-dom';
//import Alerta from './Alerta';

const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;


const validators= (input) => {
    let errors = {}
    if(!input.email){
        errors.email = "Se requiere un email"
    } else if(!expresionRegular.test(input.email)){
        errors.email = "Correo ingresado no valido"
    }
    if(!input.asunto){
        errors.asunto = "Debe completar el asunto"
    } else if(input.asunto.length < 10){
        errors.asunto = "No puede tener menos de 10 caracteres"
    }
    if(!input.cuerpo){
        errors.cuerpo = "Rellena con un mensaje"
    } else if(input.cuerpo.length > 256){
        errors.cuerpo = "No puede superar los 256 caracteres"
    }
    return errors;
}




const About = () => {

    const [state, setState] = useState({
        email: '',
        asunto: '',
        cuerpo: ''
    })
   
    const [fails, setFails] = useState({
        email: "Debes ingresar un correo valido",
        asunto: "Debes ingresar un asunto",
        cuerpo: "Debe ingresar un mensaje"
    })
    const handleSubmit = async (e) => {
      e.preventDefault();
    } 
    const handleChange = (e)=>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        
        setFails(
            validators({
                ...state, 
                [e.target.name]: e.target.value
            })
        )

    }
    return (
        <>
        <ContenedorTexto>
          <p>Nombre: Matias Gonzalo Donaire Correo: matias.donaire.86@gmail Tel: 3888605708 Ciudad: San Pedro</p>
        </ContenedorTexto>
        <ContenedorFormulario>
        <Formulario onSubmit={handleSubmit}>
              
              <Input 
                 type="email"
                 name="email"
                 placeholder="Correo electronico"
                 value={state.email}
                 onChange={handleChange}
                
              />
              {fails.email ? <p style={{color: 'red'}}> {fails.email}</p> : <p>Todo ok </p>}
              <Input 
                 type="text"
                 name="asunto"
                 placeholder="Asunto"
                 value={state.asunto}     
                 onChange={handleChange}          
              />
              {fails.asunto ? <p style={{color: 'red'}}> {fails.asunto}</p> : <p>Todo ok </p>}
              <Input 
                 type="textarea"
                 name="cuerpo"
                 placeholder="Mensaje"
                 value={state.cuerpo}    
                 onChange={handleChange}
                 cols="30" rows="10"            
              />
               {fails.cuerpo ? <p style={{color: 'red'}}> {fails.cuerpo}</p> : <p>Todo ok </p>}
            
              <ContenedorBoton>
                  <Boton as="button" type="submit" disabled={ fails.email || fails.asunto || fails.mensaje ? true : false  }>Enviar</Boton>
              </ContenedorBoton>
              
           </Formulario>
        
        </ContenedorFormulario>
           
        </>
    );
}
 
export default About;