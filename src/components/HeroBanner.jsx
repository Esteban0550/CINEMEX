// único - banner hero solo en Home
function HeroBanner({ title, highlight, subtitle }) {
  return (
    <section className="hero">
      <h1 className="hero-title">
        {title} <span>{highlight}</span>
      </h1>
      <p className="hero-subtitle">{subtitle}</p>
    </section>
  )
}

export default HeroBanner
