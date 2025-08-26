"use client";
import Link from 'next/link';

export default function ConsultoriaFormClient() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Obtener los valores del formulario
    const asesoria = formData.get('asesoria') as string;
    const tipoConsulta = formData.get('tipo_consulta') as string;
    
    // Convertir valores a texto legible
    const asesoriaTexts: { [key: string]: string } = {
      'automatizacion': 'Automatización de procesos',
      'chatbots-ia': 'Chatbots e IA para mi negocio',
      'seguridad': 'Seguridad digital empresarial',
      'charla-capacitacion': 'Charla/Capacitación para equipo',
      'migracion': 'Migración de sistemas',
      'decisiones-tecnicas': 'Decisiones técnicas (React vs WordPress, etc)',
      'marketing-digital': 'Marketing digital y analytics',
      'auditoria-it': 'Auditoría IT de mi empresa',
      'emails-corporativos': 'Configuración emails corporativos',
      'consulta-general': 'Consulta general'
    };

    const tipoConsultaTexts: { [key: string]: string } = {
      'telefonica': '🗣️ Consulta telefónica (30-60 min)',
      'presencial': '🎤 Charla presencial para equipo',
      'integral': '📋 Asesoría integral por proyecto',
      'auditoria': '🔍 Auditoría técnica'
    };

    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      empresa: formData.get('empresa'),
      telefono: formData.get('telefono'),
      asesoria: asesoriaTexts[asesoria] || asesoria,
      tipo_consulta: tipoConsultaTexts[tipoConsulta] || tipoConsulta,
      descripcion: formData.get('descripcion')
    };

    // Crear mensaje para WhatsApp
    const mensaje = `🔥 *NUEVA CONSULTA DE ASESORÍA IT*

👤 *Datos de contacto:*
• Nombre: ${data.nombre}
• Email: ${data.email}
• Empresa: ${data.empresa}
• Teléfono: ${data.telefono || 'No proporcionado'}

🎯 *Tipo de asesoría:* ${data.asesoria}
📋 *Modalidad:* ${data.tipo_consulta}

💬 *Descripción:*
${data.descripcion}

---
Enviado desde: pmdevcode.com.ar/consultoria`;

    // Enviar por WhatsApp
    const phoneNumber = "5491234567890"; // Reemplaza con tu número real
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
    
    // Mostrar mensaje de confirmación
    alert('¡Consulta preparada! Se abrirá WhatsApp para enviar tu consulta.');
    
    // Opcional: limpiar el formulario
    form.reset();
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
          </div>

          {/* Formulario */}
          <form 
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl"
          >
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
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre completo"
                />
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
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
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
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Nombre de tu empresa"
                />
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
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                  <option value="emails-corporativos" className="bg-gray-800">Configuración emails corporativos</option>
                  <option value="consulta-general" className="bg-gray-800">Consulta general</option>
                </select>
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
                      className="w-4 h-4 text-blue-600 bg-white/10 border-white/30 focus:ring-blue-500 focus:ring-2"
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
                      className="w-4 h-4 text-blue-600 bg-white/10 border-white/30 focus:ring-blue-500 focus:ring-2"
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
                      className="w-4 h-4 text-blue-600 bg-white/10 border-white/30 focus:ring-blue-500 focus:ring-2"
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
                      className="w-4 h-4 text-blue-600 bg-white/10 border-white/30 focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="auditoria" className="ml-3 text-gray-200 flex items-center gap-2">
                      🔍 <span>Auditoría técnica</span>
                    </label>
                  </div>
                </div>
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
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                  placeholder="Contame sobre tu situación actual y qué tipo de orientación técnica necesitás..."
                />
              </div>
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Solicitar Asesoría
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              Te contactaremos dentro de las próximas 24 horas hábiles
            </p>
          </form>

          {/* Información adicional */}
          <div className="mt-8 text-center">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">
                Sobre la Consultoría
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Patricio Millán ofrece asesoramiento técnico especializado para empresas que buscan optimizar sus procesos digitales, implementar nuevas tecnologías o tomar decisiones técnicas informadas. Con +5 años de experiencia en el sector IT.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
