# CINEMEX - Documento de Cambios y Mejoras
## Actividad #6 - Desarrollo Front-End

---

### PORTADA

**Universidad Tecnológica**

![Logo Institucional]

---

**TSU en Desarrollo de Software**

**Asignatura:** Desarrollo Front-End

**Cuatrimestre:** 5° Cuatrimestre

**Alumno:** Esteban Priego

**Grupo:** 5A

**Maestro:** Adrián Martín Aguilar Vargas

**Fecha:** Febrero 2026

---

## 1. INTRODUCCIÓN

Este documento describe los cambios y mejoras implementados en la aplicación CINEMEX como parte de la Actividad #6. El proyecto implementa la capa visual utilizando React y CSS, basándose en la arquitectura de la Actividad #5 y la guía visual de Figma.

---

## 2. CAMBIOS Y MEJORAS IMPLEMENTADAS

### 2.1 Aplicación de Estilos

#### Paleta de Colores Cinemex
Se implementó la paleta de colores oficial de Cinemex utilizando variables CSS:

| Variable CSS | Color | Uso |
|--------------|-------|-----|
| `--cinemex-red` | #E41C23 | Color principal |
| `--cinemex-red-dark` | #B91620 | Hover y acentos |
| `--cinemex-gold` | #FFD700 | Botones secundarios |
| `--cinemex-black` | #1A1A1A | Fondos oscuros |
| `--cinemex-white` | #FFFFFF | Tarjetas y fondos |

#### Tipografía
- **Fuente:** Montserrat (Google Fonts)
- **Implementación:** Importada mediante `<link>` en `index.html`
- **Pesos utilizados:** 400, 600, 700, 800

#### Estilos Consistentes
- Variables CSS globales en `:root`
- Clases reutilizables para componentes
- Transiciones y animaciones uniformes

---

### 2.2 Diseño Responsivo

#### Breakpoints Implementados
```css
/* Tablet */
@media (max-width: 992px) { ... }

/* Mobile */
@media (max-width: 768px) { ... }

/* Mobile Small */
@media (max-width: 480px) { ... }
```

#### Técnicas Utilizadas

1. **CSS Grid con auto-fill:**
   ```css
   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
   ```

2. **Flexbox para navegación:**
   ```css
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   ```

3. **Header adaptativo:** El header cambia de layout horizontal a vertical en móviles.

4. **Tarjetas fluidas:** Las tarjetas se reorganizan automáticamente según el espacio disponible.

---

### 2.3 Secciones de Contenido

#### A) Cartelera
- **8 películas** implementadas con información completa
- Cada tarjeta incluye: imagen, título, género, duración, clasificación
- Filtros decorativos por género
- Animaciones hover en tarjetas

**Películas incluidas:**
1. Avatar: Fuego y Cenizas
2. Capitán América: Brave New World
3. ¡Ayuda!
4. Arco
5. Paddington en Perú
6. Presence
7. Dog Man
8. Sonic 3: La Película

#### B) Alimentos
Nueva sección con 4 categorías:

| Categoría | Cantidad | Ejemplos |
|-----------|----------|----------|
| Combos | 2 | Individual, Pareja |
| Bebidas | 3 | Refresco, ICEE, Café |
| Comestibles | 3 | Palomitas, Hot Dog, Nachos |
| Dulces | 3 | M&M's, Gomitas, Chocolate |

#### C) Otros
Sección con elementos secundarios:

- **Formatos Especiales (4):** IMAX, 4DX, Platino, Junior
- **Promociones (3):** Miércoles 2x1, Martes boletos, Uber Eats
- **Membresías (2):** Club Cinemex, Platino
- **Preventas (2):** Spider-Man, Misión Imposible

---

### 2.4 Componentes Estilizados

#### Nuevos Componentes Creados

| Componente | Descripción |
|------------|-------------|
| `FoodCard.jsx` | Tarjeta para alimentos con precio |
| `PromoCard.jsx` | Tarjeta para promociones con badge |
| `Footer.jsx` | Pie de página con información |

#### Componentes Mejorados

| Componente | Mejoras |
|------------|---------|
| `Button.jsx` | Variantes: primary, secondary, gold |
| `Header.jsx` | Navegación con estado activo |
| `MovieCard.jsx` | Rating, género, duración, animaciones |

---

### 2.5 Nuevas Páginas

| Página | Descripción |
|--------|-------------|
| `Home.jsx` | Hero section, estrenos, accesos rápidos |
| `Alimentos.jsx` | Categorías de alimentos |
| `Otros.jsx` | Promociones, membresías, preventas |
| `Detalle.jsx` | Información completa de película |

---

## 3. ESTRUCTURA DE ARCHIVOS

```
src/
├── components/
│   ├── Button.jsx       (mejorado)
│   ├── FoodCard.jsx     (nuevo)
│   ├── Footer.jsx       (nuevo)
│   ├── Header.jsx       (mejorado)
│   ├── MovieCard.jsx    (mejorado)
│   └── PromoCard.jsx    (nuevo)
├── pages/
│   ├── Alimentos.jsx    (nuevo)
│   ├── Cartelera.jsx    (mejorado)
│   ├── Detalle.jsx      (mejorado)
│   ├── Home.jsx         (mejorado)
│   └── Otros.jsx        (nuevo)
├── App.css              (reescrito)
├── App.jsx              (actualizado)
└── index.css            (reescrito)
```

---

## 4. CARACTERÍSTICAS DESTACADAS

### Coherencia Visual
- Todos los componentes siguen la misma guía de estilos
- Colores, tipografía y espaciados consistentes
- Transiciones uniformes de 0.3s

### Reutilización
- Componentes modulares y configurables mediante props
- Variantes de botones para diferentes contextos
- Tarjetas adaptables a diferentes contenidos

### Accesibilidad
- Contraste adecuado entre texto y fondo
- Estados hover/focus visibles
- Estructura semántica HTML

---

## 5. CONCLUSIÓN

La implementación de la capa visual de CINEMEX cumple con los requerimientos de la Actividad #6:

✅ Paleta de colores de Cinemex aplicada  
✅ Tipografía Montserrat implementada  
✅ Diseño responsivo con Flexbox y Grid  
✅ Sección de Cartelera con 8+ películas  
✅ Nueva sección de Alimentos con 3 categorías  
✅ Sección Otros con promociones, membresías y preventas  
✅ Componentes reutilizables y estilizados  
✅ Coherencia visual en toda la aplicación  

El proyecto demuestra el uso correcto de React para crear interfaces de usuario modernas, responsivas y visualmente atractivas, siguiendo las mejores prácticas de desarrollo front-end.

---

**Repositorio GitHub:** [Agregar URL del repositorio]

**Desarrollado por:** Esteban Priego  
**Grupo:** 5A  
**Febrero 2026**
