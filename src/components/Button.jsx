// Componente de botón reutilizable con variantes
function Button({ text, onClick, variant = "primary", fullWidth = false }) {
  // Determinar la clase según la variante
  const getButtonClass = () => {
    const baseClass = "btn";
    const variantClass = `btn-${variant}`;
    const widthClass = fullWidth ? "btn-full" : "";
    return `${baseClass} ${variantClass} ${widthClass}`.trim();
  };

  return (
    <button
      onClick={onClick}
      className={getButtonClass()}
      style={fullWidth ? { width: "100%" } : {}}
    >
      {/* Mostramos el texto recibido como prop */}
      {text}
    </button>
  );
}

// Exportamos el componente para poder reutilizarlo
export default Button;
