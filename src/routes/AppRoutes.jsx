import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Cartelera from "../pages/Cartelera"
import Detalle from "../pages/Detalle"
import Alimentos from "../pages/Alimentos"
import Otros from "../pages/Otros"
import Favoritos from "../pages/Favoritos"
import Terminos from "../pages/Terminos"
import Privacidad from "../pages/Privacidad"

function AppRoutes({
  favoritos,
  toggleFavorito,
  agregarAlCarrito,
  carrito,
  eliminarDelCarrito,
  totalCarrito,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home favoritos={favoritos} toggleFavorito={toggleFavorito} />}
      />
      <Route
        path="/cartelera"
        element={<Cartelera favoritos={favoritos} toggleFavorito={toggleFavorito} />}
      />
      <Route
        path="/pelicula/:id"
        element={<Detalle favoritos={favoritos} toggleFavorito={toggleFavorito} />}
      />
      <Route
        path="/alimentos"
        element={
          <Alimentos
            agregarAlCarrito={agregarAlCarrito}
            carrito={carrito}
            eliminarDelCarrito={eliminarDelCarrito}
            totalCarrito={totalCarrito}
          />
        }
      />
      <Route path="/otros" element={<Otros />} />
      <Route
        path="/favoritos"
        element={<Favoritos favoritos={favoritos} toggleFavorito={toggleFavorito} />}
      />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/privacidad" element={<Privacidad />} />
    </Routes>
  )
}

export default AppRoutes
