// reutilizable - navegación principal
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { IconHeartFilled, IconCart } from "./Icons"

function Header({
  cantidadCarrito,    // items en carrito
  cantidadFavoritos   // películas favoritas
}) {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="header">
      {/* flex - navbar */}
      <div className="header-container">
        <NavLink to="/" className="header-logo" onClick={() => setMenuAbierto(false)}>
          <svg className="header-logo-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
          </svg>
          CINEMEX
        </NavLink>

        {/* hamburguesa - solo visible en móvil */}
        <button
          className="menu-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Menú"
        >
          <span className={`hamburger ${menuAbierto ? "open" : ""}`}></span>
        </button>

        {/* nav con NavLink - clase active automática */}
        <nav className={`header-nav ${menuAbierto ? "nav-open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMenuAbierto(false)}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/peliculas"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMenuAbierto(false)}
          >
            Películas
            {cantidadFavoritos > 0 && (
              <span className="nav-badge nav-badge-favoritos">
                <IconHeartFilled size={12} color="white" /> {cantidadFavoritos}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/comida"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMenuAbierto(false)}
          >
            Comida
            {cantidadCarrito > 0 && (
              <span className="nav-badge">
                <IconCart size={12} /> {cantidadCarrito}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMenuAbierto(false)}
          >
            Contacto
          </NavLink>

          <NavLink
            to="/favoritos"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMenuAbierto(false)}
          >
            Favoritos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
