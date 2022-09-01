import React from "react";
import logo from '../../../assets/img/logoapp.png';
import './BuscarAlumno.css';


function BuscarAlumno() {
    return(
        <div className="container-buscar">
        <div className="buscar-alumno">

            <img src={logo} className="logoa"/>
            <h1>Buscar Alumno</h1>
            <form action="">
                <p>Nombre y Apellido</p>
                <input type="text" placeholder="Ingresar Datos..."/>
                <p> DNI </p>
                <input type="number" placeholder="Ingresar Dni..."/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
        </div>

    );
}

export default BuscarAlumno;