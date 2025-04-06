import React from "react";

export default function Card({ imagen, titulo, descripcion, rating, opiniones }) {
  const colorTitulo = "#8B4513"; // Marrón café
  const estrellas = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <div className="card shadow-sm rounded-4 border-0 h-100">
      <img
        src={imagen}
        className="card-img-top rounded-top-4"
        alt={titulo}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body px-4 py-3">
        <h5 className="card-title fw-bold" style={{ color: colorTitulo }}>
          {titulo}
        </h5>

        <div className="text-warning mb-2" style={{ fontSize: "1.1rem" }}>
          {estrellas}
        </div>

        <p className="card-text text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
          {descripcion}
        </p>

        <small className="text-secondary">
          Basado en {opiniones} opinión{opiniones !== 1 ? "es" : ""}.
        </small>
      </div>
    </div>
  );
}

  

  
  