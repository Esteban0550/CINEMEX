/**
 * ========================================
 * COMPONENTES DE ICONOS SVG
 * ========================================
 * 
 * Este archivo contiene todos los iconos SVG utilizados en la aplicación.
 * Se usan como componentes React reutilizables para mantener consistencia
 * visual y evitar el uso de emojis que pueden variar entre dispositivos.
 * 
 * Cada icono acepta props opcionales:
 * - size: tamaño del icono (default: 24)
 * - color: color del icono (default: "currentColor")
 * - className: clases CSS adicionales
 */

// ========================================
// ICONO: Película/Cine (claqueta)
// Uso: Títulos de secciones de películas
// ========================================
export function IconMovie({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
    </svg>
  );
}

// ========================================
// ICONO: Búsqueda (lupa)
// Uso: Campo de búsqueda, filtros
// ========================================
export function IconSearch({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <circle cx="11" cy="11" r="8"/>
      <path d="M21 21l-4.35-4.35"/>
    </svg>
  );
}

// ========================================
// ICONO: Corazón lleno (favorito activo)
// Uso: Indicar que un elemento está en favoritos
// ========================================
export function IconHeartFilled({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}

// ========================================
// ICONO: Corazón vacío (favorito inactivo)
// Uso: Indicar que se puede agregar a favoritos
// ========================================
export function IconHeartOutline({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

// ========================================
// ICONO: Carrito de compras
// Uso: Sección de alimentos, badge de carrito
// ========================================
export function IconCart({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  );
}

// ========================================
// ICONO: Reloj/Duración
// Uso: Mostrar duración de películas
// ========================================
export function IconClock({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
  );
}

// ========================================
// ICONO: Ticket/Boleto
// Uso: Sección de compra de boletos
// ========================================
export function IconTicket({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c1.1 0 2 .9 2 2s-.9 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.81-2.77-2-3.46V6h16v2.54z"/>
    </svg>
  );
}

// ========================================
// ICONO: Palomitas/Alimentos
// Uso: Sección de alimentos
// ========================================
export function IconPopcorn({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M7 22H4.5C4.22 22 4 21.78 4 21.5V11c0-.28.22-.5.5-.5H7v11.5zm6 0h-5V10.5h5V22zm6.5 0H17V10.5h2.5c.28 0 .5.22.5.5v10.5c0 .28-.22.5-.5.5zM7.5 2C5.57 2 4 3.57 4 5.5c0 .59.15 1.14.41 1.63C3.55 7.66 3 8.52 3 9.5c0 .28.22.5.5.5h17c.28 0 .5-.22.5-.5 0-.98-.55-1.84-1.41-2.37.26-.49.41-1.04.41-1.63C20 3.57 18.43 2 16.5 2c-1.25 0-2.35.65-2.97 1.64C12.91 3.24 12 3 11.03 3c-.97 0-1.88.24-2.5.64C7.91 2.65 6.81 2 7.5 2z"/>
    </svg>
  );
}

// ========================================
// ICONO: Bebida
// Uso: Sección de bebidas
// ========================================
export function IconDrink({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"/>
    </svg>
  );
}

// ========================================
// ICONO: Comida/Pizza
// Uso: Sección de comestibles
// ========================================
export function IconFood({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  );
}

// ========================================
// ICONO: Dulces/Candy
// Uso: Sección de dulces y snacks
// ========================================
export function IconCandy({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-6.41.59L3.54 6.54l1.39-1.39 2.05 2.05c1.02-.85 2.27-1.43 3.63-1.62V2h2v3.58c1.36.19 2.61.78 3.63 1.62l2.05-2.05 1.39 1.39-2.05 2.05c.85 1.02 1.43 2.27 1.62 3.63H22v2h-3.58c-.19 1.36-.78 2.61-1.62 3.63l2.05 2.05-1.39 1.39-2.05-2.05c-1.02.85-2.27 1.43-3.63 1.62V22h-2v-3.58c-1.36-.19-2.61-.78-3.63-1.62l-2.05 2.05-1.39-1.39 2.05-2.05c-.85-1.02-1.43-2.27-1.62-3.63H2v-2h3.58c.19-1.36.78-2.61 1.62-3.63z"/>
    </svg>
  );
}

// ========================================
// ICONO: Estrella (favoritos/destacado)
// Uso: Combos recomendados, sección especial
// ========================================
export function IconStar({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  );
}

// ========================================
// ICONO: Celebración/Promoción
// Uso: Banners de promociones
// ========================================
export function IconCelebration({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M2 22l14-5-9-9-5 14zm12.53-9.47l5.59-5.59c.49-.49 1.28-.49 1.77 0l.59.59c.49.49.49 1.28 0 1.77l-5.59 5.59-2.36-2.36zM13.5 7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM19 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zM8 3c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"/>
    </svg>
  );
}

// ========================================
// ICONO: Proyector/Formatos
// Uso: Sección de formatos especiales
// ========================================
export function IconProjector({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M22 13h-4v-2h4v2zm-6-2v2H4V3H2v18h2v-6h18v-4c0-1.1-.9-2-2-2zM8.5 13c1.38 0 2.5-1.12 2.5-2.5S9.88 8 8.5 8 6 9.12 6 10.5 7.12 13 8.5 13z"/>
    </svg>
  );
}

// ========================================
// ICONO: Tarjeta/Membresía
// Uso: Sección de membresías
// ========================================
export function IconCard({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
    </svg>
  );
}

// ========================================
// ICONO: Teléfono
// Uso: Información de contacto
// ========================================
export function IconPhone({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  );
}

// ========================================
// ICONO: Email/Correo
// Uso: Información de contacto, newsletter
// ========================================
export function IconEmail({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}

// ========================================
// ICONO: Ubicación/Pin
// Uso: Información de contacto, dirección
// ========================================
export function IconLocation({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );
}

// ========================================
// ICONO: Smartphone/App
// Uso: Banner de descarga de app
// ========================================
export function IconSmartphone({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
    </svg>
  );
}

// ========================================
// ICONO: Viento (4DX)
// Uso: Formato 4DX
// ========================================
export function IconWind({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
    </svg>
  );
}

// ========================================
// ICONO: Persona/Junior
// Uso: Formato Junior
// ========================================
export function IconPerson({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );
}

// ========================================
// ICONO: Cerrar (X)
// Uso: Eliminar items, cerrar modales
// ========================================
export function IconClose({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  );
}
