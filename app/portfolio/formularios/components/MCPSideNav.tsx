"use client";
import { useState, useEffect, useRef, useMemo } from "react";

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

export default function MCPSideNav() {
  const [activeSection, setActiveSection] = useState("cliente");
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

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = useMemo(() => [
    { id: "cliente", name: "Cliente", icon: "👤", color: "blue" },
    { id: "objetivos", name: "Objetivos", icon: "🎯", color: "purple" },
    { id: "contenido", name: "Contenido", icon: "📝", color: "green" },
    { id: "diseno", name: "Diseño", icon: "🎨", color: "pink" },
    { id: "funcionalidades", name: "Funcionalidades", icon: "⚙️", color: "indigo" },
    { id: "administracion", name: "Administración", icon: "🔧", color: "yellow" },
    { id: "cronograma", name: "Cronograma", icon: "📅", color: "red" },
    { id: "comentarios", name: "Comentarios", icon: "💬", color: "gray" }
  ], []);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
    console.log("Formulario MCP-E Side Navigation enviado:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Fixed Side Navigation */}
      <div className="fixed left-0 top-0 h-screen w-80 bg-white shadow-2xl z-50 overflow-y-auto">
        <div className="p-6">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
              <span className="text-xl text-white">📋</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Requerimientos Web
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Navegación inteligente
            </p>
          </div>

          <nav className="space-y-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeSection === section.id
                    ? `bg-${section.color}-100 text-${section.color}-900 border-l-4 border-${section.color}-500 shadow-md`
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeSection === section.id 
                      ? `bg-${section.color}-500 text-white` 
                      : 'bg-gray-200'
                  }`}>
                    <span className="text-sm">{section.icon}</span>
                  </div>
                  <div>
                    <div className="font-medium">{section.name}</div>
                    <div className="text-xs text-gray-500">Sección {index + 1}</div>
                  </div>
                </div>
              </button>
            ))}
          </nav>

          <div className="mt-8 p-4 bg-orange-50 rounded-xl">
            <h3 className="font-semibold text-orange-900 mb-2">💡 Navegación</h3>
            <ul className="text-xs text-orange-700 space-y-1">
              <li>• Haga clic en las secciones para navegar</li>
              <li>• El scroll automático detecta su posición</li>
              <li>• Campos obligatorios marcados con *</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-80 min-h-screen">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <form onSubmit={handleSubmit} className="space-y-16">
            
            {/* Section 1: Cliente */}
            <section
              id="cliente"
              ref={(el) => { sectionRefs.current['cliente'] = el; }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl text-white">👤</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Información del Cliente</h2>
                  <p className="text-gray-600 mt-1">Datos básicos de contacto y empresa</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre de la Empresa *
                    </label>
                    <input
                      type="text"
                      name="nombreEmpresa"
                      value={formData.nombreEmpresa}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="ejemplo@empresa.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sitio Web Actual
                    </label>
                    <input
                      type="url"
                      name="sitioWeb"
                      value={formData.sitioWeb}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="https://www.empresa.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sector de la Empresa *
                    </label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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

                  <div className="bg-blue-50 rounded-xl p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">📞 Contacto</h3>
                    <p className="text-sm text-blue-700">
                      Esta información nos permite contactarle de manera efectiva y personalizar nuestra propuesta.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Objetivos */}
            <section
              id="objetivos"
              ref={(el) => { sectionRefs.current['objetivos'] = el; }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-purple-200"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl text-white">🎯</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Objetivos del Sitio Web</h2>
                  <p className="text-gray-600 mt-1">¿Qué quiere lograr con su sitio web?</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Objetivo Principal *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { value: "presencia_digital", label: "Presencia Digital/Institucional", desc: "Mostrar la empresa profesionalmente", icon: "🏢" },
                      { value: "ventas_online", label: "Ventas Online (E-commerce)", desc: "Vender productos/servicios online", icon: "🛒" },
                      { value: "generacion_leads", label: "Generación de Leads", desc: "Captar clientes potenciales", icon: "📈" },
                      { value: "reservas", label: "Sistema de Reservas", desc: "Gestionar citas/reservaciones", icon: "📅" },
                      { value: "informativo", label: "Portal Informativo", desc: "Compartir información y recursos", icon: "📰" },
                      { value: "comunidad", label: "Comunidad/Red Social", desc: "Crear una comunidad de usuarios", icon: "👥" }
                    ].map((objetivo) => (
                      <label key={objetivo.value} className="flex items-start p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-purple-300 hover:bg-purple-50 transition-all">
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
                          <div className="flex items-center mb-1">
                            <span className="text-lg mr-2">{objetivo.icon}</span>
                            <span className="font-semibold text-gray-900">{objetivo.label}</span>
                          </div>
                          <div className="text-sm text-gray-600">{objetivo.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
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
                      <label key={objetivo} className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all">
                        <input
                          type="checkbox"
                          value={objetivo}
                          checked={formData.objetivosSecundarios.includes(objetivo)}
                          onChange={(e) => handleCheckboxChange(e, 'objetivosSecundarios')}
                          className="w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                        />
                        <span className="text-sm font-medium text-gray-700">{objetivo}</span>
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    placeholder="Describa brevemente a quién está dirigido su sitio web (edad, profesión, intereses, ubicación, etc.)"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Section 3: Contenido */}
            <section
              id="contenido"
              ref={(el) => { sectionRefs.current['contenido'] = el; }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-green-200"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl text-white">📝</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Contenido</h2>
                  <p className="text-gray-600 mt-1">Información sobre textos, imágenes y material del sitio</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ¿Tiene contenido listo? *
                  </label>
                  <select
                    name="tieneContenido"
                    value={formData.tieneContenido}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    required
                  >
                    <option value="1">1 idioma</option>
                    <option value="2">2 idiomas</option>
                    <option value="3">3 idiomas</option>
                    <option value="4+">4 o más idiomas</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Continue with simplified versions of remaining sections... */}

            {/* Section 8: Comentarios */}
            <section
              id="comentarios"
              ref={(el) => { sectionRefs.current['comentarios'] = el; }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl text-white">💬</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Comentarios Adicionales</h2>
                  <p className="text-gray-600 mt-1">Información extra que considere importante</p>
                </div>
              </div>
              
              <div>
                <textarea
                  name="comentariosAdicionales"
                  value={formData.comentariosAdicionales}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all"
                  placeholder="Cualquier información adicional que considere relevante para su proyecto, requisitos especiales, dudas, expectativas específicas, etc..."
                />
              </div>
            </section>

            {/* Placeholder sections for brevity */}
            {["diseno", "funcionalidades", "administracion", "cronograma"].map((sectionId) => (
              <section
                key={sectionId}
                id={sectionId}
                ref={(el) => { sectionRefs.current[sectionId] = el; }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">
                    {sectionId === "diseno" && "🎨"}
                    {sectionId === "funcionalidades" && "⚙️"}
                    {sectionId === "administracion" && "🔧"}
                    {sectionId === "cronograma" && "📅"}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2 capitalize">
                    {sectionId}
                  </h2>
                  <p className="text-gray-600">
                    Esta sección contiene campos similares a los otros componentes.
                  </p>
                  <p className="text-sm text-orange-600 mt-4">
                    💡 Use la navegación lateral para moverse entre secciones
                  </p>
                </div>
              </section>
            ))}

            {/* Submit Section */}
            <div className="text-center py-12">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">¿Listo para Enviar?</h2>
                <p className="text-orange-100 mb-6">
                  Revise que toda la información esté completa y envíe su solicitud
                </p>
                
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  📋 Enviar Requerimientos
                </button>
                <p className="text-orange-100 text-sm mt-4">
                  Nos pondremos en contacto con usted dentro de 24 horas hábiles
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
