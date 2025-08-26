"use client";
import { motion } from "framer-motion";
import { LogoVariants } from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="mb-4">
              <LogoVariants.FooterSameAsHeader />
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
              Servicios web profesionales personalizados para empresas y organizaciones. +5 años de experiencia transformando la presencia digital.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:info@pmdevcode.com.ar" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@pmdevcode.com.ar
                </a>
              </div>

              <div className="flex items-start justify-center md:justify-start space-x-3">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div className="text-gray-300 text-sm">
                  <div>Av. Corrientes 1234, Piso 8, Oficina A</div>
                  <div>CABA (C1043AAZ), Buenos Aires</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Credenciales</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-gray-300 text-sm">+5 años de experiencia</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span className="text-gray-300 text-sm">+10 empresas atendidas</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                <span className="text-gray-300 text-sm">SLA 99.9% disponibilidad</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dev Code by{' '}
              <a 
                href="https://www.pmdevop.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline decoration-blue-400/50 hover:decoration-blue-300 underline-offset-2"
              >
                pmdevop
              </a>
              . Todos los derechos reservados.
            </p>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.pmdevop.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-orange-300 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 hover:bg-white/20 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/20"
              >
                ✨ pmdevop.com
              </a>
              <span className="text-xs text-gray-500">Hecho con</span>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">Next.js & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
