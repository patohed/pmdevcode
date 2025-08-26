"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "Reunión de Relevamiento y Análisis",
    description: "Analizamos en detalle tu empresa, objetivos, competencia y usuarios target. Definimos alcance, funcionalidades y cronograma del proyecto.",
    duration: "1-2 días",
    deliverables: [
      "Brief técnico detallado",
      "Análisis de competencia",
      "Arquitectura de información",
      "Cronograma de trabajo"
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    gradient: "from-blue-600 to-indigo-700",
    delay: 0.1
  },
  {
    number: "02", 
    title: "Propuesta Técnica Detallada",
    description: "Presentamos wireframes, mockups y especificaciones técnicas completas. Definimos tecnologías, integraciones y estructura de base de datos.",
    duration: "2-3 días",
    deliverables: [
      "Wireframes y mockups",
      "Propuesta técnica detallada",
      "Especificaciones funcionales",
      "Presupuesto final aprobado"
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-green-600 to-emerald-700",
    delay: 0.2
  },
  {
    number: "03",
    title: "Desarrollo con Checkpoints",
    description: "Desarrollamos tu proyecto con revisiones programadas cada 2-3 días. Podrás ver el progreso en tiempo real y solicitar ajustes sobre la marcha.",
    duration: "7-15 días",
    deliverables: [
      "Demo funcional cada 3 días",
      "Acceso a entorno de pruebas",
      "Reportes de progreso",
      "Revisiones y ajustes incluidos"
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: "from-orange-600 to-red-700",
    delay: 0.3
  },
  {
    number: "04",
    title: "Testing y Capacitación",
    description: "Realizamos pruebas exhaustivas en diferentes dispositivos y navegadores. Capacitamos a tu equipo para gestionar el sitio de forma autónoma.",
    duration: "2-3 días",
    deliverables: [
      "Testing completo multiplataforma",
      "Capacitación del equipo",
      "Manual de usuario",
      "Optimización de performance"
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    gradient: "from-purple-600 to-violet-700",
    delay: 0.4
  },
  {
    number: "05",
    title: "Soporte Post-Lanzamiento",
    description: "Monitoreamos el rendimiento, solucionamos cualquier inconveniente y te acompañamos en las primeras semanas para asegurar el éxito del proyecto.",
    duration: "1-3 meses",
    deliverables: [
      "Monitoreo de rendimiento",
      "Soporte técnico incluido",
      "Ajustes y optimizaciones",
      "Reportes de métricas"
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25A9.75 9.75 0 1021.75 12 9.75 9.75 0 0012 2.25zm.75 12A1.5 1.5 0 1111.25 12a1.5 1.5 0 011.5 2z" />
      </svg>
    ),
    gradient: "from-teal-600 to-cyan-700",
    delay: 0.5
  }
];

export default function ProfessionalProcess() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [allExpanded, setAllExpanded] = useState(false);
  return (
    <section id="proceso" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Metodología de Trabajo Profesional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Proceso estructurado y transparente que garantiza resultados exitosos 
            con entregas puntuales y comunicación constante
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-sm text-gray-500 flex items-center justify-center space-x-2"
          >
            <span>✨</span>
            <span>Pasa el cursor sobre cada paso para explorar los detalles</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6"
          >
            <div
              className="inline-block"
              onMouseEnter={() => setAllExpanded(true)}
              onMouseLeave={() => setAllExpanded(false)}
            >
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium border-2 border-blue-200 hover:border-blue-300 px-4 py-2 rounded-full transition-all hover:bg-blue-50 hover:shadow-md">
                {allExpanded ? '▲ Resumen Visible' : '▼ Ver Resumen Rápido'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Resumen Rápido - Modo Compacto */}
        {allExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">📋 Resumen del Proceso</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`w-10 h-10 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  <h4 className="font-semibold text-xs text-gray-900 mb-1 leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-600">{step.duration}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Header - Siempre visible */}
              <div className="p-6 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <span className="text-lg font-bold text-white">{step.number}</span>
                    </motion.div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-blue-700 transition-colors">
                        {step.title}
                      </h3>
                      <div className={`inline-flex px-3 py-1 bg-gradient-to-r ${step.gradient} text-white text-sm rounded-full font-medium`}>
                        ⏱️ {step.duration}
                      </div>
                    </div>
                  </div>

                  {/* Icono de expandir/contraer */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500 hidden sm:block">
                      {hoveredStep === index ? 'Explorando...' : 'Pasa el cursor'}
                    </span>
                    <motion.div
                      animate={{ rotate: hoveredStep === index ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="text-gray-400 hover:text-blue-600 p-1"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Contenido desplegable */}
              <motion.div
                initial={false}
                animate={{ 
                  height: hoveredStep === index ? "auto" : 0,
                  opacity: hoveredStep === index ? 1 : 0
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeInOut",
                  delay: hoveredStep === index ? 0.1 : 0
                }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50">
                  <div className="pt-4">
                    <motion.p 
                      className="text-gray-700 leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredStep === index ? 1 : 0,
                        y: hoveredStep === index ? 0 : 10
                      }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      {step.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredStep === index ? 1 : 0,
                        y: hoveredStep === index ? 0 : 10
                      }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="mr-2">📋</span>
                        Entregables:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.deliverables.map((deliverable, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ 
                              opacity: hoveredStep === index ? 1 : 0,
                              x: hoveredStep === index ? 0 : -10
                            }}
                            transition={{ 
                              delay: 0.4 + (idx * 0.1), 
                              duration: 0.2
                            }}
                          >
                            <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700 text-sm font-medium">{deliverable}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-orange-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Transparencia y Comunicación en Cada Paso
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Mantenés el control total del proyecto con acceso a herramientas de seguimiento en tiempo real
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Ver Caso de Estudio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Agendar Reunión
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
