/**
 * ========================================
 * PÁGINA Detalle - Detalle de Película
 * ========================================
 * 
 * Esta página muestra información detallada de una película
 * y permite al usuario comprar boletos mediante un formulario.
 * 
 * CONCEPTOS DEMOSTRADOS:
 * - useState: Múltiples estados para formulario y datos
 * - Formularios controlados con onChange
 * - Evento onSubmit con preventDefault
 * - Renderizado condicional basado en estados
 * - Manejo de objetos en estado (compraRealizada)
 * 
 * FLUJO DE DATOS:
 * 1. Usuario ingresa datos en formulario → onChange actualiza estados
 * 2. Usuario hace submit → onSubmit procesa la compra
 * 3. Estado compraRealizada se actualiza → UI muestra confirmación
 */

import { useState } from "react"
import Button from "../components/Button"
import { 
  IconHeartFilled, 
  IconHeartOutline, 
  IconMovie, 
  IconClock, 
  IconTicket, 
  IconEmail 
} from "../components/Icons"

function Detalle({ pelicula, esFavorito = false, toggleFavorito }) {

  // Estados para el formulario de compra de boletos
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [horario, setHorario] = useState("")
  const [mensaje, setMensaje] = useState("")
  
  // Estado para almacenar la compra realizada (objeto en estado)
  const [compraRealizada, setCompraRealizada] = useState(null)

  // Horarios disponibles
  const horariosDisponibles = ["14:30", "16:45", "19:00", "21:30", "23:45"]
  
  // Precio por boleto
  const precioBoleto = 85

  // En el caso que no se seleccione ninguna película
  if (!pelicula) {
    return (
      <main className="page-container" style={{ textAlign: "center", paddingTop: "60px" }}>
        <h2>No hay película seleccionada</h2>
        <p>Selecciona una película desde el inicio o la cartelera</p>
      </main>
    )
  }

  // Evento submit/enviar - FORMULARIO CONTROLADO
  function manejarCompra(e) {
    // preventDefault evita que el formulario recargue la página
    e.preventDefault()

    // Validación básica
    if (!horario) {
      setMensaje("Por favor selecciona un horario")
      return
    }

    // Creamos objeto de compra (manejo de objetos en estado)
    const datosCompra = {
      cliente: nombre,
      email: email,
      pelicula: pelicula.titulo,
      boletos: cantidadBoletos,
      horario: horario,
      total: cantidadBoletos * precioBoleto,
      fecha: new Date().toLocaleDateString()
    }

    // Actualizamos estado con objeto de compra
    setCompraRealizada(datosCompra)
    setMensaje(`¡Gracias ${nombre}! Tu compra ha sido procesada.`)

    // Limpiar formulario
    setNombre("")
    setEmail("")
    setCantidadBoletos(1)
    setHorario("")
  }

  return (
    <main className="page-container">
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "40px",
        alignItems: "start"
      }}>
        {/* Columna de imagen y datos */}
        <div>
          <div style={{ position: "relative" }}>
            <img
              src={pelicula.imagen}
              alt={pelicula.titulo}
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "16px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.2)"
              }}
            />
            
          {/* ========================================
              BOTÓN DE FAVORITOS
              Permite agregar/quitar de lista de favoritos
              onClick dispara toggleFavorito
              ======================================== */}
            {toggleFavorito && (
              <button
                onClick={() => toggleFavorito(pelicula)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: esFavorito ? "var(--cinemex-red)" : "rgba(255,255,255,0.9)",
                  border: "none",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {/* Icono SVG cambia según estado de favorito */}
                {esFavorito ? (
                  <IconHeartFilled size={24} color="white" />
                ) : (
                  <IconHeartOutline size={24} color="var(--cinemex-red)" />
                )}
              </button>
            )}
          </div>
          
          <h1 style={{ marginTop: "24px", fontSize: "2rem" }}>{pelicula.titulo}</h1>
          
          {/* ========================================
              INFORMACIÓN DE LA PELÍCULA
              Muestra género, duración y clasificación
              ======================================== */}
          <div style={{ 
            display: "flex", 
            gap: "16px", 
            marginTop: "12px",
            flexWrap: "wrap"
          }}>
            {pelicula.genero && (
              <span className="movie-card-overlay" style={{ 
                position: "static",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}>
                <IconMovie size={14} /> {pelicula.genero}
              </span>
            )}
            {pelicula.duracion && (
              <span className="movie-card-overlay" style={{ 
                position: "static",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}>
                <IconClock size={14} /> {pelicula.duracion}
              </span>
            )}
            {pelicula.clasificacion && (
              <span className="movie-card-overlay" style={{ position: "static" }}>
                {pelicula.clasificacion}
              </span>
            )}
          </div>
          
          <p style={{ marginTop: "20px", lineHeight: "1.8", color: "var(--cinemex-gray)" }}>
            {pelicula.descripcion}
          </p>
        </div>

        {/* Columna del formulario */}
        <div style={{
          background: "var(--cinemex-white)",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
        }}>
          {/* ========================================
              TÍTULO DEL FORMULARIO
              ======================================== */}
          <h2 style={{ 
            marginBottom: "24px", 
            color: "var(--cinemex-black)",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <IconTicket size={24} color="var(--cinemex-red)" /> Comprar Boletos
          </h2>

          {/* FORMULARIO CONTROLADO con onSubmit */}
          <form onSubmit={manejarCompra}>
            {/* Campo Nombre - onChange actualiza estado */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                Nombre completo:
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingresa tu nombre"
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "2px solid var(--cinemex-cream)",
                  fontSize: "1rem",
                  transition: "border-color 0.3s"
                }}
              />
            </div>

            {/* Campo Email - onChange actualiza estado */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                Correo electrónico:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "2px solid var(--cinemex-cream)",
                  fontSize: "1rem"
                }}
              />
            </div>

            {/* Select de Horario - onChange actualiza estado */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                Selecciona horario:
              </label>
              <select
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "2px solid var(--cinemex-cream)",
                  fontSize: "1rem",
                  background: "white"
                }}
              >
                <option value="">-- Elige un horario --</option>
                {horariosDisponibles.map((h) => (
                  <option key={h} value={h}>{h} hrs</option>
                ))}
              </select>
            </div>

            {/* Campo Cantidad - onChange actualiza estado numérico */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                Cantidad de boletos:
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={cantidadBoletos}
                onChange={(e) => setCantidadBoletos(Number(e.target.value))}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "2px solid var(--cinemex-cream)",
                  fontSize: "1rem"
                }}
              />
            </div>

            {/* Resumen de compra - Renderizado dinámico */}
            <div style={{
              background: "var(--cinemex-cream)",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "20px"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span>Precio por boleto:</span>
                <span>${precioBoleto}.00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span>Cantidad:</span>
                <span>{cantidadBoletos}</span>
              </div>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between",
                borderTop: "2px solid var(--cinemex-gold)",
                paddingTop: "12px",
                marginTop: "8px",
                fontWeight: "bold",
                fontSize: "1.2rem"
              }}>
                <span>Total:</span>
                <span style={{ color: "var(--cinemex-red)" }}>
                  ${cantidadBoletos * precioBoleto}.00
                </span>
              </div>
            </div>

            {/* Botón Submit */}
            <Button 
              text="Comprar Ahora"
              variant="primary"
              fullWidth={true}
            />
          </form>

          {/* Mensaje de confirmación - Renderizado condicional */}
          {mensaje && (
            <div style={{
              marginTop: "20px",
              padding: "16px",
              background: compraRealizada ? "#d4edda" : "#fff3cd",
              borderRadius: "8px",
              color: compraRealizada ? "#155724" : "#856404"
            }}>
              <p style={{ fontWeight: "bold" }}>{mensaje}</p>
            </div>
          )}

          {/* ========================================
              CONFIRMACIÓN DE COMPRA
              Se muestra cuando compraRealizada tiene datos
              Renderiza objeto almacenado en estado
              ======================================== */}
          {compraRealizada && (
            <div style={{
              marginTop: "20px",
              padding: "20px",
              background: "linear-gradient(135deg, var(--cinemex-dark), var(--cinemex-black))",
              borderRadius: "12px",
              color: "white"
            }}>
              <h4 style={{ 
                color: "var(--cinemex-gold)", 
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <IconEmail size={18} color="var(--cinemex-gold)" /> Confirmación de Compra
              </h4>
              <p><strong>Cliente:</strong> {compraRealizada.cliente}</p>
              <p><strong>Email:</strong> {compraRealizada.email}</p>
              <p><strong>Película:</strong> {compraRealizada.pelicula}</p>
              <p><strong>Horario:</strong> {compraRealizada.horario} hrs</p>
              <p><strong>Boletos:</strong> {compraRealizada.boletos}</p>
              <p><strong>Total pagado:</strong> ${compraRealizada.total}.00</p>
              <p><strong>Fecha:</strong> {compraRealizada.fecha}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Detalle
