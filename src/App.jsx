import './App.css'
import { useState } from "react"

// Componentes
import Header from "./components/Header"
import Footer from "./components/Footer"

// Vistas/Páginas
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"

function App() {
  // Estado que controla qué vista se muestra
  const [vistaActual, setVistaActual] = useState("home")

  return (
    <>
      {/* Contenedor raíz de la aplicación */}
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Header con navegación - recibe vista actual para resaltar enlace activo */}
        <Header 
          cambiarVista={setVistaActual} 
          vistaActual={vistaActual}
        />

        {/* Contenido principal - Renderizado condicional de vistas */}
        <div style={{ flex: 1 }}>
          {vistaActual === "home" && <Home cambiarVista={setVistaActual} />}
          {vistaActual === "cartelera" && <Cartelera cambiarVista={setVistaActual} />}
          {vistaActual === "detalle" && <Detalle cambiarVista={setVistaActual} />}
          {vistaActual === "alimentos" && <Alimentos />}
          {vistaActual === "otros" && <Otros />}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

// Exportamos App
export default App
