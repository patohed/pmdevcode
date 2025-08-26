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

export default function MCPMinimalista() {
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
    console.log("Formulario MCP-A Minimalista enviado:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-light text-gray-900 mb-4">
            Requerimientos del Sitio Web
          </h1>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Complete este formulario para ayudarnos a entender sus necesidades y crear 
            una propuesta personalizada para su proyecto web.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* 1. Información del Cliente */}
          <section className="space-y-6">
            <h2 className="text-xl font-medium text-gray-900 pb-3 border-b border-gray-200">
              Información del Cliente
            </h2>
            
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
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
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
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
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
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
                  placeholder="ejemplo@empresa.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sitio Web
                </label>
                <input
                  type="url"
                  name="sitioWeb"
                  value={formData.sitioWeb}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
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
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
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
          </section>

          {/* 2. Objetivos del Sitio Web */}
          <section className="space-y-6">
            <h2 className="text-xl font-medium text-gray-900 pb-3 border-b border-gray-200">
              Objetivos del Sitio Web
            </h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Objetivo Principal *
              </label>
              <select
                name="objetivoPrincipal"
                value={formData.objetivoPrincipal}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
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
              <div className="space-y-3">
                {[
                  "Mejorar SEO/Posicionamiento",
                  "Integración con Redes Sociales",
                  "Newsletter/Email Marketing",
                  "Análisis y Reportes",
                  "Soporte al Cliente",
                  "Blog/Contenido Regular"
                ].map((objetivo) => (
                  <label key={objetivo} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      value={objetivo}
                      checked={formData.objetivosSecundarios.includes(objetivo)}
                      onChange={(e) => handleCheckboxChange(e, 'objetivosSecundarios')}
                      className="w-4 h-4 text-gray-600 bg-white border-gray-300 rounded focus:ring-1 focus:ring-gray-500"
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
                rows={3}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors resize-none"
                placeholder="Describa brevemente a quién está dirigido su sitio web..."
                required
              />
            </div>
          </section>

          {/* 3. Contenido */}
          <section className="space-y-6">
            <h2 className="text-xl font-medium text-gray-900 pb-3 border-b border-gray-200">
              Contenido
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Tiene contenido listo? *
                </label>
                <select
                  name="tieneContenido"
                  value={formData.tieneContenido}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
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
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
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
              <select
                name="numeroIdiomas"
                value={formData.numeroIdiomas}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
                required
              >
                <option value="1">1 idioma</option>
                <option value="2">2 idiomas</option>
                <option value="3">3 idiomas</option>
                <option value="4+">4 o más idiomas</option>
              </select>
            </div>
          </section>

          {/* 4. Diseño */}
          <section className="space-y-6">
            <h2 className="text-xl font-medium text-gray-900 pb-3 border-b border-gray-200">
              Diseño
            </h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ¿Tiene identidad visual definida? *
              </label>
              <select
                name="tieneIdentidad"
                value={formData.tieneIdentidad}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="si_completa">Sí, tengo manual de marca completo</option>
                <option value="si_basica">Sí, tengo logo y colores básicos</option>
                <option value="no">No, necesito diseño de identidad</option>
              </select>
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
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
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
                rows={3}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors resize-none"
                placeholder="URLs de sitios que le gusten o que sean su competencia..."
              />
            </div>
          </section>

          {/* 5. Funcionalidades */}
          <section className="space-y-6">
            <h2 className="text-xl font-medium text-gray-900 pb-3 border-b border-gray-200">
              Funcionalidades
            </h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Funcionalidades Requeridas *
              </label>
              <div className="space-y-3">
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
                  <label key={funcionalidad} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      value={funcionalidad}
                      checked={formData.funcionalidades.includes(funcionalidad)}
                      onChange={(e) => handleCheckboxChange(e, 'funcionalidades')}
                      className="w-4 h-4 text-gray-600 bg-white border-gray-300 rounded focus:ring-1 focus:ring-gray-500"
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
              <div className="space-y-3">
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
                  <label key={integracion} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      value={integracion}
                      checked={formData.integraciones.includes(integracion)}
                      onChange={(e) => handleCheckboxChange(e, 'integraciones')}
                      className="w-4 h-4 text-gray-600 bg-white border-gray-300 rounded focus:ring-1 focus:ring-gray-500"
                    />
                    <span className="text-sm text-gray-700">{integracion}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* 6. Administración */}
          <section className="space-y-6">
            <h2 className="text-xl font-medium text-gray-900 pb-3 border-b border-gray-200">
              Administración
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Quién actualizará el contenido? *
                </label>
                <select
                  name="quienActualiza"
                  value={formData.quienActualiza}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
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
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
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
              <select
                name="necesitaCapacitacion"
                value={formData.necesitaCapacitacion}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="si">Sí, necesito capacitación completa</option>
                <option value="basica">Solo capacitación básica</option>
                <option value="no">No, tengo experiencia técnica</option>
              </select>
            </div>
          </section>

          {/* 7. Cronograma y Presupuesto */}
          <section className="space-y-6">
            <h2 className="text-xl font-medium text-gray-900 pb-3 border-b border-gray-200">
              Cronograma y Presupuesto
            </h2>
            
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
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
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
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors"
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
          </section>

          {/* 8. Comentarios Adicionales */}
          <section className="space-y-6">
            <h2 className="text-xl font-medium text-gray-900 pb-3 border-b border-gray-200">
              Comentarios Adicionales
            </h2>
            
            <div>
              <textarea
                name="comentariosAdicionales"
                value={formData.comentariosAdicionales}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-gray-600 focus:ring-0 transition-colors resize-none"
                placeholder="Cualquier información adicional que considere relevante para su proyecto..."
              />
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-8">
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-12 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Enviar Requerimientos
              </button>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Nos pondremos en contacto con usted dentro de 24 horas hábiles
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
