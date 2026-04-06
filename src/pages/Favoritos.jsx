// ruta: /favoritos
import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import PageWrapper from "../components/PageWrapper"
import { IconHeartFilled } from "../components/Icons"

function Favoritos({ favoritos = [], toggleFavorito }) {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <h1 className="section-title">
        <IconHeartFilled size={28} color="var(--cinemex-red)" /> Mis Favoritos
      </h1>
      <p style={{ color: "var(--cinemex-gray)", marginBottom: "24px" }}>
        Películas marcadas como favoritas.
      </p>

      {favoritos.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <h3>Aún no tienes películas favoritas</h3>
          <p>Marca películas con el corazón desde Inicio o Cartelera.</p>
        </div>
      ) : (
        <div className="cards-grid">
          {favoritos.map((pelicula) => (
            <MovieCard
              key={`fav-page-${pelicula.id}`}
              id={pelicula.id}
              title={pelicula.titulo}
              image={pelicula.imagen}
              genre={pelicula.genero}
              duration={pelicula.duracion}
              rating={pelicula.clasificacion}
              esFavorito={true}
              onToggleFavorito={() => toggleFavorito(pelicula)}
              onClick={() => navigate(`/pelicula/${pelicula.id}`)}
            />
          ))}
        </div>
      )}
    </PageWrapper>
  )
}

export default Favoritos
