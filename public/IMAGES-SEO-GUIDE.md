# Optimización de Imágenes SEO - Code Dev

## Imágenes Requeridas para SEO Completo

### 1. Favicon y Icons
- `/public/favicon.ico` (16x16, 32x32, 48x48)
- `/public/icon-192.png` (192x192 para PWA)
- `/public/icon-512.png` (512x512 para PWA)
- `/public/apple-touch-icon.png` (180x180)

### 2. Open Graph y Social Media
- `/public/og-image.png` (1200x630) - Imagen principal OG
- `/public/og-logo.png` (400x400) - Logo para redes sociales
- `/public/twitter-image.png` (1200x600) - Específico para Twitter

### 3. Logo de la Empresa
- `/public/logo-codedev.png` - Logo principal
- `/public/logo-codedev-white.png` - Logo en blanco
- `/public/logo-codedev-dark.png` - Logo para modo oscuro

### 4. Imágenes de Portfolio
- `/public/portfolio/formularios-preview.jpg`
- `/public/portfolio/websites-preview.jpg`
- `/public/portfolio/ecommerce-preview.jpg`
- `/public/portfolio/apps-preview.jpg`

## Optimización Automática con Next.js

Todas las imágenes se optimizarán automáticamente con:
- Formato WebP/AVIF cuando sea posible
- Lazy loading automático
- Responsive images con srcset
- Blur placeholder mientras cargan

## Comandos para Generar Imágenes (usar herramientas externas)

```bash
# Para favicon multi-resolución
# Usar https://realfavicongenerator.net/

# Para optimizar imágenes existentes
# Usar https://tinypng.com/ o https://squoosh.app/

# Para generar Open Graph images
# Usar Canva o Figma con templates 1200x630
```

## Configuración de Web App Manifest (PWA)

```json
{
  "name": "Code Dev - Desarrollo Web Profesional",
  "short_name": "Code Dev",
  "description": "Desarrollo web profesional para empresas argentinas",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```
