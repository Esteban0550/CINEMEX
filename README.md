# CINEMEX - Optimizacion de rendimiento y buenas practicas (React + Vite)

Este proyecto fue optimizado para cumplir la actividad de evaluacion UX enfocada en organizacion del proyecto, buenas practicas y documentacion tecnica.

## Objetivo de esta actualizacion

Aplicar mejoras reales en estructura y mantenimiento del codigo para reducir complejidad, evitar cargas repetidas y facilitar futuras iteraciones del proyecto.

## 1) Organizacion del proyecto

### Cambios aplicados

- Se separo el enrutado en un archivo dedicado:
  - `src/routes/AppRoutes.jsx`
- `src/App.jsx` ahora queda enfocado en estado global y layout (Header/Main/Footer).
- Se agrego un punto central de datos:
  - `src/data/index.js`
- Se mantiene `src/data/alimentos.json` y `src/data/peliculas.json` como fuente unica de datos.

### Beneficio tecnico

- Menor acoplamiento entre enrutado y estado global.
- Mejor mantenibilidad: rutas en un solo lugar.
- Mejor escalabilidad para agregar nuevas vistas sin ensuciar `App.jsx`.

## 2) Buenas practicas aplicadas

### a) Eliminacion de codigo innecesario

- Se elimino `src/detalles.json` por ser un archivo redundante (duplicaba informacion de peliculas y no se usaba).
- Se limpiaron bloques de comentarios extensos y desactualizados en paginas clave.

### b) Uso adecuado de archivos para consumo de datos

Antes:
- Varias paginas hacian `import()` dinamico dentro de `useEffect` para leer JSON en cada vista.

Ahora:
- Las vistas consumen los datos desde `src/data/index.js`.
- Se evita repetir logica de carga y estados de carga innecesarios para datos locales estaticos.

Paginas optimizadas:
- `src/pages/Home.jsx`
- `src/pages/Cartelera.jsx`
- `src/pages/Detalle.jsx`
- `src/pages/Alimentos.jsx`

### c) Mejora de actualizacion de estado

- En `src/App.jsx` se migraron actualizaciones a forma funcional (`setState(prev => ...)`) para evitar dependencias del cierre y hacer el estado mas robusto.

### d) Mejoras de rendimiento ligeras

- Se uso `useMemo` para filtrar peliculas y generar generos en vistas donde aplica (`Home` y `Cartelera`).

## 3) Documentacion del proceso (justificacion tecnica)

### Que se optimizo

- Estructura de rutas.
- Estructura de datos.
- Limpieza de codigo redundante.
- Flujo de estado en carrito/favoritos.
- Filtrado de datos con memoizacion.

### Por que se eligieron estas decisiones

- Separar rutas mejora lectura y mantenimiento.
- Centralizar datos evita duplicacion de logica y posibles inconsistencias.
- Eliminar archivos no usados reduce deuda tecnica.
- Usar setters funcionales evita errores cuando hay actualizaciones consecutivas.
- Memoizar filtros reduce calculo en cada render cuando no cambian dependencias.

## Estructura principal actualizada

```text
src/
  components/
  data/
    alimentos.json
    peliculas.json
    index.js
  pages/
    Alimentos.jsx
    Cartelera.jsx
    Detalle.jsx
    Favoritos.jsx
    Home.jsx
    Otros.jsx
    Privacidad.jsx
    Terminos.jsx
  routes/
    AppRoutes.jsx
  App.css
  App.jsx
  index.css
  main.jsx
```

## Validacion realizada

Comandos ejecutados despues de los cambios:

```bash
npm run lint
npm run build
```

Resultado:
- Lint sin errores.
- Build exitoso en Vite.

## Tecnologias

- React 19
- Vite
- React Router DOM
- Swiper
- CSS

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Criterios de evaluacion y formato de entrega (actividad)

### Entregables solicitados

- Link al repositorio del proyecto.
- Documento PDF con los contenidos de la actividad.

### Reglas de entrega

- Entrega en tiempo y forma.
- Por cada dia de retraso se descuentan 2 puntos.
- Buena ortografia y redaccion.

### Estructura minima del PDF

- Portada con:
  - Logotipo de la institucion
  - Nombre del TSU
  - Asignatura
  - Cuatrimestre
  - Nombre completo del alumno
  - Grupo
  - Cuatrimestre actual
- Desarrollo de la actividad
- Conclusion

### Nombre del archivo PDF

Formato requerido:

```text
Actividad#_ApellidoPaternoPrimerNombre
```

Ejemplo:

```text
Actividad3_CabJesus.pdf
```

## Nota academica

Este proyecto tiene fines educativos para practica de React, organizacion modular, rutas, estado compartido y buenas practicas de frontend.
