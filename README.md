# pmdevcode

Sitio web profesional de **Dev Code** - Desarrollo web empresarial especializado en soluciones personalizadas para PyMEs y empresas argentinas.

## 🚀 Tecnologías

- **Next.js 15** - Framework React con App Router
- **React 19** - Biblioteca de interfaces de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS utilitario
- **Framer Motion** - Animaciones fluidas
- **Web3Forms** - Gestión de formularios

## 🌟 Características

- ✅ **Sitios corporativos e institucionales** profesionales
- ✅ **E-commerce completo** para PyMEs
- ✅ **Sistemas de gestión web** personalizados  
- ✅ **Gestión técnica de emails corporativos**
- ✅ **Consultoría en seguridad digital**
- ✅ **Optimización SEO avanzada**
- ✅ **Diseño responsive** y moderno
- ✅ **Formularios de contacto** integrados
- ✅ **FAQ interactivo** por categorías

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

## 📱 Estructura del Proyecto

```
pmdevcode/
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

## 🔧 Instalación y Configuración Segura

### **⚡ Setup Rápido**

```bash
# 1. Clonar repositorio
git clone https://github.com/[tu-usuario]/pmdevcode.git
cd pmdevcode

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno (CRÍTICO)
cp .env.example .env.local

# 4. Completar .env.local con tus credenciales
# Ver sección "Variables de Entorno" abajo

# 5. Ejecutar en desarrollo
npm run dev

# 6. Build para producción
npm run build
npm run start
```

### **🔒 Variables de Entorno (OBLIGATORIO)**

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
