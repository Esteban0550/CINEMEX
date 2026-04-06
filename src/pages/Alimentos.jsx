// ruta: /comida - alimentos y bebidas
import { useState } from "react"
import FoodCard from "../components/FoodCard"
import Button from "../components/Button"
import PageWrapper from "../components/PageWrapper"
import { alimentos } from "../data"
import {
  IconPopcorn,
  IconCart,
  IconCelebration,
  IconStar,
  IconDrink,
  IconFood,
  IconCandy,
  IconClose
} from "../components/Icons"

function Alimentos({ agregarAlCarrito, carrito = [], eliminarDelCarrito, totalCarrito = 0 }) {
  const [mostrarCarrito, setMostrarCarrito] = useState(false)

  return (
    <PageWrapper>
      <h1 className="section-title" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <IconPopcorn size={32} color="var(--cinemex-gold)" /> Alimentos y Bebidas
      </h1>
      <p style={{ color: "var(--cinemex-gray)", marginBottom: "32px" }}>
        Complementa tu experiencia de cine con nuestros deliciosos snacks
      </p>

      {/* evento onClick - toggle carrito */}
      <div style={{ marginBottom: "24px" }}>
        <Button
          text={<span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <IconCart size={18} /> Ver Carrito ({carrito.length})
          </span>}
          onClick={() => setMostrarCarrito(!mostrarCarrito)}
          variant={carrito.length > 0 ? "gold" : "secondary"}
        />
      </div>

      {/* panel carrito - renderizado condicional */}
      {mostrarCarrito && (
        <div style={{
          background: "var(--cinemex-white)",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "32px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <IconCart size={20} color="var(--cinemex-red)" /> Tu Carrito
          </h3>

          {carrito.length === 0 ? (
            <p style={{ color: "var(--cinemex-gray)" }}>Tu carrito está vacío.</p>
          ) : (
            <>
              <div style={{ marginBottom: "16px" }}>
                {carrito.map((item) => (
                  <div key={item.id} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--cinemex-cream)"
                  }}>
                    <div>
                      <strong>{item.name}</strong>
                      <span style={{ marginLeft: "8px", color: "var(--cinemex-gray)" }}>x{item.cantidad}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ color: "var(--cinemex-red)", fontWeight: "bold" }}>
                        ${(item.price * item.cantidad).toFixed(2)}
                      </span>
                      {/* evento onClick - eliminar */}
                      <button
                        onClick={() => eliminarDelCarrito(item.id)}
                        style={{
                          background: "var(--cinemex-red)",
                          color: "white",
                          border: "none",
                          borderRadius: "50%",
                          width: "28px",
                          height: "28px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <IconClose size={14} color="white" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "16px",
                borderTop: "2px solid var(--cinemex-gold)"
              }}>
                <strong style={{ fontSize: "1.2rem" }}>Total:</strong>
                <strong style={{ fontSize: "1.5rem", color: "var(--cinemex-red)" }}>
                  ${totalCarrito.toFixed(2)}
                </strong>
              </div>
              <Button
                text="Proceder al Pago"
                onClick={() => alert(`Total: $${totalCarrito.toFixed(2)}\n¡Gracias por tu compra!`)}
                variant="primary"
                fullWidth={true}
              />
            </>
          )}
        </div>
      )}

      {/* banner promo */}
      <div className="banner" style={{ marginTop: "0", marginBottom: "40px" }}>
        <h3 className="banner-title" style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
          <IconCelebration size={24} /> Combo Especial
        </h3>
        <p className="banner-text">Al comprar tu combo, ¡obtén un 15% de descuento en tu próxima visita!</p>
      </div>

      {/* combos - .map() desde JSON */}
      <section>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconStar size={24} color="var(--cinemex-gold)" /> Combos Recomendados
        </h2>
        <div className="cards-grid cards-grid-small">
          {alimentos.combos.map((combo) => (
            <FoodCard
              key={combo.id}
              name={combo.name}
              image={combo.image}
              price={combo.price}
              description={combo.description}
              onAdd={() => agregarAlCarrito(combo)}
            />
          ))}
        </div>
      </section>

      {/* bebidas */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconDrink size={24} color="var(--cinemex-red)" /> Bebidas
        </h2>
        <div className="cards-grid cards-grid-small">
          {alimentos.bebidas.map((bebida) => (
            <FoodCard
              key={bebida.id}
              name={bebida.name}
              image={bebida.image}
              price={bebida.price}
              description={bebida.description}
              onAdd={() => agregarAlCarrito(bebida)}
            />
          ))}
        </div>
      </section>

      {/* comestibles */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconFood size={24} color="var(--cinemex-red)" /> Comestibles
        </h2>
        <div className="cards-grid cards-grid-small">
          {alimentos.comestibles.map((comestible) => (
            <FoodCard
              key={comestible.id}
              name={comestible.name}
              image={comestible.image}
              price={comestible.price}
              description={comestible.description}
              onAdd={() => agregarAlCarrito(comestible)}
            />
          ))}
        </div>
      </section>

      {/* dulces */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconCandy size={24} color="var(--cinemex-red)" /> Snacks y Dulces
        </h2>
        <div className="cards-grid cards-grid-small">
          {alimentos.dulces.map((dulce) => (
            <FoodCard
              key={dulce.id}
              name={dulce.name}
              image={dulce.image}
              price={dulce.price}
              description={dulce.description}
              onAdd={() => agregarAlCarrito(dulce)}
            />
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}

export default Alimentos
