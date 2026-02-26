/**
 * ========================================
 * PÁGINA CARTELERA - Listado de películas
 * ========================================
 * 
 * Muestra todas las películas disponibles con sistema de filtros.
 * Incluye filtrado por género y búsqueda por texto.
 * 
 * FLUJO DE DATOS (EVENTO → ESTADO → RE-RENDERIZADO):
 * 1. EVENTO: useEffect se dispara al montar → fetch de datos
 * 2. ESTADO: setPeliculas actualiza el estado con los datos
 * 3. RE-RENDERIZADO: El componente se re-renderiza mostrando las películas
 * 
 * Para los filtros:
 * 1. EVENTO: Usuario hace click en un género (onClick)
 * 2. ESTADO: setGeneroSeleccionado actualiza el filtro activo
 * 3. RE-RENDERIZADO: peliculasFiltradas cambia → nueva UI
 * 
 * Props:
 * - verDetalle: función para navegar al detalle de una película
 * - favoritos: array con las películas favoritas del usuario
 * - toggleFavorito: función para agregar/quitar de favoritos
 */

import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { IconMovie, IconSearch, IconHeartFilled } from "../components/Icons";

function Cartelera({ verDetalle, favoritos = [], toggleFavorito }) {
  
  // ========================================
  // DECLARACIÓN DE ESTADOS
  // ========================================
  
  // Estado para almacenar las películas cargadas desde el JSON
  const [peliculas, setPeliculas] = useState([])
  
  // Estado booleano para indicar el estado de carga
  const [cargando, setCargando] = useState(true)
  
  // Estado para el género seleccionado en el filtro
  const [generoSeleccionado, setGeneroSeleccionado] = useState("Todos")
  
  // Estado para el texto de búsqueda
  const [busqueda, setBusqueda] = useState("")

  // ========================================
  // useEffect - CARGA INICIAL DE DATOS
  // ========================================
  useEffect(() => {
    /**
     * Función asíncrona para obtener las películas
     * Simula una llamada a una API externa
     */
    async function fetchPeliculas() {
      try {
        // Import dinámico del JSON (simula fetch de API)
        const response = await import("../data/peliculas.json");
        setPeliculas(response.default);
        setCargando(false);
      } catch (error) {
        console.error("Error cargando cartelera:", error);
        setCargando(false);
      }
    }
    
    fetchPeliculas();
  }, []); // Solo se ejecuta al montar el componente

  // ========================================
  // EXTRACCIÓN DE GÉNEROS ÚNICOS
  // ========================================
  // Usamos Set para eliminar duplicados y spread para convertir a array
  const generos = ["Todos", ...new Set(peliculas.map(p => p.genero))];

  // ========================================
  // FILTRADO DE PELÍCULAS
  // ========================================
  // Aplicamos filtro por género Y por búsqueda de texto
  const peliculasFiltradas = peliculas.filter(pelicula => {
    const coincideGenero = generoSeleccionado === "Todos" || pelicula.genero === generoSeleccionado;
    const coincideBusqueda = pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase());
    return coincideGenero && coincideBusqueda;
  });

  /**
   * Verifica si una película está en la lista de favoritos
   * @param {number} id - ID de la película
   * @returns {boolean}
   */
  const esFavorito = (id) => favoritos.some(fav => fav.id === id);

  // ========================================
  // RENDERIZADO CONDICIONAL - CARGA
  // ========================================
  if (cargando) {
    return (
      <div className="page-container" style={{ textAlign: "center", paddingTop: "60px" }}>
        <h2>Cargando cartelera...</h2>
      </div>
    );
  }

  // ========================================
  // RENDERIZADO PRINCIPAL
  // ========================================
  return (
    <div className="page-container">
      
      {/* ========================================
          ENCABEZADO DE LA PÁGINA
          ======================================== */}
      <h1 className="section-title">
        <IconMovie size={28} color="var(--cinemex-red)" /> Cartelera
      </h1>
      <p style={{ color: "var(--cinemex-gray)", marginBottom: "24px" }}>
        Todas las películas disponibles en nuestras salas
      </p>

      {/* ========================================
          SECCIÓN DE FILTROS
          Incluye filtros por género y búsqueda
          ======================================== */}
      <div style={{ marginBottom: "32px" }}>
        
        {/* Filtros por género - Botones con onClick */}
        <div style={{ marginBottom: "16px" }}>
          <h3 style={{ marginBottom: "12px", fontSize: "1rem" }}>Filtrar por género:</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {generos.map((genero) => (
              <button
                key={genero}
                onClick={() => setGeneroSeleccionado(genero)}
                className={`btn ${generoSeleccionado === genero ? "btn-primary" : "btn-secondary"}`}
                style={{ padding: "8px 16px", fontSize: "0.85rem" }}
              >
                {genero}
              </button>
            ))}
          </div>
        </div>

        {/* Campo de búsqueda con icono SVG */}
        <div style={{ position: "relative", display: "inline-block", width: "100%", maxWidth: "400px" }}>
          <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }}>
            <IconSearch size={20} color="var(--cinemex-gray-light)" />
          </span>
          <input
            type="text"
            placeholder="Buscar en cartelera..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 20px 12px 48px",
              borderRadius: "25px",
              border: "2px solid var(--cinemex-gray-light)",
              fontSize: "1rem"
            }}
          />
        </div>
      </div>

      {/* ========================================
          INFORMACIÓN DE RESULTADOS
          Muestra cuántas películas coinciden con los filtros
          ======================================== */}
      <div style={{ marginBottom: "20px", color: "var(--cinemex-gray)" }}>
        <p>
          Mostrando <strong>{peliculasFiltradas.length}</strong> película(s)
          {generoSeleccionado !== "Todos" && ` de género "${generoSeleccionado}"`}
          {busqueda && ` que contienen "${busqueda}"`}
        </p>
      </div>

      {/* ========================================
          GRID DE PELÍCULAS
          Renderizado dinámico basado en el estado
          ======================================== */}
      <div className="cards-grid">
        {peliculasFiltradas.length > 0 ? (
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
              onVerDetalle={() => verDetalle(pelicula)}
            />
          ))
        ) : (
          // Mensaje cuando no hay resultados con botón para limpiar
          <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px" }}>
            <h3>No hay películas que coincidan</h3>
            <p>Prueba con otros filtros</p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setGeneroSeleccionado("Todos");
                setBusqueda("");
              }}
              style={{ marginTop: "16px" }}
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      {/* ========================================
          SECCIÓN DE FAVORITOS
          Se muestra solo si el usuario tiene favoritos
          ======================================== */}
      {favoritos.length > 0 && (
        <section style={{ marginTop: "48px" }}>
          <h2 className="section-subtitle">
            <IconHeartFilled size={24} color="var(--cinemex-red)" /> Tus Películas Favoritas ({favoritos.length})
          </h2>
          <div className="cards-grid">
            {favoritos.map((pelicula) => (
              <MovieCard
                key={`fav-${pelicula.id}`}
                title={pelicula.titulo}
                image={pelicula.imagen}
                genre={pelicula.genero}
                duration={pelicula.duracion}
                rating={pelicula.clasificacion}
                esFavorito={true}
                onToggleFavorito={() => toggleFavorito(pelicula)}
                onVerDetalle={() => verDetalle(pelicula)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Cartelera;
