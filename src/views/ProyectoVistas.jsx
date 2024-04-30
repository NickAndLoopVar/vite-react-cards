import React from "react";
import "./ProyectoVistas.css"

function ProyectoVistas({len}){
    return(
        <div className="lenvista">
            <h1>{len.nproyecto}</h1>
            <h3>{len.ndescripcion}</h3>
            <img src = {len.imagen} alt = {len.imagen + "imagen"}></img>
            <p>{len.nintegrantes}</p>
        </div>
    )
}

export default ProyectoVistas;