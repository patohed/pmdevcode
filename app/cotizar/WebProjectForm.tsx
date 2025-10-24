"use client";
import { useState, useRef, useCallback } from "react";
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

// Validación de email
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 100;
};

export default function WebProjectForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Honeypot para detectar bots (campo invisible)
  const honeypotRef = useRef<HTMLInputElement>(null);

  // Rate limiting - prevenir spam
  const canSubmit = useCallback(() => {
    const now = Date.now();
    const timeDiff = now - lastSubmissionTime;
    return timeDiff > 30000; // 30 segundos entre envíos
  }, [lastSubmissionTime]);
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

  // Validación del formulario
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nombreCompleto || formData.nombreCompleto.length < 2) {
      newErrors.nombreCompleto = 'Nombre requerido (mínimo 2 caracteres)';
    }
    
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Email válido requerido';
    }
    
    if (!formData.empresa || formData.empresa.length < 2) {
      newErrors.empresa = 'Empresa requerida (mínimo 2 caracteres)';
    }

    if (!formData.privacidad) {
      newErrors.privacidad = 'Debe aceptar la política de privacidad';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar rate limiting
    if (!canSubmit()) {
      setErrors({ general: 'Espera 30 segundos antes de enviar otro formulario' });
      return;
    }

    // Verificar honeypot (detectar bots)
    if (honeypotRef.current?.value) {
      console.log('🤖 Bot detectado - formulario bloqueado');
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    
    // Validar formulario antes del envío
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }
    
    // 🔒 Enviar a nuestra API segura (NO expone credenciales)
    const payload = {
      name: formData.nombreCompleto,
      email: formData.email,
      company: formData.empresa,
      subject: '🚀 Propuesta Web Completa - PmDevCode',
      message: `
NUEVA SOLICITUD DE PROPUESTA WEB COMPLETA - PmDevCode
=======================================================
🌐 Enviado desde: ${typeof window !== 'undefined' ? window.location.origin : 'Web'}

👤 INFORMACIÓN DE CONTACTO:
• Nombre: ${formData.nombreCompleto}
• Email: ${formData.email}
• Empresa: ${formData.empresa}
• Sitio Web Actual: ${formData.sitioWeb || 'No tiene'}
• Sector: ${formData.sector || 'No especificado'}

🎯 OBJETIVOS DEL SITIO WEB:
• Objetivo Principal: ${formData.objetivoPrincipal.join(', ') || 'No especificado'}
• Otro Objetivo: ${formData.objetivoOtro || 'Ninguno'}
• Público Objetivo: ${formData.publicoObjetivo || 'No especificado'}

📝 CONTENIDOS:
• Secciones: ${formData.secciones.join(', ') || 'No especificado'}
• Textos Listos: ${formData.textosListos || 'No especificado'}
• Recursos Gráficos: ${formData.recursosGraficos || 'No especificado'}

🎨 DISEÑO E IDENTIDAD VISUAL:
• Elementos de Identidad: ${formData.identidadVisual.join(', ') || 'No especificado'}
• Web Referencia 1: ${formData.webReferencia1 || 'No especificada'}
• Comentario Ref 1: ${formData.comentarioRef1 || 'Sin comentarios'}
• Web Referencia 2: ${formData.webReferencia2 || 'No especificada'}
• Comentario Ref 2: ${formData.comentarioRef2 || 'Sin comentarios'}

⚙️ FUNCIONALIDADES:
• Funcionalidades: ${formData.funcionalidades.join(', ') || 'No especificado'}
• Otra Funcionalidad: ${formData.funcionalidadOtra || 'Ninguna'}
• Integraciones: ${formData.integraciones.join(', ') || 'No especificado'}

🔧 ASPECTOS TÉCNICOS:
• Dominio: ${formData.dominio || 'No especificado'}
• Hosting: ${formData.hosting || 'No especificado'}
• Mantenimiento: ${formData.mantenimiento || 'No especificado'}

⏰ TIMELINE Y PRESUPUESTO:
• Fecha de Lanzamiento: ${formData.fechaLanzamiento || 'Flexible'}
• Presupuesto Aproximado: ${formData.presupuestoAproximado || 'No especificado'}

💭 INFORMACIÓN ADICIONAL:
${formData.comentarios || 'Sin comentarios adicionales'}

---
📅 Fecha: ${new Date().toLocaleString('es-AR')}
      `.trim()
    };
    
    try {
      console.log('🔍 Enviando propuesta web...');
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        setLastSubmissionTime(Date.now());
        console.log('✅ Propuesta web enviada exitosamente!');
      } else {
        throw new Error(data.message || 'Error al enviar el formulario');
      }
    } catch (error) {
      console.error('❌ Error completo:', error);
      setErrors({ 
        general: `Error: ${error instanceof Error ? error.message : 'No se pudo enviar el formulario'}` 
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            
            {/* Campo honeypot invisible para detectar bots */}
            <input
              ref={honeypotRef}
              type="text"
              name="website"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Mensajes de estado */}
            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm">{errors.general}</p>
              </div>
            )}

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 text-sm font-medium">
                  ✅ ¡Propuesta enviada exitosamente! Te contactaremos en menos de 24 horas.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  ⚠️ Hubo un problema al enviar. Por favor, intenta nuevamente o contáctanos por WhatsApp.
                </p>
              </div>
            )}
            
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.nombreCompleto ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Tu nombre completo"
                    required
                  />
                  {errors.nombreCompleto && (
                    <p className="text-red-600 text-sm mt-1">{errors.nombreCompleto}</p>
                  )}
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="tu@email.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.empresa ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Nombre de tu empresa"
                    required
                  />
                  {errors.empresa && (
                    <p className="text-red-600 text-sm mt-1">{errors.empresa}</p>
                  )}
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
                  className={`mt-1 text-blue-600 focus:ring-blue-500 rounded ${
                    errors.privacidad ? 'border-red-300' : 'border-gray-300'
                  }`}
                  required
                />
                <div>
                  <label className="text-sm text-gray-600">
                    Acepto la{' '}
                    <Link href="/privacidad" className="text-blue-600 hover:text-blue-700 underline">
                      política de privacidad
                    </Link>{' '}
                    y autorizo el tratamiento de mis datos para responder a mi consulta *
                  </label>
                  {errors.privacidad && (
                    <p className="text-red-600 text-sm mt-1">{errors.privacidad}</p>
                  )}
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.02,
                  boxShadow: isSubmitting ? "none" : "0 15px 35px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`group w-full px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 flex items-center justify-center space-x-3 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Enviando Propuesta...</span>
                  </>
                ) : (
                  <>
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
                  </>
                )}
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
