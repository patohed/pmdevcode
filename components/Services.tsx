"use client";
import { motion } from "framer-motion";
import CybersecurityTraining from "./CybersecurityTraining";

const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Sitios Corporativos e Institucionales",
    description: "Desarrollo de presencia digital profesional que proyecta credibilidad y confianza para tu organización.",
    features: [
      "✓ Diseño corporativo profesional",
      "✓ Formularios de contacto avanzados",
      "✓ Integración con CRM básico",
      "✓ Optimización SEO avanzada"
    ],
    gradient: "from-blue-50 to-blue-100",
    iconGradient: "from-blue-600 to-blue-700",
    border: "border-slate-200",
    delay: 0.1
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Sistemas de Gestión Web",
    description: "Plataformas integrales con CRM, gestión de clientes y herramientas administrativas para optimizar procesos.",
    features: [
      "✓ CRM integrado personalizado",
      "✓ Gestión de inventarios",
      "✓ Reportes y dashboards"
    ],
    gradient: "from-green-50 to-green-100",
    iconGradient: "from-green-600 to-green-700",
    border: "border-slate-200",
    delay: 0.2
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M8 11v2a4 4 0 008 0v-2M8 11h8" />
      </svg>
    ),
    title: "E-commerce para PyMEs",
    description: "Tiendas online completas con gestión de inventario, facturación electrónica AFIP y portales B2B especializados.",
    features: [
      "✓ Inventario y facturación AFIP",
      "✓ Portales B2B proveedores/clientes",
      "✓ Integraciones con medios de pago"
    ],
    gradient: "from-gray-50 to-gray-100",
    iconGradient: "from-gray-600 to-gray-700",
    border: "border-slate-200",
    delay: 0.3
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11V8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 14l2 2 4-4" />
      </svg>
    ),
    title: "Gestión Técnica de Emails Corporativos",
    description: "Configuración profesional de correos empresariales con dominio propio, seguridad avanzada y alta deliverability.",
    features: [
      "✓ Configuración MX, SPF, DKIM, DMARC",
      "✓ Gmail empresarial + Google Workspace",
      "✓ cPanel y gestión de hosting",
      "✓ Seguridad y autenticación avanzada"
    ],
    gradient: "from-purple-50 to-purple-100",
    iconGradient: "from-purple-600 to-purple-700",
    border: "border-slate-200",
    delay: 0.4
  }
];

export default function Services() {
  return (
    <>
      <section id="servicios" className="py-16 sm:py-20 lg:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header optimizado para móvil */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2 sm:px-0">
              Servicios Web Profesionales Personalizados
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-2 sm:px-0">
              Desarrollamos servicios web especializados y personalizados que potencian el crecimiento de tu organización
            </p>
          </div>
          
          {/* Grid optimizado para móvil - una columna en móvil, 2 en tablet, 4 en desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                viewport={{ once: true, margin: "-50px" }}
                className={`bg-gradient-to-br ${service.gradient} p-6 sm:p-8 rounded-2xl border ${service.border} hover:shadow-lg transition-all group`}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${service.iconGradient} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-600 mr-2 flex-shrink-0 text-sm">✓</span>
                      <span className="leading-relaxed">{feature.replace('✓ ', '')}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Ventajas Tecnológicas Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                Ventajas Competitivas de Nuestro Stack Tecnológico
              </h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Utilizamos las tecnologías más modernas y eficientes del mercado para garantizar que tu sitio web supere a la competencia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200"
              >
                <div className="text-2xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Rendimiento Superior</h4>
                <p className="text-slate-600">
                  Next.js y React ofrecen tiempos de carga hasta 3x más rápidos que sitios web tradicionales, 
                  mejorando la experiencia del usuario y el posicionamiento en Google.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200"
              >
                <div className="text-2xl mb-4">🔍</div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">SEO Avanzado</h4>
                <p className="text-slate-600">
                  Nuestro stack tecnológico genera sitios optimizados para motores de búsqueda desde el código, 
                  superando a WordPress y otras plataformas en rankings de Google.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200"
              >
                <div className="text-2xl mb-4">🔒</div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Seguridad Robusta</h4>
                <p className="text-slate-600">
                  TypeScript y nuestras prácticas de desarrollo eliminan vulnerabilidades comunes, 
                  ofreciendo mayor seguridad que sitios construidos con constructores visuales.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200"
              >
                <div className="text-2xl mb-4">📱</div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Responsive Nativo</h4>
                <p className="text-slate-600">
                  Tailwind CSS garantiza diseños perfectamente adaptables sin código adicional, 
                  superando la responsividad de temas prediseñados de otras plataformas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200"
              >
                <div className="text-2xl mb-4">🚀</div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Escalabilidad Garantizada</h4>
                <p className="text-slate-600">
                  Nuestra arquitectura moderna permite que tu sitio crezca sin limitaciones técnicas, 
                  a diferencia de soluciones como Wix o Squarespace que limitan funcionalidades.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200"
              >
                <div className="text-2xl mb-4">💰</div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Costos Optimizados</h4>
                <p className="text-slate-600">
                  Sin licencias mensuales ni plugins costosos. Nuestro código eficiente reduce costos de hosting 
                  y mantenimiento comparado con sitios pesados de WordPress.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center mt-12 bg-gradient-to-r from-gray-50 to-slate-100 p-8 rounded-2xl"
            >
              <h4 className="text-2xl font-bold text-slate-800 mb-4">
                ¿Por Qué Elegir Tecnología Moderna?
              </h4>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-6">
                Mientras la competencia usa tecnologías obsoletas como jQuery o PHP sin frameworks, 
                nosotros implementamos las mejores prácticas del desarrollo web actual. Esto se traduce en 
                sitios más rápidos, seguros y competitivos que destacan en el mercado digital.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  React & Next.js
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  Tailwind CSS
                </span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  Framer Motion
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Nueva sección de Consultoría en Seguridad Digital */}
      <CybersecurityTraining />
    </>
  );
}
