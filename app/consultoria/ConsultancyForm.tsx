"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ConsultancyFormData {
  // Información de Contacto
  nombreCompleto: string;
  cargo: string;
  empresa: string;
  email: string;
  telefono: string;
  sitioWeb: string;
  sector: string;
  tamanoEmpresa: string;
  
  // Servicios de Interés
  serviciosInteres: string[];
  otroServicio: string;
  
  // Situación Actual
  problemasActuales: string[];
  otroProblema: string;
  incidentesPrevios: string;
  evaluacionesPrevias: string;
  
  // Infraestructura y Sistemas
  tipoSistemas: string[];
  datosManejados: string[];
  cumplimientoNormativo: string[];
  
  // Objetivos y Prioridades
  objetivosPrincipales: string[];
  otroObjetivo: string;
  prioridadTiempo: string;
  presupuestoAproximado: string;
  
  // Detalles del Proyecto
  alcanceEsperado: string;
  comentarios: string;
  
  // Privacidad
  privacidad: boolean;
}

export default function ConsultancyForm() {
  const [formData, setConsultancyFormData] = useState<ConsultancyFormData>({
    nombreCompleto: "",
    cargo: "",
    empresa: "",
    email: "",
    telefono: "",
    sitioWeb: "",
    sector: "",
    tamanoEmpresa: "",
    serviciosInteres: [],
    otroServicio: "",
    problemasActuales: [],
    otroProblema: "",
    incidentesPrevios: "",
    evaluacionesPrevias: "",
    tipoSistemas: [],
    datosManejados: [],
    cumplimientoNormativo: [],
    objetivosPrincipales: [],
    otroObjetivo: "",
    prioridadTiempo: "",
    presupuestoAproximado: "",
    alcanceEsperado: "",
    comentarios: "",
    privacidad: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (name === 'privacidad') {
        setConsultancyFormData(prev => ({ ...prev, [name]: checkbox.checked }));
      } else {
        // Para checkboxes múltiples
        setConsultancyFormData(prev => ({
          ...prev,
          [name]: checkbox.checked 
            ? [...(prev[name as keyof ConsultancyFormData] as string[]), value]
            : (prev[name as keyof ConsultancyFormData] as string[]).filter(item => item !== value)
        }));
      }
    } else {
      setConsultancyFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario de consultoría enviado:', formData);
    // Aquí integrarías con tu servicio de email
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Consultoría en{" "}
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Seguridad Digital
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protege tu empresa con nuestros servicios especializados. Completá el formulario y recibí una evaluación personalizada.
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
            
            {/* Información de Contacto */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-4 border-b border-gray-200">
                👤 Información de Contacto
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cargo/Posición *
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    placeholder="Ej: CTO, IT Manager, Director"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    placeholder="Nombre de la empresa"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    placeholder="tu@empresa.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    placeholder="+54 11 1234-5678"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sitio Web de la Empresa
                  </label>
                  <input
                    type="url"
                    name="sitioWeb"
                    value={formData.sitioWeb}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    placeholder="https://www.empresa.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sector/Industria *
                  </label>
                  <select
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    required
                  >
                    <option value="">Seleccionar sector</option>
                    <option value="servicios-financieros">Servicios Financieros</option>
                    <option value="salud">Salud</option>
                    <option value="gobierno">Gobierno</option>
                    <option value="educacion">Educación</option>
                    <option value="retail">Retail</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="manufactura">Manufactura</option>
                    <option value="energia">Energía</option>
                    <option value="telecomunicaciones">Telecomunicaciones</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tamaño de la Empresa *
                  </label>
                  <select
                    name="tamanoEmpresa"
                    value={formData.tamanoEmpresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    required
                  >
                    <option value="">Seleccionar tamaño</option>
                    <option value="startup">Startup (1-10 empleados)</option>
                    <option value="pequeña">Pequeña (11-50 empleados)</option>
                    <option value="mediana">Mediana (51-200 empleados)</option>
                    <option value="grande">Grande (201-1000 empleados)</option>
                    <option value="enterprise">Enterprise (1000+ empleados)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Servicios de Interés */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-4 border-b border-gray-200">
                🔒 Servicios de Seguridad Digital
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  ¿Qué servicios te interesan? (puedes seleccionar varios) *
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Auditoría de Seguridad",
                    "Evaluación de Vulnerabilidades",
                    "Análisis de Riesgos",
                    "Implementación ISO 27001",
                    "Cumplimiento GDPR/Ley de Datos",
                    "Pruebas de Penetración (Pentesting)",
                    "Plan de Respuesta a Incidentes",
                    "Capacitación en Seguridad",
                    "Monitoreo de Seguridad 24/7",
                    "Backup y Recuperación",
                    "Seguridad en la Nube",
                    "Protección DDoS"
                  ].map((servicio) => (
                    <label key={servicio} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-red-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        name="serviciosInteres"
                        value={servicio}
                        onChange={handleInputChange}
                        className="text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{servicio}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Situación Actual de Seguridad */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-4 border-b border-gray-200">
                🚨 Situación Actual
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  ¿Qué problemas de seguridad enfrentas actualmente?
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Ataques de phishing/malware",
                    "Accesos no autorizados",
                    "Pérdida de datos",
                    "Sistemas desactualizados",
                    "Falta de políticas de seguridad",
                    "Personal sin capacitación",
                    "Cumplimiento normativo",
                    "Respaldos inadecuados",
                    "Red sin segmentación",
                    "Contraseñas débiles"
                  ].map((problema) => (
                    <label key={problema} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-orange-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        name="problemasActuales"
                        value={problema}
                        onChange={handleInputChange}
                        className="text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{problema}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Han tenido incidentes de seguridad previamente?
                </label>
                <select
                  name="incidentesPrevios"
                  value={formData.incidentesPrevios}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                >
                  <option value="">Seleccionar</option>
                  <option value="nunca">Nunca hemos tenido incidentes</option>
                  <option value="menores">Incidentes menores (spam, intentos bloqueados)</option>
                  <option value="moderados">Incidentes moderados (malware, accesos no autorizados)</option>
                  <option value="graves">Incidentes graves (pérdida de datos, downtime)</option>
                  <option value="no-seguro">No estoy seguro</option>
                </select>
              </div>
            </div>

            {/* Infraestructura y Sistemas */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-4 border-b border-gray-200">
                🏗️ Infraestructura Tecnológica
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  ¿Qué tipos de sistemas manejan?
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Aplicaciones web",
                    "Bases de datos",
                    "Servidores físicos",
                    "Infraestructura en la nube",
                    "Sistemas ERP/CRM",
                    "E-commerce",
                    "APIs y microservicios",
                    "Aplicaciones móviles",
                    "Sistemas de backup",
                    "Redes corporativas"
                  ].map((sistema) => (
                    <label key={sistema} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        name="tipoSistemas"
                        value={sistema}
                        onChange={handleInputChange}
                        className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{sistema}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  ¿Qué tipos de datos manejan?
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Datos personales de clientes",
                    "Información financiera",
                    "Datos de salud",
                    "Propiedad intelectual",
                    "Información comercial confidencial",
                    "Datos de empleados"
                  ].map((dato) => (
                    <label key={dato} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        name="datosManejados"
                        value={dato}
                        onChange={handleInputChange}
                        className="text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{dato}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Objetivos y Prioridades */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-4 border-b border-gray-200">
                🎯 Objetivos y Presupuesto
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prioridad de Implementación
                  </label>
                  <select
                    name="prioridadTiempo"
                    value={formData.prioridadTiempo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  >
                    <option value="">Seleccionar prioridad</option>
                    <option value="urgente">Urgente (1-2 semanas)</option>
                    <option value="alta">Alta (1 mes)</option>
                    <option value="media">Media (2-3 meses)</option>
                    <option value="baja">Baja (más de 3 meses)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Presupuesto aproximado (USD)
                  </label>
                  <select
                    name="presupuestoAproximado"
                    value={formData.presupuestoAproximado}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  >
                    <option value="">Seleccionar rango</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-15000">$5,000 - $15,000</option>
                    <option value="15000-50000">$15,000 - $50,000</option>
                    <option value="50000+">$50,000+</option>
                    <option value="definir">A definir según propuesta</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Información Adicional */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-4 border-b border-gray-200">
                📋 Detalles Adicionales
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe el alcance esperado de la consultoría
                </label>
                <textarea
                  name="alcanceEsperado"
                  value={formData.alcanceEsperado}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  placeholder="Ej: Necesitamos una auditoría completa de seguridad de nuestros sistemas web, implementación de políticas de seguridad y capacitación del personal..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comentarios adicionales o preguntas específicas
                </label>
                <textarea
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                  placeholder="Cualquier información adicional relevante para tu consultoría..."
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
                  className="mt-1 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  required
                />
                <label className="text-sm text-gray-600">
                  Acepto la{' '}
                  <Link href="/privacidad" className="text-red-600 hover:text-red-700 underline">
                    política de privacidad
                  </Link>{' '}
                  y autorizo el tratamiento de mis datos para la evaluación de seguridad *
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(239, 68, 68, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group w-full bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-red-700 hover:via-orange-700 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>🔒</span>
                <span>Solicitar Consultoría en Seguridad</span>
                <motion.div
                  className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </motion.div>
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Garantía de Respuesta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center bg-white rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-center space-x-4">
            <span className="text-2xl">🛡️</span>
            <div>
              <h3 className="font-bold text-gray-900">Evaluación Gratuita de Seguridad</h3>
              <p className="text-gray-600 text-sm">Recibí una evaluación inicial sin costo y propuesta detallada en 24 horas</p>
            </div>
          </div>
        </motion.div>

        {/* Certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6"
        >
          <div className="flex items-center justify-center space-x-6 text-gray-600">
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">ISO 27001</span>
              <span className="text-xs">Certified</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">GDPR</span>
              <span className="text-xs">Compliant</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">SOC 2</span>
              <span className="text-xs">Audited</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
