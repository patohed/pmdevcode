"use client";
import { motion } from "framer-motion";

interface Credential {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  delay: number;
}

const credentials: Credential[] = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "+5 Años",
    subtitle: "de Experiencia",
    description: "Especializados en soluciones web empresariales desde 2018",
    gradient: "from-blue-600 to-blue-700",
    delay: 0.1
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "+40",
    subtitle: "Empresas Atendidas",
    description: "Incluyendo Naval Motor, Agencia Mística y Eupi Marketing",
    gradient: "from-green-600 to-green-700",
    delay: 0.2
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "99.9%",
    subtitle: "Disponibilidad SLA",
    description: "Garantizamos máxima disponibilidad para tu sitio web",
    gradient: "from-purple-600 to-purple-700",
    delay: 0.3
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "< 2s",
    subtitle: "Tiempo de Carga",
    description: "Optimización web para máximo rendimiento y SEO",
    gradient: "from-orange-600 to-orange-700",
    delay: 0.4
  }
];

export default function CredentialsSectionMobile() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Nuestras
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent ml-3">
              Credenciales
            </span>
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Datos que respaldan nuestro compromiso con la excelencia y los resultados
          </p>
        </motion.div>

        {/* Credentials Grid - Optimizado para móvil */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
        >
          {credentials.map((credential) => (
            <motion.div
              key={credential.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${credential.gradient} backdrop-blur-sm border border-white/10 shadow-xl group overflow-hidden`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className="mb-4 sm:mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    {credential.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <div className="mb-3 sm:mb-4">
                  <motion.div 
                    className="text-3xl sm:text-4xl font-black text-white mb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {credential.title}
                  </motion.div>
                  <div className="text-base sm:text-lg font-semibold text-white/90">
                    {credential.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {credential.description}
                </p>
              </div>

              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.p 
            className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            Más de 5 años construyendo soluciones web que impulsan el crecimiento empresarial
          </motion.p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg"
          >
            Solicitar Propuesta
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
