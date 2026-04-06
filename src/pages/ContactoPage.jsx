// ruta: /contacto
import { useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import PageWrapper from "../components/PageWrapper"
import { IconEmail } from "../components/Icons"

function ContactoPage() {
  // formulario controlado - estado sincronizado
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" })
  const [enviado, setEnviado] = useState(false)

  // evento onChange dinámico
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // evento onSubmit
  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
    setForm({ nombre: "", email: "", mensaje: "" })
  }

  return (
    <PageWrapper>
      <h1 className="section-title">
        <IconEmail size={28} color="var(--cinemex-red)" /> Contacto
      </h1>
      <p style={{ marginBottom: "24px", color: "var(--cinemex-gray)" }}>
        ¿Tienes dudas o comentarios? Escríbenos y te responderemos a la brevedad.
      </p>

      {enviado ? (
        <div className="form-success">
          <h2>¡Mensaje enviado!</h2>
          <p>Nos pondremos en contacto contigo pronto.</p>
          <div style={{ marginTop: "20px" }}>
            <Button
              text="Enviar otro mensaje"
              onClick={() => setEnviado(false)}
              variant="secondary"
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
          <Input
            label="Nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
          <Input
            label="Correo electrónico"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
          />
          <div className="input-group">
            <label className="input-label">Mensaje</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              className="input-field"
              rows="5"
              placeholder="¿En qué podemos ayudarte?"
              required
            />
          </div>
          <Button text="Enviar Mensaje" variant="primary" />
        </form>
      )}

      {/* info de contacto */}
      <div className="contact-info">
        <h3>Información de contacto</h3>
        <p>Atención telefónica: <strong>55 5257-6969</strong></p>
        <p>Horario: Lunes a Domingo de 10:00 a 22:00 hrs</p>
        <p>Email: contacto@cinemex.com</p>
      </div>
    </PageWrapper>
  )
}

export default ContactoPage
