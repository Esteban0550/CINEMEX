// reutilizable - pie de página
import { Link } from "react-router-dom"

function Footer() {
  const enlaces = [
    { label: "Sobre Cinemex", href: "/otros" },
    { label: "Factura Electrónica", href: "/terminos" },
    { label: "Ventas Corporativas", href: "/otros" },
    { label: "Términos y condiciones", href: "/terminos" },
    { label: "Aviso de privacidad", href: "/privacidad" },
    { label: "Contacto", href: "/contacto" }
  ]

  const redes = [
    { label: "FB", icon: "f" },
    { label: "X", icon: "𝕏" },
    { label: "IG", icon: "◷" },
    { label: "YT", icon: "▶" }
  ]

  const aliados = ["CanaCine", "Arena", "PayPal"]

  return (
    <footer className="footer">
      <div className="footer-top-accent"></div>
      <div className="footer-cinema-grid">
        <section className="footer-block footer-contact-block">
          <div className="footer-brand">
            <span className="footer-brand-logo">CINEMEX</span>
          </div>
          <p className="footer-kicker">Atención telefónica</p>
          <p className="footer-phone">55 5257-6969</p>
          <div className="footer-socials" aria-label="Redes sociales">
            {redes.map((red) => (
              <a
                key={red.label}
                className="footer-social-dot"
                title={red.label}
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                {red.icon}
              </a>
            ))}
          </div>
        </section>

        <section className="footer-block footer-links-block">
          <h4>Enlaces útiles</h4>
          <ul>
            {enlaces.map((enlace) => (
              <li key={enlace.label}>
                <Link to={enlace.href}>{enlace.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="footer-block footer-extras-block">
          <h4>Aliados</h4>
          <div className="footer-partners">
            {aliados.map((aliado) => (
              <span key={aliado}>{aliado}</span>
            ))}
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Cadena Mexicana de Exhibición S.A. de C.V. — Proyecto frontend con React.</p>
      </div>
    </footer>
  )
}

export default Footer
