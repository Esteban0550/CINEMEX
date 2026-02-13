// Importamos componentes
import MovieCard from "../components/MovieCard";
import Button from "../components/Button";

function Home({ cambiarVista }) {
  // Películas destacadas para el Home
  const peliculasDestacadas = [
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
      title: "¡Ayuda!",
      image: "https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg",
      genre: "Animación",
      duration: "1h 42min",
      rating: "AA"
    },
    {
      id: 3,
      title: "Arco",
      image: "https://es.web.img3.acsta.net/img/b6/ec/b6ec25d93afc9a2f5b93a6ce4dc42a5e.jpg",
      genre: "Drama",
      duration: "2h 10min",
      rating: "B15"
    },
    {
      id: 4,
      title: "Capitán América: Brave New World",
      image: "https://m.media-amazon.com/images/M/MV5BMmEyYjU4NDMtNmMyMy00OTg0LTg5MTUtNDhhYzYxYWUyNjFmXkEyXkFqcGc@._V1_.jpg",
      genre: "Acción",
      duration: "2h 30min",
      rating: "B"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Bienvenido a <span>CINEMEX</span>
        </h1>
        <p className="hero-subtitle">
          Vive la mejor experiencia cinematográfica con la tecnología más avanzada
        </p>
        <Button 
          text="Ver Cartelera" 
          onClick={() => cambiarVista("cartelera")} 
          variant="gold"
        />
      </section>

      {/* Contenido Principal */}
      <main className="page-container">
        {/* Películas en Estreno */}
        <section>
          <h2 className="section-title">🎬 Estrenos Destacados</h2>
          
          <div className="cards-grid">
            {peliculasDestacadas.map((pelicula) => (
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
        </section>

        {/* Banner Promocional */}
        <section className="banner">
          <h3 className="banner-title">🍿 Miércoles de Palomitas</h3>
          <p className="banner-text">
            Todos los miércoles disfruta de palomitas grandes al 2x1. ¡No te lo pierdas!
          </p>
          <Button 
            text="Ver Promociones" 
            onClick={() => cambiarVista("otros")} 
            variant="secondary"
          />
        </section>

        {/* Accesos Rápidos */}
        <section style={{ marginTop: "40px" }}>
          <h2 className="section-title">📍 Descubre Más</h2>
          
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
              gap: "20px",
              marginTop: "24px"
            }}
          >
            {/* Cartelera */}
            <div 
              onClick={() => cambiarVista("cartelera")}
              style={{
                background: "linear-gradient(135deg, #E41C23 0%, #B91620 100%)",
                borderRadius: "16px",
                padding: "30px 20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                color: "white"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <span style={{ fontSize: "2.5rem" }}>🎬</span>
              <h4 style={{ color: "white", marginTop: "12px" }}>Cartelera</h4>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                Todas las películas en cartelera
              </p>
            </div>

            {/* Alimentos */}
            <div 
              onClick={() => cambiarVista("alimentos")}
              style={{
                background: "linear-gradient(135deg, #FFD700 0%, #F5A623 100%)",
                borderRadius: "16px",
                padding: "30px 20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                color: "#1A1A1A"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <span style={{ fontSize: "2.5rem" }}>🍿</span>
              <h4 style={{ color: "#1A1A1A", marginTop: "12px" }}>Alimentos</h4>
              <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "0.9rem" }}>
                Snacks, bebidas y combos
              </p>
            </div>

            {/* Promociones */}
            <div 
              onClick={() => cambiarVista("otros")}
              style={{
                background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",
                borderRadius: "16px",
                padding: "30px 20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                color: "white"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <span style={{ fontSize: "2.5rem" }}>⭐</span>
              <h4 style={{ color: "white", marginTop: "12px" }}>Promociones</h4>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
                Ofertas y membresías
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Exportamos la vista
export default Home;
