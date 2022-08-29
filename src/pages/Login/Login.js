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
    const [ isLogin, setIsLogin ] = useState (false);
    const [ hasError, setHasError ] = useState(false);

    function handleChange (name, value) {
        if(name === 'usuario') {
            setUser(value);
            setHasError(false);
        } else {
            if(value.length < 6) {
                setPasswordError(true);
                setHasError(false);
            } else {
                setPasswordError(false);
                setPassword(value);
                setHasError(false);
            }
        }
    };

    function ifMatch(param) {
        if(param.user.length > 0 && param.password.length > 0) {
            if(param.user === 'Valentin' && param.password === 'valentin12') {
                const { user, password } = param;
                let ac = { user, password };
                let account = JSON.stringify(ac);
                localStorage.setItem('accont', account);
                setIsLogin(true);
            } else {
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false);
            setHasError(true);
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
            { isLogin ?
                <div className="home-container">
                    <h1> ¡Hola, {user}! </h1>
                    <label>Has sido Logueado Correctamente</label>
                </div>
            :
            <div className="login-content">
            <div className="titulo">
            <Title  text='¡Bienvenidos!'/>
            </div>
            { hasError &&
              <label className="label-alerta">
                Su Contraseña o Usuario son Incorrectos, o Inexistente.
              </label>
            }
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
            
            }
            
        </div>
    )
};

export default Login;