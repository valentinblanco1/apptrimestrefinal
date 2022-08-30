import React, {useState} from "react"
import styled from 'styled-components'
import MenuButton from "./MenuButton";
import logo from "../../assets/img/logoapp.png";
import { Link } from "react-router-dom";

function Navbar() {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        //cuando la condicion es verdadera lo pasa a falso y vice versa
        setClicked(!clicked)
    }



    return(
        <>
            <NavContainer>
                <h2>APP <span>TRIMESTRAL</span></h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <img src={logo} className="logo-menu" />
                    <a href="/">Inicio</a>
                    <a href="/">Buscar Alumno</a>
                    <Link to="loginadmin">Modo Administrador</Link>
                </div>
                <div className="button-menu">
                <MenuButton clicked={clicked} handleClick={handleClick}/>
                </div>
                <Bgdiv className={`initial ${clicked ? 'active' : ''}`}></Bgdiv>
            </NavContainer>

        
        </>
    )
}

export default Navbar;

const NavContainer = styled.nav`
    h2 {
        color: #000;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    padding: .4rem;
    background-color: #E3DDA9;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        color: #000;
        text-decoration: none;
        margin-right: 1rem;
    }

    .button-menu {
       @media(min-width: 768px){
        display: none;
       }
    }

    .links {
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a{
            color: #000;
            font-size: 2rem;
            display: block;
        }
       @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: #000;
                display: inLine;
            }
       } 
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a {
            font-size: 2rem;
            margin-top: 1rem;
            color: #000;
        }
    }

    .logo-menu {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: relativa;
        margin: auto;
    }
`

const Bgdiv = styled.div`
    position: absolute;
    background-color: #E3DDA9;
    top: -700px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
    }

`