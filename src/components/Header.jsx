// Componente Header con navegación completa
function Header({ cambiarVista, vistaActual }) {
  return (
    <header className="header">
      {/* Contenedor interno para ordenar contenido */}
      <div className="header-container">
        {/* Logo de Cinemex */}
        <div 
          className="header-logo"
          onClick={() => cambiarVista("home")}
        >
          {/* Icono de cine */}
          <svg className="header-logo-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
          </svg>
          CINEMEX
        </div>

        {/* Navegación */}
        <nav className="header-nav">
          <span
            className={`nav-link ${vistaActual === "home" ? "active" : ""}`}
            onClick={() => cambiarVista("home")}
          >
            Inicio
          </span>

          <span
            className={`nav-link ${vistaActual === "cartelera" ? "active" : ""}`}
            onClick={() => cambiarVista("cartelera")}
          >
            Cartelera
          </span>

          <span
            className={`nav-link ${vistaActual === "alimentos" ? "active" : ""}`}
            onClick={() => cambiarVista("alimentos")}
          >
            Alimentos
          </span>

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
