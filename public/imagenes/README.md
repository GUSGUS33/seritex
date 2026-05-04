# Carpeta de Imágenes

Esta carpeta está destinada a guardar todas las imágenes reales del sitio web.

## ¿Cómo usar estas imágenes en Next.js?

Al estar dentro de la carpeta `public`, Next.js sirve estos archivos automáticamente desde la raíz del dominio (`/`). 

Por ejemplo, si subes una imagen llamada `hero-bg.jpg` a esta carpeta (`public/imagenes/hero-bg.jpg`), puedes usarla en tu código de dos formas:

### 1. Con la etiqueta estándar de HTML (<img>)
```jsx
<img src="/imagenes/hero-bg.jpg" alt="Descripción de la imagen" />
```

### 2. Con el componente optimizado de Next.js (<Image>) - Recomendado
```jsx
import Image from 'next/image';

<Image 
  src="/imagenes/hero-bg.jpg" 
  alt="Descripción de la imagen" 
  width={800} 
  height={600} 
/>
```

**Nota:** Fíjate que en la ruta del `src` **NO** se pone la palabra `public`, se empieza directamente desde `/imagenes/...`.
