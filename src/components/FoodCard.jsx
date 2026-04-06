// reutilizable - tarjeta de alimento
import Button from "./Button"

function FoodCard({
  name,      // nombre del producto
  image,     // URL de imagen
  price,     // precio
  description, // descripción
  onAdd      // evento agregar al carrito
}) {
  const precioFormateado = typeof price === "number" ? price.toFixed(2) : price

  return (
    <div className="food-card">
      <img
        src={image}
        alt={name}
        className="food-card-image"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x200/1A1A1A/FFD700?text=CINEMEX"
        }}
      />
      <div className="food-card-content">
        <h4 className="food-card-title">{name}</h4>
        {description && <p className="food-card-description">{description}</p>}
        <p className="food-card-price">${precioFormateado}</p>
        {/* evento onClick - agregar */}
        {onAdd && <Button text="Agregar al Carrito" onClick={onAdd} variant="gold" />}
      </div>
    </div>
  )
}

export default FoodCard
