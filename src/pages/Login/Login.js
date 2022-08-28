import React, { useState } from "react";
import './Login.css';
import logo from '../../assets/img/logoapp.png';
import Title from "./componentes/Title/Title";
import Label from "./componentes/Label/Label";
import Input from "./componentes/Input/Input";



const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    function handleChange (name, value) {
        if(name === 'usuario') {
            setUser(value)
        } else {
            setPassword(value)
        }
    };

    function handleSubmit () {
        let account = { user, password }
        if(account) {
           console.log('account', account) 
        }
    };

    

    return (
        <div className="login-container">
            <img src={logo} className="logo" />
           <div className="titulo"><Title  text='¡Bienvenidos!'/></div>
            <div className="registro">
            <Label  text= 'Usuario'/>
            <Input 
            attribute={{
                id:'usuario',
                name:'usuario',
                type: 'text',
                placeholder: 'Ingrese su Usuario'
            }}
            handleChange={handleChange}
            />
            <Label  text= 'Contraseña'/>
            <Input 
            attribute={{
                id:'contraseña',
                name:'contraseña',
                type: 'password',
                placeholder: 'Ingrese su Contraseña'
            }}
            handleChange={handleChange}
            />

        
            </div>
            
            <button onClick={handleSubmit}>
               Ingresar 
            </button>
            
        </div>
    )
};

export default Login;