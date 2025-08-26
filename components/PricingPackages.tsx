"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Componente de icono de WhatsApp reutilizable
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
  </svg>
);

const packages = [
  {
    name: "Presencia Digital Profesional",
    subtitle: "Para empresas y organizaciones que necesitan una web sólida y efectiva",
    badge: "Más Solicitado",
    popular: true,
    description: "La solución perfecta para establecer tu presencia digital con credibilidad y profesionalismo. Diseñada para generar confianza, captar leads y posicionar tu empresa en el mercado digital.",
    features: [
      "Sitio web responsive y moderno",
      "Formularios de contacto inteligentes",
      "Optimización para Google (SEO básico)",
      "Integración con redes sociales",
      "Panel de administración simple",
      "Analíticas para medir resultados"
    ],
    cta: "Solicitar Propuesta Personalizada",
    gradient: "from-blue-600 to-blue-700",
    bgGradient: "from-blue-50 to-blue-100",
    hoverBg: "from-blue-100 to-blue-200",
    border: "border-blue-200",
    hoverBorder: "border-blue-300",
    delay: 0.1,
    whatsappMessage: "Hola! Me interesa el paquete de *Presencia Digital Profesional*. Me gustaría recibir una propuesta personalizada con costos y tiempos de desarrollo."
  },
  {
    name: "E-commerce y Gestión",
    subtitle: "Tienda online completa para PyMEs que quieren vender digitalmente",
    badge: "Solución Completa",
    popular: false,
    description: "Plataforma integral de ventas online que automatiza procesos y te permite escalar. Desde el primer pedido hasta la gestión completa de clientes, todo en un solo lugar.",
    features: [
      "Tienda online con carrito de compras",
      "Integración con medios de pago argentinos",
      "Panel para gestionar productos y pedidos",
      "Sistema de clientes y historial",
      "WhatsApp Business integrado",
      "Reportes de ventas básicos",
      "Formularios de contacto avanzados",
      "Optimización para móviles"
    ],
    cta: "Agendar Reunión Comercial",
    gradient: "from-blue-600 to-blue-700",
    bgGradient: "from-gray-50 to-gray-100",
    hoverBg: "from-gray-100 to-gray-200",
    border: "border-gray-200",
    hoverBorder: "border-gray-300",
    delay: 0.2,
    whatsappMessage: "Hola! Me interesa el paquete de *E-commerce y Gestión*. Quisiera agendar una reunión comercial para conocer más detalles sobre la tienda online y costos."
  }
];

export default function PricingPackages() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardSelect = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const handleWhatsAppClick = (message: string) => {
    // Placeholder para el número de WhatsApp - reemplazar con el número real
    const phoneNumber = "5491234567890"; // Reemplazar con tu número
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Servicios Web Profesionales Personalizados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Desarrollo web profesional enfocado en resultados reales. Desde sitios corporativos hasta tiendas online completas.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: pkg.delay }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardSelect(index)}
              className={`relative bg-gradient-to-br ${
                hoveredCard === index ? pkg.hoverBg : pkg.bgGradient
              } p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                selectedCard === index 
                  ? `${pkg.hoverBorder} ring-4 ring-green-400 shadow-2xl transform scale-105` 
                  : hoveredCard === index
                  ? `${pkg.hoverBorder} ring-2 ring-blue-300 shadow-xl`
                  : `${pkg.border} hover:shadow-lg`
              } ${
                pkg.popular && selectedCard !== index && hoveredCard !== index ? 'ring-2 ring-blue-400 shadow-lg' : ''
              }`}
            >
              {/* Checkmark for selected card */}
              {selectedCard === index && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className="absolute -top-4 right-4"
                >
                  <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </motion.div>
              )}

              {/* Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <motion.span 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {pkg.badge}
                  </motion.span>
                </div>
              )}

              {!pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <motion.span 
                    className={`bg-gradient-to-r ${pkg.gradient} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {pkg.badge}
                  </motion.span>
                </div>
              )}

              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {pkg.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Beneficios clave:</h4>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation(); // Evita que se active el handleCardSelect
                  handleWhatsAppClick(pkg.whatsappMessage);
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: selectedCard === index 
                    ? "0 15px 35px rgba(34, 197, 94, 0.4)" 
                    : pkg.popular 
                      ? "0 15px 35px rgba(59, 130, 246, 0.4)"
                      : "0 15px 35px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                className={`group w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  selectedCard === index
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                    : pkg.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl' 
                      : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 hover:shadow-lg'
                }`}
              >
                {selectedCard === index ? (
                  <>
                    <WhatsAppIcon />
                    <span>Contactar por WhatsApp</span>
                  </>
                ) : (
                  <>
                    <span>{pkg.popular ? '🌟' : '📋'}</span>
                    <span>{pkg.cta}</span>
                    <motion.svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </>
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Desarrollo Web Profesional y Honesto
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
              Desarrollo web profesional con tecnologías modernas como React y Next.js. Te acompaño desde la idea hasta el lanzamiento con soporte continuo.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Tecnología Moderna</h4>
                <p className="text-gray-600 text-sm">React, Next.js y herramientas actuales</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Precios Justos</h4>
                <p className="text-gray-600 text-sm">Propuestas transparentes y adaptadas</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M12 8.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Soporte Continuo</h4>
                <p className="text-gray-600 text-sm">Acompañamiento desde el inicio hasta después del lanzamiento</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
