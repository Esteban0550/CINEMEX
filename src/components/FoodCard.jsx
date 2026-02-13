// Componente tarjeta de alimento reutilizable
import Button from "./Button";

function FoodCard({ name, image, price, description, onAgregar }) {
  return (
    <div className="food-card">
      {/* Imagen del alimento */}
      <img
        src={image}
        alt={name}
        className="food-card-image"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x200/1A1A1A/FFD700?text=CINEMEX";
        }}
      />
      
      {/* Contenido de la tarjeta */}
      <div className="food-card-content">
        <h4 className="food-card-title">{name}</h4>
        
        {/* Descripción opcional */}
        {description && (
          <p className="food-card-description">{description}</p>
        )}
        
        {/* Precio */}
        <p className="food-card-price">${price}</p>
        
        {/* Botón de agregar */}
        {onAgregar && (
          <Button 
            text="Agregar" 
            onClick={onAgregar} 
            variant="gold"
          />
        )}
      </div>
    </div>
  );
}

export default FoodCard;
