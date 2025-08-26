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

const TOTAL_STEPS = 8;

export default function MCPWizard() {
  const [currentStep, setCurrentStep] = useState(1);
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

  const stepTitles = [
    "Información del Cliente",
    "Objetivos del Sitio Web",
    "Contenido",
    "Diseño",
    "Funcionalidades",
    "Administración",
    "Cronograma y Presupuesto",
    "Revisión Final"
  ];

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

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario MCP-B Wizard enviado:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Requerimientos del Sitio Web
          </h1>
          <p className="text-gray-600">
            Complete este asistente paso a paso - {stepTitles[currentStep - 1]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => (
              <div
                key={i}
                className={`flex items-center ${i < TOTAL_STEPS - 1 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    i + 1 <= currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {i + 1 < currentStep ? '✓' : i + 1}
                </div>
                {i < TOTAL_STEPS - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-all ${
                      i + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-sm text-center text-gray-500">
            Paso {currentStep} de {TOTAL_STEPS}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 min-h-[600px]">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Información del Cliente */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Información del Cliente
                  </h2>
                  <p className="text-gray-600">Empecemos conociendo su empresa</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de la Empresa *
                    </label>
                    <input
                      type="text"
                      name="nombreEmpresa"
                      value={formData.nombreEmpresa}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Ingrese el nombre de su empresa"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de Contacto *
                    </label>
                    <input
                      type="text"
                      name="nombreContacto"
                      value={formData.nombreContacto}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Su nombre completo"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ejemplo@empresa.com"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://www.empresa.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sector de la Empresa *
                  </label>
                  <select
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            )}

            {/* Step 2: Objetivos del Sitio Web */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Objetivos del Sitio Web
                  </h2>
                  <p className="text-gray-600">¿Qué quiere lograr con su sitio web?</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Objetivo Principal *
                  </label>
                  <select
                    name="objetivoPrincipal"
                    value={formData.objetivoPrincipal}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Seleccione el objetivo principal</option>
                    <option value="presencia_digital">Presencia Digital/Institucional</option>
                    <option value="ventas_online">Ventas Online (E-commerce)</option>
                    <option value="generacion_leads">Generación de Leads</option>
                    <option value="reservas">Sistema de Reservas</option>
                    <option value="informativo">Portal Informativo</option>
                    <option value="comunidad">Comunidad/Red Social</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Objetivos Secundarios (seleccione todos los que apliquen)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Mejorar SEO/Posicionamiento",
                      "Integración con Redes Sociales",
                      "Newsletter/Email Marketing",
                      "Análisis y Reportes",
                      "Soporte al Cliente",
                      "Blog/Contenido Regular"
                    ].map((objetivo) => (
                      <label key={objetivo} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                        <input
                          type="checkbox"
                          value={objetivo}
                          checked={formData.objetivosSecundarios.includes(objetivo)}
                          onChange={(e) => handleCheckboxChange(e, 'objetivosSecundarios')}
                          className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{objetivo}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Público Objetivo *
                  </label>
                  <textarea
                    name="publicoObjetivo"
                    value={formData.publicoObjetivo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describa brevemente a quién está dirigido su sitio web..."
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3: Contenido */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Contenido
                  </h2>
                  <p className="text-gray-600">Hablemos sobre el contenido de su sitio web</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Tiene contenido listo? *
                    </label>
                    <select
                      name="tieneContenido"
                      value={formData.tieneContenido}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="si_completo">Sí, tengo todo el contenido</option>
                      <option value="si_parcial">Sí, tengo parte del contenido</option>
                      <option value="no">No, necesito ayuda con el contenido</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Necesita redacción profesional? *
                    </label>
                    <select
                      name="necesitaRedaccion"
                      value={formData.necesitaRedaccion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="si">Sí, necesito redacción profesional</option>
                      <option value="no">No, me encargo del contenido</option>
                      <option value="revision">Solo necesito revisión/corrección</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número de Idiomas *
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {['1', '2', '3', '4+'].map((num) => (
                      <label key={num} className="flex items-center justify-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="numeroIdiomas"
                          value={num}
                          checked={formData.numeroIdiomas === num}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className={`font-medium ${formData.numeroIdiomas === num ? 'text-blue-600' : 'text-gray-700'}`}>
                          {num} {num === '1' ? 'idioma' : 'idiomas'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Diseño */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Diseño
                  </h2>
                  <p className="text-gray-600">Definamos el aspecto visual de su sitio</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Tiene identidad visual definida? *
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "si_completa", label: "Sí, tengo manual de marca completo", icon: "✅" },
                      { value: "si_basica", label: "Sí, tengo logo y colores básicos", icon: "🎨" },
                      { value: "no", label: "No, necesito diseño de identidad", icon: "🆕" }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="tieneIdentidad"
                          value={option.value}
                          checked={formData.tieneIdentidad === option.value}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <span className="ml-3 text-lg">{option.icon}</span>
                        <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Colores Predilectos
                  </label>
                  <input
                    type="text"
                    name="coloresPredilectos"
                    value={formData.coloresPredilectos}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ej: Azul corporativo, verde, tonos neutros..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sitios Web de Referencia
                  </label>
                  <textarea
                    name="sitiosReferencia"
                    value={formData.sitiosReferencia}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="URLs de sitios que le gusten o que sean su competencia..."
                  />
                </div>
              </div>
            )}

            {/* Step 5: Funcionalidades */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Funcionalidades
                  </h2>
                  <p className="text-gray-600">¿Qué funciones necesita su sitio web?</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Funcionalidades Requeridas *
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Formulario de Contacto",
                      "Newsletter",
                      "Blog/Noticias",
                      "Galería de Imágenes",
                      "E-commerce/Tienda Online",
                      "Sistema de Reservas",
                      "Área de Clientes/Login",
                      "Chat en Vivo",
                      "Calendario de Eventos",
                      "Testimonios/Reseñas",
                      "Mapa/Ubicación",
                      "Redes Sociales"
                    ].map((funcionalidad) => (
                      <label key={funcionalidad} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                        <input
                          type="checkbox"
                          value={funcionalidad}
                          checked={formData.funcionalidades.includes(funcionalidad)}
                          onChange={(e) => handleCheckboxChange(e, 'funcionalidades')}
                          className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{funcionalidad}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Integraciones Necesarias
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Google Analytics",
                      "Google Ads",
                      "Facebook Pixel",
                      "CRM (Salesforce, HubSpot, etc.)",
                      "Email Marketing (Mailchimp, etc.)",
                      "PayPal/Stripe",
                      "Sistema de Facturación",
                      "WhatsApp Business"
                    ].map((integracion) => (
                      <label key={integracion} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                        <input
                          type="checkbox"
                          value={integracion}
                          checked={formData.integraciones.includes(integracion)}
                          onChange={(e) => handleCheckboxChange(e, 'integraciones')}
                          className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{integracion}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Administración */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Administración
                  </h2>
                  <p className="text-gray-600">¿Cómo se va a gestionar el contenido?</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Quién actualizará el contenido? *
                    </label>
                    <select
                      name="quienActualiza"
                      value={formData.quienActualiza}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="nosotros">Nosotros internamente</option>
                      <option value="ustedes">Quiero que ustedes lo manejen</option>
                      <option value="mixto">Modelo mixto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Frecuencia de Actualización *
                    </label>
                    <select
                      name="frecuenciaActualizacion"
                      value={formData.frecuenciaActualizacion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Necesita capacitación? *
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "si", label: "Sí, necesito capacitación completa", icon: "🎓" },
                      { value: "basica", label: "Solo capacitación básica", icon: "📚" },
                      { value: "no", label: "No, tengo experiencia técnica", icon: "💻" }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="necesitaCapacitacion"
                          value={option.value}
                          checked={formData.necesitaCapacitacion === option.value}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <span className="ml-3 text-lg">{option.icon}</span>
                        <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Cronograma y Presupuesto */}
            {currentStep === 7 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Cronograma y Presupuesto
                  </h2>
                  <p className="text-gray-600">Últimos detalles importantes</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha Deseada de Lanzamiento *
                    </label>
                    <input
                      type="date"
                      name="fechaLanzamiento"
                      value={formData.fechaLanzamiento}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Presupuesto Aproximado *
                    </label>
                    <select
                      name="presupuestoAproximado"
                      value={formData.presupuestoAproximado}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comentarios Adicionales
                  </label>
                  <textarea
                    name="comentariosAdicionales"
                    value={formData.comentariosAdicionales}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Cualquier información adicional que considere relevante para su proyecto..."
                  />
                </div>
              </div>
            )}

            {/* Step 8: Revisión Final */}
            {currentStep === 8 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Revisión Final
                  </h2>
                  <p className="text-gray-600">Revise su información antes de enviar</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Empresa:</strong> {formData.nombreEmpresa}
                    </div>
                    <div>
                      <strong>Contacto:</strong> {formData.nombreContacto}
                    </div>
                    <div>
                      <strong>Email:</strong> {formData.email}
                    </div>
                    <div>
                      <strong>Sector:</strong> {formData.sector}
                    </div>
                    <div>
                      <strong>Objetivo Principal:</strong> {formData.objetivoPrincipal}
                    </div>
                    <div>
                      <strong>Presupuesto:</strong> {formData.presupuestoAproximado}
                    </div>
                  </div>
                  
                  {formData.funcionalidades.length > 0 && (
                    <div>
                      <strong>Funcionalidades:</strong> {formData.funcionalidades.join(', ')}
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    ✅ Enviar Requerimientos
                  </button>
                  <p className="text-sm text-gray-500 mt-2">
                    Nos pondremos en contacto con usted dentro de 24 horas hábiles
                  </p>
                </div>
              </div>
            )}
          </form>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-lg font-medium ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              ← Anterior
            </button>
            
            {currentStep < TOTAL_STEPS && (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Siguiente →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
