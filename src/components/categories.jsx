import React from 'react';

export default function Categories() {
  return (
    <div style={{ paddingLeft: '20px' }}>
      {/* Categorías existentes */}
      <div className="mb-4">
        <h4 style={{ backgroundColor: '#000', color: 'white', padding: '5px' }}>CARNES ASADAS</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          <span className="badge bg-light text-dark">Res</span>
          <span className="badge bg-light text-dark">Cerdo</span>
          <span className="badge bg-light text-dark">Costillas</span>
          <span className="badge bg-light text-dark">BBQ</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 style={{ backgroundColor: '#000', color: 'white', padding: '5px' }}>POLLO Y AVES</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          <span className="badge bg-light text-dark">Muslos</span>
          <span className="badge bg-light text-dark">Al horno</span>
          <span className="badge bg-light text-dark">Empanizados</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 style={{ backgroundColor: '#000', color: 'white', padding: '5px' }}>PESCADOS Y MARISCOS</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          <span className="badge bg-light text-dark">A la parrilla</span>
          <span className="badge bg-light text-dark">Frito</span>
        </div>
      </div>

      {/* Nuevas categorías */}
      <div className="mb-4">
        <h4 style={{ backgroundColor: '#000', color: 'white', padding: '5px' }}>PASTAS Y COCINA ITALIANA</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          <span className="badge bg-light text-dark">Lasagna</span>
          <span className="badge bg-light text-dark">Espaguetis</span>
          <span className="badge bg-light text-dark">Ñoquis</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 style={{ backgroundColor: '#000', color: 'white', padding: '5px' }}>COCINA LATINOAMERICANA</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          <span className="badge bg-light text-dark">Arepas</span>
          <span className="badge bg-light text-dark">Tacos</span>
          <span className="badge bg-light text-dark">Empanadas</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 style={{ backgroundColor: '#000', color: 'white', padding: '5px' }}>COMIDAS AL HORNO</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          <span className="badge bg-light text-dark">Cazuelas</span>
          <span className="badge bg-light text-dark">Gratín</span>
          <span className="badge bg-light text-dark">Panes caseros</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 style={{ backgroundColor: '#000', color: 'white', padding: '5px' }}>BEBIDAS Y CÓCTELES</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          <span className="badge bg-light text-dark">Jugos naturales</span>
          <span className="badge bg-light text-dark">Cócteles</span>
          <span className="badge bg-light text-dark">Infusiones</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 style={{ backgroundColor: '#000', color: 'white', padding: '5px' }}>TIPS DE COCINA</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          <span className="badge bg-light text-dark">Conservación</span>
          <span className="badge bg-light text-dark">Corte de carnes</span>
          <span className="badge bg-light text-dark">Técnicas</span>
        </div>
      </div>
    </div>
  );
}


