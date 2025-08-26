# Logo Component Documentation

## Componente Logo Profesional para Dev Code

Este componente proporciona un sistema completo de identidad visual para Dev Code con múltiples variantes y configuraciones.

## Características

- 🎨 **Diseño Moderno**: Isotipo tech con brackets de código estilizados
- 📱 **Responsive**: 5 tamaños diferentes (xs, sm, md, lg, xl)
- 🎭 **4 Variantes**: horizontal, vertical, icon, text
- 🌈 **4 Esquemas de Color**: default, white, dark, gradient
- ⚡ **Animaciones**: Versión animada con hover effects
- 🧩 **Variantes Pre-configuradas**: Para casos de uso comunes

## Uso Básico

```tsx
import Logo, { LogoVariants, AnimatedLogo } from '@/components/Logo';

// Uso básico
<Logo />

// Con props personalizadas
<Logo variant="horizontal" size="lg" color="gradient" />

// Versión animada
<AnimatedLogo variant="vertical" size="md" />
```

## Props

### LogoProps
- `variant`: "horizontal" | "vertical" | "icon" | "text" (default: "horizontal")
- `size`: "xs" | "sm" | "md" | "lg" | "xl" (default: "md")
- `color`: "default" | "white" | "dark" | "gradient" (default: "default")
- `className`: string adicional para estilos personalizados

## Variantes Pre-configuradas

### LogoVariants.Header
Para headers y navegación principal
```tsx
<LogoVariants.Header />
```

### LogoVariants.HeaderDark
Para headers con fondo oscuro
```tsx
<LogoVariants.HeaderDark />
```

### LogoVariants.Footer
Para footers y secciones inferiores
```tsx
<LogoVariants.Footer />
```

### LogoVariants.Mobile
Para navegación móvil (solo ícono)
```tsx
<LogoVariants.Mobile />
```

### LogoVariants.Brand
Para landing pages y branding principal
```tsx
<LogoVariants.Brand />
```

### LogoVariants.Favicon
Para favicons y aplicaciones pequeñas
```tsx
<LogoVariants.Favicon />
```

## Ejemplos de Implementación

### En Header/Navegación
```tsx
import { LogoVariants } from '@/components/Logo';

export default function Header() {
  return (
    <nav className="bg-white">
      <LogoVariants.Header className="hover:opacity-80 transition-opacity" />
    </nav>
  );
}
```

### En Footer
```tsx
import { LogoVariants } from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <LogoVariants.Footer />
    </footer>
  );
}
```

### Hero Section con Animación
```tsx
import { AnimatedLogo } from '@/components/Logo';

export default function Hero() {
  return (
    <section className="hero">
      <AnimatedLogo 
        variant="horizontal" 
        size="xl" 
        color="gradient"
        animate={true}
      />
    </section>
  );
}
```

## Configuraciones de Tamaño

| Size | Width | Height | Icon Size | Font Size |
|------|-------|--------|-----------|-----------|
| xs   | 80px  | 24px   | 20px      | text-sm   |
| sm   | 100px | 30px   | 24px      | text-base |
| md   | 140px | 42px   | 32px      | text-xl   |
| lg   | 180px | 54px   | 40px      | text-2xl  |
| xl   | 240px | 72px   | 52px      | text-4xl  |

## Esquemas de Color

### Default
- Primary: Blue (#3B82F6)
- Secondary: Red (#EF4444)
- Text: Dark Gray (#1F2937)

### White
- Para fondos oscuros
- Todo en tonos blancos/grises claros

### Dark
- Para fondos claros
- Todo en tonos oscuros

### Gradient
- Gradientes modernos azul → índigo → rojo
- Para elementos destacados y branding

## Personalización

### Estilos Personalizados
```tsx
<Logo 
  variant="horizontal"
  size="md"
  className="custom-logo-styles"
/>
```

### CSS Personalizado
```css
.custom-logo-styles {
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  transition: all 0.3s ease;
}

.custom-logo-styles:hover {
  transform: scale(1.05);
}
```

## Casos de Uso Recomendados

1. **Header Principal**: `LogoVariants.Header`
2. **Header con fondo oscuro**: `LogoVariants.HeaderDark`
3. **Footer**: `LogoVariants.Footer`
4. **Navegación móvil**: `LogoVariants.Mobile`
5. **Landing page**: `LogoVariants.Brand`
6. **Favicon/PWA**: `LogoVariants.Favicon`
7. **Documentación/Blog**: Logo con variant="horizontal" size="sm"

## Accessibilidad

- El logo incluye elementos SVG semánticamente correctos
- Compatible con screen readers
- Contraste adecuado en todos los esquemas de color
- Escalable sin pérdida de calidad

## Performance

- SVG optimizado para web
- Componente ligero sin dependencias externas
- Lazy loading compatible
- Tree-shaking friendly
