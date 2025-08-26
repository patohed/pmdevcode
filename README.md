# 🚀 PmDevOps - Consultoría DevOps y Desarrollo Web

[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Latest-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 📋 Descripción

**PmDevOps** es un sitio web moderno para consultoría en DevOps y desarrollo web, construido con las últimas tecnologías web. Ofrece servicios especializados en transformación digital, automatización de procesos y desarrollo de soluciones web escalables.

### 🎯 Servicios Principales

- 🔧 **DevOps & Automatización** - Implementación de pipelines CI/CD
- ☁️ **Cloud Computing** - Migración y optimización en la nube  
- 🛡️ **Ciberseguridad** - Auditorías y implementación de seguridad
- 📧 **Gestión técnica de emails corporativos** - Configuración y mantenimiento
- 🌐 **Desarrollo Web** - Sitios web modernos y aplicaciones
- 📊 **Consultoría IT** - Asesoramiento tecnológico especializado

## �️ Tecnologías

### Frontend
- **Next.js 15.5.0** - Framework de React para producción
- **React 19.1.0** - Biblioteca de interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Librería de animaciones

### Herramientas de Desarrollo
- **ESLint** - Linter para JavaScript/TypeScript
- **Prettier** - Formateador de código
- **PostCSS** - Herramienta de transformación CSS
- **Turbopack** - Bundler de alta velocidad

### Integración de APIs
- **Web3Forms** - Servicio de formularios sin backend
- **Configuración segura** - Variables de entorno protegidas

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/patohed/pmdevcode.git
cd pmdevcode
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Copiar el archivo de ejemplo
cp .env.example .env.local

# Editar .env.local con tus configuraciones
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=tu_api_key_aqui
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
   - Visita: http://localhost:3000

## 🌟 Características
- ✅ **Optimización SEO avanzada**
- ✅ **Diseño responsive** y moderno
### ✨ Diseño Moderno
- 🎭 **Diseño responsive** - Adaptable a todos los dispositivos
- 🌙 **Animaciones fluidas** - Transiciones suaves con Framer Motion
- 🎨 **UI/UX optimizada** - Interfaz intuitiva y profesional
- 🔄 **Componentes dinámicos** - Interacciones avanzadas
- ✅ **Formularios de contacto** integrados
- ✅ **FAQ interactivo** por categorías

### 🔐 Seguridad
- 🛡️ **Headers de seguridad** - CSP, HSTS, XSS Protection
- 🔒 **Variables de entorno** - Configuración segura
- 🚫 **Validación de formularios** - Protección contra spam
- 🔍 **Auditorías regulares** - Análisis de vulnerabilidades

### ⚡ Rendimiento
- 🚀 **Turbopack** - Compilación ultra-rápida
- 📦 **Optimización de bundle** - Código dividido automáticamente
- 🖼️ **Optimización de imágenes** - Lazy loading y compresión
- 📈 **SEO optimizado** - Meta tags y structured data

## 🛠 Servicios Destacados

### Gestión Técnica de Emails Corporativos
- Configuración de registros MX, SPF, DKIM, DMARC
- Google Workspace y Gmail empresarial
- Administración cPanel y hosting
- Seguridad y autenticación avanzada

### Desarrollo Web Especializado
- Sitios **3x más rápidos** que WordPress
- Código fuente **100% tuyo**
- Stack tecnológico moderno
- Garantía de 60 días

## � Estructura del Proyecto

```
pmdevcode/
├── app/                    # App Router de Next.js 13+
│   ├── consultoria/       # Página de servicios de consultoría
│   ├── contacto/          # Página de contacto
│   ├── faq/              # Preguntas frecuentes
│   ├── portfolio/        # Portafolio de proyectos
│   ├── servicios/        # Página de servicios
│   └── globals.css       # Estilos globales
├── components/            # Componentes reutilizables
│   ├── AnimatedBackground.tsx
│   ├── ConsultoriaForm.tsx
│   ├── FAQ.tsx
│   ├── Header.tsx
│   └── ...
├── lib/                  # Utilidades y configuraciones
├── public/              # Archivos estáticos
├── scripts/            # Scripts de utilidad
└── next.config.js     # Configuración de Next.js
```

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo
npm run dev:turbo    # Desarrollo con Turbopack

# Producción
npm run build        # Compilar para producción
npm run start        # Iniciar servidor de producción

# Código
npm run lint         # Ejecutar ESLint
npm run lint:fix     # Corregir errores de ESLint

# Utilidades
npm run clean        # Limpiar archivos de compilación
```

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio con [Vercel](https://vercel.com)
2. Configura las variables de entorno
3. Despliega automáticamente con cada push

### Otros Proveedores
- **Netlify** - Despliegue estático
- **AWS Amplify** - Hosting escalable
- **Railway** - Despliegue con base de datos
├── app/                    # App Router de Next.js
│   ├── contacto/          # Página de contacto
│   ├── consultoria/       # Formulario de consultoría IT
│   ├── faq/              # FAQ completo
│   └── servicios/        # Página de servicios
├── components/            # Componentes React
│   ├── Services.tsx      # Servicios principales
│   ├── ConsultoriaForm.tsx # Formulario IT
│   ├── FAQ.tsx          # FAQ interactivo
│   └── ...
├── utils/                # Utilidades
│   └── seo-config.ts    # Configuración SEO
└── public/              # Archivos estáticos
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Patricio Millán** - *PmDevOps*
- 🌐 Web: [pmdevops.com](https://pmdevops.com)
- 📧 Email: contacto@pmdevops.com
- 💼 LinkedIn: [Patricio Millán](https://linkedin.com/in/patricio-millan)
- 🐙 GitHub: [@patohed](https://github.com/patohed)

## 🙏 Agradecimientos

- [Next.js Team](https://nextjs.org/) - Por el increíble framework
- [Vercel](https://vercel.com/) - Por la plataforma de despliegue
- [Tailwind CSS](https://tailwindcss.com/) - Por el framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Por las animaciones

---

<div align="center">

**⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub! ⭐**

Made with ❤️ by [PmDevOps](https://github.com/patohed)

</div>

Este proyecto requiere configuración de variables de entorno para funcionar correctamente:

1. **Copia el archivo de ejemplo:**
   ```bash
   cp .env.example .env.local
   ```

2. **Completa las variables OBLIGATORIAS en `.env.local`:**
   ```bash
   # 🚨 OBLIGATORIO: Web3Forms para formularios
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=tu-access-key-de-web3forms
   
   # 🌐 Configuración del sitio
   NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
   NEXT_PUBLIC_CONTACT_EMAIL=contacto@tu-dominio.com
   ```

3. **Obtener Web3Forms Access Key:**
   - Ve a [web3forms.com](https://web3forms.com)
   - Registra tu email
   - Copia tu Access Key a `.env.local`

### **⚠️ ADVERTENCIAS DE SEGURIDAD**

🔐 **NUNCA subas archivos .env a GitHub:**
- ✅ `.env.local` está en `.gitignore`
- ✅ Solo sube `.env.example` (sin valores reales)
- ✅ En producción configura las variables en tu hosting

🚨 **Variables públicas vs privadas:**
- ✅ `NEXT_PUBLIC_*` → Visibles en el cliente (solo URLs, IDs públicos)
- 🚫 Sin prefijo → Solo servidor (API keys, passwords)

🔑 **Buenas prácticas:**
- 🔄 Rota API keys cada 6 meses
- 🎯 Usa diferentes keys para desarrollo/producción
- 📝 Documenta qué hace cada variable

### **🚀 Deployment Seguro**

**Vercel (Recomendado):**
```bash
# 1. Conecta tu repo a Vercel
# 2. En dashboard de Vercel → Settings → Environment Variables
# 3. Agrega todas las variables de .env.local
# 4. Deploy automático en cada push
```

**Netlify:**
```bash
# 1. En dashboard de Netlify → Site Settings → Build & deploy
# 2. Environment → Environment variables
# 3. Agrega cada variable manualmente
```

## 📞 Contacto

**Dev Code** - Desarrollo Web Profesional  
📧 Email: contacto@pmdevcode.com.ar  
🌐 Web: [pmdevcode.com.ar](https://pmdevcode.com.ar)  
👨‍💻 Por: Patricio Millán - PmDevOps  

---

*Especialistas en desarrollo web empresarial con +5 años de experiencia en Argentina* 🇦🇷
