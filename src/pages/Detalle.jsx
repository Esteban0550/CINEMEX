// ruta: /pelicula/:id - detalle de película
import { useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import PageWrapper from "../components/PageWrapper"
import { peliculas } from "../data"
import {
  IconHeartFilled,
  IconHeartOutline,
  IconMovie,
  IconClock,
  IconTicket
} from "../components/Icons"

function Detalle({ favoritos = [], toggleFavorito }) {
  const { id } = useParams()
  const peliculaId = Number(id)
  const pelicula = useMemo(
    () => peliculas.find((item) => item.id === peliculaId),
    [peliculaId]
  )

  const esFavorito = pelicula ? favoritos.some((fav) => fav.id === pelicula.id) : false

  if (!pelicula) {
    return (
      <PageWrapper>
        <div style={{ textAlign: "center", paddingTop: "60px" }}>
          <h2>Película no encontrada</h2>
          <p>La película que buscas no existe.</p>
          <Link to="/peliculas" className="btn btn-primary" style={{ marginTop: "20px", display: "inline-block" }}>
            Ver Cartelera
          </Link>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <div className="detalle-layout">
        {/* columna imagen */}
        <div className="detalle-poster-col">
          <div style={{ position: "relative" }}>
            <img
              src={pelicula.imagen}
              alt={pelicula.titulo}
              className="detalle-poster"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x450/1A1A1A/FFD700?text=CINEMEX"
              }}
            />
            {/* evento onClick - toggle favorito */}
            {toggleFavorito && (
              <button
                onClick={() => toggleFavorito(pelicula)}
                className="detalle-fav-btn"
                title={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
              >
                {esFavorito
                  ? <IconHeartFilled size={24} color="white" />
                  : <IconHeartOutline size={24} color="var(--cinemex-red)" />
                }
              </button>
            )}
          </div>
        </div>

        {/* columna info */}
        <div className="detalle-info-col">
          <h1>{pelicula.titulo}</h1>

          <div className="detalle-tags">
            {pelicula.genero && (
              <span className="detalle-tag">
                <IconMovie size={14} /> {pelicula.genero}
              </span>
            )}
            {pelicula.duracion && (
              <span className="detalle-tag">
                <IconClock size={14} /> {pelicula.duracion}
              </span>
            )}
            {pelicula.clasificacion && (
              <span className="detalle-tag">{pelicula.clasificacion}</span>
            )}
          </div>

          <p className="detalle-descripcion">{pelicula.descripcion}</p>

          <div className="detalle-precio">
            <IconTicket size={20} color="var(--cinemex-red)" />
            <span>Boleto desde <strong>${pelicula.precio || 85}.00</strong></span>
          </div>

          {/* Link - navegación a /comprar con datos de película */}
          <Link
            to="/comprar"
            state={{ pelicula }}
            className="btn btn-primary btn-full"
            style={{ display: "block", textAlign: "center", marginTop: "24px" }}
          >
            Comprar Boletos
          </Link>

          <Link
            to="/peliculas"
            className="btn btn-secondary"
            style={{ display: "inline-block", marginTop: "12px" }}
          >
            Volver a Cartelera
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Detalle
