"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Seguridad Básica Empresarial",
    description: "Capacitación para equipos sobre amenazas comunes, contraseñas seguras, phishing y buenas prácticas digitales.",
    gradient: "from-emerald-600 to-emerald-700",
    delay: 0.1
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 8h8M8 12h8M8 16h5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20v-2a2 2 0 00-2-2h-6a2 2 0 00-2 2v2" />
      </svg>
    ),
    title: "Charlas Corporativas",
    description: "Conferencias sobre ciberseguridad adaptadas al sector de tu empresa. Formato presencial o virtual.",
    gradient: "from-blue-800 to-blue-900",
    delay: 0.2
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v.01M12 12v.01M12 16v.01" />
      </svg>
    ),
    title: "Consultoría en Seguridad",
    description: "Auditoría básica de seguridad de tu sitio web y recomendaciones personalizadas.",
    gradient: "from-red-600 to-orange-600",
    delay: 0.3
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4 4-4-4M12 16V8" />
      </svg>
    ),
    title: "Gestión de Emails Corporativos",
    description: "Configuración técnica de correos empresariales seguros con dominio propio y autenticación completa.",
    gradient: "from-purple-600 to-purple-700",
    delay: 0.4
  }
];

export default function CybersecurityTraining() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Consultoría en{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Seguridad Digital
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Protege tu empresa con asesoría especializada
          </p>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Además del desarrollo web, ofrezco consultoría y asesoramiento especializado para empresas 
            que buscan fortalecer su seguridad digital y proteger su información crítica.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 shadow-lg`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/consultoria">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <span className="text-xl mr-2">🛡️</span>
              <span>Consultar Asesoría Especializada</span>
              <motion.div
                className="ml-3 bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors duration-300"
                whileHover={{ rotate: 90 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: "👥", text: "Equipos de 5-50 personas", color: "from-emerald-600 to-emerald-700" },
            { icon: "📍", text: "Modalidad presencial y virtual", color: "from-blue-600 to-blue-700" },
            { icon: "⚡", text: "Sesiones de 2-8 horas", color: "from-slate-600 to-slate-700" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} mb-3 text-white text-xl`}>
                {feature.icon}
              </div>
              <p className="text-sm text-slate-600 font-medium">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
