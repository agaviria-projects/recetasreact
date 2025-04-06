import React from 'react'

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Recetas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Proximamente</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}
