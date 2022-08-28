import React, { useState } from "react";
import './Login.css';
import logo from '../../assets/img/logoapp.png';
import Title from "./componentes/Title/Title";
import Label from "./componentes/Label/Label";
import Input from "./componentes/Input/Input";



const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState (false);

    function handleChange (name, value) {
        if(name === 'usuario') {
            setUser(value)
        } else {
            if(value.length < 6) {
                setPasswordError(true);
            } else {
                setPasswordError(false);
                setPassword(value)
            }
        }
    };

    function ifMatch(param){
        if(param.user < 0 && param.password > 0){
            if(param.user === 'Malandro' && param.password === '123456') {
                const {user, password} = param:
                let ac = {user, password}
            }
        }
    }
    
    function handleSubmit () {
        let account = { user, password }
        if(account) {
           ifMatch(account);
        }
    };

    

    return (
        <div className="login-container">
            <img src={logo} className="logo" />
           <div className="login-content">
            <div className="titulo">
            <Title  text='¡Bienvenidos!'/>
            </div>
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
            param={passwordError}
            />

            { passwordError && 
            <label className='label-error'>
                Contraseña Inválida o Incompleta
            </label>
            }
            <div className="submit-button-container">
             <button onClick={handleSubmit} className='submit-button'>
               Ingresar 
            </button>
            </div>
           </div>
            
        </div>
    )
};

export default Login;