import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import { IconHeartFilled } from "../components/Icons"

function Favoritos({ favoritos = [], toggleFavorito }) {
  const navigate = useNavigate()

  return (
    <div className="page-container">
      <h1 className="section-title">
        <IconHeartFilled size={28} color="var(--cinemex-red)" /> Mis Favoritos
      </h1>
      <p style={{ color: "var(--cinemex-gray)", marginBottom: "24px" }}>
        Esta es la vista adicional del proyecto. Aqui se concentran todas las peliculas marcadas como favoritas.
      </p>

      {favoritos.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <h3>Aun no tienes peliculas favoritas</h3>
          <p>Marca peliculas con el icono de corazon desde Inicio o Cartelera.</p>
        </div>
      ) : (
        <div className="cards-grid">
          {favoritos.map((pelicula) => (
            <MovieCard
              key={`fav-page-${pelicula.id}`}
              title={pelicula.titulo}
              image={pelicula.imagen}
              genre={pelicula.genero}
              duration={pelicula.duracion}
              rating={pelicula.clasificacion}
              esFavorito={true}
              onToggleFavorito={() => toggleFavorito(pelicula)}
              onVerDetalle={() => navigate(`/pelicula/${pelicula.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favoritos
