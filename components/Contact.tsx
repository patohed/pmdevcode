"use client";
import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";

// Validación de email
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 100;
};

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

  const [formData, setFormData] = useState({
    nombre: '',
    cargo: '',
    email: '',
    empresa: '',
    tamanoEmpresa: '',
    tipoSolucion: '',
    presupuesto: '',
    descripcion: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nombre.trim() || formData.nombre.length < 2) {
      newErrors.nombre = 'Nombre requerido (mínimo 2 caracteres)';
    }
    
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Email válido requerido';
    }
    
    if (!formData.empresa.trim() || formData.empresa.length < 2) {
      newErrors.empresa = 'Empresa requerida (mínimo 2 caracteres)';
    }

    if (!formData.tipoSolucion) {
      newErrors.tipoSolucion = 'Tipo de solución requerido';
    }

    if (!formData.descripcion.trim() || formData.descripcion.length < 10) {
      newErrors.descripcion = 'Descripción requerida (mínimo 10 caracteres)';
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
    
    // Preparar datos para Web3Forms
    const submissionData = new FormData();
    submissionData.append('access_key', '785b22ca-f549-4342-b273-3dface70aeed');
    
    // Campos estándar requeridos
    submissionData.append('name', formData.nombre);
    submissionData.append('email', formData.email);
    submissionData.append('subject', '💼 Nueva Consulta Empresarial - PmDevCode');
    
    // Mensaje completo formateado
    const mensaje = `
NUEVA CONSULTA EMPRESARIAL - PmDevCode
=====================================
🌐 Enviado desde: ${typeof window !== 'undefined' ? window.location.origin : 'Web'}

👤 INFORMACIÓN DE CONTACTO:
• Nombre: ${formData.nombre}
• Cargo: ${formData.cargo || 'No especificado'}
• Email: ${formData.email}
• Empresa: ${formData.empresa}
• Tamaño Empresa: ${formData.tamanoEmpresa || 'No especificado'}

💼 PROYECTO:
• Tipo de Solución: ${formData.tipoSolucion}
• Presupuesto Estimado: ${formData.presupuesto || 'No especificado'}

📝 DESCRIPCIÓN DEL PROYECTO:
${formData.descripcion}

---
📅 Fecha: ${new Date().toLocaleString('es-AR')}
    `.trim();
    
    submissionData.append('message', mensaje);
    
    // Configuración especial
    submissionData.append('_captcha', 'false');
    submissionData.append('_template', 'basic');
    
    try {
      console.log('🔍 Enviando consulta empresarial:', formData);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData
      });

      console.log('🔍 Response status:', response.status);
      
      let data;
      try {
        data = await response.json();
        console.log('🔍 Response data:', data);
      } catch {
        console.log('⚠️ No se pudo parsear JSON, pero puede que el email se haya enviado');
        data = null;
      }

      // Mejorar detección de éxito
      const isSuccess = response.ok || response.status === 200 || (data && data.success);
      
      if (isSuccess) {
        setSubmitStatus('success');
        setLastSubmissionTime(Date.now());
        // Limpiar formulario
        setFormData({
          nombre: '',
          cargo: '',
          email: '',
          empresa: '',
          tamanoEmpresa: '',
          tipoSolucion: '',
          presupuesto: '',
          descripcion: ''
        });
        console.log('✅ Consulta empresarial enviada exitosamente!');
      } else {
        console.warn('⚠️ Respuesta ambigua. Email puede haberse enviado.');
        // Asumimos éxito si no hay error crítico
        if (response.status < 500) {
          setSubmitStatus('success');
          setLastSubmissionTime(Date.now());
          console.log('✅ Asumiendo éxito (revisa tu email)');
        } else {
          throw new Error(data?.message || `Error del servidor: ${response.status}`);
        }
      }
    } catch (error) {
      console.error('❌ Error completo:', error);
      
      const isNetworkError = error instanceof TypeError && error.message.includes('fetch');
      const isTimeoutError = error instanceof Error && error.message.includes('timeout');
      
      if (isNetworkError || isTimeoutError) {
        setErrors({ 
          general: `⚠️ Error de red. El email PUEDE haberse enviado correctamente. Revisa tu bandeja de entrada en unos minutos.` 
        });
      } else {
        setErrors({ 
          general: `Error: ${error instanceof Error ? error.message : 'Conexión fallida'}` 
        });
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header optimizado para móvil */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2 sm:px-0">
            ¿Listo para Transformar tu Organización?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-2 sm:px-0">
            Agenda una reunión comercial y recibí una propuesta técnica personalizada en 48 horas
          </p>
        </div>
        
        {/* Grid optimizado para móvil - stack vertical en móvil */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Benefits section - optimizado para móvil */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6 sm:space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {benefit.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2 leading-tight">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Contact form - optimizado para móvil */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 order-1 lg:order-2"
          >
            {/* Honeypot field - invisible para humanos */}
            <input 
              ref={honeypotRef}
              type="text" 
              name="website" 
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Mensajes de estado */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 border border-green-200 rounded-xl flex items-center space-x-3"
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-green-800 font-semibold">¡Mensaje enviado exitosamente!</p>
                  <p className="text-green-700 text-sm">Te contactaremos dentro de las próximas 24 horas.</p>
                </div>
              </motion.div>
            )}

            {errors.general && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-100 border border-red-200 rounded-xl flex items-center space-x-3"
              >
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-red-800 text-sm">{errors.general}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Grid que se vuelve stack en móvil */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nombre completo *</label>
                  <input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-3 text-sm sm:text-base rounded-xl border transition-all outline-none ${
                      errors.nombre 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                        : 'border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'
                    }`}
                    placeholder="Tu nombre"
                    disabled={isSubmitting}
                    required
                  />
                  {errors.nombre && <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Cargo / Posición</label>
                  <input 
                    type="text" 
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-3 text-sm sm:text-base rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none" 
                    placeholder="Ej: Gerente General"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email corporativo *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all outline-none ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                        : 'border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'
                    }`}
                    placeholder="nombre@empresa.com"
                    disabled={isSubmitting}
                    required
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la empresa *</label>
                  <input 
                    type="text" 
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all outline-none ${
                      errors.empresa 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                        : 'border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'
                    }`}
                    placeholder="Nombre de tu organización"
                    disabled={isSubmitting}
                    required
                  />
                  {errors.empresa && <p className="mt-1 text-sm text-red-600">{errors.empresa}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tamaño de empresa</label>
                  <select 
                    name="tamanoEmpresa"
                    value={formData.tamanoEmpresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    disabled={isSubmitting}
                  >
                    <option value="">Seleccionar</option>
                    <option value="1-10">1-10 empleados</option>
                    <option value="11-50">11-50 empleados</option>
                    <option value="51-200">51-200 empleados</option>
                    <option value="201-500">201-500 empleados</option>
                    <option value="+500">+500 empleados</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de solución *</label>
                  <select 
                    name="tipoSolucion"
                    value={formData.tipoSolucion}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all outline-none ${
                      errors.tipoSolucion 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                        : 'border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'
                    }`}
                    disabled={isSubmitting}
                    required
                  >
                    <option value="">Seleccionar tipo</option>
                    <option value="corporativo">Sitio corporativo/institucional</option>
                    <option value="ecommerce">E-commerce PyME</option>
                    <option value="sistema">Sistema de gestión web</option>
                    <option value="intranet">Intranet corporativa</option>
                    <option value="portal">Portal proveedores/clientes</option>
                    <option value="personalizada">Solución personalizada</option>
                  </select>
                  {errors.tipoSolucion && <p className="mt-1 text-sm text-red-600">{errors.tipoSolucion}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Presupuesto estimado</label>
                  <select 
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 transition-all outline-none"
                    disabled={isSubmitting}
                  >
                    <option value="">Seleccionar</option>
                    <option value="100k-200k">$100k - $200k</option>
                    <option value="200k-400k">$200k - $400k</option>
                    <option value="400k-800k">$400k - $800k</option>
                    <option value="+800k">+$800k</option>
                    <option value="definir">A definir</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Describí tu proyecto y objetivos *</label>
                <textarea 
                  rows={4} 
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all outline-none resize-none ${
                    errors.descripcion 
                      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                      : 'border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-300'
                  }`}
                  placeholder="Contanos sobre tu organización, objetivos del proyecto, funcionalidades requeridas, plazos esperados, etc."
                  disabled={isSubmitting}
                  required
                />
                {errors.descripcion && <p className="mt-1 text-sm text-red-600">{errors.descripcion}</p>}
              </div>
              
              <motion.button
                whileHover={!isSubmitting ? { 
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)"
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`group w-full py-4 px-6 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : submitStatus === 'success' 
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700'
                } text-white`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>¡Mensaje Enviado!</span>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
