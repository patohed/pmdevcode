"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BreadcrumbSchema, useBreadcrumbs } from "../../components/SEO/BreadcrumbSchema";
import { usePathname } from "next/navigation";
import Script from "next/script";

interface PortfolioSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  stats: {
    models: string | number;
    styles: string;
    tech: string;
  };
  features: string[];
  link: string;
  color: string;
  bgColor: string;
}

const portfolioSections: PortfolioSection[] = [
  {
    id: "formularios",
    title: "Formularios Web",
    subtitle: "5 Modelos Diferentes",
    description: "Galería de formularios con diversos enfoques UX/UI para requerimientos de proyectos web",
    icon: "📋",
    image: "/portfolio/formularios-preview.jpg",
    stats: {
      models: 5,
      styles: "Minimalista, Wizard, Dashboard, Cards, Side Nav",
      tech: "Next.js, TypeScript, Tailwind CSS"
    },
    features: [
      "Diseños responsive",
      "TypeScript completo",
      "Validación en tiempo real",
      "Múltiples UX approaches"
    ],
    link: "/portfolio/formularios",
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-50"
  },
  {
    id: "websites",
    title: "Sitios Web Corporativos",
    subtitle: "Próximamente",
    description: "Colección de sitios web empresariales con diferentes industrias y enfoques",
    icon: "🌐",
    image: "/portfolio/websites-preview.jpg",
    stats: {
      models: "En desarrollo",
      styles: "Corporativo, Minimalista, Moderno",
      tech: "Next.js, React, Tailwind"
    },
    features: [
      "Diseño corporativo",
      "SEO optimizado",
      "Animaciones fluidas",
      "CMS integration"
    ],
    link: "#",
    color: "from-green-500 to-teal-600",
    bgColor: "bg-green-50"
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    subtitle: "Próximamente",
    description: "Plataformas de comercio electrónico con diferentes categorías de productos",
    icon: "🛒",
    image: "/portfolio/ecommerce-preview.jpg",
    stats: {
      models: "En desarrollo",
      styles: "Moderno, Clásico, Minimalista",
      tech: "Next.js, Stripe, Shopify"
    },
    features: [
      "Carrito de compras",
      "Pagos integrados",
      "Gestión de inventario",
      "Panel administrativo"
    ],
    link: "#",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50"
  },
  {
    id: "applications",
    title: "Aplicaciones Web",
    subtitle: "Próximamente",
    description: "Aplicaciones web complejas con funcionalidades avanzadas",
    icon: "⚡",
    image: "/portfolio/apps-preview.jpg",
    stats: {
      models: "En desarrollo",
      styles: "Dashboard, SaaS, Gestión",
      tech: "Next.js, Node.js, Database"
    },
    features: [
      "Autenticación segura",
      "Base de datos real",
      "APIs integradas",
      "Panel de control"
    ],
    link: "#",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50"
  }
];

export default function PortfolioPage() {
  const pathname = usePathname();
  const breadcrumbs = useBreadcrumbs(pathname);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* SEO Schema */}
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio Dev Code - Proyectos de Desarrollo Web",
            "description": "Explora nuestros proyectos y modelos de referencia de desarrollo web para empresas argentinas.",
            "url": "https://www.pmdevcode.com.ar/portfolio",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Proyectos de Portfolio",
              "numberOfItems": portfolioSections.length,
              "itemListElement": portfolioSections.map((section, index) => ({
                "@type": "CreativeWork",
                "position": index + 1,
                "name": section.title,
                "description": section.description,
                "url": section.link !== "#" ? `https://www.pmdevcode.com.ar${section.link}` : undefined
              }))
            }
          })
        }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors flex items-center">
              <span className="mr-1">🏠</span>
              Inicio
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Portfolio</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestro 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora nuestros proyectos y modelos de referencia. Cada sección muestra diferentes enfoques 
              y estilos para ayudarte a encontrar la solución perfecta para tu negocio.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12">
          {portfolioSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {section.link !== "#" ? (
                section.link.startsWith('http') ? (
                  <a href={section.link} target="_blank" rel="noopener noreferrer">
                    <PortfolioCard section={section} isClickable={true} />
                  </a>
                ) : (
                  <Link href={section.link}>
                    <PortfolioCard section={section} isClickable={true} />
                  </Link>
                )
              ) : (
                <PortfolioCard section={section} isClickable={false} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20 bg-white rounded-2xl shadow-xl p-12 border border-slate-200"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl text-white">💡</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Necesitas algo personalizado?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Cada proyecto es único. Si no encuentras exactamente lo que buscas en nuestro portfolio, 
            podemos crear una solución completamente personalizada para tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
              >
                Solicitar Consulta Gratuita
              </motion.button>
            </Link>
            <Link href="/#servicios">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                Ver Nuestros Servicios
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PortfolioCard({ section, isClickable }: { section: PortfolioSection, isClickable: boolean }) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-300 ${
      isClickable ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer' : 'opacity-75'
    }`}>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Side - Content */}
        <div className="p-8 lg:p-12">
          <div className="flex items-center mb-6">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 bg-gradient-to-r ${section.color}`}>
              <span className="text-2xl text-white">{section.icon}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{section.subtitle}</p>
            </div>
          </div>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            {section.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className={`${section.bgColor} rounded-lg p-4`}>
              <div className="text-sm font-semibold text-gray-600 mb-2">Modelos:</div>
              <div className="text-lg font-bold text-gray-900">{section.stats.models}</div>
            </div>
            <div className={`${section.bgColor} rounded-lg p-4`}>
              <div className="text-sm font-semibold text-gray-600 mb-2">Estilos:</div>
              <div className="text-sm text-gray-700">{section.stats.styles}</div>
            </div>
            <div className={`${section.bgColor} rounded-lg p-4`}>
              <div className="text-sm font-semibold text-gray-600 mb-2">Tecnologías:</div>
              <div className="text-sm text-gray-700">{section.stats.tech}</div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 mb-3">Características:</h3>
            {section.features.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-8">
            {isClickable ? (
              <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${section.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}>
                <span>{section.link.startsWith('http') ? 'Visitar Sitio' : 'Explorar Modelos'}</span>
                <span>{section.link.startsWith('http') ? '🚀' : '→'}</span>
              </div>
            ) : (
              <div className="inline-flex items-center space-x-2 bg-gray-200 text-gray-500 px-6 py-3 rounded-full font-semibold">
                <span>Próximamente</span>
                <span>⏳</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className={`${section.bgColor} p-8 lg:p-12 flex items-center justify-center relative`}>
          <div className="text-center">
            <div className={`w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${section.color} flex items-center justify-center shadow-2xl`}>
              <span className="text-5xl text-white">{section.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
            <p className="text-gray-600">{section.stats.models} {section.id === "formularios" ? "modelos disponibles" : ""}</p>
            
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
