# CINEMEX - Proyecto React (SPA)

Aplicacion web tipo SPA inspirada en Cinemex, desarrollada con React + Vite.

Incluye:
- Navegacion con React Router
- Cartelera y detalle dinamico de peliculas
- Sistema de favoritos
- Catalogo de alimentos con carrito
- Seccion de promociones y formatos
- Carrusel principal con Swiper
- Footer global
- Vistas informativas de texto

## Objetivo del proyecto

Practicar desarrollo frontend modular con componentes reutilizables, manejo de estado con hooks, enrutamiento por URL y diseno responsive.

## Tecnologias usadas

- React 19
- Vite
- React Router DOM
- Swiper
- CSS (global + por secciones)

## Dependencias principales

```json
{
	"react": "^19.2.0",
	"react-dom": "^19.2.0",
	"react-router-dom": "^7.13.1",
	"swiper": "^12.1.2"
}
```

## Funcionalidades implementadas

### 1. Navegacion SPA con rutas

Se utiliza `BrowserRouter` y rutas declarativas para mantener la navegacion por URL sin recargar pagina.

Rutas actuales:
- `/` -> Home
- `/cartelera` -> Cartelera
- `/pelicula/:id` -> Detalle dinamico por ID
- `/alimentos` -> Alimentos y carrito
- `/otros` -> Promociones, formatos y preventas
- `/favoritos` -> Peliculas favoritas
- `/terminos` -> Vista informativa (texto)
- `/privacidad` -> Vista informativa (texto)

### 2. Carrusel de estrenos (Swiper)

Se implemento un nuevo componente:
- `src/components/MovieCarousel.jsx`

Caracteristicas:
- Flechas de navegacion
- Paginacion clickable
- Autoplay
- Loop infinito
- Botones de accion por slide (cartelera y detalle)

Integracion:
- Se renderiza en `src/pages/Home.jsx`

### 3. Footer global

Se mantiene el footer al final de toda la aplicacion desde `src/App.jsx`.

Componente:
- `src/components/Footer.jsx`

Contenido:
- Atencion telefonica prioritaria
- Enlaces institucionales utiles
- Bloque de apps y aliados (version simplificada)
- Cierre legal/copyright

Decisiones de diseno del footer:
- Se redistribuyo en tres bloques con jerarquia clara: contacto, enlaces utiles y ecosistema digital (apps + aliados).
- Se compacto la informacion para que el usuario encuentre rapido lo importante sin recorrer un bloque largo.
- Se incorporaron enlaces directos en la columna central para mejorar navegacion secundaria desde el cierre de pagina.
- Se ordenaron los elementos por prioridad visual: primero telefono, despues acceso rapido, y al final elementos de confianza de marca.
- Se aplicaron badges y chips en apps/aliados para separar mejor grupos de informacion sin sobrecargar la interfaz.
- Se optimizo responsive: en mobile pasa a columna unica con separadores y botones de app a ancho completo para legibilidad y toque.

Por que este cambio fue mejor:
- Mejora el escaneo visual en menos tiempo.
- Reduce ruido y mantiene solo informacion util.
- Refuerza apariencia profesional e institucional.
- Aumenta claridad de navegacion y contacto desde cualquier vista.

### 4. Manejo de estado

En `src/App.jsx` se administran estados globales compartidos por varias vistas:

- `carrito`: productos de alimentos
- `favoritos`: peliculas marcadas

Funciones principales:
- `agregarAlCarrito(producto)`
- `eliminarDelCarrito(productoId)`
- `toggleFavorito(pelicula)`

### 5. Home y Cartelera

`Home` y `Cartelera` consumen datos de `src/data/peliculas.json` y muestran tarjetas con:
- Imagen
- Titulo
- Genero
- Duracion
- Clasificacion
- Accion de favorito
- Accion de ver detalle

Tambien incluyen busqueda y renderizado condicional para estados vacios/carga.

### 6. Detalle dinamico por pelicula

En `src/pages/Detalle.jsx` se usa `useParams()` para leer el `id` de la URL, buscar la pelicula correspondiente y mostrar informacion completa.

### 7. Alimentos y carrito

Vista `Alimentos`:
- Carga catalogo desde `src/data/alimentos.json`
- Permite agregar productos
- Muestra panel de carrito
- Calcula total de compra
- Permite eliminar productos

### 8. Vistas informativas (actividad)

Se agregaron 2 vistas solo de texto informativo:
- `src/pages/Terminos.jsx`
- `src/pages/Privacidad.jsx`

Ambas conectadas en:
- `src/App.jsx` (rutas)
- `src/components/Header.jsx` (enlaces de menu)

## Estructura principal del proyecto

```text
src/
	components/
		Button.jsx
		FoodCard.jsx
		Footer.jsx
		Header.jsx
		Icons.jsx
		MovieCard.jsx
		MovieCarousel.jsx
		PromoCard.jsx
	data/
		alimentos.json
		peliculas.json
	pages/
		Alimentos.jsx
		Cartelera.jsx
		Detalle.jsx
		Favoritos.jsx
		Home.jsx
		Otros.jsx
		Privacidad.jsx
		Terminos.jsx
	App.jsx
	App.css
	index.css
	main.jsx
```

## Scripts disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para produccion
npm run preview  # Previsualiza build
npm run lint     # Ejecuta ESLint
```

## Instalacion y ejecucion local

1. Instalar dependencias:

```bash
npm install
```

2. Levantar entorno de desarrollo:

```bash
npm run dev
```

3. Abrir en navegador:

```text
http://localhost:5173/
```

## Comprobaciones realizadas

Estado actual verificado:
- `npm run build` -> OK
- `npm run lint` -> OK

## Notas academicas

- Proyecto orientado a practica de componentes, hooks, rutas y estado compartido.
- Las acciones de compra mostradas en UI son demostrativas.
- El contenido visual y datos son usados con finalidad educativa.

## Autor

Proyecto academico - TSU / Desarrollo Frontend.
