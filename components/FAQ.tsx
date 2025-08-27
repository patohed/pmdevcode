"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string[];
  cta?: string;
}

const faqData: FAQItem[] = [
  // Proceso y metodología
  {
    id: "proceso-1",
    category: "Proceso y metodología",
    question: "¿Cómo es su proceso de desarrollo paso a paso?",
    answer: [
      "Nuestro proceso consta de 5 etapas claramente definidas: **Consulta inicial** donde analizamos tus necesidades y objetivos, **Planificación y diseño** con wireframes y mockups para tu aprobación, **Desarrollo** con checkpoints semanales para tu feedback, **Testing y optimización** garantizando funcionalidad perfecta, y finalmente **Lanzamiento y capacitación**.",
      "Durante todo el proceso mantienes visibilidad completa del progreso a través de nuestro sistema de seguimiento, con reuniones semanales y acceso a un entorno de desarrollo donde puedes ver los avances en tiempo real."
    ],
    cta: "Agenda una consulta gratuita para conocer más detalles"
  },
  {
    id: "proceso-2", 
    category: "Proceso y metodología",
    question: "¿Puedo hacer cambios durante el desarrollo?",
    answer: [
      "¡Absolutamente! Entendemos que los proyectos evolucionan. Incluimos **hasta 3 rondas de revisiones** en cada etapa del desarrollo sin costo adicional. Los cambios menores (textos, colores, imágenes) se implementan inmediatamente.",
      "Para cambios significativos en funcionalidad o estructura, te presentamos una cotización transparente antes de proceder. Nuestro enfoque es colaborativo: tu feedback es fundamental para lograr el resultado perfecto."
    ]
  },
  {
    id: "proceso-3",
    category: "Proceso y metodología", 
    question: "¿Qué necesito proporcionar para empezar el proyecto?",
    answer: [
      "Para iniciar necesitamos: **Contenido base** (textos, imágenes, logo de tu empresa), **referencias visuales** de sitios que te gusten, **objetivos específicos** de tu sitio web, y **información sobre tu audiencia objetivo**.",
      "No te preocupes si no tienes todo listo - te acompañamos en la creación de contenido y podemos recomendar fotógrafos o redactores especializados. Lo importante es comenzar con una visión clara de lo que quieres lograr."
    ]
  },
  {
    id: "proceso-4",
    category: "Proceso y metodología",
    question: "¿Ofrecen garantía en sus proyectos?",
    answer: [
      "Sí, ofrecemos **garantía de 60 días** contra errores de funcionamiento post-lanzamiento. Además, incluimos **3-6 meses de soporte técnico** según el paquete contratado, cubriendo actualizaciones de seguridad y ajustes menores.",
      "También garantizamos **plazos de entrega** - si no cumplimos las fechas acordadas por causas nuestras, no cobramos el proyecto. Nuestra tasa de cumplimiento de plazos es del 98%."
    ]
  },
  {
    id: "proceso-5",
    category: "Proceso y metodología",
    question: "¿Cómo aseguran la calidad del desarrollo?",
    answer: [
      "Implementamos **testing automatizado** en cada etapa, **revisión de código** por nuestro equipo senior, y **pruebas en múltiples dispositivos y navegadores** antes del lanzamiento.",
      "Cada proyecto pasa por nuestro checklist de 47 puntos que incluye rendimiento, seguridad, SEO, accesibilidad y experiencia de usuario. Solo lanzamos cuando cada elemento cumple nuestros estándares de excelencia."
    ]
  },

  // Precios y presupuestos
  {
    id: "precios-1",
    category: "Precios y presupuestos",
    question: "¿Cuánto cuesta un sitio web profesional?",
    answer: [
      "El **precio de cada proyecto se personaliza** según tres factores principales: **tiempo de desarrollo** requerido, **habilidades técnicas** solicitadas, y **complejidad general** del sistema que necesitas.",
      "Evaluamos factores como: número de páginas, funcionalidades especiales (e-commerce, sistemas de usuario, integraciones con APIs), nivel de personalización del diseño, y tecnologías específicas requeridas. Cada sitio se desarrolla desde cero con tecnología moderna (React/Next.js)."
    ],
    cta: "Solicita tu cotización personalizada gratuita"
  },
  {
    id: "precios-2",
    category: "Precios y presupuestos",
    question: "¿Qué incluye exactamente el precio del desarrollo?",
    answer: [
      "El precio incluye: **Desarrollo completo** del sitio, **diseño responsive** para todos los dispositivos, **optimización SEO** básica, **integración de analytics**, **formularios de contacto**, **capacitación** para administrar el contenido, **hosting y dominio** el primer año.",
      "También incluimos **certificado SSL**, **copias de seguridad automáticas**, **optimización de velocidad**, y **soporte técnico** durante 3-6 meses post-lanzamiento. Sin sorpresas ni costos ocultos."
    ]
  },
  {
    id: "precios-3",
    category: "Precios y presupuestos",
    question: "¿Manejan planes de pago flexibles?",
    answer: [
      "Sí, ofrecemos **planes de pago flexibles** en 2-4 cuotas sin interés para facilitar la inversión en tu proyecto web. También aceptamos **pago en pesos argentinos** al tipo de cambio oficial del día de facturación.",
      "Para proyectos más complejos podemos estructurar pagos por hitos: porcentaje al inicio, otro al completar el diseño, y el resto al lanzamiento. Buscamos la modalidad que mejor se adapte a tu flujo de caja y presupuesto."
    ]
  },
  {
    id: "precios-3b",
    category: "Precios y presupuestos", 
    question: "¿Qué factores específicos influyen en el precio de mi proyecto?",
    answer: [
      "**Tiempo de desarrollo**: Número de páginas, complejidad del diseño, funcionalidades interactivas. **Habilidades técnicas**: Integraciones con APIs, sistemas de pago, bases de datos complejas, funcionalidades de usuario avanzadas.",
      "**Complejidad general**: E-commerce con inventario, sistemas de membresía, multi-idioma, optimizaciones especiales de rendimiento, o integraciones con sistemas externos existentes. Cada proyecto es único y el precio refleja exactamente lo que necesitas."
    ]
  },
  {
    id: "precios-4",
    category: "Precios y presupuestos",
    question: "¿Por qué sus precios son diferentes a WordPress o constructores como Wix?",
    answer: [
      "Desarrollamos con **tecnología moderna** (React/Next.js) que ofrece mayor velocidad, seguridad y flexibilidad que WordPress. Nuestros sitios cargan **3x más rápido**, tienen mejor SEO, y son prácticamente inmunes a hackeos.",
      "A diferencia de Wix o constructores, tu sitio es **100% tuyo** con código fuente incluido, sin restricciones ni dependencias. Es una inversión a largo plazo que crece con tu negocio, no una renta mensual sin valor de rescate."
    ]
  },

  // Tecnología y desarrollo
  {
    id: "tech-1",
    category: "Tecnología y desarrollo",
    question: "¿Por qué usan React y Next.js en lugar de WordPress?",
    answer: [
      "**React y Next.js** representan el estado del arte en desarrollo web. Ofrecen **velocidad superior** (sitios que cargan en menos de 2 segundos), **mejor SEO** con renderizado del lado servidor, **mayor seguridad** sin plugins vulnerables, y **escalabilidad** para crecer con tu negocio.",
      "WordPress requiere constantes actualizaciones de plugins y temas, con riesgo de incompatibilidades. Nuestros sitios son **código limpio y optimizado**, sin la sobrecarga de un CMS genérico, resultando en mejor rendimiento y menor costo de mantenimiento."
    ]
  },
  {
    id: "tech-2",
    category: "Tecnología y desarrollo",
    question: "¿Los sitios serán responsive y optimizados para móviles?",
    answer: [
      "**100% responsive por defecto**. Desarrollamos con enfoque 'mobile-first', garantizando experiencia perfecta en smartphones, tablets y desktop. Cada elemento se adapta fluidamente a cualquier tamaño de pantalla.",
      "Incluimos optimización específica para móviles: **botones táctiles apropiados**, **velocidad optimizada** para conexiones lentas, **imágenes adaptativas** que cargan según el dispositivo, y **navegación intuitiva** en pantallas pequeñas."
    ]
  },
  {
    id: "tech-3",
    category: "Tecnología y desarrollo",
    question: "¿Incluyen SEO y optimización para Google?",
    answer: [
      "Sí, incluimos **SEO técnico completo**: estructura HTML semántica, meta tags optimizados, sitemap XML, robots.txt, datos estructurados, optimización de velocidad, y configuración de Google Analytics y Search Console.",
      "También implementamos **Core Web Vitals** de Google, optimización de imágenes, lazy loading, y todas las mejores prácticas actuales. Tu sitio estará preparado para competir en los primeros resultados de búsqueda desde el día uno."
    ]
  },
  {
    id: "tech-4",
    category: "Tecnología y desarrollo",
    question: "¿Tendré acceso al código fuente de mi sitio?",
    answer: [
      "**Absolutamente**. Al finalizar el proyecto recibes el **código fuente completo**, documentación técnica, y acceso total a tu repositorio. Tu sitio web es 100% tuyo, sin dependencias ni restricciones.",
      "Esto te da **libertad total**: puedes contratar a cualquier desarrollador para futuras modificaciones, migrar hosting cuando quieras, o incluso vender tu código como parte de tu negocio. Es tu activo digital completo."
    ]
  },

  // Tiempos y entrega
  {
    id: "tiempos-1",
    category: "Tiempos y entrega",
    question: "¿Cuánto tiempo toma desarrollar un proyecto?",
    answer: [
      "**Tiempo mínimo**: 48 horas para sitios institucionales, informativos y landing pages. Los tiempos se extienden según la complejidad: e-commerce, sistemas de usuarios, integraciones con APIs, y funcionalidades avanzadas requieren desarrollo adicional.",
      "Factores que influyen en el tiempo: número de páginas, nivel de personalización del diseño, integraciones con sistemas externos, funcionalidades interactivas, y revisiones del cliente durante el proceso."
    ]
  },
  {
    id: "tiempos-2",
    category: "Tiempos y entrega",
    question: "¿Qué pasa si necesito mi sitio urgentemente?",
    answer: [
      "Para **entregas urgentes** evaluamos cada caso específicamente. El tiempo mínimo es 48 horas para proyectos simples (institucionales, landing pages), siempre que tengas todo el contenido listo y puedas dar feedback inmediato.",
      "Para proyectos más complejos con urgencia, analizamos factibilidad según las funcionalidades requeridas. Nuestra prioridad es entregar calidad, por lo que solo aceptamos urgencias cuando podemos garantizar excelencia en el resultado final."
    ]
  },
  {
    id: "tiempos-3",
    category: "Tiempos y entrega",
    question: "¿Cómo monitoreo el progreso de mi proyecto?",
    answer: [
      "Tendrás acceso a **nuestro sistema de seguimiento** donde ves el progreso en tiempo real, entregables completados, y próximos hitos. Realizamos **reuniones semanales** para feedback y resolución de dudas.",
      "También proporcionamos **acceso al entorno de desarrollo** donde puedes ver y probar las funcionalidades a medida que se implementan. Transparencia total durante todo el proceso."
    ]
  },

  // Soporte y mantenimiento
  {
    id: "soporte-1",
    category: "Soporte y mantenimiento",
    question: "¿Qué incluye el soporte post-lanzamiento?",
    answer: [
      "El soporte incluye: **Actualizaciones de seguridad**, **copias de seguridad semanales**, **monitoreo de uptime**, **ajustes menores** de contenido, **soporte técnico** vía email/WhatsApp, y **reportes mensuales** de rendimiento.",
      "También cubrimos **corrección de bugs**, **optimizaciones menores** de velocidad, **actualizaciones de librerías**, y **capacitación adicional** si necesitas aprender nuevas funcionalidades."
    ]
  },
  {
    id: "soporte-2",
    category: "Soporte y mantenimiento",
    question: "¿Puedo administrar el contenido yo mismo después del lanzamiento?",
    answer: [
      "**Sí, completamente**. Incluimos **capacitación personalizada** para que puedas actualizar textos, imágenes, productos, y contenido básico de forma autónoma. El panel de administración es intuitivo y fácil de usar.",
      "Para cambios más complejos (diseño, funcionalidades nuevas), ofrecemos **paquetes de horas** de mantenimiento a precios preferenciales. La idea es que seas independiente para lo cotidiano."
    ]
  },
  {
    id: "soporte-3",
    category: "Soporte y mantenimiento",
    question: "¿Qué pasa si mi sitio se cae o tiene problemas técnicos?",
    answer: [
      "Ofrecemos **monitoreo 24/7** y **tiempo de respuesta de 4 horas** para problemas críticos durante horario hábil. Para emergencias fuera de horario, respondemos en máximo 12 horas.",
      "Nuestro **hosting optimizado** tiene 99.9% de uptime garantizado. En caso de caídas, tenemos **backups automáticos diarios** y podemos restaurar tu sitio en minutos. Tu tranquilidad es nuestra prioridad."
    ]
  },

  // Funcionalidades específicas
  {
    id: "funcional-1",
    category: "Funcionalidades específicas",
    question: "¿Pueden integrar mi sitio con WhatsApp, redes sociales y herramientas existentes?",
    answer: [
      "**Por supuesto**. Integramos **WhatsApp Business API**, redes sociales (Instagram, Facebook, LinkedIn), **Google Analytics**, **Google Ads**, **Mercado Pago**, **sistemas de CRM**, **email marketing** (Mailchimp, etc.), y más.",
      "Cada integración se configura para maximizar conversiones y facilitar la gestión. Por ejemplo, formularios que envían leads directamente a tu CRM y notificaciones automáticas por WhatsApp."
    ]
  },
  {
    id: "funcional-2",
    category: "Funcionalidades específicas",
    question: "¿Desarrollan e-commerce y sistemas de pago?",
    answer: [
      "Sí, desarrollamos **e-commerce completos** con catálogo de productos, carrito de compras, gestión de inventory, **múltiples medios de pago** (Mercado Pago, PayPal, transferencias), y panel administrativo completo.",
      "Incluimos **pasarelas de pago seguras**, **cálculo automático de envíos**, **gestión de cupones de descuento**, **reportes de ventas**, y **integración con sistemas contables**. Todo optimizado para conversión."
    ]
  },
  {
    id: "funcional-3",
    category: "Funcionalidades específicas",
    question: "¿Pueden crear áreas privadas o sistemas de membresía?",
    answer: [
      "**Definitivamente**. Desarrollamos **sistemas de login seguro**, áreas de miembros con contenido exclusivo, **niveles de acceso**, **suscripciones automáticas**, y **portales de clientes** donde pueden ver su historial, documentos, o realizar gestiones.",
      "Incluimos **autenticación robusta**, **recuperación de contraseñas**, **perfiles de usuario editables**, y **notificaciones automáticas**. Ideal para consultoras, educación online, o servicios profesionales."
    ]
  },
  {
    id: "funcional-4",
    category: "Funcionalidades específicas",
    question: "¿Mi sitio será rápido y tendrá buen rendimiento?",
    answer: [
      "**Garantizamos velocidad superior**. Nuestros sitios cargan en **menos de 3 segundos** y alcanzan **90+ puntos en PageSpeed Insights** de Google. Implementamos lazy loading, optimización de imágenes, y CDN global.",
      "La tecnología que usamos (Next.js) está optimizada para rendimiento desde el núcleo. Resultado: **mejor experiencia de usuario**, **mayor conversión**, y **mejor posicionamiento SEO**. La velocidad es una ventaja competitiva real."
    ]
  },

  // Emails corporativos
  {
    id: "emails-1",
    category: "Emails corporativos",
    question: "¿Configuran correos corporativos con mi dominio propio?",
    answer: [
      "**Por supuesto**. Configuramos **correos profesionales** con tu dominio (ejemplo@tuempresa.com) incluyendo **Google Workspace**, **cuentas ilimitadas**, **configuración completa de seguridad** (SPF, DKIM, DMARC), y **migración de emails existentes**.",
      "También manejamos la **vinculación técnica con hosting**, **configuración de registros MX**, **alias y reenvíos**, **filtros anti-spam**, y capacitación para que tu equipo use Gmail empresarial de manera profesional."
    ],
    cta: "Consulta sobre configuración de emails corporativos"
  },
  {
    id: "emails-2",
    category: "Emails corporativos",
    question: "¿Qué incluye la gestión técnica de emails corporativos?",
    answer: [
      "Incluye: **Creación de cuentas corporativas**, **configuración DNS completa** (registros MX, SPF, DKIM, DMARC), **Google Workspace o hosting email**, **configuración en dispositivos móviles**, **migración de emails anteriores**, y **capacitación del equipo**.",
      "También gestionamos **alias y grupos de distribución**, **políticas de seguridad avanzadas**, **backup de correos**, **integración con aplicaciones**, **filtrado de spam profesional**, y **monitoreo de deliverability** para asegurar que tus emails lleguen correctamente."
    ]
  },
  {
    id: "emails-3",
    category: "Emails corporativos",
    question: "¿Por qué necesito autenticación SPF, DKIM y DMARC?",
    answer: [
      "Estos protocolos son **fundamentales para la credibilidad** de tus emails. **SPF** verifica que tus emails vienen de servidores autorizados, **DKIM** añade firma digital de autenticidad, y **DMARC** define políticas contra falsificación de tu dominio.",
      "Sin esta configuración, tus emails pueden ir a **spam automáticamente**, ser **rechazados por Gmail/Outlook**, o tener **baja deliverability**. Una configuración profesional garantiza que tus comunicaciones lleguen a destino y proyecten seriedad empresarial."
    ]
  }
];

interface FAQProps {
  className?: string;
}

export default function FAQ({ className = "" }: FAQProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(faqData.map(item => item.category)))];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQ = selectedCategory === "all" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const formatAnswer = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-blue-300 italic">$1</em>');
  };

  const handleWhatsAppClick = (message: string = "Hola, me gustaría agendar una consulta gratuita para mi proyecto web 📋") => {
    const phoneNumber = "5491234567890";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={`py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Respuestas transparentes a las dudas más comunes sobre nuestros proyectos web
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category === "all" ? "Todas las categorías" : category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQ.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="text-xs text-blue-400 font-medium mb-1 uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">
                    {item.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openItems.includes(item.id) ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-white/10 pt-4">
                    {item.answer.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-gray-300 leading-relaxed mb-4 last:mb-0"
                        dangerouslySetInnerHTML={{ __html: formatAnswer(paragraph) }}
                      />
                    ))}
                    
                    {item.cta && (
                      <motion.button
                        onClick={() => handleWhatsAppClick(item.cta)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-4 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-1 sm:gap-2 max-w-full"
                      >
                        <svg className="w-4 h-4 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                        </svg>
                        <span className="truncate">{item.cta}</span>
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿No encontraste lo que buscabas?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Cada proyecto es único. Conversemos sobre tus necesidades específicas y te daremos una respuesta personalizada en menos de 24 horas.
          </p>
          <motion.button
            onClick={() => handleWhatsAppClick("Hola, tengo una consulta específica sobre mi proyecto web que no está en el FAQ 🤔")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 sm:gap-3"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
            </svg>
            <span className="hidden sm:inline">Consulta Personalizada por WhatsApp</span>
            <span className="sm:hidden">Consulta por WhatsApp</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
