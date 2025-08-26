"use client";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Plazos Acordados y Cumplidos",
    description: "Cronograma detallado con checkpoints definidos. Entregamos según lo acordado o no cobramos",
    gradient: "from-blue-50 to-blue-100"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Garantía Empresarial Total",
    description: "SLA definido, soporte técnico incluido y garantía de funcionalidad por 6 meses",
    gradient: "from-orange-50 to-red-50"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Metodología Profesional",
    description: "Proceso estructurado con documentación técnica, capacitación incluida y seguimiento post-lanzamiento",
    gradient: "from-emerald-50 to-emerald-100"
  }
];

export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para Transformar tu Organización?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Agenda una reunión comercial y recibí una propuesta técnica personalizada en 48 horas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl border border-slate-200"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nombre completo *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none" 
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Cargo / Posición *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none" 
                    placeholder="Ej: Gerente General"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email corporativo *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none" 
                    placeholder="nombre@empresa.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la empresa *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none" 
                    placeholder="Nombre de tu organización"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tamaño de empresa</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none">
                    <option>1-10 empleados</option>
                    <option>11-50 empleados</option>
                    <option>51-200 empleados</option>
                    <option>201-500 empleados</option>
                    <option>+500 empleados</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de solución *</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none" required>
                    <option value="">Seleccionar tipo</option>
                    <option>Sitio corporativo/institucional</option>
                    <option>E-commerce PyME</option>
                    <option>Sistema de gestión web</option>
                    <option>Intranet corporativa</option>
                    <option>Portal proveedores/clientes</option>
                    <option>Solución personalizada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Presupuesto estimado</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 transition-all outline-none">
                    <option>$100k - $200k</option>
                    <option>$200k - $400k</option>
                    <option>$400k - $800k</option>
                    <option>+$800k</option>
                    <option>A definir</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Describí tu proyecto y objetivos *</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 transition-all outline-none resize-none" 
                  placeholder="Contanos sobre tu organización, objetivos del proyecto, funcionalidades requeridas, plazos esperados, etc."
                  required
                />
              </div>
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                type="submit"
              >
                <span>🚀</span>
                <span>Empezar Mi Proyecto Web</span>
                <motion.div
                  className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors duration-300"
                  whileHover={{ rotate: 90 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
