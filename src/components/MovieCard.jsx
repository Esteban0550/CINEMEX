// reutilizable - tarjeta de película
import { Link } from "react-router-dom"
import Button from "./Button"
import { IconHeartFilled, IconHeartOutline, IconMovie, IconClock } from "./Icons"

function MovieCard({
  id,              // identificador
  title,           // título de la película
  image,           // URL del poster
  genre,           // género
  rating,          // clasificación
  duration,        // duración
  esFavorito,      // estado favorito
  onToggleFavorito, // evento toggle favorito
  onClick          // evento click detalle
}) {
  return (
    <div className="movie-card">
      {/* badge clasificación */}
      {rating && <span className="movie-card-overlay">{rating}</span>}

      {/* evento onClick - toggle favorito */}
      {onToggleFavorito && (
        <button
          onClick={onToggleFavorito}
          className="movie-card-fav"
          title={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          {esFavorito
            ? <IconHeartFilled size={20} color="white" />
            : <IconHeartOutline size={20} color="var(--cinemex-red)" />
          }
        </button>
      )}

      {/* imagen con zoom en hover */}
      <div style={{ overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          className="movie-card-image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x450/1A1A1A/FFD700?text=CINEMEX"
          }}
        />
      </div>

      <div className="movie-card-content">
        <h3 className="movie-card-title">{title}</h3>
        <div className="movie-card-info">
          {genre && <span><IconMovie size={14} color="var(--cinemex-gray-light)" /> {genre}</span>}
          {duration && <span><IconClock size={14} color="var(--cinemex-gray-light)" /> {duration}</span>}
        </div>

        {/* Link - navegación dentro de contenido */}
        {id ? (
          <Link to={`/pelicula/${id}`} className="btn btn-primary">Ver Detalle</Link>
        ) : (
          <Button text="Ver Detalle" onClick={onClick} variant="primary" />
        )}
      </div>
    </div>
  )
}

export default MovieCard
