/**
 * ========================================
 * PÁGINA HOME - Inicio de la aplicación
 * ========================================
 * 
 * Muestra las películas destacadas con funcionalidad de búsqueda.
 * 
 * FLUJO DE DATOS (EVENTO → ESTADO → RE-RENDERIZADO):
 * 1. EVENTO: Al cargar el componente, useEffect se dispara
 * 2. ESTADO: Se actualiza "peliculas" con los datos obtenidos via fetch
 * 3. RE-RENDERIZADO: React detecta el cambio en peliculas y re-renderiza la UI
 * 
 * El mismo flujo aplica para la búsqueda:
 * 1. EVENTO: Usuario escribe en el input (onChange)
 * 2. ESTADO: Se actualiza "busqueda" con el valor del input
 * 3. RE-RENDERIZADO: peliculasFiltradas cambia y se muestra nuevo contenido
 * 
 * Props:
 * - verDetalle: función para navegar a la vista de detalle
 * - favoritos: array de películas marcadas como favoritas
 * - toggleFavorito: función para agregar/quitar de favoritos
 */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { IconMovie, IconSearch } from "../components/Icons";

function Home({ favoritos = [], toggleFavorito }) {
  
  // Hook de navegación de React Router
  const navigate = useNavigate();
  
  // ========================================
  // DECLARACIÓN DE ESTADOS
  // ========================================
  
  // Estado para almacenar las películas cargadas desde JSON
  const [peliculas, setPeliculas] = useState([])
  
  // Estado booleano para indicar si los datos están cargando
  const [cargando, setCargando] = useState(true)
  
  // Estado para el texto de búsqueda ingresado por el usuario
  const [busqueda, setBusqueda] = useState("")

  // ========================================
  // useEffect - CARGA INICIAL DE DATOS
  // ========================================
  // Se ejecuta una sola vez al montar el componente (array de dependencias vacío)
  useEffect(() => {
    /**
     * Función asíncrona para cargar las películas
     * Simula un fetch desde una API externa
     */
    async function cargarPeliculas() {
      try {
        // Importación dinámica del JSON (simula fetch a una API)
        // En producción sería: fetch("https://api.cinemex.com/peliculas")
        const response = await import("../data/peliculas.json");
        
        // Actualizamos el estado con los datos obtenidos
        setPeliculas(response.default);
        setCargando(false);
      } catch (error) {
        console.error("Error al cargar películas:", error);
        setCargando(false);
      }
    }
    
    // Ejecutamos la función asíncrona
    cargarPeliculas();
  }, []); // Array vacío = solo se ejecuta al montar el componente

  // ========================================
  // FILTRADO DE PELÍCULAS
  // ========================================
  // Se recalcula automáticamente cuando cambia "busqueda" o "peliculas"
  const peliculasFiltradas = peliculas.filter(pelicula =>
    pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  /**
   * Función auxiliar para verificar si una película está en favoritos
   * @param {number} peliculaId - ID de la película a verificar
   * @returns {boolean} - true si está en favoritos
   */
  const esFavorito = (peliculaId) => {
    return favoritos.some(fav => fav.id === peliculaId);
  };

  // ========================================
  // RENDERIZADO CONDICIONAL - ESTADO DE CARGA
  // ========================================
  if (cargando) {
    return (
      <div className="page-container" style={{ textAlign: "center", paddingTop: "60px" }}>
        <h2>Cargando películas...</h2>
        <p>Por favor espera un momento</p>
      </div>
    );
  }

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
  );
}

export default Home;
