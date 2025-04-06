// Home.jsx
import React from 'react';
import Aside from './aside';
import Categories from './categories'; // 👈 Importá tu componente de categorías

export default function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', padding: '20px' }}>
      {/* Columna izquierda - contenido actual con imágenes */}
      <div style={{ flex: 3 }}>
        <Aside />
      </div>

      {/* Columna derecha - categorías al estilo Divina Cocina */}
      <div
        style={{
          flex: 1,
          marginLeft: '40px',
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        }}
      >
        <Categories /> {/* ✅ Corregido aquí */}
      </div>
    </div>
  );
}
