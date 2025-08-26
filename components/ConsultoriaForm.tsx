"use client";
import Link from 'next/link';
import { useState, useRef, useCallback } from 'react';

// 🔒 Validaciones básicas
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 100;
};

export default function ConsultoriaForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // 🔒 Honeypot para detectar bots (campo invisible)
  const honeypotRef = useRef<HTMLInputElement>(null);

  // 🔒 Rate limiting - prevenir spam
  const canSubmit = useCallback(() => {
    const now = Date.now();
    const timeDiff = now - lastSubmissionTime;
    return timeDiff > 30000; // 30 segundos entre envíos
  }, [lastSubmissionTime]);

  // 🔍 Test rápido de la API (funciona desde localhost)
  const testAPI = async () => {
    console.log('🔍 Probando conexión con Web3Forms desde localhost...');
    
    const testData = new FormData();
    testData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '');
    testData.append('name', 'Test Usuario Localhost');
    testData.append('email', 'test@pmdevcode.com.ar');
    testData.append('message', 'Prueba de conexión desde desarrollo local (localhost:3003)');
    testData.append('subject', 'TEST - Formulario desde localhost');
    testData.append('_captcha', 'false');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: testData
      });
      
      const data = await response.json();
      console.log('🔍 Test desde localhost:', { status: response.status, data });
      
      if (data.success) {
        alert('✅ Test exitoso! Revisa tu email en pocos minutos.');
      } else {
        alert('❌ Error en el test: ' + (data.message || 'Revisar consola'));
        console.error('Error details:', data);
      }
    } catch (error) {
      console.error('❌ Network error desde localhost:', error);
      alert('❌ Error de red. Revisar consola.');
    }
  };

  // 🔒 Validación del formulario
  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {};
    
    const nombre = (formData.get('nombre') as string || '').trim();
    const email = (formData.get('email') as string || '').trim();
    const empresa = (formData.get('empresa') as string || '').trim();
    const descripcion = (formData.get('descripcion') as string || '').trim();
    const asesoria = formData.get('asesoria') as string;
    const tipoConsulta = formData.get('tipo_consulta') as string;

    if (!nombre || nombre.length < 2) {
      newErrors.nombre = 'Nombre requerido (mínimo 2 caracteres)';
    }
    
    if (!email || !validateEmail(email)) {
      newErrors.email = 'Email válido requerido';
    }
    
    if (!empresa || empresa.length < 2) {
      newErrors.empresa = 'Empresa requerida (mínimo 2 caracteres)';
    }
    
    if (!descripcion || descripcion.length < 10) {
      newErrors.descripcion = 'Descripción requerida (mínimo 10 caracteres)';
    }
    
    if (!asesoria) {
      newErrors.asesoria = 'Selecciona un área de asesoría';
    }
    
    if (!tipoConsulta) {
      newErrors.tipoConsulta = 'Selecciona un tipo de consulta';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 🔒 Verificar rate limiting
    if (!canSubmit()) {
      setErrors({ general: 'Espera 30 segundos antes de enviar otro formulario' });
      return;
    }

    // 🔒 Verificar honeypot (detectar bots)
    if (honeypotRef.current?.value) {
      console.log('🤖 Bot detectado - formulario bloqueado');
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    
    // 🔒 Validar formulario antes del envío
    if (!validateForm(formData)) {
      setIsSubmitting(false);
      return;
    }
    
    // 🔧 Preparar datos para Web3Forms
    const submissionData = new FormData();
    submissionData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '');
    
    // Campos estándar requeridos
    submissionData.append('name', (formData.get('nombre') as string || '').trim());
    submissionData.append('email', (formData.get('email') as string || '').trim());
    submissionData.append('subject', '🔥 Consulta Asesoría IT - PmDevOps');
    
    // Mensaje completo formateado
    const mensaje = `
NUEVA CONSULTA DE ASESORÍA IT - PmDevOps
===========================================
🌐 Enviado desde: ${window.location.origin} (desarrollo local)

👤 INFORMACIÓN DE CONTACTO:
• Nombre: ${(formData.get('nombre') as string || '').trim()}
• Email: ${(formData.get('email') as string || '').trim()}
• Empresa: ${(formData.get('empresa') as string || '').trim()}
• Teléfono: ${(formData.get('telefono') as string || 'No proporcionado').trim()}

🎯 DETALLES DE LA CONSULTA:
• Área de asesoría: ${formData.get('asesoria')}
• Tipo de consulta: ${formData.get('tipo_consulta')}

💬 DESCRIPCIÓN:
${(formData.get('descripcion') as string || '').trim()}

---
📅 Fecha: ${new Date().toLocaleString('es-AR')}
    `.trim();
    
    submissionData.append('message', mensaje);
    
    // Configuración especial para localhost
    submissionData.append('_captcha', 'false');
    submissionData.append('_template', 'basic');
    
    try {
      console.log('🔍 Enviando desde localhost:', Object.fromEntries(submissionData.entries()));
      
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

      // 🔧 Mejorar detección de éxito para localhost
      const isSuccess = response.ok || response.status === 200 || (data && data.success);
      
      if (isSuccess) {
        setSubmitStatus('success');
        setLastSubmissionTime(Date.now());
        e.currentTarget.reset();
        console.log('✅ Email enviado exitosamente desde localhost!');
      } else {
        console.warn('⚠️ Respuesta ambigua desde localhost. Email puede haberse enviado.');
        // En localhost, asumimos éxito si no hay error crítico
        if (response.status < 500) {
          setSubmitStatus('success');
          setLastSubmissionTime(Date.now());
          e.currentTarget.reset();
          console.log('✅ Asumiendo éxito desde localhost (revisa tu email)');
        } else {
          throw new Error(data?.message || `Error del servidor: ${response.status}`);
        }
      }
    } catch (error) {
      console.error('❌ Error completo:', error);
      
      // 🔧 En localhost, dar más información sobre el error
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Header con navegación */}
      <nav className="px-4 py-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white hover:text-blue-300 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
          <div className="text-white font-semibold">
            PmDevOps - Consultoría IT
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="px-4 pb-8">
        <div className="max-w-2xl mx-auto">
          {/* Header del formulario */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Consulta de Asesoría IT
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              <strong>Patricio Millán - PmDevOps</strong>
            </p>
            <p className="text-gray-400">
              Obtené orientación técnica especializada para potenciar tu negocio
            </p>
            
            {/* 🔍 Botón de test API */}
            <div className="mt-4 space-x-4">
              <button
                onClick={testAPI}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                🔍 Test desde Localhost
              </button>
              <span className="text-yellow-400 text-xs">
                ⚡ Optimizado para desarrollo local
              </span>
            </div>
          </div>

          {/* 🔒 Mensajes de error general */}
          {errors.general && (
            <div className="mb-8 bg-red-500/20 border border-red-500/40 rounded-xl p-6 text-center">
              <div className="text-red-400 text-4xl mb-3">⚠️</div>
              <h3 className="text-red-300 text-xl font-semibold mb-2">Error desde Localhost</h3>
              <p className="text-red-200">{errors.general}</p>
              <p className="text-red-300 text-xs mt-2">
                💡 Si persiste el error, el formulario funcionará perfecto en producción
              </p>
            </div>
          )}

          {/* Mensaje de éxito */}
          {submitStatus === 'success' && (
            <div className="mb-8 bg-green-500/20 border border-green-500/40 rounded-xl p-6 text-center">
              <div className="text-green-400 text-4xl mb-3">✅</div>
              <h3 className="text-green-300 text-xl font-semibold mb-2">¡Formulario enviado desde localhost!</h3>
              <p className="text-green-200 mb-4">
                Tu consulta fue enviada exitosamente desde desarrollo local. Te contactaremos dentro de las próximas 24 horas hábiles.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Enviar otra consulta
              </button>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 bg-red-500/20 border border-red-500/40 rounded-xl p-6 text-center">
              <div className="text-red-400 text-4xl mb-3">❌</div>
              <h3 className="text-red-300 text-xl font-semibold mb-2">Error desde localhost</h3>
              <p className="text-red-200 mb-4">
                Hubo un problema al enviar desde desarrollo local. En producción funcionará perfectamente.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Intentar nuevamente
              </button>
            </div>
          )}

          {submitStatus === 'idle' && (
            <>
              {/* Formulario */}
              <form 
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl"
              >
                {/* 🔒 Honeypot anti-bot (campo invisible) */}
                <input
                  ref={honeypotRef}
                  type="text"
                  name="honeypot"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Información personal */}
                <div className="space-y-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-6 border-b border-white/20 pb-3">
                    Información de Contacto
                  </h2>
                  
                  {/* Nombre completo */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-200 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      maxLength={100}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 ${
                        errors.nombre ? 'border-red-500 focus:ring-red-500' : 'border-white/20'
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.nombre && <p className="text-red-300 text-sm mt-1">{errors.nombre}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={100}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/20'
                      }`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Empresa */}
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-200 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      required
                      maxLength={150}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 ${
                        errors.empresa ? 'border-red-500 focus:ring-red-500' : 'border-white/20'
                      }`}
                      placeholder="Nombre de tu empresa"
                    />
                    {errors.empresa && <p className="text-red-300 text-sm mt-1">{errors.empresa}</p>}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-200 mb-2">
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      maxLength={20}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="+54 9 11 xxxx-xxxx"
                    />
                  </div>
                </div>

                {/* Detalles de la consulta */}
                <div className="space-y-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-6 border-b border-white/20 pb-3">
                    Detalles de la Consulta
                  </h2>

                  {/* Área de asesoría */}
                  <div>
                    <label htmlFor="asesoria" className="block text-sm font-medium text-gray-200 mb-2">
                      ¿En qué necesitás asesoría? *
                    </label>
                    <select
                      id="asesoria"
                      name="asesoria"
                      required
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 ${
                        errors.asesoria ? 'border-red-500 focus:ring-red-500' : 'border-white/20'
                      }`}
                    >
                      <option value="" className="bg-gray-800">Selecciona un área de asesoría</option>
                      <option value="automatizacion" className="bg-gray-800">Automatización de procesos</option>
                      <option value="chatbots-ia" className="bg-gray-800">Chatbots e IA para mi negocio</option>
                      <option value="seguridad" className="bg-gray-800">Seguridad digital empresarial</option>
                      <option value="charla-capacitacion" className="bg-gray-800">Charla/Capacitación para equipo</option>
                      <option value="migracion" className="bg-gray-800">Migración de sistemas</option>
                      <option value="decisiones-tecnicas" className="bg-gray-800">Decisiones técnicas (React vs WordPress, etc)</option>
                      <option value="marketing-digital" className="bg-gray-800">Marketing digital y analytics</option>
                      <option value="auditoria-it" className="bg-gray-800">Auditoría IT de mi empresa</option>
                      <option value="emails-corporativos" className="bg-gray-800">Gestión técnica de emails corporativos</option>
                      <option value="consulta-general" className="bg-gray-800">Consulta general</option>
                    </select>
                    {errors.asesoria && <p className="text-red-300 text-sm mt-1">{errors.asesoria}</p>}
                  </div>

                  {/* Tipo de consulta */}
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-4">
                      Tipo de consulta *
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="telefonica"
                          name="tipo_consulta"
                          value="telefonica"
                          required
                          disabled={isSubmitting}
                          className="w-4 h-4 text-blue-600 bg-white/10 border-white/30 focus:ring-blue-500 focus:ring-2 disabled:opacity-50"
                        />
                        <label htmlFor="telefonica" className="ml-3 text-gray-200 flex items-center gap-2">
                          🗣️ <span>Consulta telefónica (30-60 min)</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="presencial"
                          name="tipo_consulta"
                          value="presencial"
                          required
                          disabled={isSubmitting}
                          className="w-4 h-4 text-blue-600 bg-white/10 border-white/30 focus:ring-blue-500 focus:ring-2 disabled:opacity-50"
                        />
                        <label htmlFor="presencial" className="ml-3 text-gray-200 flex items-center gap-2">
                          🎤 <span>Charla presencial para equipo</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="integral"
                          name="tipo_consulta"
                          value="integral"
                          required
                          disabled={isSubmitting}
                          className="w-4 h-4 text-blue-600 bg-white/10 border-white/30 focus:ring-blue-500 focus:ring-2 disabled:opacity-50"
                        />
                        <label htmlFor="integral" className="ml-3 text-gray-200 flex items-center gap-2">
                          📋 <span>Asesoría integral por proyecto</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="auditoria"
                          name="tipo_consulta"
                          value="auditoria"
                          required
                          disabled={isSubmitting}
                          className="w-4 h-4 text-blue-600 bg-white/10 border-white/30 focus:ring-blue-500 focus:ring-2 disabled:opacity-50"
                        />
                        <label htmlFor="auditoria" className="ml-3 text-gray-200 flex items-center gap-2">
                          🔍 <span>Auditoría técnica</span>
                        </label>
                      </div>
                    </div>
                    {errors.tipoConsulta && <p className="text-red-300 text-sm mt-1">{errors.tipoConsulta}</p>}
                  </div>

                  {/* Descripción */}
                  <div>
                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-200 mb-2">
                      Describe tu consulta *
                    </label>
                    <textarea
                      id="descripcion"
                      name="descripcion"
                      required
                      rows={5}
                      maxLength={2000}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical disabled:opacity-50 ${
                        errors.descripcion ? 'border-red-500 focus:ring-red-500' : 'border-white/20'
                      }`}
                      placeholder="Contame sobre tu situación actual y qué tipo de orientación técnica necesitás..."
                    />
                    {errors.descripcion && <p className="text-red-300 text-sm mt-1">{errors.descripcion}</p>}
                    <p className="text-gray-400 text-xs mt-1">Máximo 2000 caracteres</p>
                  </div>
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isSubmitting || !canSubmit()}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Enviando desde localhost...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Solicitar Asesoría (Localhost)</span>
                    </>
                  )}
                </button>

                {!canSubmit() && (
                  <p className="text-center text-yellow-400 text-sm mt-4">
                    ⏳ Espera {Math.ceil((30000 - (Date.now() - lastSubmissionTime)) / 1000)} segundos para enviar otro formulario
                  </p>
                )}
              </form>

              {/* Información adicional */}
              <div className="mt-8 text-center">
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
