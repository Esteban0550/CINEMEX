// Importamos componentes
import FoodCard from "../components/FoodCard";

function Alimentos() {
  // Datos de bebidas
  const bebidas = [
    {
      id: 1,
      name: "Refresco Grande",
      image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400",
      price: "75.00",
      description: "Coca-Cola, Sprite o Fanta de 32oz"
    },
    {
      id: 2,
      name: "ICEE Mediano",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400",
      price: "65.00",
      description: "Frambuesa, Cereza o Uva"
    },
    {
      id: 3,
      name: "Café Americano",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
      price: "55.00",
      description: "Café recién preparado 12oz"
    }
  ];

  // Datos de comestibles (palomitas, hot dogs, etc.)
  const comestibles = [
    {
      id: 1,
      name: "Palomitas Grandes",
      image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=400",
      price: "95.00",
      description: "Palomitas de maíz con mantequilla"
    },
    {
      id: 2,
      name: "Hot Dog Jumbo",
      image: "https://images.unsplash.com/photo-1612392062631-94e0e67e7206?w=400",
      price: "75.00",
      description: "Salchicha jumbo con ingredientes"
    },
    {
      id: 3,
      name: "Nachos con Queso",
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400",
      price: "85.00",
      description: "Totopos con queso derretido y jalapeños"
    }
  ];

  // Datos de snacks y dulces
  const dulces = [
    {
      id: 1,
      name: "M&M's Grande",
      image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=400",
      price: "55.00",
      description: "Chocolate con cacahuate"
    },
    {
      id: 2,
      name: "Gomitas Surtidas",
      image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400",
      price: "45.00",
      description: "Variedad de gomitas de frutas"
    },
    {
      id: 3,
      name: "Chocolate Hershey's",
      image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400",
      price: "50.00",
      description: "Barra de chocolate con leche"
    }
  ];

  // Combos especiales
  const combos = [
    {
      id: 1,
      name: "Combo Individual",
      image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400",
      price: "145.00",
      description: "Palomitas medianas + Refresco mediano"
    },
    {
      id: 2,
      name: "Combo Pareja",
      image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=400",
      price: "220.00",
      description: "Palomitas grandes + 2 Refrescos medianos"
    }
  ];

  return (
    <main className="page-container">
      {/* Título de la sección */}
      <h1 className="section-title">🍿 Alimentos y Bebidas</h1>
      <p style={{ color: "var(--cinemex-gray)", marginBottom: "32px" }}>
        Complementa tu experiencia de cine con nuestros deliciosos snacks
      </p>

      {/* Banner de promoción */}
      <div className="banner" style={{ marginTop: "0", marginBottom: "40px" }}>
        <h3 className="banner-title">🎉 Combo Especial</h3>
        <p className="banner-text">
          Al comprar tu combo, ¡obtén un 15% de descuento en tu próxima visita!
        </p>
      </div>

      {/* Sección: Combos */}
      <section>
        <h2 className="section-subtitle">⭐ Combos Recomendados</h2>
        <div className="cards-grid cards-grid-small">
          {combos.map((combo) => (
            <FoodCard
              key={combo.id}
              name={combo.name}
              image={combo.image}
              price={combo.price}
              description={combo.description}
              onAgregar={() => alert(`${combo.name} agregado al carrito`)}
            />
          ))}
        </div>
      </section>

      {/* Sección: Bebidas */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle">🥤 Bebidas</h2>
        <div className="cards-grid cards-grid-small">
          {bebidas.map((bebida) => (
            <FoodCard
              key={bebida.id}
              name={bebida.name}
              image={bebida.image}
              price={bebida.price}
              description={bebida.description}
              onAgregar={() => alert(`${bebida.name} agregado al carrito`)}
            />
          ))}
        </div>
      </section>

      {/* Sección: Comestibles */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle">🍕 Comestibles</h2>
        <div className="cards-grid cards-grid-small">
          {comestibles.map((comestible) => (
            <FoodCard
              key={comestible.id}
              name={comestible.name}
              image={comestible.image}
              price={comestible.price}
              description={comestible.description}
              onAgregar={() => alert(`${comestible.name} agregado al carrito`)}
            />
          ))}
        </div>
      </section>

      {/* Sección: Snacks y Dulces */}
      <section style={{ marginTop: "48px" }}>
        <h2 className="section-subtitle">🍬 Snacks y Dulces</h2>
        <div className="cards-grid cards-grid-small">
          {dulces.map((dulce) => (
            <FoodCard
              key={dulce.id}
              name={dulce.name}
              image={dulce.image}
              price={dulce.price}
              description={dulce.description}
              onAgregar={() => alert(`${dulce.name} agregado al carrito`)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

// Exportamos la vista
export default Alimentos;
