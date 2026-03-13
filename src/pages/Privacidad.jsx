function Privacidad() {
  return (
    <main className="page-container informative-view">
      <h1 className="section-title">Aviso de Privacidad</h1>
      <p>
        En esta version del proyecto no se almacena informacion personal en una base de datos externa.
      </p>
      <p>
        Los datos de favoritos y carrito solo viven en memoria durante la sesion activa del navegador.
      </p>
      <p>
        Si la pagina se recarga, los datos temporales pueden perderse, porque no existe persistencia en servidor.
      </p>
      <p>
        Para una version productiva se deberian implementar politicas de proteccion de datos, cifrado y consentimiento informado.
      </p>
    </main>
  );
}

export default Privacidad;
