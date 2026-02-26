/**
 * ========================================
 * COMPONENTE Footer - Pie de Página
 * ========================================
 * 
 * Componente que muestra información de contacto,
 * enlaces útiles y copyright de Cinemex.
 * 
 * Utiliza iconos SVG para los datos de contacto.
 */

// Importamos iconos SVG necesarios
import { IconPhone, IconEmail, IconLocation } from "./Icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* ========================================
            SECCIÓN: INFORMACIÓN DE CINEMEX
            Descripción general de la empresa
            ======================================== */}
        <div className="footer-section">
          <h4>CINEMEX</h4>
          <p>La mejor experiencia de cine en México. Disfruta de las mejores películas en nuestras salas con la mejor tecnología.</p>
        </div>
        
        {/* ========================================
            SECCIÓN: ENLACES RÁPIDOS
            Navegación secundaria del sitio
            ======================================== */}
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li>Cartelera</li>
            <li>Promociones</li>
            <li>Alimentos</li>
            <li>Membresías</li>
          </ul>
        </div>
        
        {/* ========================================
            SECCIÓN: FORMATOS DE SALA
            Tipos de experiencias disponibles
            ======================================== */}
        <div className="footer-section">
          <h4>Formatos</h4>
          <ul>
            <li>IMAX</li>
            <li>4DX</li>
            <li>Platino</li>
            <li>Junior</li>
          </ul>
        </div>
        
        {/* ========================================
            SECCIÓN: CONTACTO
            Información de contacto con iconos SVG
            ======================================== */}
        <div className="footer-section">
          <h4>Contacto</h4>
          <ul>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <IconPhone size={16} color="var(--cinemex-gold)" /> 01 800 CINEMEX
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <IconEmail size={16} color="var(--cinemex-gold)" /> contacto@cinemex.com
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <IconLocation size={16} color="var(--cinemex-gold)" /> Ciudad de México, MX
            </li>
          </ul>
        </div>
      </div>
      
      {/* ========================================
          PIE DE PÁGINA: COPYRIGHT
          ======================================== */}
      <div className="footer-bottom">
        <p>© 2026 Cinemex. Todos los derechos reservados. | Proyecto académico TSU</p>
      </div>
    </footer>
  );
}

// Exportamos el componente
export default Footer;
