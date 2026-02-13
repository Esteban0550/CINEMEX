// Importamos el botón reutilizable
import Button from "./Button";

// Tarjeta de película reutilizable con diseño Cinemex
function MovieCard({ title, image, genre, duration, rating, onVerDetalle }) {
  return (
    <div className="movie-card">
      {/* Badge de clasificación */}
      {rating && (
        <span className="movie-card-overlay">{rating}</span>
      )}
      
      {/* Contenedor de imagen con overflow hidden */}
      <div style={{ overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          className="movie-card-image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x450/1A1A1A/FFD700?text=CINEMEX";
          }}
        />
      </div>
      
      {/* Contenido de la tarjeta */}
      <div className="movie-card-content">
        <h3 className="movie-card-title">{title}</h3>
        
        {/* Información adicional */}
        <div className="movie-card-info">
          {genre && <span>🎬 {genre}</span>}
          {duration && <span>⏱️ {duration}</span>}
        </div>

        {/* Botón que permite ir a la vista de detalle */}
        <Button 
          text="Ver Detalle" 
          onClick={onVerDetalle} 
          variant="primary"
        />
      </div>
    </div>
  );
}

// Exportamos el componente
export default MovieCard;
