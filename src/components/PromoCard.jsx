// Componente tarjeta de promoción reutilizable
import Button from "./Button";

function PromoCard({ title, image, badge, description, buttonText, onVerMas }) {
  return (
    <div className="promo-card">
      {/* Imagen de la promoción */}
      {image && (
        <img
          src={image}
          alt={title}
          className="promo-card-image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x180/E41C23/FFFFFF?text=CINEMEX";
          }}
        />
      )}
      
      {/* Contenido de la tarjeta */}
      <div className="promo-card-content">
        {/* Badge/Etiqueta */}
        {badge && (
          <span className="promo-card-badge">{badge}</span>
        )}
        
        {/* Título */}
        <h4 className="promo-card-title">{title}</h4>
        
        {/* Descripción */}
        {description && (
          <p className="promo-card-description">{description}</p>
        )}
        
        {/* Botón opcional */}
        {buttonText && onVerMas && (
          <div style={{ marginTop: "16px" }}>
            <Button 
              text={buttonText} 
              onClick={onVerMas} 
              variant="gold"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PromoCard;
