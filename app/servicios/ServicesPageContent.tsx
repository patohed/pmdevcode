"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BreadcrumbSchema, useBreadcrumbs } from '../../components/SEO/BreadcrumbSchema';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { SEO_CONFIG } from '../../utils/seo-config';

export default function ServicesPageContent() {
  const pathname = usePathname();
  const breadcrumbs = useBreadcrumbs(pathname);

  const services = [
    {
      id: 'sitios-corporativos',
      title: 'Sitios Web Corporativos',
      description: 'Sitios web profesionales que reflejan la identidad de tu empresa y generan confianza en tus clientes.',
      icon: '🌐',
      features: [
        'Diseño responsivo y moderno',
        'Optimización SEO completa',
        'Panel de administración',
        'Integración con redes sociales',
        'Formularios de contacto',
        'Google Analytics incluido'
      ],
      benefits: [
        'Mayor credibilidad empresarial',
        'Presencia online profesional',
        'Generación de leads',
        'Posicionamiento en Google'
      ],
      price: 'Desde $150.000',
      duration: '2-4 semanas'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce y Tiendas Online',
      description: 'Plataformas de comercio electrónico completas para vender tus productos online 24/7.',
      icon: '🛒',
      features: [
        'Catálogo de productos completo',
        'Carrito de compras optimizado',
        'Pasarela de pagos segura',
        'Gestión de inventario',
        'Panel administrativo',
        'Reportes de ventas'
      ],
      benefits: [
        'Ventas 24/7 sin límites',
        'Alcance nacional e internacional',
        'Automatización de procesos',
        'Crecimiento escalable'
      ],
      price: 'Desde $300.000',
      duration: '4-8 semanas'
    },
    {
      id: 'sistemas-gestion',
      title: 'Sistemas de Gestión Web',
      description: 'Aplicaciones web personalizadas para optimizar y automatizar los procesos de tu empresa.',
      icon: '⚙️',
      features: [
        'Desarrollo a medida',
        'Base de datos segura',
        'Múltiples usuarios y roles',
        'Reportes y dashboards',
        'Integraciones API',
        'Backup automático'
      ],
      benefits: [
        'Procesos automatizados',
        'Mejor organización interna',
        'Ahorro de tiempo y costos',
        'Datos centralizados'
      ],
      price: 'Desde $500.000',
      duration: '6-12 semanas'
    },
    {
      id: 'consultoria-digital',
      title: 'Consultoría en Transformación Digital',
      description: 'Acompañamos a tu empresa en el proceso de digitalización y optimización tecnológica.',
      icon: '💡',
      features: [
        'Auditoría tecnológica completa',
        'Plan de transformación digital',
        'Selección de tecnologías',
        'Capacitación del equipo',
        'Implementación gradual',
        'Seguimiento y soporte'
      ],
      benefits: [
        'Competitividad digital',
        'Procesos optimizados',
        'Reducción de costos',
        'Mayor productividad'
      ],
      price: 'Desde $200.000',
      duration: '2-6 meses'
    },
    {
      id: 'mantenimiento-soporte',
      title: 'Mantenimiento y Soporte Web',
      description: 'Servicio continuo de mantenimiento, actualizaciones y soporte técnico para tu sitio web.',
      icon: '🔧',
      features: [
        'Actualizaciones de seguridad',
        'Backups automáticos',
        'Monitoreo 24/7',
        'Soporte técnico prioritario',
        'Optimización de velocidad',
        'Reportes mensuales'
      ],
      benefits: [
        'Sitio web siempre actualizado',
        'Máxima seguridad',
        'Disponibilidad garantizada',
        'Tranquilidad total'
      ],
      price: 'Desde $25.000/mes',
      duration: 'Servicio continuo'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* SEO Schema */}
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Servicios de Desarrollo Web Dev Code",
            "description": "Servicios profesionales de desarrollo web para empresas argentinas",
            "url": "https://www.pmdevcode.com.ar/servicios",
            "provider": {
              "@type": "LocalBusiness",
              "@id": `${SEO_CONFIG.company.url}#organization`,
              "name": SEO_CONFIG.company.name,
              "url": SEO_CONFIG.company.url
            },
            "serviceType": "Desarrollo Web",
            "areaServed": {
              "@type": "Country",
              "name": "Argentina"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Catálogo de Servicios Web",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                }
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
            <span className="text-gray-900 font-medium">Servicios</span>
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
              Nuestros 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Servicios</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones web integrales para empresas que buscan crecer en el mundo digital. 
              Desde sitios corporativos hasta sistemas complejos de gestión.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Service Info */}
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl text-white">{service.icon}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span>💰 {service.price}</span>
                        <span>⏱️ {service.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-4">¿Qué incluye?</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 text-xs">✓</span>
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contacto">
                      <motion.button
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 15px 35px rgba(147, 51, 234, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                      >
                        <span>💰</span>
                        <span>Ver Precios</span>
                        <motion.svg 
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>
                      </motion.button>
                    </Link>
                    <Link href="/portfolio">
                      <motion.button
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgb(249, 250, 251)",
                          borderColor: "rgb(156, 163, 175)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-all duration-300 flex items-center space-x-2"
                      >
                        <span>👀</span>
                        <span>Ver Proyectos</span>
                        <motion.svg 
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </motion.svg>
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                  <h3 className="font-bold text-gray-900 mb-6 text-lg">Beneficios para tu Empresa</h3>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                          <span className="text-white text-xs">🎯</span>
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="mt-8 p-4 bg-white rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-gray-900 mb-2">¿Por qué elegirnos?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• +5 años de experiencia</li>
                      <li>• Soporte técnico incluido</li>
                      <li>• Garantía de calidad</li>
                      <li>• Precios competitivos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20 bg-white rounded-2xl shadow-xl p-12 border border-slate-200"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl text-white">🚀</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para hacer crecer tu presencia digital?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Mi experiencia está lista para crear la solución web perfecta para tu empresa. 
            Solicita una consulta gratuita y descubre cómo puedo ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-3 justify-center"
              >
                <span>🎯</span>
                <span>Empezar Mi Proyecto</span>
                <motion.div
                  className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors duration-300"
                  whileHover={{ rotate: 90 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              </motion.button>
            </Link>
            <Link href="/contacto">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgb(249, 250, 251)",
                  borderColor: "rgb(156, 163, 175)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 transition-all duration-300 flex items-center space-x-3 justify-center"
              >
                <span>💬</span>
                <span>Consulta Gratuita</span>
                <motion.svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </motion.svg>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
