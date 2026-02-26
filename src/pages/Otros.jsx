/**
 * ========================================
 * PÁGINA Otros - Promociones y Servicios
 * ========================================
 * 
 * Esta página muestra información adicional de Cinemex:
 * promociones, membresías, preventas y formulario de contacto.
 * 
 * CONCEPTOS DEMOSTRADOS:
 * - useState: Estado para formulario (objeto) y lista de suscripciones (array)
 * - Formulario controlado con onChange dinámico
 * - onSubmit con preventDefault
 * - Renderizado dinámico de arrays con .map()
 * - Spread operator para actualización de objetos/arrays
 * 
 * FLUJO DE DATOS:
 * 1. Usuario llena formulario → onChange actualiza formContacto
 * 2. Usuario envía formulario → onSubmit agrega a suscripciones
 * 3. Re-renderizado muestra nueva suscripción en la lista
 */

import { useState } from "react";
// Importamos componentes
import PromoCard from "../components/PromoCard";
import Button from "../components/Button";
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
} from "../components/Icons";

function Otros() {
  // Estados para el formulario de contacto/newsletter
  const [formContacto, setFormContacto] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });
  
  // Estado para mostrar suscripciones realizadas (array de objetos)
  const [suscripciones, setSuscripciones] = useState([]);
  
  // Estado para mensaje de éxito
  const [mensajeExito, setMensajeExito] = useState("");

  // Promociones
  const promociones = [
    {
      id: 1,
      title: "Miércoles de Palomitas 2x1",
      image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=400",
      badge: "PROMOCIÓN",
      description: "Todos los miércoles disfruta de palomitas grandes al 2x1. Válido en todas las sucursales."
    },
    {
      id: 2,
      title: "Martes de 2x1 en Boletos",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
      badge: "2X1",
      description: "Cada martes compra un boleto y lleva el segundo gratis. Solo con tarjeta Club Cinemex."
    },
    {
      id: 3,
      title: "Combo Cinemex + Uber Eats",
      image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400",
      badge: "ESPECIAL",
      description: "Ordena tu combo favorito por Uber Eats y recibe 20% de descuento en tu primera orden."
    }
  ];

  // Membresías
  const membresias = [
    {
      id: 1,
      title: "Club Cinemex",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400",
      badge: "MEMBRESÍA",
      description: "Acumula puntos en cada compra y canjéalos por boletos, combos y más. ¡Inscripción gratuita!"
    },
    {
      id: 2,
      title: "Cinemex Platino",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
      badge: "PREMIUM",
      description: "Experiencia VIP con asientos reclinables, servicio a tu butaca y acceso exclusivo a salas premium."
    }
  ];

  // Preventas
  const preventas = [
    {
      id: 1,
      title: "Spider-Man: Beyond the Spider-Verse",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400",
      badge: "PREVENTA",
      description: "¡No te quedes sin tu lugar! Compra tus boletos en preventa para el estreno más esperado del año."
    },
    {
      id: 2,
      title: "Misión Imposible 8",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400",
      badge: "PRÓXIMAMENTE",
      description: "Tom Cruise regresa con más acción. Preventa disponible a partir del 1 de marzo."
    }
  ];

  // ========================================
  // DATOS ESTÁTICOS: FORMATOS DE SALA
  // Cada formato tiene un icono SVG asociado
  // ========================================
  const formatos = [
    {
      id: 1,
      name: "IMAX",
      icon: "movie",
      description: "La pantalla más grande con el sonido más envolvente",
      color: "#1A1A1A"
    },
    {
      id: 2,
      name: "4DX",
      icon: "wind",
      description: "Vive las películas con movimiento, viento, agua y aromas",
      color: "#E41C23"
    },
    {
      id: 3,
      name: "Platino",
      icon: "star",
      description: "Asientos reclinables y servicio a tu butaca",
      color: "#FFD700"
    },
    {
      id: 4,
      name: "Junior",
      icon: "person",
      description: "Salas diseñadas especialmente para los más pequeños",
      color: "#4CAF50"
    }
  ];

  // Función auxiliar para renderizar icono según tipo
  const renderFormatoIcon = (iconType, color) => {
    const iconColor = color === "#FFD700" ? "#1A1A1A" : "white";
    switch(iconType) {
      case "movie": return <IconMovie size={48} color={iconColor} />;
      case "wind": return <IconWind size={48} color={iconColor} />;
      case "star": return <IconStar size={48} color={iconColor} />;
      case "person": return <IconPerson size={48} color={iconColor} />;
      default: return <IconMovie size={48} color={iconColor} />;
    }
  };

  return (
    <main className="page-container">
      {/* ========================================
          TÍTULO PRINCIPAL DE LA PÁGINA
          ======================================== */}
      <h1 className="section-title" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <IconStar size={32} color="var(--cinemex-gold)" /> Más de Cinemex
      </h1>
      <p style={{ color: "var(--cinemex-gray)", marginBottom: "32px" }}>
        Descubre promociones, membresías, preventas y formatos especiales
      </p>

      {/* ========================================
          SECCIÓN: FORMATOS ESPECIALES
          Tarjetas con diferentes tipos de salas
          ======================================== */}
      <section>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconProjector size={24} color="var(--cinemex-red)" /> Formatos Especiales
        </h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "20px",
          marginTop: "20px"
        }}>
          {formatos.map((formato) => (
            <div 
              key={formato.id}
              style={{
                background: formato.color,
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                color: formato.color === "#FFD700" ? "#1A1A1A" : "white",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icono SVG renderizado dinámicamente */}
              {renderFormatoIcon(formato.icon, formato.color)}
              <h3 style={{ 
                color: formato.color === "#FFD700" ? "#1A1A1A" : "white",
                marginTop: "12px",
                marginBottom: "8px"
              }}>
                {formato.name}
              </h3>
              <p style={{ 
                fontSize: "0.9rem", 
                opacity: 0.9,
                color: formato.color === "#FFD700" ? "#1A1A1A" : "white"
              }}>
                {formato.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          SECCIÓN: PROMOCIONES
          Mapea array de promociones a PromoCard
          ======================================== */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconCelebration size={24} color="var(--cinemex-gold)" /> Promociones
        </h2>
        <div className="cards-grid">
          {promociones.map((promo) => (
            <PromoCard
              key={promo.id}
              title={promo.title}
              image={promo.image}
              badge={promo.badge}
              description={promo.description}
              buttonText="Ver Más"
              onVerMas={() => alert(`Promoción: ${promo.title}`)}
            />
          ))}
        </div>
      </section>

      {/* ========================================
          SECCIÓN: MEMBRESÍAS
          ======================================== */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconCard size={24} color="var(--cinemex-gold)" /> Membresías
        </h2>
        <div className="cards-grid">
          {membresias.map((membresia) => (
            <PromoCard
              key={membresia.id}
              title={membresia.title}
              image={membresia.image}
              badge={membresia.badge}
              description={membresia.description}
              buttonText="Inscribirme"
              onVerMas={() => alert(`Membresía: ${membresia.title}`)}
            />
          ))}
        </div>
      </section>

      {/* ========================================
          SECCIÓN: PREVENTAS
          ======================================== */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconTicket size={24} color="var(--cinemex-red)" /> Preventas
        </h2>
        <div className="cards-grid">
          {preventas.map((preventa) => (
            <PromoCard
              key={preventa.id}
              title={preventa.title}
              image={preventa.image}
              badge={preventa.badge}
              description={preventa.description}
              buttonText="Comprar"
              onVerMas={() => alert(`Preventa: ${preventa.title}`)}
            />
          ))}
        </div>
      </section>

      {/* ========================================
          BANNER PROMOCIONAL APP
          ======================================== */}
      <div className="banner" style={{ marginTop: "48px" }}>
        <h3 className="banner-title" style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
          <IconSmartphone size={24} /> Descarga la App de Cinemex
        </h3>
        <p className="banner-text">
          Compra tus boletos, acumula puntos y recibe promociones exclusivas. 
          Disponible en App Store y Google Play.
        </p>
        <Button 
          text="Descargar App" 
          variant="gold"
          onClick={() => alert("Redirigiendo a la tienda de apps...")}
        />
      </div>

      {/* ========================================
          SECCIÓN: NEWSLETTER
          Formulario controlado para suscripción
          ======================================== */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconEmail size={24} color="var(--cinemex-red)" /> Suscríbete a nuestro Newsletter
        </h2>
        <p style={{ color: "var(--cinemex-gray)", marginBottom: "24px" }}>
          Recibe promociones exclusivas, preventas y novedades directamente en tu correo.
        </p>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px"
        }}>
          {/* Formulario */}
          <div style={{
            background: "var(--cinemex-white)",
            borderRadius: "16px",
            padding: "32px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
          }}>
            {/* FORMULARIO CONTROLADO - onSubmit con preventDefault */}
            <form onSubmit={manejarSuscripcion}>
              {/* Campo Nombre - onChange actualiza objeto en estado */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                  Nombre:
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formContacto.nombre}
                  onChange={manejarCambioFormulario}
                  placeholder="Tu nombre"
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

              {/* Campo Email */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formContacto.email}
                  onChange={manejarCambioFormulario}
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

              {/* Campo Teléfono */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                  Teléfono (opcional):
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formContacto.telefono}
                  onChange={manejarCambioFormulario}
                  placeholder="55 1234 5678"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "2px solid var(--cinemex-cream)",
                    fontSize: "1rem"
                  }}
                />
              </div>

              {/* Campo Mensaje */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                  Comentarios (opcional):
                </label>
                <textarea
                  name="mensaje"
                  value={formContacto.mensaje}
                  onChange={manejarCambioFormulario}
                  placeholder="¿Algún comentario o sugerencia?"
                  rows="3"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "2px solid var(--cinemex-cream)",
                    fontSize: "1rem",
                    resize: "vertical"
                  }}
                />
              </div>

              <Button 
                text="Suscribirme"
                variant="primary"
                fullWidth={true}
              />
            </form>

            {/* Mensaje de éxito */}
            {mensajeExito && (
              <div style={{
                marginTop: "16px",
                padding: "16px",
                background: "#d4edda",
                borderRadius: "8px",
                color: "#155724"
              }}>
                {mensajeExito}
              </div>
            )}
          </div>

          {/* ========================================
              LISTA DE SUSCRIPCIONES
              Renderizado dinámico del array de suscripciones
              ======================================== */}
          <div>
            <h4 style={{ marginBottom: "16px" }}>
              Suscripciones recientes ({suscripciones.length})
            </h4>
            
            {suscripciones.length === 0 ? (
              <p style={{ color: "var(--cinemex-gray)" }}>
                Aún no hay suscripciones. ¡Sé el primero!
              </p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {/* Renderizado dinámico del array de suscripciones */}
                {suscripciones.map((sub, index) => (
                  <div 
                    key={index}
                    style={{
                      background: "var(--cinemex-white)",
                      borderRadius: "12px",
                      padding: "16px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      borderLeft: "4px solid var(--cinemex-gold)"
                    }}
                  >
                    <p style={{ fontWeight: "bold", marginBottom: "4px" }}>
                      {sub.nombre}
                    </p>
                    <p style={{ color: "var(--cinemex-gray)", fontSize: "0.9rem" }}>
                      {sub.email}
                    </p>
                    <p style={{ color: "var(--cinemex-gray-light)", fontSize: "0.8rem" }}>
                      {sub.fecha}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );

  // Función para manejar cambios en el formulario (para todos los campos)
  function manejarCambioFormulario(e) {
    const { name, value } = e.target;
    // Actualizamos el objeto de estado sin mutación directa (spread operator)
    setFormContacto({
      ...formContacto,
      [name]: value
    });
  }

  // Función para manejar el envío del formulario
  function manejarSuscripcion(e) {
    // preventDefault evita que el formulario recargue la página
    e.preventDefault();

    // Creamos nueva suscripción con los datos del formulario
    const nuevaSuscripcion = {
      ...formContacto,
      fecha: new Date().toLocaleString()
    };

    // Agregamos al array de suscripciones (usando spread para no mutar)
    setSuscripciones([...suscripciones, nuevaSuscripcion]);

    // Mostramos mensaje de éxito
    setMensajeExito(`¡Gracias ${formContacto.nombre}! Te has suscrito exitosamente.`);

    // Limpiamos el formulario
    setFormContacto({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: ""
    });

    // Ocultamos el mensaje después de 5 segundos
    setTimeout(() => setMensajeExito(""), 5000);
  }
}

// Exportamos la vista
export default Otros;
