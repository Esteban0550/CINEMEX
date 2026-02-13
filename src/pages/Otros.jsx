// Importamos componentes
import PromoCard from "../components/PromoCard";
import Button from "../components/Button";

function Otros() {
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

  // Formatos especiales
  const formatos = [
    {
      id: 1,
      name: "IMAX",
      icon: "🎬",
      description: "La pantalla más grande con el sonido más envolvente",
      color: "#1A1A1A"
    },
    {
      id: 2,
      name: "4DX",
      icon: "💨",
      description: "Vive las películas con movimiento, viento, agua y aromas",
      color: "#E41C23"
    },
    {
      id: 3,
      name: "Platino",
      icon: "⭐",
      description: "Asientos reclinables y servicio a tu butaca",
      color: "#FFD700"
    },
    {
      id: 4,
      name: "Junior",
      icon: "🧒",
      description: "Salas diseñadas especialmente para los más pequeños",
      color: "#4CAF50"
    }
  ];

  return (
    <main className="page-container">
      {/* Título de la sección */}
      <h1 className="section-title">⭐ Más de Cinemex</h1>
      <p style={{ color: "var(--cinemex-gray)", marginBottom: "32px" }}>
        Descubre promociones, membresías, preventas y formatos especiales
      </p>

      {/* Sección: Formatos Especiales */}
      <section>
        <h2 className="section-subtitle">🎥 Formatos Especiales</h2>
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
              <span style={{ fontSize: "3rem" }}>{formato.icon}</span>
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

      {/* Sección: Promociones */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle">🎉 Promociones</h2>
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

      {/* Sección: Membresías */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle">💳 Membresías</h2>
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

      {/* Sección: Preventas */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle">🎟️ Preventas</h2>
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

      {/* Banner final */}
      <div className="banner" style={{ marginTop: "48px" }}>
        <h3 className="banner-title">📱 Descarga la App de Cinemex</h3>
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
    </main>
  );
}

// Exportamos la vista
export default Otros;
