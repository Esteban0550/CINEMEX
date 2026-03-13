/**
 * ========================================
 * COMPONENTE HEADER - Navegación Principal
 * ========================================
 * 
 * Barra de navegación superior de la aplicación.
 * Permite cambiar entre las diferentes vistas/páginas usando React Router.
 * 
 * Props:
 * - cantidadCarrito: número de items en el carrito
 * - cantidadFavoritos: número de películas favoritas
 */

// Importamos los iconos SVG personalizados
import { IconHeartFilled, IconCart } from "./Icons";
import { NavLink } from "react-router-dom";

function Header({ cantidadCarrito = 0, cantidadFavoritos = 0 }) {
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
        <NavLink to="/" className="header-logo">
          {/* Icono SVG de claqueta de cine */}
          <svg className="header-logo-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
          </svg>
          CINEMEX
        </NavLink>

        {/* ========================================
            NAVEGACIÓN PRINCIPAL
            Enlaces para cambiar entre secciones
            ======================================== */}
        <nav className="header-nav">
          
          {/* Enlace: Inicio */}
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Inicio
          </NavLink>

          {/* Enlace: Cartelera (incluye badge de favoritos) */}
          <NavLink
            to="/cartelera"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Cartelera
            {/* Badge de favoritos: se muestra solo si hay favoritos */}
            {cantidadFavoritos > 0 && (
              <span className="nav-badge nav-badge-favoritos">
                <IconHeartFilled size={12} color="white" /> {cantidadFavoritos}
              </span>
            )}
          </NavLink>

          {/* Enlace: Alimentos (incluye badge de carrito) */}
          <NavLink
            to="/alimentos"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Alimentos
            {/* Badge de carrito: se muestra solo si hay productos */}
            {cantidadCarrito > 0 && (
              <span className="nav-badge">
                <IconCart size={12} /> {cantidadCarrito}
              </span>
            )}
          </NavLink>

          {/* Enlace: Otros */}
          <NavLink
            to="/otros"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Otros
          </NavLink>

          {/* Enlace: Favoritos */}
          <NavLink
            to="/favoritos"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Favoritos
          </NavLink>

          <NavLink
            to="/terminos"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Terminos
          </NavLink>

          <NavLink
            to="/privacidad"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Privacidad
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
