import React from 'react';
import Redes from "./redes";
import "./../assets/estilos.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="redes-superior">
        <Redes />
      </div>

      <div className="header-personalizado">
        <img 
          className="logo" 
          src="https://img.freepik.com/vector-premium/logotipo-chef-hombre-logotipo-restaurantes-logotipo-comida-rapida_663736-303.jpg?w=740" 
          alt="Logo"
        />
        <h1>El Fogón Urbano</h1>
        <p>El fuego lo encendemos nosotros, el hambre la traes vos</p> 
      </div>
    </div>
  );
}



