import React, {useState, useEffect, useRef} from "react"
import styled from 'styled-components'
import MenuButton from "./MenuButton";
import logo from "../../assets/img/logoapp.png";
import { Link } from "react-router-dom";
import logo2 from '../../assets/img/slider1.jfif';
import logo3 from '../../assets/img/slider2.jfif';
import logoepet from '../../assets/img/logoepet.jpg';
import imgF from '../../assets/img/icons8-facebook-nuevo.svg';
import imgI from '../../assets/img/icons8-instagram.svg';


function Navbar() {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        //cuando la condicion es verdadera lo pasa a falso y vice versa
        setClicked(!clicked)
    }

    const slideshow = useRef(null);

    const siguiente = () => {
        //comprobamos que slideshow tenga elementos
        if(slideshow.current.children.length > 0){
            //obtenemos el primer elemento de slideshow
            const primerElemento = slideshow.current.children [0];
            //establecemos la transicion para el slideshow
            slideshow.current.style.transition = `3000ms ease-out all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () => {
            slideshow.current.style.transition = 'none';
            slideshow.current.style.transform = `translateX(0)`;

            slideshow.current.appendChild(primerElemento);
            }

            slideshow.current.addEventListener('transitionend', transicion);
            
        }
    }

    useEffect(() => {
        setInterval(() => {
           siguiente(); 
        }, 5000);
    }, []);

    return(
        <ContenedorPantalla>
            <NavContainer>
                <div className="menu">
                    <h2>APP <span>TRIMESTRAL</span></h2>
                    <div className={`links ${clicked ? 'active' : ''}`}>
                        <img src={logo} className="logo-menu" />
                        <a href="/">Inicio</a>
                        <Link to="buscaralumno">Buscar Alumno</Link>
                        <Link to="loginadmin">Modo Administrador</Link>
                     </div>
                    <div className="button-menu">
                        <MenuButton clicked={clicked} handleClick={handleClick}/>
                    </div>
                    <Bgdiv className={`initial ${clicked ? 'active' : ''}`}></Bgdiv>
               </div>
            </NavContainer>
           <SliderContainer> 
            <ContenedorSlider ref={slideshow}>
                
                
                    <Slide>
                        <a href="/">
                        <img src={logo2} className="logo2" /> 
                        </a>
                    </Slide>
                    <Slide>
                        <a href="/">
                        <img src={logo3} className="logo3" /> 
                        </a>
                    </Slide>
                        
                
                
            </ContenedorSlider>
           </SliderContainer>

           <LogoE>
           <div className="infoe">
            
                <div className="logoep">
                <img src={logoepet} className="logoe"/>
                </div>
                <div className="cajah2">
                <h2> 
                <div className="imgF">
                    <img src={imgF}>
                    </img>
                </div>
                <div className="imgI">
                    <img src={imgI} href="" />
                </div>
                </h2>
                </div>
           </div>
           </LogoE>
        </ContenedorPantalla>
    )
}

export default Navbar;

const ContenedorPantalla = styled.div`

background: #E1DDB8;

`

const NavContainer = styled.nav`
    
   .menu {
    position:relative;
    z-index: 99;
   }

    .menu h2 {
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

    .menu .button-menu {
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

    .menu .links.active{
        width: 100%;
        display: block;
        position: relative;
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

    .menu .logo-menu {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: relative;
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
const SliderContainer = styled.div`



`
const ContenedorSlider = styled.div`
    display: flex;
    flex-wrap: nowrap;
`
const Slide = styled.div`
    min-width: 100%;  
    overflow: hidden;
    transition: .3s ease all;
    z-index: 9 ;  
    max-height: 500px;
    position: relative;
    
    img {
        width: 100%;
        vertical-align: top;
    }
`
const LogoE = styled.div`

.logoe {
    margin-top: 15px;
    padding: 15px;
    width: 280px;
    height: 280px;
    padding-left: 25px;
    border-radius: 30px;
}

.cajah2 {
    padding-left:25px;
    padinng-right: 25px;
    width: 200px;
    padding: 35px;
    margin: 15px;
    margin-top: 35px;
    display: flex;
    border-radius: 20%;
    

    
}

 h2 {
    width: 200px;
    padding: 50px;
    margin: 20px;
    margin-top: 20px;
    padding-left: 50px;
    display: flex;
    border-radius: 20%;
    background-color: #FFF;
    justify-content:center
    
    
    

    
}

.infoe {
    display: flex;
}



`