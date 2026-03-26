import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieCarousel from "../components/MovieCarousel";
import { IconMovie, IconSearch } from "../components/Icons";
import { peliculas } from "../data";

function Home({ favoritos = [], toggleFavorito }) {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("")

  const peliculasFiltradas = useMemo(
    () =>
      peliculas.filter((pelicula) =>
        pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase()),
      ),
    [busqueda],
  )

  /**
   * Función auxiliar para verificar si una película está en favoritos
   * @param {number} peliculaId - ID de la película a verificar
   * @returns {boolean} - true si está en favoritos
   */
  const esFavorito = (peliculaId) => favoritos.some((fav) => fav.id === peliculaId)

  // ========================================
  // RENDERIZADO PRINCIPAL
  // ========================================
  return (
    <div className="page-container">
      
      {/* ========================================
          SECCIÓN HERO - Bienvenida
          Muestra el mensaje principal de la página
          ======================================== */}
      <section className="hero">
        <h1 className="hero-title">
          Bienvenido a <span>CINEMEX</span>
        </h1>
        <p className="hero-subtitle">
          Descubre las mejores películas y vive la experiencia del cine
        </p>
      </section>

      <MovieCarousel movies={peliculas} />

      {/* ========================================
          SECCIÓN DE PELÍCULAS DESTACADAS
          Incluye búsqueda y grid de tarjetas
          ======================================== */}
      <section>
        {/* Título con icono SVG */}
        <h2 className="section-title">
          <IconMovie size={28} color="var(--cinemex-red)" /> Películas Destacadas
        </h2>
        
        {/* ========================================
            BARRA DE BÚSQUEDA
            Input controlado: el valor viene del estado
            onChange actualiza el estado al escribir
            ======================================== */}
        <div className="search-container" style={{ marginBottom: "24px" }}>
          <div style={{ position: "relative", display: "inline-block", width: "100%", maxWidth: "400px" }}>
            {/* Icono de búsqueda */}
            <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }}>
              <IconSearch size={20} color="var(--cinemex-gray-light)" />
            </span>
            {/* Input de búsqueda */}
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
          
          {/* Contador de resultados - Se muestra solo cuando hay búsqueda */}
          {busqueda && (
            <p style={{ marginTop: "8px", color: "var(--cinemex-gray)" }}>
              {peliculasFiltradas.length} resultado(s) encontrado(s)
            </p>
          )}
        </div>

        {/* ========================================
            GRID DE TARJETAS DE PELÍCULAS
            Renderizado dinámico basado en el estado
            ======================================== */}
        <div className="cards-grid">
          {peliculasFiltradas.length > 0 ? (
            // Mapeamos cada película a una tarjeta
            peliculasFiltradas.map((pelicula) => (
              <MovieCard
                key={pelicula.id}
                title={pelicula.titulo}
                image={pelicula.imagen}
                genre={pelicula.genero}
                duration={pelicula.duracion}
                rating={pelicula.clasificacion}
                esFavorito={esFavorito(pelicula.id)}
                onToggleFavorito={() => toggleFavorito(pelicula)}
                onVerDetalle={() => navigate(`/pelicula/${pelicula.id}`)}
              />
            ))
          ) : (
            // Mensaje cuando no hay resultados
            <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px" }}>
              <h3>No se encontraron películas</h3>
              <p>Intenta con otro término de búsqueda</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home;
