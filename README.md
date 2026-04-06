# Guion completo para video (que decir + donde abrir)

Este guion esta hecho para explicar bien todo, en primera persona, con el orden de la rubrica y con ubicaciones exactas para abrir archivos rapido.

## Mapa rapido durante la explicacion (sin perderte)

Usa estas frases tal cual mientras grabas:

- Cuando diga: "Aqui muestro el Header" -> abro: src/components/Header.jsx
- Cuando diga: "Aqui muestro el Footer" -> abro: src/components/Footer.jsx
- Cuando diga: "Aqui muestro una card reutilizable" -> abro: src/components/MovieCard.jsx
- Cuando diga: "Aqui muestro la card de alimentos" -> abro: src/components/FoodCard.jsx
- Cuando diga: "Aqui muestro props y estado global" -> abro: src/App.jsx
- Cuando diga: "Aqui muestro las rutas" -> abro: src/routes/AppRoutes.jsx
- Cuando diga: "Aqui muestro donde inicia React Router" -> abro: src/main.jsx
- Cuando diga: "Aqui muestro formulario controlado" -> abro: src/pages/ComprarPage.jsx
- Cuando diga: "Aqui muestro otro formulario" -> abro: src/pages/ContactoPage.jsx
- Cuando diga: "Aqui muestro eventos de filtros y busqueda" -> abro: src/pages/Cartelera.jsx
- Cuando diga: "Aqui muestro favoritos y navegacion a detalle" -> abro: src/pages/Favoritos.jsx
- Cuando diga: "Aqui muestro detalle con ruta dinamica" -> abro: src/pages/Detalle.jsx
- Cuando diga: "Aqui muestro consumo de datos" -> abro: src/data/index.js
- Cuando diga: "Aqui muestro el JSON de peliculas" -> abro: src/data/peliculas.json
- Cuando diga: "Aqui muestro el JSON de alimentos" -> abro: src/data/alimentos.json
- Cuando diga: "Aqui muestro flex, grid y media queries" -> abro: src/App.css

Orden recomendado para no trabarte:

1. src/App.jsx
2. src/components/Header.jsx
3. src/components/Footer.jsx
4. src/components/MovieCard.jsx
5. src/routes/AppRoutes.jsx
6. src/main.jsx
7. src/pages/Cartelera.jsx
8. src/pages/Detalle.jsx
9. src/pages/ComprarPage.jsx
10. src/data/index.js
11. src/App.css

## 1. Arquitectura del proyecto

### Que digo

Yo organice el proyecto por capas para mantenerlo limpio y escalable.
Tengo una carpeta de componentes reutilizables, otra de paginas, otra para rutas y otra para datos JSON.
Mi objetivo fue separar responsabilidades: los componentes muestran interfaz, las paginas componen vistas completas, las rutas conectan la navegacion y los datos se centralizan fuera de las vistas.

Tambien explico reutilizacion.
Header y Footer se repiten en toda la aplicacion.
MovieCard se reutiliza en Home, Cartelera y Favoritos.
FoodCard se reutiliza para categorias de alimentos.
Button e Input se usan en varias pantallas para mantener consistencia.

Sobre props, yo explico dos casos claros.
Primer caso: en App paso estados y funciones como favoritos, carrito, toggleFavorito y agregarAlCarrito hacia AppRoutes y paginas.
Segundo caso: MovieCard recibe props de datos (titulo, imagen, genero, duracion) y props de comportamiento (onClick, onToggleFavorito).

### Donde abro

- src/App.jsx
- src/routes/AppRoutes.jsx
- src/components/Header.jsx
- src/components/Footer.jsx
- src/components/MovieCard.jsx
- src/components/FoodCard.jsx
- src/components/Input.jsx
- src/components/Button.jsx
- src/components/PageWrapper.jsx
- src/components/HeroBanner.jsx
- src/components/MovieCarousel.jsx
- src/data/index.js

### Que muestro en pantalla

Muestro App para evidenciar el estado central.
Luego abro 2 o 3 componentes reutilizables y explico por que no repito codigo.
Cierro esta parte mostrando src/data/index.js para justificar la separacion de datos.

## 2. Diseno, layout y responsividad

### Que digo

Para layout use Flexbox y Grid segun el tipo de distribucion.
Flexbox lo use cuando necesitaba alinear en una sola direccion, por ejemplo en header, botones o filas.
Grid lo use en galerias de tarjetas y secciones con columnas.

La diferencia principal que explico es simple.
Flexbox me resuelve una dimension (fila o columna).
Grid me permite controlar filas y columnas al mismo tiempo.

En responsividad, yo probe en desktop y movil.
En movil se activa menu hamburguesa, cambian columnas de tarjetas y footer se adapta a una columna.
Esto demuestra que la interfaz responde de forma funcional y no solo visual.

### Donde abro

- src/App.css
- src/index.css
- src/components/Header.jsx
- src/components/Footer.jsx
- src/pages/Home.jsx
- src/pages/Cartelera.jsx
- src/pages/Alimentos.jsx

### Que muestro en pantalla

En App.css busco reglas de display flex, display grid y media queries.
Despues corro la app y cambio entre vista desktop y movil para comprobar el comportamiento.

## 3. Eventos y formularios

### Que digo

En esta parte explico que implemente onClick, onChange y onSubmit.
onClick lo uso para acciones de usuario como abrir menu, agregar al carrito, marcar favoritos y navegar.
onChange lo uso para busquedas y campos controlados.
onSubmit lo uso para procesar envios de formularios.

Sobre formularios, explico que son controlados porque el valor de cada input vive en el estado.
Eso me permite validar, limpiar campos y controlar flujo de envio de forma predecible.

Tambien aclaro consumo de datos.
No hardcodeo peliculas ni alimentos dentro de cada pagina.
Los datos salen de JSON y se importan desde un punto central.

### Donde abro

- src/pages/Home.jsx
- src/pages/Cartelera.jsx
- src/pages/Alimentos.jsx
- src/pages/Detalle.jsx
- src/pages/ContactoPage.jsx
- src/pages/ComprarPage.jsx
- src/pages/Otros.jsx
- src/components/Input.jsx
- src/data/index.js
- src/data/peliculas.json
- src/data/alimentos.json

### Que muestro en pantalla

Muestro un onClick, un onChange y un onSubmit reales.
Luego enseño un formulario controlado completo en ComprarPage o ContactoPage.
Cierro enseñando los JSON para demostrar origen de datos.

## 4. Navegacion con React Router

### Que digo

Yo centralice rutas en un archivo para que el mapa de navegacion sea claro.
En AppRoutes estan todas las rutas principales, incluida la ruta dinamica de detalle por id y la ruta 404.

Tambien explico componentes de navegacion.
Route define que vista corresponde a cada URL.
NavLink lo uso en el menu para resaltar ruta activa.
Link lo uso para navegar dentro de cards y botones.

La evidencia clave: es SPA.
Cambio entre pantallas y la URL cambia, pero no hay recarga completa.

### Donde abro

- src/main.jsx
- src/routes/AppRoutes.jsx
- src/components/Header.jsx
- src/components/Footer.jsx
- src/components/MovieCard.jsx
- src/pages/Detalle.jsx
- src/pages/NotFoundPage.jsx

### Que muestro en pantalla

Abro AppRoutes y leo rapidamente cada path.
Luego navego en vivo por Home, Cartelera, Detalle y Comprar para mostrar cambio de URL sin reload.

## 5. Integracion del proyecto

### Que digo

En integracion explico que no son pantallas aisladas, sino un flujo conectado.
Desde Home el usuario puede explorar peliculas, ver detalle, marcar favoritos, pasar a compra o ir a alimentos.
Todo se mantiene coherente porque App centraliza estados compartidos.

Tambien explico el flujo principal de usuario.
Inicio -> Cartelera -> Detalle -> Comprar.
Y flujo secundario: Inicio -> Comida -> Carrito.

### Donde abro

- src/App.jsx
- src/pages/Home.jsx
- src/pages/Cartelera.jsx
- src/pages/Detalle.jsx
- src/pages/ComprarPage.jsx
- src/pages/Alimentos.jsx
- src/pages/Favoritos.jsx

### Que muestro en pantalla

Hago un recorrido real de usuario entre esas vistas para comprobar continuidad de experiencia.

## Cierre listo para decir

Como conclusion, mi proyecto cumple con los criterios de arquitectura por componentes, props para comunicacion, eventos y formularios controlados, consumo de datos por JSON, navegacion con React Router y diseno responsive funcional.
Ademas, demostre el flujo completo entre pantallas en una SPA sin recargas.
