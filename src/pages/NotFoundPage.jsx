// ruta: 404
import { Link } from "react-router-dom"
import PageWrapper from "../components/PageWrapper"

function NotFoundPage() {
  return (
    <PageWrapper>
      <div className="not-found">
        <h1 className="not-found-code">404</h1>
        <h2>Página no encontrada</h2>
        <p>La página que buscas no existe o fue movida.</p>
        <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
      </div>
    </PageWrapper>
  )
}

export default NotFoundPage
