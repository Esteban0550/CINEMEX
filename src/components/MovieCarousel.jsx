import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MovieCarousel({ movies = [] }) {
  const navigate = useNavigate();

  if (!movies.length) {
    return null;
  }

  return (
    <section className="carousel-section">
      <h2 className="section-title">ESTRENOS</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        className="movie-carousel"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <article
              className="movie-hero-slide"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.25) 70%), url(${movie.imagen})`
              }}
            >
              <div className="movie-hero-content">
                <span className="movie-hero-badge">Destacada de la semana</span>
                <h3>{movie.titulo}</h3>
                <p>{movie.descripcion}</p>
                <div className="movie-hero-actions">
                  <Button text="Comprar boletos" variant="primary" onClick={() => navigate("/cartelera")} />
                  <Button
                    text="Ver detalle"
                    variant="secondary"
                    onClick={() => navigate(`/pelicula/${movie.id}`)}
                  />
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default MovieCarousel;
