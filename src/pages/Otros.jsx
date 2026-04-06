// ruta: /otros - promociones y servicios
import { useState } from "react"
import PromoCard from "../components/PromoCard"
import Button from "../components/Button"
import Input from "../components/Input"
import PageWrapper from "../components/PageWrapper"
import {
  IconStar,
  IconProjector,
  IconMovie,
  IconWind,
  IconPerson,
  IconCelebration,
  IconCard,
  IconTicket,
  IconSmartphone,
  IconEmail
} from "../components/Icons"

function Otros() {
  // formulario controlado - estado sincronizado
  const [formContacto, setFormContacto] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  })
  const [suscripciones, setSuscripciones] = useState([])
  const [mensajeExito, setMensajeExito] = useState("")

  const promociones = [
    { id: 1, title: "Miércoles de Palomitas 2x1", image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=400", badge: "PROMOCIÓN", description: "Todos los miércoles palomitas grandes al 2x1." },
    { id: 2, title: "Martes de 2x1 en Boletos", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400", badge: "2X1", description: "Cada martes compra un boleto y lleva el segundo gratis." },
    { id: 3, title: "Combo Cinemex + Uber Eats", image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400", badge: "ESPECIAL", description: "20% de descuento en tu primera orden por Uber Eats." }
  ]

  const membresias = [
    { id: 1, title: "Club Cinemex", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400", badge: "MEMBRESÍA", description: "Acumula puntos y canjéalos por boletos y combos." },
    { id: 2, title: "Cinemex Platino", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400", badge: "PREMIUM", description: "Experiencia VIP con asientos reclinables." }
  ]

  const preventas = [
    { id: 1, title: "Spider-Man: Beyond the Spider-Verse", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400", badge: "PREVENTA", description: "Compra tus boletos en preventa." },
    { id: 2, title: "Misión Imposible 8", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400", badge: "PRÓXIMAMENTE", description: "Tom Cruise regresa con más acción." }
  ]

  const formatos = [
    { id: 1, name: "IMAX", icon: "movie", description: "Pantalla más grande con sonido envolvente", color: "#1A1A1A" },
    { id: 2, name: "4DX", icon: "wind", description: "Movimiento, viento, agua y aromas", color: "#E41C23" },
    { id: 3, name: "Platino", icon: "star", description: "Asientos reclinables y servicio a butaca", color: "#FFD700" },
    { id: 4, name: "Junior", icon: "person", description: "Salas para los más pequeños", color: "#4CAF50" }
  ]

  const renderFormatoIcon = (iconType, color) => {
    const iconColor = color === "#FFD700" ? "#1A1A1A" : "white"
    switch (iconType) {
      case "movie": return <IconMovie size={48} color={iconColor} />
      case "wind": return <IconWind size={48} color={iconColor} />
      case "star": return <IconStar size={48} color={iconColor} />
      case "person": return <IconPerson size={48} color={iconColor} />
      default: return <IconMovie size={48} color={iconColor} />
    }
  }

  // evento onChange dinámico
  function manejarCambioFormulario(e) {
    const { name, value } = e.target
    setFormContacto({ ...formContacto, [name]: value })
  }

  // evento onSubmit
  function manejarSuscripcion(e) {
    e.preventDefault()
    const nuevaSuscripcion = { ...formContacto, fecha: new Date().toLocaleString() }
    setSuscripciones([...suscripciones, nuevaSuscripcion])
    setMensajeExito(`¡Gracias ${formContacto.nombre}! Te has suscrito.`)
    setFormContacto({ nombre: "", email: "", telefono: "", mensaje: "" })
    setTimeout(() => setMensajeExito(""), 5000)
  }

  return (
    <PageWrapper>
      <h1 className="section-title" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <IconStar size={32} color="var(--cinemex-gold)" /> Más de Cinemex
      </h1>
      <p style={{ color: "var(--cinemex-gray)", marginBottom: "32px" }}>
        Promociones, membresías, preventas y formatos especiales
      </p>

      {/* formatos especiales */}
      <section>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconProjector size={24} color="var(--cinemex-red)" /> Formatos Especiales
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "20px" }}>
          {formatos.map((formato) => (
            <div
              key={formato.id}
              className="formato-card"
              style={{
                background: formato.color,
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                color: formato.color === "#FFD700" ? "#1A1A1A" : "white"
              }}
            >
              {renderFormatoIcon(formato.icon, formato.color)}
              <h3 style={{ color: formato.color === "#FFD700" ? "#1A1A1A" : "white", marginTop: "12px", marginBottom: "8px" }}>
                {formato.name}
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.9, color: formato.color === "#FFD700" ? "#1A1A1A" : "white" }}>
                {formato.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* promociones */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconCelebration size={24} color="var(--cinemex-gold)" /> Promociones
        </h2>
        <div className="cards-grid">
          {promociones.map((promo) => (
            <PromoCard key={promo.id} title={promo.title} image={promo.image} badge={promo.badge} description={promo.description} buttonText="Ver Más" onVerMas={() => alert(`Promoción: ${promo.title}`)} />
          ))}
        </div>
      </section>

      {/* membresías */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconCard size={24} color="var(--cinemex-gold)" /> Membresías
        </h2>
        <div className="cards-grid">
          {membresias.map((m) => (
            <PromoCard key={m.id} title={m.title} image={m.image} badge={m.badge} description={m.description} buttonText="Inscribirme" onVerMas={() => alert(`Membresía: ${m.title}`)} />
          ))}
        </div>
      </section>

      {/* preventas */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconTicket size={24} color="var(--cinemex-red)" /> Preventas
        </h2>
        <div className="cards-grid">
          {preventas.map((p) => (
            <PromoCard key={p.id} title={p.title} image={p.image} badge={p.badge} description={p.description} buttonText="Comprar" onVerMas={() => alert(`Preventa: ${p.title}`)} />
          ))}
        </div>
      </section>

      {/* banner app */}
      <div className="banner" style={{ marginTop: "48px" }}>
        <h3 className="banner-title" style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
          <IconSmartphone size={24} /> Descarga la App de Cinemex
        </h3>
        <p className="banner-text">Compra boletos, acumula puntos y recibe promociones exclusivas.</p>
        <Button text="Descargar App" variant="gold" onClick={() => alert("Redirigiendo a la tienda de apps...")} />
      </div>

      {/* newsletter - formulario controlado */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconEmail size={24} color="var(--cinemex-red)" /> Newsletter
        </h2>
        <p style={{ color: "var(--cinemex-gray)", marginBottom: "24px" }}>
          Recibe promociones exclusivas en tu correo.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          <div style={{ background: "var(--cinemex-white)", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            {/* formulario controlado - estado sincronizado */}
            <form onSubmit={manejarSuscripcion}>
              <Input label="Nombre" name="nombre" value={formContacto.nombre} onChange={manejarCambioFormulario} placeholder="Tu nombre" required />
              <Input label="Correo electrónico" name="email" type="email" value={formContacto.email} onChange={manejarCambioFormulario} placeholder="tu@email.com" required />
              <Input label="Teléfono (opcional)" name="telefono" type="tel" value={formContacto.telefono} onChange={manejarCambioFormulario} placeholder="55 1234 5678" />
              <div className="input-group">
                <label className="input-label">Comentarios (opcional)</label>
                <textarea name="mensaje" value={formContacto.mensaje} onChange={manejarCambioFormulario} placeholder="¿Algún comentario?" rows="3" className="input-field" style={{ resize: "vertical" }} />
              </div>
              <Button text="Suscribirme" variant="primary" fullWidth={true} />
            </form>

            {mensajeExito && (
              <div style={{ marginTop: "16px", padding: "16px", background: "#d4edda", borderRadius: "8px", color: "#155724" }}>
                {mensajeExito}
              </div>
            )}
          </div>

          {/* lista de suscripciones */}
          <div>
            <h4 style={{ marginBottom: "16px" }}>Suscripciones recientes ({suscripciones.length})</h4>
            {suscripciones.length === 0 ? (
              <p style={{ color: "var(--cinemex-gray)" }}>Aún no hay suscripciones.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {suscripciones.map((sub, index) => (
                  <div key={index} style={{ background: "var(--cinemex-white)", borderRadius: "12px", padding: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", borderLeft: "4px solid var(--cinemex-gold)" }}>
                    <p style={{ fontWeight: "bold", marginBottom: "4px" }}>{sub.nombre}</p>
                    <p style={{ color: "var(--cinemex-gray)", fontSize: "0.9rem" }}>{sub.email}</p>
                    <p style={{ color: "var(--cinemex-gray-light)", fontSize: "0.8rem" }}>{sub.fecha}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

export default Otros
