import React, {useState} from 'react';
import Boton from '../elementos/Boton';
import {Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import { useHistory } from 'react-router-dom';
import Alerta from './Alerta';


const RegistroUsuarios = () => {
    //creamos history q sera usada para redireccionar
    const history = useHistory();
    const [correo, establecerCorreo] = useState('');
    const [password, establecerPassword] = useState('');
    const [password2, establecerPassword2] = useState('');
    //cambios de estados para las alertas
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});
    //--------------------

    const handleChange = (e) => {
       //para verificar si funciona y trae el objeto lo vemos con console.log
       //console.log(e.target.name);
       //con un switch traemos los valores
       switch (e.target.name) {
           case 'email':
               establecerCorreo(e.target.value)
               break;
           case 'password':
               establecerPassword(e.target.value)
               break;
           case 'password2':
               establecerPassword2(e.target.value)
              break;
           default:
               break;
       }
    }
    //otra forma de trabajar con tryCatch es agrega al handlesubmit async y en el try poner await
    const handleSubmit = async (e) => {
       e.preventDefault();
       //comprobacion de estados alertas
       cambiarEstadoAlerta(false);
       cambiarAlerta({});
       //------------------------
       //console.log(correo, password, password2);

       //comprobamos del lado del cliente que el correo sea valido
       const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
       //lo comprobamos con console.logTest me va a devolver false o true
       //console.log(expresionRegular.test(correo));
       if (!expresionRegular.test(correo)) {
           //console.log('ingresa un correo valido');
           cambiarEstadoAlerta(true);
           cambiarAlerta({
               tipo: 'error',
               mensaje: 'Por favor ingresa un correo valido'
           });
           return;
       }
       //comprobacion de que no este vacio los input para crear cuenta
       if (correo === '' || password === '' || password2 === '') {
           //console.log('Rellena los datos');
           cambiarEstadoAlerta(true);
           cambiarAlerta({
               tipo: 'error',
               mensaje: 'Por favor rellena todos los datos'
           });
           return;
       }
       //comprobacion de q las contraseñas sean iguales
       if (password !== password2) {
           //console.log('Las contraseñas no son iguales');
           cambiarEstadoAlerta(true);
           cambiarAlerta({
               tipo: 'error',
               mensaje: 'Las contraseñas no son iguales'
           });
           return;
       }
       //en este apartado creamos los usuarios
       //console.log('Registramos un usuario');
      
       try {
          await auth.createUserWithEmailAndPassword(correo, password);
          //console.log('El usuario se creo co exito');
          history.push('/');
       } catch (error) {
           //Es la parte de mensajes de errores para ello accedemos a error.code
           console.log(error.code);
           //cambiamos el estado
           cambiarEstadoAlerta(true);
           let mensaje;
           switch(error.code){
            case 'auth/weak-password':
                mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
                break;
            case 'auth/email-already-in-use':
                mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
            break;
            case 'auth/invalid-email':
                mensaje = 'El correo electrónico no es válido.'
            break;
            default:
                mensaje = 'Hubo un error al intentar crear la cuenta.'
            break;
        }
           //console.log(mensaje);
           cambiarAlerta({tipo:'error', mensaje:mensaje});
       }
    }

    return (
        <>
           <Formulario onSubmit={handleSubmit}>
               <Svg />
              <Input 
                 type="email"
                 name="email"
                 placeholder="Correo electronico"
                 value={correo}
                 onChange={handleChange}
              />
              <Input 
                 type="password"
                 name="password"
                 placeholder="Contraseña"
                 value={password}     
                 onChange={handleChange}            
              />
              <Input 
                 type="password"
                 name="password2"
                 placeholder="Repetir la Contraseña"
                 value={password2}    
                 onChange={handleChange}             
              />
              <ContenedorBoton>
                  <Boton as="button" type="submit" primario>Crear cuenta</Boton>
              </ContenedorBoton>
              
           </Formulario>
        <Alerta 
            tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEstadoAlerta={cambiarEstadoAlerta}
        
        />
        </>
    );
}
 
export default RegistroUsuarios;