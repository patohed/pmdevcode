# Crear og-image.png para Code Dev

## ⚠️ ACCIÓN REQUERIDA: Falta og-image.png (404 Error)

### Especificaciones Técnicas
- **Tamaño:** 1200x630 píxeles (formato Open Graph estándar)
- **Formato:** PNG o JPG
- **Ubicación:** `/public/og-image.png`
- **Peso máximo:** 300KB (optimizado)

### Contenido Sugerido

```
┌─────────────────────────────────────────────────┐
│                                                 │
│   🔷 CODE DEV                                  │
│                                                 │
│   Desarrollo Web Profesional                   │
│   para Empresas Argentinas                     │
│                                                 │
│   ✓ Sitios Web Corporativos                   │
│   ✓ E-commerce Optimizado                     │
│   ✓ Formularios Inteligentes                  │
│   ✓ Seguridad & Performance                   │
│                                                 │
│   www.pmdevcode.com.ar                        │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Herramientas Recomendadas (Online, Gratis)

1. **Canva** (Recomendado)
   - URL: https://www.canva.com/
   - Template: "Open Graph Image" o "Facebook Post"
   - Ajustar a 1200x630px
   - Agregar logo, texto, colores de marca

2. **Figma** (Profesional)
   - URL: https://www.figma.com/
   - Crear frame 1200x630
   - Diseño personalizado

3. **OG Image Generator** (Rápido)
   - URL: https://www.opengraph.xyz/
   - Generador automático con preview

4. **Photopea** (Online Photoshop)
   - URL: https://www.photopea.com/
   - Nuevo proyecto 1200x630px
   - Diseño manual

### Colores de Marca Code Dev
- Azul primario: `#3b82f6` (rgb(59, 130, 246))
- Azul oscuro: `#1e40af` (rgb(30, 64, 175))
- Fondo: `#ffffff` (blanco)
- Texto: `#1f2937` (gris oscuro)

### Tipografía
- Título: **Bold, 60-80px**
- Subtítulo: Regular, 32-40px
- Detalles: Regular, 24-28px

### Elementos Visuales
- Logo Code Dev en esquina superior izquierda
- Fondo degradado sutil (azul → blanco)
- Iconos modernos de servicios
- URL del sitio en footer

### Una Vez Creada la Imagen

1. Guardar como `og-image.png`
2. Optimizar con TinyPNG: https://tinypng.com/
3. Copiar a `/public/og-image.png`
4. Verificar en `/app/layout.tsx` que esté referenciada:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://www.pmdevcode.com.ar'),
  openGraph: {
    images: ['/og-image.png'], // ← Debe estar aquí
  },
};
```

### Verificar Resultado

1. **Localmente:**
   - Ir a http://localhost:3003/og-image.png
   - Debe cargar la imagen sin 404

2. **Facebook Debugger:**
   - URL: https://developers.facebook.com/tools/debug/
   - Pegar URL del sitio
   - Verificar preview

3. **Twitter Card Validator:**
   - URL: https://cards-dev.twitter.com/validator
   - Verificar preview

4. **LinkedIn Post Inspector:**
   - URL: https://www.linkedin.com/post-inspector/
   - Verificar preview

### Prioridad
🔴 **ALTA** - Afecta SEO y compartidos en redes sociales
