// Configuración SEO centralizada para Dev Code
export const SEO_CONFIG = {
  // Información de la empresa
  company: {
    name: "Dev Code",
    legalName: "Dev Code - Desarrollo Web Profesional by pmdevop",
    description: "Desarrollo web profesional para empresas. Sitios corporativos, e-commerce y sistemas de gestión con +5 años experiencia en Argentina.",
    url: "https://www.pmdevcode.com.ar",
    owner: "pmdevop",
    createdBy: "pm (Patricio Millan)",
    logo: "/logo-devcode.png",
    founded: "2018",
    email: "info@pmdevcode.com.ar",
    address: {
      streetAddress: "Av. Corrientes 1234",
      addressLocality: "Buenos Aires",
      addressRegion: "CABA",
      postalCode: "C1043AAZ",
      addressCountry: "AR"
    },
    socialMedia: {
      linkedin: "https://linkedin.com/company/codedev-ar",
      instagram: "https://instagram.com/codedev_ar",
      twitter: "https://twitter.com/codedev_ar",
      facebook: "https://facebook.com/codedevargentina"
    },
    geo: {
      latitude: "-34.6037",
      longitude: "-58.3816"
    }
  },

  // Configuración de páginas
  pages: {
    home: {
      title: "Dev Code - Desarrollo Web Profesional | Soluciones Empresariales Argentina",
      description: "Desarrollo web profesional para empresas. Sitios corporativos, e-commerce y sistemas de gestión con +5 años experiencia en Argentina. Contactanos.",
      keywords: "desarrollo web empresarial Argentina, sitios web corporativos Buenos Aires, e-commerce profesional PyMEs, sistemas de gestión web, desarrollo Next.js Argentina",
      priority: 1.0,
      changeFreq: "weekly"
    },
    servicios: {
      title: "Servicios de Desarrollo Web | Dev Code Argentina",
      description: "Servicios profesionales de desarrollo web: sitios corporativos, e-commerce, sistemas de gestión y aplicaciones web. Soluciones a medida para empresas.",
      keywords: "servicios desarrollo web, sitios web corporativos, e-commerce empresarial, sistemas gestión, aplicaciones web Argentina",
      priority: 0.9,
      changeFreq: "monthly"
    },
    portfolio: {
      title: "Portfolio de Proyectos Web | Dev Code Argentina",
      description: "Conoce nuestros proyectos de desarrollo web: sitios corporativos, e-commerce y aplicaciones. Casos de éxito de empresas argentinas.",
      keywords: "portfolio desarrollo web, casos éxito sitios web, proyectos e-commerce Argentina, diseño web empresarial",
      priority: 0.8,
      changeFreq: "monthly"
    },
    contacto: {
      title: "Contacto - Solicita tu Cotización | Dev Code Argentina",
      description: "Contacta con Dev Code para tu proyecto web. Consulta gratuita y cotización sin compromiso. Desarrollo web profesional en Buenos Aires.",
      keywords: "contacto desarrollo web, cotización sitio web, consulta gratuita desarrollo, empresa web Buenos Aires",
      priority: 0.7,
      changeFreq: "yearly"
    },
    cotizar: {
      title: "Cotiza tu Proyecto Web | Dev Code Argentina",
      description: "Solicita la cotización de tu proyecto web completando nuestro formulario especializado. Respuesta personalizada en 24 horas.",
      keywords: "cotizar sitio web, formulario proyecto web, presupuesto desarrollo web, cotización e-commerce, solicitar propuesta web",
      priority: 0.8,
      changeFreq: "monthly"
    },
    consultoria: {
      title: "Consultoría en Seguridad Digital | Dev Code Argentina",
      description: "Servicios especializados de consultoría en seguridad digital. Auditorías, protección de datos y cumplimiento normativo para empresas.",
      keywords: "consultoría seguridad digital, auditoría seguridad web, protección datos empresariales, cumplimiento normativo, ciberseguridad",
      priority: 0.8,
      changeFreq: "monthly"
    }
  },

  // Servicios principales
  services: [
    {
      name: "Desarrollo de Sitios Web Corporativos",
      description: "Sitios web profesionales para empresas con diseño responsivo y optimización SEO",
      category: "Desarrollo Web"
    },
    {
      name: "E-commerce y Tiendas Online",
      description: "Plataformas de comercio electrónico completas con sistema de pagos integrado",
      category: "E-commerce"
    },
    {
      name: "Sistemas de Gestión Web",
      description: "Aplicaciones web personalizadas para optimizar procesos empresariales",
      category: "Aplicaciones Web"
    },
    {
      name: "Gestión Técnica de Emails Corporativos",
      description: "Configuración profesional de correos empresariales con dominio propio, Google Workspace y seguridad avanzada",
      category: "Infraestructura"
    },
    {
      name: "Mantenimiento y Soporte Web",
      description: "Servicios de mantenimiento continuo y soporte técnico especializado",
      category: "Soporte"
    },
    {
      name: "Consultoría en Transformación Digital",
      description: "Asesoramiento estratégico para la digitalización de procesos empresariales",
      category: "Consultoría"
    }
  ],

  // Reviews y testimonios
  reviews: [
    {
      author: "María González",
      company: "PyME Textil SA",
      rating: 5,
      text: "Dev Code desarrolló nuestro sitio corporativo y sistema de gestión. Excelente calidad y soporte continuo.",
      date: "2024-03-15"
    },
    {
      author: "Carlos Rodríguez",
      company: "Distribuidora del Norte",
      rating: 5,
      text: "Nuestro e-commerce ha incrementado las ventas 300% gracias al trabajo profesional de Dev Code.",
      date: "2024-02-28"
    },
    {
      author: "Ana Martínez",
      company: "Consultora Legal & Asociados",
      rating: 5,
      text: "Sitio web moderno y funcional. El equipo de Dev Code superó nuestras expectativas completamente.",
      date: "2024-01-20"
    }
  ],

  // Open Graph y Twitter
  openGraph: {
    type: "website",
    siteName: "Dev Code",
    locale: "es_AR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dev Code - Desarrollo Web Profesional Argentina"
      }
    ]
  },

  // Configuración de robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

// Función para generar metadata de páginas
export function generatePageMetadata(pageKey: keyof typeof SEO_CONFIG.pages, customData?: Partial<{
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
}>) {
  const pageConfig = SEO_CONFIG.pages[pageKey];
  const company = SEO_CONFIG.company;
  
  return {
    title: customData?.title || pageConfig.title,
    description: customData?.description || pageConfig.description,
    keywords: customData?.keywords || pageConfig.keywords,
    authors: [{ name: company.name }],
    creator: company.name,
    publisher: company.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(company.url),
    alternates: {
      canonical: customData?.url || `/${pageKey === 'home' ? '' : pageKey}`,
    },
    openGraph: {
      title: customData?.title || pageConfig.title,
      description: customData?.description || pageConfig.description,
      url: customData?.url || `/${pageKey === 'home' ? '' : pageKey}`,
      siteName: company.name,
      images: [
        {
          url: customData?.image || "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${company.name} - ${pageConfig.title}`,
        },
      ],
      locale: "es_AR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: customData?.title || pageConfig.title,
      description: customData?.description || pageConfig.description,
      images: [customData?.image || "/og-image.png"],
      creator: "@codedev_ar",
      site: "@codedev_ar",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    verification: {
      google: "tu-codigo-de-verificacion-google",
      bing: "tu-codigo-de-verificacion-bing",
    },
  };
}
