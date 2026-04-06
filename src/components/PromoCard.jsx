// reutilizable - tarjeta de promoción
import Button from "./Button"

function PromoCard({
  title,       // título de la promo
  image,       // URL de imagen
  badge,       // etiqueta destacada
  description, // descripción
  buttonText,  // texto del botón
  onVerMas     // evento click
}) {
  return (
    <div className="promo-card">
      {image && (
        <img
          src={image}
          alt={title}
          className="promo-card-image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x180/E41C23/FFFFFF?text=CINEMEX"
          }}
        />
      )}
      <div className="promo-card-content">
        {badge && <span className="promo-card-badge">{badge}</span>}
        <h4 className="promo-card-title">{title}</h4>
        {description && <p className="promo-card-description">{description}</p>}
        {buttonText && onVerMas && (
          <div style={{ marginTop: "16px" }}>
            <Button text={buttonText} onClick={onVerMas} variant="gold" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PromoCard
