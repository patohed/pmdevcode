"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface FormData {
  // Información del Cliente
  nombreCompleto: string;
  empresa: string;
  email: string;
  sitioWeb: string;
  sector: string;
  
  // Objetivos del Sitio Web
  objetivoPrincipal: string[];
  objetivoOtro: string;
  publicoObjetivo: string;
  
  // Contenidos
  secciones: string[];
  textosListos: string;
  recursosGraficos: string;
  
  // Diseño
  identidadVisual: string[];
  webReferencia1: string;
  comentarioRef1: string;
  webReferencia2: string;
  comentarioRef2: string;
  
  // Funcionalidades
  funcionalidades: string[];
  funcionalidadOtra: string;
  integraciones: string[];
  
  // Tecnicos
  dominio: string;
  hosting: string;
  mantenimiento: string;
  
  // Timeline y presupuesto
  fechaLanzamiento: string;
  presupuestoAproximado: string;
  
  // Comentarios
  comentarios: string;
  
  // Privacidad
  privacidad: boolean;
}

export default function WebProjectForm() {
  const [formData, setFormData] = useState<FormData>({
    nombreCompleto: "",
    empresa: "",
    email: "",
    sitioWeb: "",
    sector: "",
    objetivoPrincipal: [],
    objetivoOtro: "",
    publicoObjetivo: "",
    secciones: [],
    textosListos: "",
    recursosGraficos: "",
    identidadVisual: [],
    webReferencia1: "",
    comentarioRef1: "",
    webReferencia2: "",
    comentarioRef2: "",
    funcionalidades: [],
    funcionalidadOtra: "",
    integraciones: [],
    dominio: "",
    hosting: "",
    mantenimiento: "",
    fechaLanzamiento: "",
    presupuestoAproximado: "",
    comentarios: "",
    privacidad: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (name === 'privacidad') {
        setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
      } else {
        // Para checkboxes múltiples
        setFormData(prev => ({
          ...prev,
          [name]: checkbox.checked 
            ? [...(prev[name as keyof FormData] as string[]), value]
            : (prev[name as keyof FormData] as string[]).filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario de proyecto web enviado:', formData);
    // Aquí integrarías con tu servicio de email
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empezamos tu{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Proyecto Web
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Completá este formulario con el máximo detalle posible. Te enviaremos una propuesta personalizada en menos de 24 horas.
          </p>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Información del Cliente */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-4 border-b border-gray-200">
                📋 Información de Contacto
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombreCompleto"
                    value={formData.nombreCompleto}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa/Organización *
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Nombre de tu empresa"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sitio Web Actual
                  </label>
                  <input
                    type="url"
                    name="sitioWeb"
                    value={formData.sitioWeb}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="https://www.empresa.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sector/Industria *
                </label>
                <select
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                >
                  <option value="">Seleccionar sector</option>
                  <option value="tecnologia">Tecnología</option>
                  <option value="salud">Salud</option>
                  <option value="educacion">Educación</option>
                  <option value="retail">Retail/Comercio</option>
                  <option value="servicios">Servicios Profesionales</option>
                  <option value="construccion">Construcción</option>
                  <option value="gastronomia">Gastronomía</option>
                  <option value="turismo">Turismo</option>
                  <option value="inmobiliaria">Inmobiliaria</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            {/* Objetivos del Sitio Web */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-4 border-b border-gray-200">
                🎯 Objetivos del Sitio Web
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  ¿Cuál es el objetivo principal? (puedes seleccionar varios) *
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Presencia online profesional",
                    "Generar leads/consultas",
                    "Vender productos online",
                    "Mostrar portfolio/trabajos",
                    "Brindar información",
                    "Sistema de gestión interno"
                  ].map((objetivo) => (
                    <label key={objetivo} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        name="objetivoPrincipal"
                        value={objetivo}
                        onChange={handleInputChange}
                        className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{objetivo}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe tu público objetivo
                </label>
                <textarea
                  name="publicoObjetivo"
                  value={formData.publicoObjetivo}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Ej: Empresas PyMEs del sector tecnológico, personas de 25-45 años interesadas en..."
                />
              </div>
            </div>

            {/* Funcionalidades */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-4 border-b border-gray-200">
                ⚙️ Funcionalidades Requeridas
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  ¿Qué funcionalidades necesitas?
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Formulario de contacto",
                    "Chat/WhatsApp integrado",
                    "Blog/Noticias",
                    "Galería de imágenes",
                    "Carrito de compras",
                    "Pagos online",
                    "Sistema de usuarios",
                    "Calendarios/Reservas",
                    "Integración con redes sociales",
                    "Newsletter/Email marketing",
                    "Múltiples idiomas",
                    "Panel de administración"
                  ].map((func) => (
                    <label key={func} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        name="funcionalidades"
                        value={func}
                        onChange={handleInputChange}
                        className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{func}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Referencias de Diseño */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-4 border-b border-gray-200">
                🎨 Referencias de Diseño
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sitio web de referencia 1 (que te guste)
                </label>
                <input
                  type="url"
                  name="webReferencia1"
                  value={formData.webReferencia1}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="https://www.ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Qué te gusta de este sitio?
                </label>
                <textarea
                  name="comentarioRef1"
                  value={formData.comentarioRef1}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Ej: Me gusta el diseño minimalista, los colores, la disposición de elementos..."
                />
              </div>
            </div>

            {/* Presupuesto y Timeline */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-4 border-b border-gray-200">
                💰 Presupuesto y Tiempos
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Presupuesto aproximado (USD)
                  </label>
                  <select
                    name="presupuestoAproximado"
                    value={formData.presupuestoAproximado}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="">Seleccionar rango</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha objetivo de lanzamiento
                  </label>
                  <input
                    type="date"
                    name="fechaLanzamiento"
                    value={formData.fechaLanzamiento}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Comentarios Adicionales */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-4 border-b border-gray-200">
                💭 Información Adicional
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comentarios adicionales o requisitos específicos
                </label>
                <textarea
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Cualquier información adicional que consideres importante para el proyecto..."
                />
              </div>
            </div>

            {/* Privacidad y Submit */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="privacidad"
                  checked={formData.privacidad}
                  onChange={handleInputChange}
                  className="mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label className="text-sm text-gray-600">
                  Acepto la{' '}
                  <Link href="/privacidad" className="text-blue-600 hover:text-blue-700 underline">
                    política de privacidad
                  </Link>{' '}
                  y autorizo el tratamiento de mis datos para responder a mi consulta *
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>🚀</span>
                <span>Enviar Proyecto y Recibir Cotización</span>
                <motion.div
                  className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.div>
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Garantía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center bg-white rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-center space-x-4">
            <span className="text-2xl">✅</span>
            <div>
              <h3 className="font-bold text-gray-900">Respuesta Garantizada en 24 horas</h3>
              <p className="text-gray-600 text-sm">Te contactaremos con una propuesta detallada y personalizada</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
