"use client";
import { useState } from "react";

interface FormData {
  // Información del Cliente
  nombreEmpresa: string;
  nombreContacto: string;
  email: string;
  sitioWeb: string;
  sector: string;
  
  // Objetivos del Sitio Web
  objetivoPrincipal: string;
  objetivosSecundarios: string[];
  publicoObjetivo: string;
  
  // Contenido
  tieneContenido: string;
  necesitaRedaccion: string;
  numeroIdiomas: string;
  
  // Diseño
  tieneIdentidad: string;
  coloresPredilectos: string;
  sitiosReferencia: string;
  
  // Funcionalidades
  funcionalidades: string[];
  integraciones: string[];
  
  // Administración
  quienActualiza: string;
  frecuenciaActualizacion: string;
  necesitaCapacitacion: string;
  
  // Cronograma y Presupuesto
  fechaLanzamiento: string;
  presupuestoAproximado: string;
  
  // Comentarios
  comentariosAdicionales: string;
}

export default function MCPCards() {
  const [formData, setFormData] = useState<FormData>({
    nombreEmpresa: "",
    nombreContacto: "",
    email: "",
    sitioWeb: "",
    sector: "",
    objetivoPrincipal: "",
    objetivosSecundarios: [],
    publicoObjetivo: "",
    tieneContenido: "",
    necesitaRedaccion: "",
    numeroIdiomas: "1",
    tieneIdentidad: "",
    coloresPredilectos: "",
    sitiosReferencia: "",
    funcionalidades: [],
    integraciones: [],
    quienActualiza: "",
    frecuenciaActualizacion: "",
    necesitaCapacitacion: "",
    fechaLanzamiento: "",
    presupuestoAproximado: "",
    comentariosAdicionales: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'objetivosSecundarios' | 'funcionalidades' | 'integraciones') => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario MCP-D Cards enviado:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-green-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">📋</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Requerimientos del Sitio Web
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete cada tarjeta con la información solicitada. Cada sección es importante para crear la propuesta perfecta para su proyecto.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Card 1: Información del Cliente */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl text-white">👤</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Información del Cliente</h2>
                <p className="text-gray-600">Datos básicos de contacto y empresa</p>
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre de la Empresa *
                </label>
                <input
                  type="text"
                  name="nombreEmpresa"
                  value={formData.nombreEmpresa}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="Ingrese el nombre de su empresa"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre de Contacto *
                </label>
                <input
                  type="text"
                  name="nombreContacto"
                  value={formData.nombreContacto}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="Su nombre completo"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="ejemplo@empresa.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sitio Web Actual
                </label>
                <input
                  type="url"
                  name="sitioWeb"
                  value={formData.sitioWeb}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="https://www.empresa.com"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Sector de la Empresa *
              </label>
              <select
                name="sector"
                value={formData.sector}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                required
              >
                <option value="">Seleccione un sector</option>
                <option value="tecnologia">Tecnología</option>
                <option value="servicios">Servicios Profesionales</option>
                <option value="comercio">Comercio/Retail</option>
                <option value="manufactura">Manufactura</option>
                <option value="salud">Salud</option>
                <option value="educacion">Educación</option>
                <option value="inmobiliario">Inmobiliario</option>
                <option value="gastronomia">Gastronomía</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          {/* Card 2: Objetivos del Sitio Web */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl text-white">🎯</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Objetivos del Sitio Web</h2>
                <p className="text-gray-600">¿Qué quiere lograr con su sitio web?</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Objetivo Principal *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { value: "presencia_digital", label: "Presencia Digital", icon: "🏢" },
                    { value: "ventas_online", label: "Ventas Online", icon: "🛒" },
                    { value: "generacion_leads", label: "Generar Leads", icon: "📈" },
                    { value: "reservas", label: "Sistema de Reservas", icon: "📅" },
                    { value: "informativo", label: "Portal Informativo", icon: "📰" },
                    { value: "comunidad", label: "Comunidad", icon: "👥" }
                  ].map((objetivo) => (
                    <label key={objetivo.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-purple-300 hover:bg-purple-50 transition-all">
                      <input
                        type="radio"
                        name="objetivoPrincipal"
                        value={objetivo.value}
                        checked={formData.objetivoPrincipal === objetivo.value}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-2 focus:ring-purple-500"
                        required
                      />
                      <span className="text-xl ml-3 mr-2">{objetivo.icon}</span>
                      <span className="font-medium text-gray-700">{objetivo.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Objetivos Secundarios (seleccione los que apliquen)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { value: "Mejorar SEO/Posicionamiento", icon: "🔍" },
                    { value: "Integración con Redes Sociales", icon: "📱" },
                    { value: "Newsletter/Email Marketing", icon: "📧" },
                    { value: "Análisis y Reportes", icon: "📊" },
                    { value: "Soporte al Cliente", icon: "💬" },
                    { value: "Blog/Contenido Regular", icon: "✏️" }
                  ].map((objetivo) => (
                    <label key={objetivo.value} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all">
                      <input
                        type="checkbox"
                        value={objetivo.value}
                        checked={formData.objetivosSecundarios.includes(objetivo.value)}
                        onChange={(e) => handleCheckboxChange(e, 'objetivosSecundarios')}
                        className="w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                      />
                      <span className="text-lg">{objetivo.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{objetivo.value}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Público Objetivo *
                </label>
                <textarea
                  name="publicoObjetivo"
                  value={formData.publicoObjetivo}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  placeholder="Describa brevemente a quién está dirigido su sitio web..."
                  required
                />
              </div>
            </div>
          </div>

          {/* Card 3: Contenido */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl text-white">📝</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Contenido</h2>
                <p className="text-gray-600">Información sobre textos, imágenes y material</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ¿Tiene contenido listo? *
                </label>
                <select
                  name="tieneContenido"
                  value={formData.tieneContenido}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="si_completo">Sí, tengo todo el contenido</option>
                  <option value="si_parcial">Sí, tengo parte del contenido</option>
                  <option value="no">No, necesito ayuda con el contenido</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ¿Necesita redacción profesional? *
                </label>
                <select
                  name="necesitaRedaccion"
                  value={formData.necesitaRedaccion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="si">Sí, necesito redacción profesional</option>
                  <option value="no">No, me encargo del contenido</option>
                  <option value="revision">Solo necesito revisión/corrección</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Número de Idiomas *
                </label>
                <select
                  name="numeroIdiomas"
                  value={formData.numeroIdiomas}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  required
                >
                  <option value="1">1 idioma</option>
                  <option value="2">2 idiomas</option>
                  <option value="3">3 idiomas</option>
                  <option value="4+">4 o más idiomas</option>
                </select>
              </div>
            </div>
          </div>

          {/* Card 4: Diseño */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl text-white">🎨</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Diseño</h2>
                <p className="text-gray-600">Identidad visual y preferencias estéticas</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  ¿Tiene identidad visual definida? *
                </label>
                <div className="space-y-3">
                  {[
                    { value: "si_completa", label: "Sí, tengo manual de marca completo", icon: "✅", color: "green" },
                    { value: "si_basica", label: "Sí, tengo logo y colores básicos", icon: "🎨", color: "yellow" },
                    { value: "no", label: "No, necesito diseño de identidad", icon: "🆕", color: "blue" }
                  ].map((option) => (
                    <label key={option.value} className={`flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-${option.color}-300 hover:bg-${option.color}-50 transition-all`}>
                      <input
                        type="radio"
                        name="tieneIdentidad"
                        value={option.value}
                        checked={formData.tieneIdentidad === option.value}
                        onChange={handleInputChange}
                        className={`w-4 h-4 text-${option.color}-600 bg-white border-gray-300 focus:ring-2 focus:ring-${option.color}-500`}
                        required
                      />
                      <span className="text-xl ml-3 mr-3">{option.icon}</span>
                      <span className="font-medium text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Colores Predilectos
                  </label>
                  <input
                    type="text"
                    name="coloresPredilectos"
                    value={formData.coloresPredilectos}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Ej: Azul corporativo, verde, tonos neutros..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sitios Web de Referencia
                  </label>
                  <textarea
                    name="sitiosReferencia"
                    value={formData.sitiosReferencia}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="URLs de sitios que le gusten..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Funcionalidades */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl text-white">⚙️</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Funcionalidades</h2>
                <p className="text-gray-600">Características técnicas y funcionales</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Funcionalidades Requeridas *
                </label>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    { value: "Formulario de Contacto", icon: "📧" },
                    { value: "Newsletter", icon: "📮" },
                    { value: "Blog/Noticias", icon: "📰" },
                    { value: "Galería de Imágenes", icon: "🖼️" },
                    { value: "E-commerce/Tienda Online", icon: "🛒" },
                    { value: "Sistema de Reservas", icon: "📅" },
                    { value: "Área de Clientes/Login", icon: "👤" },
                    { value: "Chat en Vivo", icon: "💬" },
                    { value: "Calendario de Eventos", icon: "🗓️" },
                    { value: "Testimonios/Reseñas", icon: "⭐" },
                    { value: "Mapa/Ubicación", icon: "📍" },
                    { value: "Redes Sociales", icon: "📱" }
                  ].map((funcionalidad) => (
                    <label key={funcionalidad.value} className="flex items-center space-x-2 cursor-pointer p-3 rounded-lg border-2 border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all">
                      <input
                        type="checkbox"
                        value={funcionalidad.value}
                        checked={formData.funcionalidades.includes(funcionalidad.value)}
                        onChange={(e) => handleCheckboxChange(e, 'funcionalidades')}
                        className="w-4 h-4 text-teal-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-teal-500"
                      />
                      <span className="text-lg">{funcionalidad.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{funcionalidad.value}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Integraciones Necesarias
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { value: "Google Analytics", icon: "📊" },
                    { value: "Google Ads", icon: "🎯" },
                    { value: "Facebook Pixel", icon: "📘" },
                    { value: "CRM (Salesforce, HubSpot, etc.)", icon: "🏢" },
                    { value: "Email Marketing (Mailchimp, etc.)", icon: "📧" },
                    { value: "PayPal/Stripe", icon: "💳" },
                    { value: "Sistema de Facturación", icon: "🧾" },
                    { value: "WhatsApp Business", icon: "💚" }
                  ].map((integracion) => (
                    <label key={integracion.value} className="flex items-center space-x-2 cursor-pointer p-3 rounded-lg border-2 border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all">
                      <input
                        type="checkbox"
                        value={integracion.value}
                        checked={formData.integraciones.includes(integracion.value)}
                        onChange={(e) => handleCheckboxChange(e, 'integraciones')}
                        className="w-4 h-4 text-teal-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-teal-500"
                      />
                      <span className="text-lg">{integracion.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{integracion.value}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Administración */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl text-white">🔧</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Administración</h2>
                <p className="text-gray-600">Gestión y mantenimiento del sitio web</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ¿Quién actualizará el contenido? *
                </label>
                <select
                  name="quienActualiza"
                  value={formData.quienActualiza}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="nosotros">Nosotros internamente</option>
                  <option value="ustedes">Quiero que ustedes lo manejen</option>
                  <option value="mixto">Modelo mixto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Frecuencia de Actualización *
                </label>
                <select
                  name="frecuenciaActualizacion"
                  value={formData.frecuenciaActualizacion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="diaria">Diaria</option>
                  <option value="semanal">Semanal</option>
                  <option value="mensual">Mensual</option>
                  <option value="trimestral">Trimestral</option>
                  <option value="ocasional">Ocasional</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ¿Necesita capacitación? *
                </label>
                <select
                  name="necesitaCapacitacion"
                  value={formData.necesitaCapacitacion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="si">Sí, necesito capacitación completa</option>
                  <option value="basica">Solo capacitación básica</option>
                  <option value="no">No, tengo experiencia técnica</option>
                </select>
              </div>
            </div>
          </div>

          {/* Card 7: Cronograma y Presupuesto */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl text-white">📅</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Cronograma y Presupuesto</h2>
                <p className="text-gray-600">Fechas y aspectos financieros del proyecto</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Fecha Deseada de Lanzamiento *
                </label>
                <input
                  type="date"
                  name="fechaLanzamiento"
                  value={formData.fechaLanzamiento}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Presupuesto Aproximado *
                </label>
                <select
                  name="presupuestoAproximado"
                  value={formData.presupuestoAproximado}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all"
                  required
                >
                  <option value="">Seleccione un rango</option>
                  <option value="menos_5k">Menos de $5,000</option>
                  <option value="5k_15k">$5,000 - $15,000</option>
                  <option value="15k_30k">$15,000 - $30,000</option>
                  <option value="30k_50k">$30,000 - $50,000</option>
                  <option value="mas_50k">Más de $50,000</option>
                </select>
              </div>
            </div>
          </div>

          {/* Card 8: Comentarios Adicionales */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl text-white">💬</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Comentarios Adicionales</h2>
                <p className="text-gray-600">Información extra que considere importante</p>
              </div>
            </div>
            
            <div>
              <textarea
                name="comentariosAdicionales"
                value={formData.comentariosAdicionales}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all"
                placeholder="Cualquier información adicional que considere relevante para su proyecto, requisitos especiales, dudas, etc..."
              />
            </div>
          </div>

          {/* Submit Card */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-xl p-8 text-center text-white">
            <div className="mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">¿Listo para Enviar?</h2>
              <p className="text-green-100">
                Revise que toda la información esté completa y envíe su solicitud
              </p>
            </div>
            
            <button
              type="submit"
              className="px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📋 Enviar Requerimientos
            </button>
            <p className="text-green-100 text-sm mt-4">
              Nos pondremos en contacto con usted dentro de 24 horas hábiles
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
