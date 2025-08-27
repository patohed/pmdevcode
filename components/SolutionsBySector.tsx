"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Sistema de iconos optimizado
const IconLibrary = {
  briefcase: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0h2a2 2 0 012 2v6.5",
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  users: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  building: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  globe: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  chart: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787",
  arrow: "M14 5l7 7m0 0l-7 7m7-7H3"
};

// Tema de colores optimizado
const ColorThemes = {
  blue: {
    gradient: "from-blue-600 to-blue-700",
    bgGradient: "from-blue-50 to-blue-100",
    hoverBg: "from-blue-100 to-blue-200",
    border: "border-blue-200",
    hoverBorder: "border-blue-300"
  },
  green: {
    gradient: "from-green-600 to-green-700",
    bgGradient: "from-green-50 to-green-100",
    hoverBg: "from-green-100 to-green-200",
    border: "border-green-200",
    hoverBorder: "border-green-300"
  },
  gray: {
    gradient: "from-gray-600 to-gray-700",
    bgGradient: "from-gray-50 to-gray-100",
    hoverBg: "from-gray-100 to-gray-200",
    border: "border-gray-200",
    hoverBorder: "border-gray-300"
  },
  orange: {
    gradient: "from-orange-600 to-orange-700",
    bgGradient: "from-orange-50 to-orange-100",
    hoverBg: "from-orange-100 to-orange-200",
    border: "border-orange-200",
    hoverBorder: "border-orange-300"
  }
};

// Datos optimizados de sectores
const sectors = [
  {
    iconKey: "briefcase" as keyof typeof IconLibrary,
    title: "Servicios Profesionales",
    subtitle: "Estudios, Consultoras, Profesionales Independientes",
    description: "Sitios corporativos que proyectan credibilidad y profesionalismo, con formularios de contacto avanzados y sistemas de gestión de clientes integrados.",
    results: "Aumentamos las consultas comerciales en un 300%",
    theme: "blue" as keyof typeof ColorThemes,
    delay: 0.1
  },
  {
    iconKey: "book" as keyof typeof IconLibrary,
    title: "Instituciones Educativas",
    subtitle: "Colegios, Universidades, Centros de Capacitación",
    description: "Portales educativos con sistemas de gestión académica, inscripciones online y plataformas de comunicación institucional.",
    results: "Mejoramos la comunicación institucional en un 250%",
    theme: "green" as keyof typeof ColorThemes,
    delay: 0.2
  },
  {
    iconKey: "users" as keyof typeof IconLibrary,
    title: "ONGs y Asociaciones",
    subtitle: "Organizaciones sin Fines de Lucro, Cámaras Empresariales",
    description: "Sitios institucionales con sistemas de membresías, donaciones online y portales de transparencia para comunicar impacto social.",
    results: "Aumentamos la participación de miembros en un 180%",
    theme: "gray" as keyof typeof ColorThemes,
    delay: 0.3
  },
  {
    iconKey: "building" as keyof typeof IconLibrary,
    title: "PyMEs Comerciales e Industriales",
    subtitle: "Empresas de Manufactura, Distribución, Servicios",
    description: "E-commerce completo con gestión de inventario, facturación integrada, portales B2B para proveedores y clientes corporativos.",
    results: "Reducimos tiempos administrativos en un 50%",
    theme: "orange" as keyof typeof ColorThemes,
    delay: 0.4
  },
  {
    iconKey: "globe" as keyof typeof IconLibrary,
    title: "Entidades Gubernamentales",
    subtitle: "Municipios, Organismos Públicos, Instituciones",
    description: "Portales de transparencia, trámites online, sistemas de atención ciudadana y plataformas de participación pública.",
    results: "Mejoramos la transparencia y accesibilidad en un 400%",
    theme: "gray" as keyof typeof ColorThemes,
    delay: 0.5
  }
];

// Componente de icono reutilizable
const Icon = ({ iconKey, className = "w-6 h-6 text-white" }: { iconKey: keyof typeof IconLibrary; className?: string }) => {
  // El icono de WhatsApp necesita fill en lugar de stroke
  if (iconKey === "whatsapp") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d={IconLibrary[iconKey]} />
      </svg>
    );
  }
  
  // Los demás iconos usan stroke
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={IconLibrary[iconKey]} />
    </svg>
  );
};

// Componente de badge de resultados reutilizable
const ResultsBadge = ({ results, theme }: { results: string; theme: keyof typeof ColorThemes }) => (
  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${ColorThemes[theme].gradient} rounded-full text-white text-sm font-semibold mb-4 shadow-md`}>
    <Icon iconKey="chart" className="w-4 h-4 mr-2" />
    {results}
  </div>
);

export default function SolutionsBySector() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleWhatsAppClick = (message: string) => {
    // Placeholder para el número de WhatsApp - reemplazar con el número real
    const phoneNumber = "5491234567890"; // Reemplazar con tu número
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="soluciones" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Soluciones Específicas por Sector
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Desarrollamos soluciones web especializadas para cada tipo de organización, 
            con funcionalidades específicas para maximizar resultados
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {sectors.map((sector, index) => {
            const theme = ColorThemes[sector.theme];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sector.delay }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-gradient-to-br ${
                  hoveredCard === index ? theme.hoverBg : theme.bgGradient
                } p-8 rounded-2xl border-2 ${
                  hoveredCard === index ? theme.hoverBorder : theme.border
                } transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-2xl`}
              >
                <div className="flex items-start space-x-6">
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-r ${theme.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon iconKey={sector.iconKey} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mb-4">
                      {sector.subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-600 transition-colors">
                      {sector.description}
                    </p>
                    
                    <ResultsBadge results={sector.results} theme={sector.theme} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              ¿No encontrás tu sector? No hay problema
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Desarrollamos soluciones personalizadas para cualquier tipo de organización
            </p>
            <motion.button
              onClick={() => handleWhatsAppClick("Hola! No encontré mi sector específico en la lista. Me gustaría consultar sobre una solución personalizada para mi organización.")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center space-x-1 sm:space-x-2"
            >
              <Icon iconKey="whatsapp" className="w-5 h-5 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base hidden sm:inline">Consultar Solución Personalizada</span>
              <span className="text-sm sm:hidden">Consultar Solución</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
