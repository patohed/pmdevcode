"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Datos de empresas que confían en nosotros
const companies = [
  {
    id: 1,
    name: "Eupi Marketing",
    industry: "Marketing Digital",
    logo: "/logos/eupi-marketing.svg",
    testimonial: "Desarrollo ágil y seguro"
  },
  {
    id: 2,
    name: "Naval Motor",
    industry: "Automotriz",
    logo: "/logos/naval-motor.png",
    testimonial: "Soluciones técnicas confiables"
  },
  {
    id: 3,
    name: "VTI Logística",
    industry: "Logística",
    logo: "/logos/vti-logistica.svg",
    testimonial: "Partners digitales desde 2020"
  }
];

// Duplicamos el array para efecto infinito
const infiniteCompanies = [...companies, ...companies, ...companies, ...companies];

export default function TrustedCompanies() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden relative">
      {/* Decoración de fondo sutil */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4 border border-blue-200">
              <span className="mr-2">✨</span>
              Confianza Empresarial
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Empresas que{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 bg-clip-text text-transparent">
              Confían en Nosotros
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empresas que han transformado su presencia digital con nuestras soluciones
          </p>
        </motion.div>

        {/* Carrousel infinito */}
        <div className="relative">
          {/* Gradientes de fade a los lados */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
          
          {/* Contenedor del carrousel */}
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-6"
              style={{
                willChange: "transform",
              }}
              animate={{
                x: [0, -1300],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {infiniteCompanies.map((company, index) => (
                <motion.div
                  key={`${company.id}-${index}`}
                  className="flex-shrink-0 w-72 sm:w-80"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)",
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full relative overflow-hidden group">
                    {/* Efecto de brillo al hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)`,
                      }}
                      animate={hoveredCard === index ? {
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      } : {}}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />

                    <div className="relative z-10">
                      {/* Logo */}
                      <div className="w-20 h-20 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300 overflow-hidden p-3">
                        <Image
                          src={company.logo}
                          alt={`${company.name} logo`}
                          width={60}
                          height={60}
                          className="object-contain w-full h-full"
                          unoptimized
                        />
                      </div>

                      {/* Nombre de la empresa */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {company.name}
                      </h3>

                      {/* Industria */}
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                          {company.industry}
                        </span>
                      </div>

                      {/* Indicador de satisfacción */}
                      <div className="flex items-center space-x-1 text-yellow-500 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <motion.svg
                            key={star}
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={hoveredCard === index ? { 
                              opacity: 1, 
                              scale: 1,
                            } : { 
                              opacity: 1, 
                              scale: 1 
                            }}
                            transition={{ delay: star * 0.1 }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>

                      {/* Texto testimonial breve */}
                      <p className="text-sm text-gray-500 line-clamp-2">
                        &ldquo;{company.testimonial}&rdquo;
                      </p>
                    </div>

                    {/* Borde decorativo animado */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500"
                      initial={{ scaleX: 0 }}
                      animate={hoveredCard === index ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Estadísticas debajo del carrousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: "3+", label: "Clientes Activos", icon: "🏢" },
            { value: "100%", label: "Satisfacción", icon: "⭐" },
            { value: "5+", label: "Años de Experiencia", icon: "📅" },
            { value: "24/7", label: "Soporte Técnico", icon: "💬" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/cotizar"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Únete a Nuestros Clientes</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Animación CSS para los blobs */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
