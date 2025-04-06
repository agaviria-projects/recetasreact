export default function Card({ imagen, titulo, descripcion, rating, opiniones }) {
    return (
      <div className="card h-100 border-0 shadow-sm">
        <img 
          src={imagen}
          alt={titulo} 
          className="img-fluid rounded"
          style={{ objectFit: "cover", height: "200px", width: "300%" }}
        />
        <h4 className="mt-3" style={{ color: '#B7410E' }}>{titulo}</h4>
        <div className="text-warning mb-2">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
        <p>{descripcion}</p>
        <small>Basado en {opiniones} opinión{opiniones > 1 ? 'es' : ''}.</small>
      </div>
    );
  }
  
  

  
  