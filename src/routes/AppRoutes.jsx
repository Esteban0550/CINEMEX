// ruta principal - configuración de rutas
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Cartelera from "../pages/Cartelera"
import Detalle from "../pages/Detalle"
import Alimentos from "../pages/Alimentos"
import ComprarPage from "../pages/ComprarPage"
import ContactoPage from "../pages/ContactoPage"
import NotFoundPage from "../pages/NotFoundPage"
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
      <Route path="/" element={<Home favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
      <Route path="/peliculas" element={<Cartelera favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
      <Route path="/pelicula/:id" element={<Detalle favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
      <Route path="/comida" element={<Alimentos agregarAlCarrito={agregarAlCarrito} carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} totalCarrito={totalCarrito} />} />
      <Route path="/comprar" element={<ComprarPage />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="/favoritos" element={<Favoritos favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
      <Route path="/otros" element={<Otros />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/privacidad" element={<Privacidad />} />
      {/* ruta 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
