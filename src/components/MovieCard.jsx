/**
 * ========================================
 * COMPONENTE MovieCard - Tarjeta de Película
 * ========================================
 * 
 * Componente reutilizable que muestra información de una película
 * en formato de tarjeta con imagen, datos y acciones.
 * 
 * Props:
 * - title: título de la película
 * - image: URL de la imagen/poster
 * - genre: género de la película
 * - duration: duración en minutos
 * - rating: clasificación (AA, A, B, etc.)
 * - esFavorito: booleano que indica si está en favoritos
 * - onToggleFavorito: función (onClick) para agregar/quitar de favoritos
 * - onVerDetalle: función (onClick) para navegar al detalle
 */

// Importamos el botón reutilizable y los iconos SVG
import Button from "./Button";
import { IconHeartFilled, IconHeartOutline, IconMovie, IconClock } from "./Icons";

function MovieCard({ 
  title, 
  image, 
  genre, 
  duration, 
  rating, 
  esFavorito = false,
  onToggleFavorito,
  onVerDetalle 
}) {
  return (
    <div className="movie-card">
      
      {/* ========================================
          BADGE DE CLASIFICACIÓN
          Muestra la clasificación de la película
          ======================================== */}
      {rating && (
        <span className="movie-card-overlay">{rating}</span>
      )}
      
      {/* ========================================
          BOTÓN DE FAVORITOS
          Evento onClick para agregar/quitar de favoritos
          El icono SVG cambia según el estado
          ======================================== */}
      {onToggleFavorito && (
        <button
          onClick={onToggleFavorito}
          className="movie-card-fav"
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: esFavorito ? "var(--cinemex-red)" : "rgba(255,255,255,0.9)",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
          }}
          title={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          {/* Renderizado condicional del icono según estado */}
          {esFavorito ? (
            <IconHeartFilled size={20} color="white" />
          ) : (
            <IconHeartOutline size={20} color="var(--cinemex-red)" />
          )}
        </button>
      )}
      
      {/* ========================================
          CONTENEDOR DE IMAGEN
          overflow hidden permite efecto de zoom en hover
          ======================================== */}
      <div style={{ overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          className="movie-card-image"
          onError={(e) => {
            // Imagen de respaldo si falla la carga
            e.target.src = "https://via.placeholder.com/300x450/1A1A1A/FFD700?text=CINEMEX";
          }}
        />
      </div>
      
      {/* ========================================
          CONTENIDO DE LA TARJETA
          Título, información y botón de acción
          ======================================== */}
      <div className="movie-card-content">
        {/* Título de la película */}
        <h3 className="movie-card-title">{title}</h3>
        
        {/* Información adicional con iconos SVG */}
        <div className="movie-card-info">
          {genre && (
            <span>
              <IconMovie size={14} color="var(--cinemex-gray-light)" /> {genre}
            </span>
          )}
          {duration && (
            <span>
              <IconClock size={14} color="var(--cinemex-gray-light)" /> {duration}
            </span>
          )}
        </div>

        {/* Botón para navegar al detalle */}
        <Button 
          text="Ver Detalle" 
          onClick={onVerDetalle} 
          variant="primary"
        />
      </div>
    </div>
  );
}

// Exportamos el componente para uso en otras partes de la app
export default MovieCard;
