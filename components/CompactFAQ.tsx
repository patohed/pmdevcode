"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: string;
  question: string;
  answer: string[];
}

const compactFaqData: FAQItem[] = [
  {
    id: "compact-1",
    question: "¿Cuánto cuesta un sitio web profesional?",
    answer: [
      "El precio de cada proyecto se **ajusta específicamente** a tus necesidades: tiempo de desarrollo requerido, habilidades técnicas solicitadas y complejidad general del sistema.",
      "Factores que influyen: número de páginas, funcionalidades especiales (e-commerce, sistemas de usuario, integraciones), diseño personalizado y tecnologías específicas requeridas."
    ]
  },
  {
    id: "compact-2",
    question: "¿Cuánto tiempo toma desarrollar mi proyecto?",
    answer: [
      "**Tiempo mínimo**: 48 horas para sitios institucionales, informativos y landing pages. **E-commerce y sistemas complejos**: según funcionalidades específicas requeridas.",
      "Los plazos se ajustan a la complejidad: páginas adicionales, integraciones especiales, diseños personalizados y funcionalidades avanzadas requieren más tiempo de desarrollo."
    ]
  },
  {
    id: "compact-3",
    question: "¿Por qué no usar WordPress o constructores como Wix?",
    answer: [
      "Desarrollamos con **React/Next.js** que ofrece sitios **3x más rápidos**, mejor SEO y mayor seguridad que WordPress.",
      "Tu sitio es **100% tuyo** con código fuente incluido, sin restricciones ni dependencias de terceros."
    ]
  },
  {
    id: "compact-4",
    question: "¿Qué incluye exactamente el precio?",
    answer: [
      "**Desarrollo completo**, diseño responsive, optimización SEO, formularios de contacto, analytics, capacitación y **soporte 3-6 meses**.",
      "También hosting, dominio, SSL, copias de seguridad automáticas y optimización de velocidad incluidos."
    ]
  },
  {
    id: "compact-5",
    question: "¿Ofrecen garantía y soporte post-lanzamiento?",
    answer: [
      "**Garantía de 60 días** contra errores y **3-6 meses de soporte técnico** incluido según el paquete.",
      "Monitoreo 24/7, actualizaciones de seguridad y tiempo de respuesta de 4 horas para problemas críticos."
    ]
  },
  {
    id: "compact-6",
    question: "¿Configuran emails corporativos profesionales?",
    answer: [
      "**Sí, configuramos correos con tu dominio** (ejemplo@tuempresa.com) incluyendo Google Workspace, seguridad completa (SPF, DKIM, DMARC) y migración de emails existentes.",
      "Incluye configuración DNS, alias, filtros anti-spam y capacitación para usar Gmail empresarial profesionalmente."
    ]
  }
];

interface CompactFAQProps {
  className?: string;
}

export default function CompactFAQ({ className = "" }: CompactFAQProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const formatAnswer = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-blue-300 italic">$1</em>');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5491234567890";
    const message = "Hola, me gustaría agendar una consulta gratuita para mi proyecto web 📋";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={`py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Las 5 dudas más comunes sobre nuestros proyectos web
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-10">
          {compactFaqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-white flex-1 pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
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
                <div className="px-6 pb-4">
                  <div className="border-t border-white/10 pt-3">
                    {item.answer.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-gray-300 leading-relaxed text-sm mb-3 last:mb-0"
                        dangerouslySetInnerHTML={{ __html: formatAnswer(paragraph) }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center space-y-4"
        >
          <p className="text-gray-300 text-sm mb-6">
            ¿Más preguntas? Tenemos 20+ respuestas adicionales
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Ver FAQ Completo
              </motion.button>
            </Link>
            
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-1 sm:gap-2"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              <span className="hidden sm:inline">Consulta por WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
