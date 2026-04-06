// ruta: /comprar - formulario controlado de compra de boletos
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { peliculas } from "../data"
import Input from "../components/Input"
import Button from "../components/Button"
import Modal from "../components/Modal"
import PageWrapper from "../components/PageWrapper"
import { IconTicket } from "../components/Icons"

function ComprarPage() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const pelicula = state?.pelicula || peliculas[0]

  // formulario controlado - estado sincronizado
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [boletos, setBoletos] = useState(1)
  const [horario, setHorario] = useState("")
  const [error, setError] = useState("")
  const [mostrarModal, setMostrarModal] = useState(false)

  const precioBoleto = pelicula.precio || 85
  const horarios = ["14:30", "16:45", "19:00", "21:30", "23:45"]

  // evento onSubmit
  function handleSubmit(e) {
    e.preventDefault()
    if (!horario) {
      setError("Selecciona un horario")
      return
    }
    if (!nombre.trim()) {
      setError("Ingresa tu nombre")
      return
    }
    if (!email.trim()) {
      setError("Ingresa tu correo electrónico")
      return
    }
    setError("")
    setMostrarModal(true)
  }

  // useNavigate para redirigir tras confirmación
  function handleConfirmar() {
    setMostrarModal(false)
    navigate("/")
  }

  return (
    <PageWrapper>
      <h1 className="section-title">
        <IconTicket size={28} color="var(--cinemex-red)" /> Comprar Boletos
      </h1>

      <div className="checkout-layout">
        {/* info de la película */}
        <div className="checkout-movie">
          <img
            src={pelicula.imagen}
            alt={pelicula.titulo}
            className="checkout-poster"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x450/1A1A1A/FFD700?text=CINEMEX"
            }}
          />
          <h2>{pelicula.titulo}</h2>
          <p>{pelicula.genero} · {pelicula.duracion}</p>
          <p>{pelicula.descripcion}</p>
        </div>

        {/* formulario controlado - estado sincronizado */}
        <form onSubmit={handleSubmit} className="checkout-form">
          <Input
            label="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            required
          />

          <Input
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
          />

          {/* select controlado - onChange */}
          <div className="input-group">
            <label className="input-label">Horario</label>
            <select
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              className="input-field"
              required
            >
              <option value="">-- Elige un horario --</option>
              {horarios.map((h) => (
                <option key={h} value={h}>{h} hrs</option>
              ))}
            </select>
          </div>

          {/* input numérico controlado */}
          <div className="input-group">
            <label className="input-label">Cantidad de boletos</label>
            <input
              type="number"
              min="1"
              max="10"
              value={boletos}
              onChange={(e) => setBoletos(Number(e.target.value))}
              className="input-field"
            />
          </div>

          {/* resumen de compra */}
          <div className="checkout-summary">
            <div className="checkout-row">
              <span>Precio por boleto:</span>
              <span>${precioBoleto}.00</span>
            </div>
            <div className="checkout-row">
              <span>Cantidad:</span>
              <span>{boletos}</span>
            </div>
            <div className="checkout-row checkout-total">
              <span>Total:</span>
              <span>${boletos * precioBoleto}.00</span>
            </div>
          </div>

          {error && <p className="form-error">{error}</p>}

          <Button text="Confirmar Compra" variant="primary" fullWidth={true} />
        </form>
      </div>

      {/* modal de confirmación */}
      <Modal
        isOpen={mostrarModal}
        onClose={() => setMostrarModal(false)}
        title="¡Compra Exitosa!"
      >
        <div className="modal-confirmation">
          <p>Gracias <strong>{nombre}</strong>, tu compra ha sido procesada.</p>
          <div className="modal-details">
            <p><strong>Película:</strong> {pelicula.titulo}</p>
            <p><strong>Horario:</strong> {horario} hrs</p>
            <p><strong>Boletos:</strong> {boletos}</p>
            <p><strong>Total:</strong> ${boletos * precioBoleto}.00</p>
            <p><strong>Correo:</strong> {email}</p>
          </div>
          <Button text="Volver al Inicio" onClick={handleConfirmar} variant="gold" fullWidth={true} />
        </div>
      </Modal>
    </PageWrapper>
  )
}

export default ComprarPage
