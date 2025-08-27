"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Header/Navigation */}
      <header className="bg-white/90 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Code Dev
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#servicios" className="text-gray-600 hover:text-pink-600 transition-colors">Servicios</a>
            <a href="#clientes" className="text-gray-600 hover:text-pink-600 transition-colors">Clientes</a>
            <a href="#contacto" className="text-gray-600 hover:text-pink-600 transition-colors">Contacto</a>
          </nav>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:from-pink-600 hover:to-orange-600 transition-all shadow-lg"
          >
            Cotizar Ahora
          </motion.button>
        </div>
      </header>

      {/* HERO Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-pink-700 rounded-full text-sm font-medium mb-6">
              🚀 Entrega en 48 horas
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Tu presencia digital
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:from-pink-600 hover:to-orange-600 transition-all hover:shadow-xl"
              >
                Ver Planes y Precios
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="border-2 border-pink-300 text-pink-600 px-8 py-4 rounded-xl font-semibold text-lg hover:border-pink-400 hover:bg-pink-50 transition-all"
              >
                Ver Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitás para triunfar online
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Servicios completos de desarrollo web con tecnología de vanguardia
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO & Posicionamiento</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Optimizamos tu sitio para aparecer primero en Google. Más visibilidad, más clientes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Análisis de palabras clave</li>
                <li>✓ Optimización técnica</li>
                <li>✓ Contenido SEO-friendly</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl border border-pink-100 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile First</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Diseño responsivo que se ve perfecto en todos los dispositivos. Experiencia fluida garantizada.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Diseño adaptable</li>
                <li>✓ Carga súper rápida</li>
                <li>✓ UX optimizada</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analítica & ROI</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Medí el impacto real de tu inversión con herramientas de análisis avanzadas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Google Analytics</li>
                <li>✓ Reportes detallados</li>
                <li>✓ Métricas de conversión</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section id="clientes" className="py-20 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Clientes que confiaron en nosotros
            </h2>
            <p className="text-xl text-gray-600">
              Resultados reales de empresas que crecieron con nuestros sitios web
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-6">
                <Image 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Cliente" 
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full border-4 border-orange-100 mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Martín González</h4>
                  <p className="text-gray-600 text-sm">Estudio Jurídico</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  &ldquo;Increíble trabajo. Mi web quedó profesional y ahora recibo el triple de consultas. La entrega fue súper rápida.&rdquo;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-6">
                <Image 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Cliente" 
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full border-4 border-pink-100 mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Lucía Martinez</h4>
                  <p className="text-gray-600 text-sm">Agencia Marketing</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  &ldquo;Excelente diseño y las métricas de Google Analytics me permiten optimizar mis campañas perfectamente.&rdquo;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-6">
                <Image 
                  src="https://randomuser.me/api/portraits/men/65.jpg" 
                  alt="Cliente" 
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full border-4 border-purple-100 mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Julián Rivas</h4>
                  <p className="text-gray-600 text-sm">Artista Visual</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  &ldquo;Me ayudaron a dar mis primeros pasos online. El sitio se ve increíble en móvil y destaco entre la competencia.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section id="contacto" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Listo para impulsar tu negocio?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contanos tu proyecto y te enviamos una propuesta personalizada en menos de 24 horas
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">Entrega Express</h3>
                    <p className="text-gray-600">Sitios web profesionales listos en 48 horas para proyectos estándar</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">Garantía Total</h3>
                    <p className="text-gray-600">Revisiones ilimitadas hasta que quedes 100% satisfecho con el resultado</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">Precio Justo</h3>
                    <p className="text-gray-600">Sin sorpresas ni costos ocultos. Pagás solo cuando apruebes el diseño final</p>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl border border-orange-100"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none" 
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none" 
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de proyecto</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none">
                    <option>Sitio institucional</option>
                    <option>E-commerce</option>
                    <option>Landing page</option>
                    <option>Portfolio</option>
                    <option>Blog</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contanos tu proyecto</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none resize-none" 
                    placeholder="Describí tu idea, objetivos y cualquier detalle importante..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
                  type="submit"
                >
                  Solicitar Cotización Gratuita
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Code Dev
          </div>
          <p className="text-gray-400 mb-6">
            Transformamos ideas en experiencias digitales extraordinarias
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
