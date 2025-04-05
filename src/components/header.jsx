import "./../assets/estilos.css"
import React from 'react';

export default function Header() {
  return (
    <div className="p-5 bg-primary text-white text-center">
      <h1>
        <img 
          className="logo" src="https://images.pond5.com/chef-logo-emblem-restaurant-or-illustration-172489935_iconl.jpeg" 
          alt="Logo"
        />
        My First Bootstrap 5 Page
      </h1>
      <p>Resize this responsive page to see the effect!</p> 
    </div>
  );
}

