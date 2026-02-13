// Importamos componentes
import Button from "../components/Button";

function Detalle({ cambiarVista }) {
  // Datos de ejemplo de la película
  const pelicula = {
    title: "Avatar: Fuego y Cenizas",
    image: "https://m.media-amazon.com/images/M/MV5BMDk2NjI5NzMtNDYxMS00MWQzLThhMGUtYzVhNmI1NjcxMzAzXkEyXkFqcGc@._V1_.jpg",
    genre: "Ciencia Ficción / Aventura",
    duration: "3h 15min",
    rating: "B",
    director: "James Cameron",
    cast: "Sam Worthington, Zoe Saldaña, Sigourney Weaver",
    synopsis: "Jake Sully y Neytiri han formado una familia y hacen todo lo posible por permanecer juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora cuando una antigua amenaza reaparece con más fuerza que nunca."
  };

  return (
    <main className="page-container">
      {/* Botón de regreso */}
      <div style={{ marginBottom: "24px" }}>
        <Button 
          text="← Volver a Cartelera" 
          onClick={() => cambiarVista("cartelera")} 
          variant="secondary"
        />
      </div>

      {/* Contenedor de detalle */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "40px",
        alignItems: "start"
      }} className="detalle-container">
        {/* Imagen de la película */}
        <div>
          <img
            src={pelicula.image}
            alt={pelicula.title}
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x600/1A1A1A/FFD700?text=CINEMEX";
            }}
          />
        </div>

        {/* Información de la película */}
        <div>
          {/* Badge de clasificación */}
          <span style={{
            display: "inline-block",
            background: "var(--cinemex-gold)",
            color: "var(--cinemex-black)",
            padding: "4px 16px",
            borderRadius: "20px",
            fontSize: "0.85rem",
            fontWeight: "700",
            marginBottom: "16px"
          }}>
            {pelicula.rating}
          </span>

          <h1 style={{ 
            fontSize: "2.5rem", 
            color: "var(--cinemex-black)",
            marginBottom: "16px"
          }}>
            {pelicula.title}
          </h1>

          {/* Información rápida */}
          <div style={{ 
            display: "flex", 
            gap: "20px", 
            marginBottom: "24px",
            flexWrap: "wrap"
          }}>
            <span style={{ 
              color: "var(--cinemex-gray)",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}>
              🎬 {pelicula.genre}
            </span>
            <span style={{ 
              color: "var(--cinemex-gray)",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}>
              ⏱️ {pelicula.duration}
            </span>
          </div>

          {/* Sinopsis */}
          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ 
              color: "var(--cinemex-black)", 
              marginBottom: "12px",
              fontSize: "1.2rem"
            }}>
              Sinopsis
            </h3>
            <p style={{ 
              color: "var(--cinemex-gray)", 
              lineHeight: "1.8",
              fontSize: "1rem"
            }}>
              {pelicula.synopsis}
            </p>
          </div>

          {/* Director y elenco */}
          <div style={{ marginBottom: "32px" }}>
            <p style={{ marginBottom: "8px" }}>
              <strong style={{ color: "var(--cinemex-black)" }}>Director:</strong>{" "}
              <span style={{ color: "var(--cinemex-gray)" }}>{pelicula.director}</span>
            </p>
            <p>
              <strong style={{ color: "var(--cinemex-black)" }}>Elenco:</strong>{" "}
              <span style={{ color: "var(--cinemex-gray)" }}>{pelicula.cast}</span>
            </p>
          </div>

          {/* Botones de acción */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button 
              text="Comprar Boletos" 
              variant="primary"
              onClick={() => alert("Redirigiendo a compra de boletos...")}
            />
            <Button 
              text="Ver Horarios" 
              variant="secondary"
              onClick={() => alert("Mostrando horarios disponibles...")}
            />
          </div>
        </div>
      </div>

      {/* Estilos responsivos inline */}
      <style>{`
        @media (max-width: 768px) {
          .detalle-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

// Exportamos la vista
export default Detalle;
