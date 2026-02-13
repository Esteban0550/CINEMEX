// Componente Footer de Cinemex
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección Cinemex */}
        <div className="footer-section">
          <h4>CINEMEX</h4>
          <p>La mejor experiencia de cine en México. Disfruta de las mejores películas en nuestras salas con la mejor tecnología.</p>
        </div>
        
        {/* Sección Enlaces */}
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li>Cartelera</li>
            <li>Promociones</li>
            <li>Alimentos</li>
            <li>Membresías</li>
          </ul>
        </div>
        
        {/* Sección Formatos */}
        <div className="footer-section">
          <h4>Formatos</h4>
          <ul>
            <li>IMAX</li>
            <li>4DX</li>
            <li>Platino</li>
            <li>Junior</li>
          </ul>
        </div>
        
        {/* Sección Contacto */}
        <div className="footer-section">
          <h4>Contacto</h4>
          <ul>
            <li>📞 01 800 CINEMEX</li>
            <li>📧 contacto@cinemex.com</li>
            <li>📍 Ciudad de México, MX</li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2026 Cinemex. Todos los derechos reservados. | Proyecto académico TSU</p>
      </div>
    </footer>
  );
}

export default Footer;
