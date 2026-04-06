// reutilizable - botón con variantes
function Button({
  text,      // texto del botón
  onClick,   // evento click
  variant,   // primary | secondary | gold
  fullWidth  // ancho completo
}) {
  const className = `btn btn-${variant || "primary"} ${fullWidth ? "btn-full" : ""}`.trim()

  return (
    <button onClick={onClick} className={className} style={fullWidth ? { width: "100%" } : {}}>
      {text}
    </button>
  )
}

export default Button
