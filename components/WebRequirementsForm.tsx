"use client";
import { useState } from "react";

export default function WebRequirementsForm() {
  const [formData, setFormData] = useState({
    // Información del Cliente
    nombreCompleto: "",
    empresa: "",
    email: "",
    tieneDominio: "",
    tieneHosting: "",

    // Objetivos del Sitio Web
    objetivoPrincipal: [] as string[],
    objetivoOtro: "",
    publicoObjetivo: "",

    // Contenidos
    secciones: [] as string[],
    textosListos: "",
    recursosGraficos: "",

    // Diseño
    identidadVisual: [] as string[],
    webReferencia1: "",
    comentarioRef1: "",
    webReferencia2: "",
    comentarioRef2: "",
    webReferencia3: "",
    comentarioRef3: "",
    estiloPreferido: "",

    // Funcionalidades
    funcionalidades: [] as string[],
    metodoPago: "",
    integraciones: "",
    idiomas: "",

    // Administrabilidad
    editarSitio: "",
    experienciaCMS: "",

    // Plazos y Presupuesto
    fechaDeseada: "",
    presupuestoEstimado: "",

    // Comentarios adicionales
    comentariosAdicionales: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [fieldName]: checked 
        ? [...(prev[fieldName as keyof typeof prev] as string[]), value]
        : (prev[fieldName as keyof typeof prev] as string[]).filter((item: string) => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    alert("Formulario enviado correctamente. Revisa la consola para ver los datos.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Formulario de Requerimientos
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Complete este formulario con el máximo detalle posible para poder brindarle una propuesta personalizada
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* 1. Información del Cliente */}
            <section className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                1. Información del Cliente
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombreCompleto"
                    value={formData.nombreCompleto}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Ingrese su nombre completo"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Empresa o marca
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Nombre de su empresa o marca"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="su@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    ¿Ya tiene dominio registrado?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tieneDominio"
                        value="si"
                        checked={formData.tieneDominio === "si"}
                        onChange={handleInputChange}
                        className="mr-3 h-4 w-4 text-blue-600 border-slate-300"
                      />
                      <span className="text-slate-700">Sí</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tieneDominio"
                        value="no"
                        checked={formData.tieneDominio === "no"}
                        onChange={handleInputChange}
                        className="mr-3 h-4 w-4 text-blue-600 border-slate-300"
                      />
                      <span className="text-slate-700">No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    ¿Tiene hosting contratado?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tieneHosting"
                        value="si"
                        checked={formData.tieneHosting === "si"}
                        onChange={handleInputChange}
                        className="mr-3 h-4 w-4 text-blue-600 border-slate-300"
                      />
                      <span className="text-slate-700">Sí</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tieneHosting"
                        value="no"
                        checked={formData.tieneHosting === "no"}
                        onChange={handleInputChange}
                        className="mr-3 h-4 w-4 text-blue-600 border-slate-300"
                      />
                      <span className="text-slate-700">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Objetivos del Sitio Web */}
            <section className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                2. Objetivos del Sitio Web
              </h2>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Objetivo principal (puede seleccionar múltiples opciones)
                </label>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  {["Presencia online", "E-commerce", "Leads", "Blog", "Intranet"].map((objetivo) => (
                    <label key={objetivo} className="flex items-center">
                      <input
                        type="checkbox"
                        value={objetivo}
                        checked={formData.objetivoPrincipal.includes(objetivo)}
                        onChange={(e) => handleCheckboxChange(e, "objetivoPrincipal")}
                        className="mr-3 h-4 w-4 text-blue-600 border-slate-300 rounded"
                      />
                      <span className="text-slate-700">{objetivo}</span>
                    </label>
                  ))}
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Otro"
                      checked={formData.objetivoPrincipal.includes("Otro")}
                      onChange={(e) => handleCheckboxChange(e, "objetivoPrincipal")}
                      className="mr-3 h-4 w-4 text-blue-600 border-slate-300 rounded"
                    />
                    <span className="text-slate-700">Otro:</span>
                  </label>
                </div>
                {formData.objetivoPrincipal.includes("Otro") && (
                  <input
                    type="text"
                    name="objetivoOtro"
                    value={formData.objetivoOtro}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Especifique el objetivo"
                  />
                )}
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Público objetivo
                </label>
                <textarea
                  name="publicoObjetivo"
                  value={formData.publicoObjetivo}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                  placeholder="Describa su público objetivo (edad, intereses, ubicación, etc.)"
                />
              </div>
            </section>

            {/* 3. Contenidos */}
            <section className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                3. Contenidos
              </h2>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  ¿Qué secciones tendrá el sitio?
                </label>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {["Inicio", "Sobre nosotros", "Servicios", "Portafolio", "Blog", "Contacto", "Otro"].map((seccion) => (
                    <label key={seccion} className="flex items-center">
                      <input
                        type="checkbox"
                        value={seccion}
                        checked={formData.secciones.includes(seccion)}
                        onChange={(e) => handleCheckboxChange(e, "secciones")}
                        className="mr-3 h-4 w-4 text-blue-600 border-slate-300 rounded"
                      />
                      <span className="text-slate-700">{seccion}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    ¿Textos listos?
                  </label>
                  <div className="space-y-2">
                    {["Sí", "No", "En proceso"].map((opcion) => (
                      <label key={opcion} className="flex items-center">
                        <input
                          type="radio"
                          name="textosListos"
                          value={opcion}
                          checked={formData.textosListos === opcion}
                          onChange={handleInputChange}
                          className="mr-3 h-4 w-4 text-blue-600 border-slate-300"
                        />
                        <span className="text-slate-700">{opcion}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    ¿Recursos gráficos disponibles?
                  </label>
                  <div className="space-y-2">
                    {["Sí", "No", "Necesito ayuda"].map((opcion) => (
                      <label key={opcion} className="flex items-center">
                        <input
                          type="radio"
                          name="recursosGraficos"
                          value={opcion}
                          checked={formData.recursosGraficos === opcion}
                          onChange={handleInputChange}
                          className="mr-3 h-4 w-4 text-blue-600 border-slate-300"
                        />
                        <span className="text-slate-700">{opcion}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Diseño */}
            <section className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                4. Diseño
              </h2>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  ¿Tiene identidad visual?
                </label>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {["Logo", "Colores corporativos", "Tipografía definida", "Manual de marca", "No tengo nada"].map((item) => (
                    <label key={item} className="flex items-center">
                      <input
                        type="checkbox"
                        value={item}
                        checked={formData.identidadVisual.includes(item)}
                        onChange={(e) => handleCheckboxChange(e, "identidadVisual")}
                        className="mr-3 h-4 w-4 text-blue-600 border-slate-300 rounded"
                      />
                      <span className="text-slate-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-700">
                  Sitios web de referencia
                </h3>
                {[1, 2, 3].map((num) => (
                  <div key={num} className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="url"
                        name={`webReferencia${num}`}
                        value={formData[`webReferencia${num}` as keyof typeof formData] as string}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        placeholder={`URL de referencia ${num}`}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name={`comentarioRef${num}`}
                        value={formData[`comentarioRef${num}` as keyof typeof formData] as string}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        placeholder="¿Qué le gusta de este sitio?"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Estilo preferido
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {["Moderno", "Clásico", "Creativo", "Otro"].map((estilo) => (
                    <label key={estilo} className="flex items-center">
                      <input
                        type="radio"
                        name="estiloPreferido"
                        value={estilo}
                        checked={formData.estiloPreferido === estilo}
                        onChange={handleInputChange}
                        className="mr-3 h-4 w-4 text-blue-600 border-slate-300"
                      />
                      <span className="text-slate-700">{estilo}</span>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Funcionalidades */}
            <section className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                5. Funcionalidades
              </h2>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {["Formulario", "Chat", "Redes sociales", "Galería", "Blog", "Tienda", "Usuarios", "SEO"].map((func) => (
                  <label key={func} className="flex items-center">
                    <input
                      type="checkbox"
                      value={func}
                      checked={formData.funcionalidades.includes(func)}
                      onChange={(e) => handleCheckboxChange(e, "funcionalidades")}
                      className="mr-3 h-4 w-4 text-blue-600 border-slate-300 rounded"
                    />
                    <span className="text-slate-700">{func}</span>
                  </label>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Métodos de pago (si aplica)
                  </label>
                  <input
                    type="text"
                    name="metodoPago"
                    value={formData.metodoPago}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="MercadoPago, Stripe, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Integraciones necesarias
                  </label>
                  <input
                    type="text"
                    name="integraciones"
                    value={formData.integraciones}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="CRM, ERP, APIs, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Idiomas necesarios
                  </label>
                  <input
                    type="text"
                    name="idiomas"
                    value={formData.idiomas}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Español, inglés, etc."
                  />
                </div>
              </div>
            </section>

            {/* 6. Administrabilidad */}
            <section className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                6. Administrabilidad
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    ¿Quiere editar el sitio por su cuenta?
                  </label>
                  <div className="space-y-2">
                    {["Sí", "No", "Algunas cosas"].map((opcion) => (
                      <label key={opcion} className="flex items-center">
                        <input
                          type="radio"
                          name="editarSitio"
                          value={opcion}
                          checked={formData.editarSitio === opcion}
                          onChange={handleInputChange}
                          className="mr-3 h-4 w-4 text-blue-600 border-slate-300"
                        />
                        <span className="text-slate-700">{opcion}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    ¿Experiencia con CMS?
                  </label>
                  <input
                    type="text"
                    name="experienciaCMS"
                    value={formData.experienciaCMS}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="WordPress, Drupal, etc. o 'Ninguna'"
                  />
                </div>
              </div>
            </section>

            {/* 7. Plazos y Presupuesto */}
            <section className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                7. Plazos y Presupuesto
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Fecha deseada de lanzamiento
                  </label>
                  <input
                    type="date"
                    name="fechaDeseada"
                    value={formData.fechaDeseada}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Presupuesto estimado
                  </label>
                  <input
                    type="text"
                    name="presupuestoEstimado"
                    value={formData.presupuestoEstimado}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Ej: $500.000 - $1.000.000"
                  />
                </div>
              </div>
            </section>

            {/* 8. Comentarios adicionales */}
            <section className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                8. Comentarios Adicionales
              </h2>
              <textarea
                name="comentariosAdicionales"
                value={formData.comentariosAdicionales}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                placeholder="Agregue cualquier información adicional que considere importante para el proyecto..."
              />
            </section>

            {/* Submit Button */}
            <div className="border-t border-slate-200 pt-8 text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Enviar Formulario
              </button>
              <p className="text-sm text-slate-500 mt-4">
                Al enviar este formulario, recibirá una respuesta en un máximo de 48 horas
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
