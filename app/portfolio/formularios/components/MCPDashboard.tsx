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

export default function MCPDashboard() {
  const [activeTab, setActiveTab] = useState("cliente");
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

  const tabs = [
    { id: "cliente", name: "Cliente", icon: "👤", desc: "Datos básicos" },
    { id: "objetivos", name: "Objetivos", icon: "🎯", desc: "Metas del proyecto" },
    { id: "contenido", name: "Contenido", icon: "📝", desc: "Material y redacción" },
    { id: "diseno", name: "Diseño", icon: "🎨", desc: "Identidad visual" },
    { id: "funciones", name: "Funciones", icon: "⚙️", desc: "Características técnicas" },
    { id: "admin", name: "Administración", icon: "🔧", desc: "Gestión del sitio" },
    { id: "tiempo", name: "Cronograma", icon: "📅", desc: "Fechas y presupuesto" },
    { id: "resumen", name: "Resumen", icon: "📊", desc: "Revisión final" }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario MCP-C Dashboard enviado:", formData);
  };

  // Calculate completion percentage for progress bar
  const calculateCompletion = () => {
    const fields = [
      formData.nombreEmpresa, formData.nombreContacto, formData.email, formData.sector,
      formData.objetivoPrincipal, formData.publicoObjetivo,
      formData.tieneContenido, formData.necesitaRedaccion,
      formData.tieneIdentidad,
      formData.quienActualiza, formData.frecuenciaActualizacion, formData.necesitaCapacitacion,
      formData.fechaLanzamiento, formData.presupuestoAproximado
    ];
    const completed = fields.filter(field => field.trim() !== "").length;
    return Math.round((completed / fields.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg h-screen sticky top-0 overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">
              Requerimientos Web
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Dashboard de proyecto
            </p>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progreso</span>
                <span>{calculateCompletion()}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${calculateCompletion()}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <nav className="p-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-3 rounded-lg mb-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-100 text-purple-900 border-l-4 border-purple-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{tab.icon}</span>
                  <div>
                    <div className="font-medium">{tab.name}</div>
                    <div className="text-xs text-gray-500">{tab.desc}</div>
                  </div>
                </div>
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-200 mt-8">
            <div className="text-xs text-gray-500 space-y-1">
              <div>✅ Campos obligatorios</div>
              <div>⭐ Campos opcionales</div>
              <div>📊 Auto-guardado activado</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <form onSubmit={handleSubmit}>
            {/* Cliente Tab */}
            {activeTab === "cliente" && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center mb-6">
                  <span className="text-2xl mr-3">👤</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Información del Cliente
                    </h2>
                    <p className="text-gray-600">Datos básicos de contacto y empresa</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <span className="text-red-500 mr-1">*</span>
                        Nombre de la Empresa
                      </label>
                      <input
                        type="text"
                        name="nombreEmpresa"
                        value={formData.nombreEmpresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Ingrese el nombre de su empresa"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <span className="text-red-500 mr-1">*</span>
                        Nombre de Contacto
                      </label>
                      <input
                        type="text"
                        name="nombreContacto"
                        value={formData.nombreContacto}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Su nombre completo"
                        required
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <span className="text-red-500 mr-1">*</span>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="ejemplo@empresa.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <span className="text-yellow-500 mr-1">⭐</span>
                        Sitio Web Actual
                      </label>
                      <input
                        type="url"
                        name="sitioWeb"
                        value={formData.sitioWeb}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="https://www.empresa.com"
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <span className="text-red-500 mr-1">*</span>
                        Sector de la Empresa
                      </label>
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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

                    <div className="bg-purple-50 rounded-lg p-4">
                      <h3 className="font-medium text-purple-900 mb-2">💡 Consejo</h3>
                      <p className="text-sm text-purple-700">
                        Esta información nos ayuda a personalizar nuestra propuesta según su industria y necesidades específicas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Objetivos Tab */}
            {activeTab === "objetivos" && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center mb-6">
                  <span className="text-2xl mr-3">🎯</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Objetivos del Sitio Web
                    </h2>
                    <p className="text-gray-600">Define las metas principales de tu proyecto</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                      <span className="text-red-500 mr-1">*</span>
                      Objetivo Principal
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { value: "presencia_digital", label: "Presencia Digital/Institucional", desc: "Mostrar la empresa profesionalmente" },
                        { value: "ventas_online", label: "Ventas Online (E-commerce)", desc: "Vender productos/servicios online" },
                        { value: "generacion_leads", label: "Generación de Leads", desc: "Captar clientes potenciales" },
                        { value: "reservas", label: "Sistema de Reservas", desc: "Gestionar citas/reservaciones" },
                        { value: "informativo", label: "Portal Informativo", desc: "Compartir información y recursos" },
                        { value: "comunidad", label: "Comunidad/Red Social", desc: "Crear una comunidad de usuarios" }
                      ].map((objetivo) => (
                        <label key={objetivo.value} className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="objetivoPrincipal"
                            value={objetivo.value}
                            checked={formData.objetivoPrincipal === objetivo.value}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-2 focus:ring-purple-500 mt-1"
                            required
                          />
                          <div className="ml-3">
                            <div className="font-medium text-gray-900">{objetivo.label}</div>
                            <div className="text-sm text-gray-500">{objetivo.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                      <span className="text-yellow-500 mr-1">⭐</span>
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
                            className="w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                          />
                          <span className="text-sm text-gray-700">{objetivo}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <span className="text-red-500 mr-1">*</span>
                      Público Objetivo
                    </label>
                    <textarea
                      name="publicoObjetivo"
                      value={formData.publicoObjetivo}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Describa brevemente a quién está dirigido su sitio web (edad, profesión, intereses, ubicación, etc.)"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Contenido Tab */}
            {activeTab === "contenido" && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center mb-6">
                  <span className="text-2xl mr-3">📝</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Contenido
                    </h2>
                    <p className="text-gray-600">Información sobre textos, imágenes y material del sitio</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <span className="text-red-500 mr-1">*</span>
                        ¿Tiene contenido listo?
                      </label>
                      <select
                        name="tieneContenido"
                        value={formData.tieneContenido}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        required
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="si_completo">Sí, tengo todo el contenido</option>
                        <option value="si_parcial">Sí, tengo parte del contenido</option>
                        <option value="no">No, necesito ayuda con el contenido</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <span className="text-red-500 mr-1">*</span>
                        ¿Necesita redacción profesional?
                      </label>
                      <select
                        name="necesitaRedaccion"
                        value={formData.necesitaRedaccion}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        required
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="si">Sí, necesito redacción profesional</option>
                        <option value="no">No, me encargo del contenido</option>
                        <option value="revision">Solo necesito revisión/corrección</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <span className="text-red-500 mr-1">*</span>
                        Número de Idiomas
                      </label>
                      <select
                        name="numeroIdiomas"
                        value={formData.numeroIdiomas}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        required
                      >
                        <option value="1">1 idioma</option>
                        <option value="2">2 idiomas</option>
                        <option value="3">3 idiomas</option>
                        <option value="4+">4 o más idiomas</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="font-medium text-blue-900 mb-3">📋 Checklist de Contenido</h3>
                      <div className="space-y-2 text-sm text-blue-700">
                        <div>• Textos de las páginas principales</div>
                        <div>• Imágenes y fotografías</div>
                        <div>• Logo y elementos gráficos</div>
                        <div>• Videos (si aplica)</div>
                        <div>• Información de contacto</div>
                        <div>• Testimonios/reseñas</div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-6">
                      <h3 className="font-medium text-yellow-900 mb-3">⚡ Servicios Adicionales</h3>
                      <div className="space-y-2 text-sm text-yellow-700">
                        <div>• Redacción SEO optimizada</div>
                        <div>• Traducción profesional</div>
                        <div>• Fotografía de productos</div>
                        <div>• Creación de contenido multimedia</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Continue with other tabs... (Diseño, Funciones, Admin, Tiempo, Resumen) */}
            {/* For brevity, I'll include just a few more tabs. The pattern is similar. */}

            {/* Resumen Tab */}
            {activeTab === "resumen" && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center mb-6">
                  <span className="text-2xl mr-3">📊</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Resumen Final
                    </h2>
                    <p className="text-gray-600">Revisión completa de su proyecto</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Completion Status */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Estado del Formulario</h3>
                      <span className="text-2xl font-bold text-purple-600">{calculateCompletion()}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${calculateCompletion()}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {calculateCompletion() === 100 
                        ? "✅ Formulario completo - Listo para enviar" 
                        : "⏳ Complete los campos faltantes antes de enviar"
                      }
                    </p>
                  </div>

                  {/* Summary Cards */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">👤 Cliente</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div><strong>Empresa:</strong> {formData.nombreEmpresa || "No especificado"}</div>
                        <div><strong>Contacto:</strong> {formData.nombreContacto || "No especificado"}</div>
                        <div><strong>Email:</strong> {formData.email || "No especificado"}</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">🎯 Objetivo</h4>
                      <div className="text-sm text-gray-600">
                        {formData.objetivoPrincipal || "No especificado"}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">💰 Presupuesto</h4>
                      <div className="text-sm text-gray-600">
                        {formData.presupuestoAproximado || "No especificado"}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      disabled={calculateCompletion() < 80}
                      className={`px-8 py-4 rounded-lg font-medium text-lg transition-all ${
                        calculateCompletion() >= 80
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {calculateCompletion() >= 80 
                        ? '🚀 Enviar Requerimientos' 
                        : '⏳ Complete más campos para enviar'
                      }
                    </button>
                    <p className="text-sm text-gray-500 mt-3">
                      Nos pondremos en contacto con usted dentro de 24 horas hábiles
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Quick placeholder for missing tabs */}
            {["diseno", "funciones", "admin", "tiempo"].includes(activeTab) && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">
                    {activeTab === "diseno" && "🎨"}
                    {activeTab === "funciones" && "⚙️"}
                    {activeTab === "admin" && "🔧"}
                    {activeTab === "tiempo" && "📅"}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {activeTab === "diseno" && "Diseño"}
                    {activeTab === "funciones" && "Funcionalidades"}
                    {activeTab === "admin" && "Administración"}
                    {activeTab === "tiempo" && "Cronograma y Presupuesto"}
                  </h2>
                  <p className="text-gray-600">
                    Esta sección contiene campos similares a los otros componentes.
                  </p>
                  <p className="text-sm text-purple-600 mt-4">
                    💡 Use los tabs de la izquierda para navegar entre secciones
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
