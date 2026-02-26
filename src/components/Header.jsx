/**
 * ========================================
 * COMPONENTE HEADER - Navegación Principal
 * ========================================
 * 
 * Barra de navegación superior de la aplicación.
 * Permite cambiar entre las diferentes vistas/páginas.
 * 
 * Props:
 * - cambiarVista: función para cambiar la vista actual
 * - vistaActual: string que indica qué vista está activa
 * - cantidadCarrito: número de items en el carrito
 * - cantidadFavoritos: número de películas favoritas
 */

// Importamos los iconos SVG personalizados
import { IconHeartFilled, IconCart } from "./Icons";

function Header({ cambiarVista, vistaActual, cantidadCarrito = 0, cantidadFavoritos = 0 }) {
  return (
    <header className="header">
      {/* ========================================
          CONTENEDOR PRINCIPAL DEL HEADER
          Centra el contenido y aplica padding
          ======================================== */}
      <div className="header-container">
        
        {/* ========================================
            LOGO DE CINEMEX
            Al hacer click, regresa a la página de inicio
            ======================================== */}
        <div 
          className="header-logo"
          onClick={() => cambiarVista("home")}
        >
          {/* Icono SVG de claqueta de cine */}
          <svg className="header-logo-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
          </svg>
          CINEMEX
        </div>

        {/* ========================================
            NAVEGACIÓN PRINCIPAL
            Enlaces para cambiar entre secciones
            ======================================== */}
        <nav className="header-nav">
          
          {/* Enlace: Inicio */}
          <span
            className={`nav-link ${vistaActual === "home" ? "active" : ""}`}
            onClick={() => cambiarVista("home")}
          >
            Inicio
          </span>

          {/* Enlace: Cartelera (incluye badge de favoritos) */}
          <span
            className={`nav-link ${vistaActual === "cartelera" ? "active" : ""}`}
            onClick={() => cambiarVista("cartelera")}
          >
            Cartelera
            {/* Badge de favoritos: se muestra solo si hay favoritos */}
            {cantidadFavoritos > 0 && (
              <span className="nav-badge nav-badge-favoritos">
                <IconHeartFilled size={12} color="white" /> {cantidadFavoritos}
              </span>
            )}
          </span>

          {/* Enlace: Alimentos (incluye badge de carrito) */}
          <span
            className={`nav-link ${vistaActual === "alimentos" ? "active" : ""}`}
            onClick={() => cambiarVista("alimentos")}
          >
            Alimentos
            {/* Badge de carrito: se muestra solo si hay productos */}
            {cantidadCarrito > 0 && (
              <span className="nav-badge">
                <IconCart size={12} /> {cantidadCarrito}
              </span>
            )}
          </span>

          {/* Enlace: Otros */}
          <span
            className={`nav-link ${vistaActual === "otros" ? "active" : ""}`}
            onClick={() => cambiarVista("otros")}
          >
            Otros
          </span>
        </nav>
      </div>
    </header>
  )
}

export default Header
