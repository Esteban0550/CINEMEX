import './App.css'
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

// Importar las vistas que mostraremos según la navegación
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"
import Favoritos from "./pages/Favoritos"
import Terminos from "./pages/Terminos"
import Privacidad from "./pages/Privacidad"

function App() {
  // ESTADO NUEVO #1: Carrito de alimentos (manejo de arreglo en estado)
  const [carrito, setCarrito] = useState([])

  // ESTADO NUEVO #2: Películas favoritas (manejo de arreglo en estado)
  const [favoritos, setFavoritos] = useState([])

  // Función para agregar al carrito (sin mutación directa - usamos spread operator)
  function agregarAlCarrito(producto) {
    // Verificamos si ya existe en el carrito
    const existente = carrito.find(item => item.id === producto.id)
    
    if (existente) {
      // Si existe, incrementamos la cantidad (sin mutar el estado directamente)
      setCarrito(carrito.map(item => 
        item.id === producto.id 
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ))
    } else {
      // Si no existe, lo agregamos con cantidad 1 (usando spread operator)
      setCarrito([...carrito, { ...producto, cantidad: 1 }])
    }
  }

  // Función para eliminar del carrito
  function eliminarDelCarrito(productoId) {
    setCarrito(carrito.filter(item => item.id !== productoId))
  }

  // Función para agregar/quitar de favoritos (toggle)
  function toggleFavorito(pelicula) {
    const esFavorito = favoritos.some(fav => fav.id === pelicula.id)
    
    if (esFavorito) {
      // Quitamos de favoritos (filter sin mutar el array original)
      setFavoritos(favoritos.filter(fav => fav.id !== pelicula.id))
    } else {
      // Agregamos a favoritos (spread operator para no mutar)
      setFavoritos([...favoritos, pelicula])
    }
  }

  // Calcular total del carrito
  const totalCarrito = carrito.reduce((acc, item) => acc + (item.price * item.cantidad), 0)

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header con información del carrito y favoritos */}
      <Header 
        cantidadCarrito={carrito.length}
        cantidadFavoritos={favoritos.length}
      />

      {/* Contenido principal con flex-grow para empujar el footer */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                favoritos={favoritos}
                toggleFavorito={toggleFavorito}
              />
            } 
          />
          
          <Route 
            path="/cartelera" 
            element={
              <Cartelera 
                favoritos={favoritos}
                toggleFavorito={toggleFavorito}
              />
            } 
          />
          
          <Route 
            path="/pelicula/:id" 
            element={
              <Detalle 
                favoritos={favoritos}
                toggleFavorito={toggleFavorito}
              />
            } 
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
          
          <Route 
            path="/otros" 
            element={<Otros />} 
          />

          <Route
            path="/favoritos"
            element={
              <Favoritos
                favoritos={favoritos}
                toggleFavorito={toggleFavorito}
              />
            }
          />

          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
        </Routes>
      </main>

      {/* Footer siempre visible */}
      <Footer />
    </div>
  )
}

export default App
