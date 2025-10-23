"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-200 to-orange-200 text-blue-800 rounded-full text-sm font-medium mb-6">
            🚀 Entrega en 48 horas
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Tu presencia digital
            <span className="block bg-gradient-to-r from-blue-700 via-orange-600 to-blue-800 bg-clip-text text-transparent">
              profesional
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Sitios web que convierten visitantes en clientes. Diseño profesional, 
            SEO optimizado y analíticas integradas para impulsar tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-orange-700 transition-all hover:shadow-xl"
            >
              Ver Planes y Precios
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="border-2 border-blue-400 text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:bg-blue-100 transition-all"
            >
              Ver Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
