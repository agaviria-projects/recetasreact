import React from 'react'

export default function Aside() {
  const rating = 5;
  const descripcion = "Una parrilla con una variedad de carnes en ella";
  const opiniones = 14;

  return (
    <div className="col-lg-4 col-md-5 mb-4">
      <h2 style={{ color: '#6F4E37' }}>About Me</h2>
      <h5 style={{ color: '#6F4E37' }}>Photo of me:</h5>

      {/* Imagen más grande y adaptada */}
      <div style={{ height: "400px", width: "234%", overflow: "hidden", borderRadius: "10px" }}>
        <img
          className="img-fluid h-100 w-100"
          src="https://img.freepik.com/foto-gratis/parrilla-variedad-carnes-ella_188544-8372.jpg?t=st=1743950937~exp=1743954537~hmac=b903d3b9a532849455c940fc9def0bd7be5fabd5e7687f3ae2e8dd56a2852dd6&w=1060"
          alt="Parrilla con carnes"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Descripción + Estrellas + Opiniones */}
      <p className="mt-3" style={{ whiteSpace: "nowrap" }}>{descripcion}</p>
      <div className="text-warning mb-2">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <small>Basado en {opiniones} opinión{opiniones > 1 ? 'es' : ''}.</small>

      {/* Enlaces */}
      {/*<h3 className="mt-4">Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <hr className="d-sm-none" />*/}
    </div>
  )
}

