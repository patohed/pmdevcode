"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedBackground from "./AnimatedNetworkBackground";

// Componente de icono de WhatsApp reutilizable
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
  </svg>
);

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    // Placeholder para el número de WhatsApp - reemplazar con el número real
    const phoneNumber = "5491234567890"; // Reemplazar con tu número
    const message = "¡Hola! Vengo desde su sitio web y me interesa conocer más sobre sus servicios de desarrollo web. ¿Podrían brindarme información?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated background with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatedBackground />
      </motion.div>
      
      {/* Floating elements for depth */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-16 w-48 h-48 bg-orange-500/10 rounded-full blur-xl"
        />
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-sm bg-white/5 rounded-2xl px-6 py-4 border border-white/10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="text-2xl font-bold text-white flex items-center space-x-2"
          >
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">💻</span>
            <span>DevCode</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <motion.a 
              href="#servicios" 
              whileHover={{ scale: 1.05, color: "#93c5fd" }}
              className="text-gray-300 hover:text-blue-300 transition-colors font-medium"
            >
              Servicios
            </motion.a>
            <motion.a 
              href="#soluciones" 
              whileHover={{ scale: 1.05, color: "#93c5fd" }}
              className="text-gray-300 hover:text-blue-300 transition-colors font-medium"
            >
              Soluciones
            </motion.a>
            <motion.a 
              href="#casos-exito" 
              whileHover={{ scale: 1.05, color: "#93c5fd" }}
              className="text-gray-300 hover:text-blue-300 transition-colors font-medium"
            >
              Casos de Éxito
            </motion.a>
            <motion.a 
              href="https://www.pmdevop.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(251, 146, 60, 0.2)" }}
              className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:border-orange-400/60 hover:text-orange-200 transition-all duration-300"
            >
              ✨ pmdevop.com ↗
            </motion.a>
          </motion.div>

          <motion.button
            onClick={handleWhatsAppClick}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-green-600 via-green-700 to-green-600 hover:from-green-700 hover:via-green-800 hover:to-green-700 text-white px-8 py-3 rounded-full hover:shadow-2xl transition-all duration-300 font-semibold flex items-center space-x-2"
          >
            <WhatsAppIcon />
            <span>¡Envíanos un Mensaje!</span>
          </motion.button>
        </motion.div>
      </nav>

      {/* Hero content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto"
      >
        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 mb-8"
        >
          <span className="text-sm text-gray-400 flex items-center">
            <span className="text-orange-400 mr-2">🏢</span>
            +10 Empresas Confían
          </span>
          <span className="text-sm text-gray-400 flex items-center">
            <span className="text-yellow-400 mr-2">⭐</span>
            99% Satisfacción
          </span>
          <span className="text-sm text-gray-400 flex items-center">
            <span className="text-green-400 mr-2">🚀</span>
            +5 Años Experiencia
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tight"
        >
          <span className="block text-white">Impulsa tu</span>
          <motion.span 
            className="block bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent relative"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Negocio Digital
          </motion.span>
          <span className="block text-white">con Webs que</span>
          <motion.span 
            className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Convierten
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light"
        >
          Desarrollo web profesional con enfoque en{" "}
          <span className="text-white font-semibold">resultados medibles</span>.
          <br className="hidden md:block" />
          Plataformas que generan leads, ventas y crecimiento real para tu empresa.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6 mb-16"
        >
          <Link href="/cotizar">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(37, 99, 235, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 text-white px-12 sm:px-16 py-5 sm:py-6 rounded-2xl text-xl sm:text-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center space-x-4 w-full lg:w-auto justify-center relative overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10">🚀 Comenzar Proyecto</span>
              <motion.div
                className="bg-blue-500/20 rounded-full p-2 group-hover:bg-blue-400/30 transition-colors duration-300 relative z-10"
                whileHover={{ scale: 1.2 }}
              >
                <svg className="w-6 sm:w-7 h-6 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.div>
            </motion.button>
          </Link>
          
          <Link href="/portfolio">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.15)",
                borderColor: "rgb(147, 197, 253)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-blue-400/40 text-white px-10 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-semibold hover:border-blue-300 transition-all duration-300 flex items-center space-x-3 sm:space-x-4 w-full lg:w-auto justify-center backdrop-blur-sm bg-white/5"
            >
              <span>👁️ Ver Casos de Éxito</span>
              <motion.div
                className="bg-blue-500/20 rounded-full p-2 group-hover:bg-blue-400/30 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center space-x-8 opacity-60"
        >
          <span className="text-sm text-gray-500">Trabajamos con:</span>
          <div className="flex items-center space-x-6">
            <span className="text-xs text-gray-600">React</span>
            <span className="text-xs text-gray-600">Next.js</span>
            <span className="text-xs text-gray-600">TypeScript</span>
            <span className="text-xs text-gray-600">Node.js</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none z-0" />
    </section>
  );
}
