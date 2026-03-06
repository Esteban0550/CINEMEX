# CINEMEX - Actividad 9 (React Router)

En esta actividad implemente el sistema de navegacion de mi SPA de cine usando `react-router-dom`.

Antes estaba navegando con estados y eventos, pero al recargar se perdia la vista.
Ahora la navegacion se mantiene por URL y eso mejora la experiencia del usuario.

## Lo que agregue

- Instalacion de `react-router-dom`
- Configuracion de `BrowserRouter`
- Rutas principales en `App.jsx`
- Ruta dinamica `/pelicula/:id`
- Uso de `useParams` para detalle dinamico
- Menu funcional con `NavLink` y pagina activa
- Navegacion con `useNavigate`
- Pagina adicional: `Favoritos`

## 1) Configuracion de React Router

### `src/main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
)
```

## 2) Organizacion de rutas en el archivo principal

### `src/App.jsx`

```jsx
import { Routes, Route } from "react-router-dom"

<Routes>
	<Route path="/" element={<Home favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
	<Route path="/cartelera" element={<Cartelera favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
	<Route path="/pelicula/:id" element={<Detalle favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
	<Route path="/alimentos" element={<Alimentos agregarAlCarrito={agregarAlCarrito} carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} totalCarrito={totalCarrito} />} />
	<Route path="/otros" element={<Otros />} />
	<Route path="/favoritos" element={<Favoritos favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
</Routes>
```

## 3) Ruta dinamica y `useParams`

### `src/pages/Detalle.jsx`

```jsx
import { useParams } from "react-router-dom"

const { id } = useParams()

useEffect(() => {
	async function cargarPelicula() {
		const response = await import("../data/peliculas.json")
		const peliculas = response.default
		const peliculaEncontrada = peliculas.find(p => p.id === parseInt(id))
		setPelicula(peliculaEncontrada)
		setCargando(false)
	}

	cargarPelicula()
}, [id])
```

Con esto, cada URL tipo `/pelicula/1` o `/pelicula/2` muestra una pelicula diferente.

## 4) Navegacion visible con `NavLink`

### `src/components/Header.jsx`

```jsx
import { NavLink } from "react-router-dom";

<NavLink
	to="/cartelera"
	className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
>
	Cartelera
</NavLink>
```

Use `NavLink` para que la opcion activa del menu se vea marcada y el usuario sepa en que pagina esta.

## 5) Navegacion por accion con `useNavigate`

### `src/pages/Home.jsx` y `src/pages/Cartelera.jsx`

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

onVerDetalle={() => navigate(`/pelicula/${pelicula.id}`)}
```

Aqui cuando le das click a "Ver detalle" te manda a la ruta dinamica de esa pelicula.

## 6) Vista adicional (requisito extra)

Agregue la pagina **Favoritos**:

- Archivo: `src/pages/Favoritos.jsx`
- Ruta: `/favoritos`
- Opcion nueva en el menu superior

Esta pagina junta las peliculas marcadas como favoritas para tener acceso rapido.

## Justificacion breve de UX

La razon de usar rutas fue que con estado local se perdia la vista al recargar.
Con React Router se mantiene el flujo por URL, mejora la claridad de navegacion y tambien funciona mejor el boton atras/adelante del navegador.

Tambien se dejo indicador visual de pagina activa para que el usuario no se pierda en la app.

## Como ejecutar el proyecto

```bash
npm install
npm run dev
```

Abrir en navegador:

```text
http://localhost:5173/
```

## Rutas implementadas

- `/` -> Home
- `/cartelera` -> Cartelera
- `/pelicula/:id` -> Detalle dinamico
- `/alimentos` -> Alimentos
- `/otros` -> Otros
- `/favoritos` -> Vista adicional

## Nota final

Este README describe lo que se implemento para la Actividad 9: sistema de navegacion y flujos con React Router en una SPA.
