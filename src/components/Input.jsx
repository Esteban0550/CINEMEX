// reutilizable - campo de formulario controlado
function Input({
  label,       // texto de la etiqueta
  type,        // tipo de input
  value,       // valor controlado
  onChange,    // evento onChange
  placeholder, // texto placeholder
  required,    // campo requerido
  name         // nombre del campo
}) {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type || "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        name={name}
        className="input-field"
      />
    </div>
  )
}

export default Input
