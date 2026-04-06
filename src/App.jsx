import './App.css'
import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRoutes from "./routes/AppRoutes"

function App() {
  const [carrito, setCarrito] = useState([])
  const [favoritos, setFavoritos] = useState([])

  function agregarAlCarrito(producto) {
    setCarrito((actual) => {
      const existente = actual.find((item) => item.id === producto.id)
      if (existente) {
        return actual.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      }
      return [...actual, { ...producto, cantidad: 1 }]
    })
  }

  function eliminarDelCarrito(productoId) {
    setCarrito((actual) => actual.filter((item) => item.id !== productoId))
  }

  function toggleFavorito(pelicula) {
    setFavoritos((actual) => {
      const esFavorito = actual.some((fav) => fav.id === pelicula.id)
      return esFavorito
        ? actual.filter((fav) => fav.id !== pelicula.id)
        : [...actual, pelicula]
    })
  }

  const totalCarrito = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0)

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* reutilizable - header en todas las páginas */}
      <Header cantidadCarrito={carrito.length} cantidadFavoritos={favoritos.length} />

      <main style={{ flex: 1 }}>
        <AppRoutes
          favoritos={favoritos}
          toggleFavorito={toggleFavorito}
          agregarAlCarrito={agregarAlCarrito}
          carrito={carrito}
          eliminarDelCarrito={eliminarDelCarrito}
          totalCarrito={totalCarrito}
        />
      </main>

      {/* reutilizable - footer en todas las páginas */}
      <Footer />
    </div>
  )
}

export default App
