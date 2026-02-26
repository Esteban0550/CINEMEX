/**
 * ========================================
 * PÁGINA Alimentos - Menú de Snacks y Bebidas
 * ========================================
 * 
 * Esta página muestra el catálogo de alimentos disponibles
 * y gestiona un carrito de compras.
 * 
 * CONCEPTOS DEMOSTRADOS:
 * - useState: Estados para alimentos, carga y carrito
 * - useEffect: Carga de datos asincrona al montar
 * - Renderizado condicional: Panel del carrito
 * - Props de funciones: agregarAlCarrito, eliminarDelCarrito
 * - Iteración de arrays con .map()
 * 
 * FLUJO DE DATOS:
 * 1. useEffect carga datos JSON al montar componente
 * 2. Usuario hace click en "Agregar" → agregarAlCarrito(item)
 * 3. Estado global del carrito se actualiza en App.jsx
 * 4. Re-renderizado muestra productos actualizados
 */

import { useState, useEffect } from "react";
import FoodCard from "../components/FoodCard";
import Button from "../components/Button";
import { 
  IconPopcorn, 
  IconCart, 
  IconCelebration, 
  IconStar, 
  IconDrink, 
  IconFood, 
  IconCandy,
  IconClose
} from "../components/Icons";

function Alimentos({ agregarAlCarrito, carrito = [], eliminarDelCarrito, totalCarrito = 0 }) {
  // Estados para los datos de alimentos
  const [alimentos, setAlimentos] = useState({
    bebidas: [],
    comestibles: [],
    dulces: [],
    combos: []
  });
  
  // Estado de carga
  const [cargando, setCargando] = useState(true);
  
  // Estado para mostrar/ocultar carrito
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // useEffect para cargar alimentos desde JSON
  useEffect(() => {
    async function cargarAlimentos() {
      try {
        const response = await import("../data/alimentos.json");
        setAlimentos(response.default);
        setCargando(false);
      } catch (error) {
        console.error("Error cargando alimentos:", error);
        setCargando(false);
      }
    }
    
    cargarAlimentos();
  }, []);

  if (cargando) {
    return (
      <div className="page-container" style={{ textAlign: "center", paddingTop: "60px" }}>
        <h2>Cargando menú...</h2>
      </div>
    );
  }

  return (
    <main className="page-container">
      {/* ========================================
          TÍTULO DE LA SECCIÓN
          ======================================== */}
      <h1 className="section-title" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <IconPopcorn size={32} color="var(--cinemex-gold)" /> Alimentos y Bebidas
      </h1>
      <p style={{ color: "var(--cinemex-gray)", marginBottom: "32px" }}>
        Complementa tu experiencia de cine con nuestros deliciosos snacks
      </p>

      {/* ========================================
          BOTÓN DEL CARRITO
          onClick alterna visibilidad del panel
          ======================================== */}
      <div style={{ marginBottom: "24px" }}>
        <Button
          text={<span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <IconCart size={18} /> Ver Carrito ({carrito.length})
          </span>}
          onClick={() => setMostrarCarrito(!mostrarCarrito)}
          variant={carrito.length > 0 ? "gold" : "secondary"}
        />
      </div>

      {/* ========================================
          PANEL DEL CARRITO
          Se muestra/oculta basado en estado mostrarCarrito
          Renderizado condicional de contenido
          ======================================== */}
      {mostrarCarrito && (
        <div className="carrito-panel" style={{
          background: "var(--cinemex-white)",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "32px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ 
            marginBottom: "16px", 
            color: "var(--cinemex-black)",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <IconCart size={20} color="var(--cinemex-red)" /> Tu Carrito
          </h3>
          
          {carrito.length === 0 ? (
            <p style={{ color: "var(--cinemex-gray)" }}>
              Tu carrito está vacío. ¡Agrega algunos productos!
            </p>
          ) : (
            <>
              {/* Lista de productos en carrito */}
              <div style={{ marginBottom: "16px" }}>
                {carrito.map((item) => (
                  <div 
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 0",
                      borderBottom: "1px solid var(--cinemex-cream)"
                    }}
                  >
                    <div>
                      <strong>{item.name}</strong>
                      <span style={{ marginLeft: "8px", color: "var(--cinemex-gray)" }}>
                        x{item.cantidad}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ color: "var(--cinemex-red)", fontWeight: "bold" }}>
                        ${(item.price * item.cantidad).toFixed(2)}
                      </span>
                      {/* Botón eliminar con icono SVG */}
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
              
              {/* Total del carrito */}
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
                onClick={() => alert(`Total a pagar: $${totalCarrito.toFixed(2)}\n¡Gracias por tu compra!`)}
                variant="primary"
                fullWidth={true}
              />
            </>
          )}
        </div>
      )}

      {/* ========================================
          BANNER PROMOCIONAL
          Sección destacada con oferta especial
          ======================================== */}
      <div className="banner" style={{ marginTop: "0", marginBottom: "40px" }}>
        <h3 className="banner-title" style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
          <IconCelebration size={24} /> Combo Especial
        </h3>
        <p className="banner-text">
          Al comprar tu combo, ¡obtén un 15% de descuento en tu próxima visita!
        </p>
      </div>

      {/* ========================================
          SECCIÓN: COMBOS RECOMENDADOS
          Mapea array de combos a componentes FoodCard
          ======================================== */}
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
              onAgregar={() => agregarAlCarrito(combo)}
            />
          ))}
        </div>
      </section>

      {/* ========================================
          SECCIÓN: BEBIDAS
          ======================================== */}
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
              onAgregar={() => agregarAlCarrito(bebida)}
            />
          ))}
        </div>
      </section>

      {/* ========================================
          SECCIÓN: COMESTIBLES
          ======================================== */}
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
              onAgregar={() => agregarAlCarrito(comestible)}
            />
          ))}
        </div>
      </section>

      {/* ========================================
          SECCIÓN: SNACKS Y DULCES
          ======================================== */}
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
              onAgregar={() => agregarAlCarrito(dulce)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

// Exportamos el componente para uso en App.jsx
export default Alimentos;
