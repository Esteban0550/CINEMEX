// Importamos componentes
import MovieCard from "../components/MovieCard";

function Cartelera({ cambiarVista }) {
  // Array de películas en cartelera (mínimo 4)
  const peliculas = [
    {
      id: 1,
      title: "Avatar: Fuego y Cenizas",
      image: "https://m.media-amazon.com/images/M/MV5BMDk2NjI5NzMtNDYxMS00MWQzLThhMGUtYzVhNmI1NjcxMzAzXkEyXkFqcGc@._V1_.jpg",
      genre: "Ciencia Ficción",
      duration: "3h 15min",
      rating: "B"
    },
    {
      id: 2,
      title: "Capitán América: Brave New World",
      image: "https://m.media-amazon.com/images/M/MV5BMmEyYjU4NDMtNmMyMy00OTg0LTg5MTUtNDhhYzYxYWUyNjFmXkEyXkFqcGc@._V1_.jpg",
      genre: "Acción",
      duration: "2h 30min",
      rating: "B"
    },
    {
      id: 3,
      title: "¡Ayuda!",
      image: "https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg",
      genre: "Animación",
      duration: "1h 42min",
      rating: "AA"
    },
    {
      id: 4,
      title: "Arco",
      image: "https://es.web.img3.acsta.net/img/b6/ec/b6ec25d93afc9a2f5b93a6ce4dc42a5e.jpg",
      genre: "Drama",
      duration: "2h 10min",
      rating: "B15"
    },
    {
      id: 5,
      title: "Paddington en Perú",
      image: "https://m.media-amazon.com/images/M/MV5BMjJkZjJhNjgtYjczYi00NWEyLWE5NTMtZTlhNjBhMDUxODM5XkEyXkFqcGc@._V1_.jpg",
      genre: "Comedia Familiar",
      duration: "1h 46min",
      rating: "AA"
    },
    {
      id: 6,
      title: "Presence",
      image: "https://m.media-amazon.com/images/M/MV5BYzAxYjUyYzMtZjMwMy00Y2U1LTkwYmItMWYzYjQxMmVhMGE0XkEyXkFqcGc@._V1_.jpg",
      genre: "Terror",
      duration: "1h 25min",
      rating: "B15"
    },
    {
      id: 7,
      title: "Dog Man",
      image: "https://m.media-amazon.com/images/M/MV5BZmNjYTI5MmYtMmQ3Mi00MGUyLWFkN2MtYmRlY2ZlODJhNmE0XkEyXkFqcGc@._V1_.jpg",
      genre: "Animación",
      duration: "1h 35min",
      rating: "AA"
    },
    {
      id: 8,
      title: "Sonic 3: La Película",
      image: "https://m.media-amazon.com/images/M/MV5BNjhjNjYwNjMtNWM4NC00ZWIyLWE4NTAtMjdkYjZhM2NhYWM4XkEyXkFqcGc@._V1_.jpg",
      genre: "Acción/Aventura",
      duration: "1h 50min",
      rating: "A"
    }
  ];

  return (
    <main className="page-container">
      {/* Título de la sección */}
      <h1 className="section-title">🎬 Cartelera</h1>
      <p style={{ color: "var(--cinemex-gray)", marginBottom: "24px" }}>
        Descubre todas las películas disponibles en nuestras salas
      </p>

      {/* Filtros (decorativos) */}
      <div style={{ 
        display: "flex", 
        gap: "12px", 
        marginBottom: "24px",
        flexWrap: "wrap"
      }}>
        <span style={{
          background: "var(--cinemex-red)",
          color: "white",
          padding: "8px 20px",
          borderRadius: "25px",
          fontSize: "0.9rem",
          fontWeight: "600",
          cursor: "pointer"
        }}>
          Todas
        </span>
        <span style={{
          background: "var(--cinemex-cream)",
          color: "var(--cinemex-gray)",
          padding: "8px 20px",
          borderRadius: "25px",
          fontSize: "0.9rem",
          fontWeight: "600",
          cursor: "pointer",
          border: "1px solid var(--cinemex-gray-light)"
        }}>
          Acción
        </span>
        <span style={{
          background: "var(--cinemex-cream)",
          color: "var(--cinemex-gray)",
          padding: "8px 20px",
          borderRadius: "25px",
          fontSize: "0.9rem",
          fontWeight: "600",
          cursor: "pointer",
          border: "1px solid var(--cinemex-gray-light)"
        }}>
          Animación
        </span>
        <span style={{
          background: "var(--cinemex-cream)",
          color: "var(--cinemex-gray)",
          padding: "8px 20px",
          borderRadius: "25px",
          fontSize: "0.9rem",
          fontWeight: "600",
          cursor: "pointer",
          border: "1px solid var(--cinemex-gray-light)"
        }}>
          Terror
        </span>
      </div>

      {/* Grid de películas */}
      <div className="cards-grid">
        {peliculas.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            title={pelicula.title}
            image={pelicula.image}
            genre={pelicula.genre}
            duration={pelicula.duration}
            rating={pelicula.rating}
            onVerDetalle={() => cambiarVista("detalle")}
          />
        ))}
      </div>
    </main>
  );
}

// Exportamos la vista
export default Cartelera;
