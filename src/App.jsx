import './App.css'
import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

// Importar las vistas que mostraremos según la navegación
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"

function App() {
  // Se declara un estado que controla qué vista se muestra
  const [vistaActual, setVistaActual] = useState("home")

  // Aquí nos permite guardar alguna película seleccionada
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)

  // ESTADO NUEVO #1: Carrito de alimentos (manejo de arreglo en estado)
  const [carrito, setCarrito] = useState([])

  // ESTADO NUEVO #2: Películas favoritas (manejo de arreglo en estado)
  const [favoritos, setFavoritos] = useState([])

  // Función para ir a detalle enviando datos
  function verDetalle(pelicula) {
    setPeliculaSeleccionada(pelicula)
    setVistaActual("detalle")
  }

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
      {/* Header controla navegación principal */}
      <Header 
        cambiarVista={setVistaActual} 
        vistaActual={vistaActual} 
        cantidadCarrito={carrito.length}
        cantidadFavoritos={favoritos.length}
      />

      {/* Contenido principal con flex-grow para empujar el footer */}
      <main style={{ flex: 1 }}>
        {/* Renderizado condicional, el triple "=" es para asegurar que solo se cumpla la condición si es exactamente igual */}
        {vistaActual === "home" && (
          <Home 
            verDetalle={verDetalle} 
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
          />
        )}

        {vistaActual === "cartelera" && (
          <Cartelera 
            verDetalle={verDetalle}
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
          />
        )}

        {vistaActual === "detalle" && (
          <Detalle 
            pelicula={peliculaSeleccionada}
            esFavorito={favoritos.some(fav => fav.id === peliculaSeleccionada?.id)}
            toggleFavorito={toggleFavorito}
          />
        )}

        {vistaActual === "alimentos" && (
          <Alimentos 
            agregarAlCarrito={agregarAlCarrito}
            carrito={carrito}
            eliminarDelCarrito={eliminarDelCarrito}
            totalCarrito={totalCarrito}
          />
        )}

        {vistaActual === "otros" && (
          <Otros />
        )}
      </main>

      {/* Footer siempre visible */}
      <Footer />
    </div>
  )
}

export default App
