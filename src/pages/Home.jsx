// ruta: / - página de inicio
import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import MovieCarousel from "../components/MovieCarousel"
import HeroBanner from "../components/HeroBanner"
import PageWrapper from "../components/PageWrapper"
import { IconMovie, IconSearch } from "../components/Icons"
import { peliculas } from "../data"

function Home({ favoritos = [], toggleFavorito }) {
  const navigate = useNavigate()
  const [busqueda, setBusqueda] = useState("")

  const peliculasFiltradas = useMemo(
    () => peliculas.filter((p) => p.titulo.toLowerCase().includes(busqueda.toLowerCase())),
    [busqueda]
  )

  const esFavorito = (peliculaId) => favoritos.some((fav) => fav.id === peliculaId)

  return (
    <div>
      {/* único - hero solo en Home */}
      <HeroBanner
        title="Bienvenido a"
        highlight="CINEMEX"
        subtitle="Descubre las mejores películas y vive la experiencia del cine"
      />

      <PageWrapper>
        <MovieCarousel movies={peliculas} />

        <section>
          <h2 className="section-title">
            <IconMovie size={28} color="var(--cinemex-red)" /> Películas Destacadas
          </h2>

          {/* evento onChange - búsqueda */}
          <div className="search-container" style={{ marginBottom: "24px" }}>
            <div style={{ position: "relative", display: "inline-block", width: "100%", maxWidth: "400px" }}>
              <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }}>
                <IconSearch size={20} color="var(--cinemex-gray-light)" />
              </span>
              <input
                type="text"
                placeholder="Buscar película por título..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="search-input"
                style={{
                  width: "100%",
                  padding: "12px 20px 12px 48px",
                  borderRadius: "25px",
                  border: "2px solid var(--cinemex-gray-light)",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "border-color 0.3s ease"
                }}
              />
            </div>
            {busqueda && (
              <p style={{ marginTop: "8px", color: "var(--cinemex-gray)" }}>
                {peliculasFiltradas.length} resultado(s)
              </p>
            )}
          </div>

          {/* grid - galería de películas */}
          <div className="cards-grid">
            {peliculasFiltradas.length > 0 ? (
              peliculasFiltradas.map((pelicula) => (
                <MovieCard
                  key={pelicula.id}
                  id={pelicula.id}
                  title={pelicula.titulo}
                  image={pelicula.imagen}
                  genre={pelicula.genero}
                  duration={pelicula.duracion}
                  rating={pelicula.clasificacion}
                  esFavorito={esFavorito(pelicula.id)}
                  onToggleFavorito={() => toggleFavorito(pelicula)}
                  onClick={() => navigate(`/pelicula/${pelicula.id}`)}
                />
              ))
            ) : (
              <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px" }}>
                <h3>No se encontraron películas</h3>
                <p>Intenta con otro término de búsqueda</p>
              </div>
            )}
          </div>
        </section>
      </PageWrapper>
    </div>
  )
}

export default Home
