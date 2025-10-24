import HeroSection from "../components/HeroSection";
import Services from '@/components/Services';
import TrustedCompanies from '@/components/TrustedCompanies';
// import SolutionsBySector from '@/components/SolutionsBySector'; // Comentado - Mover a /sectores
// import PricingPackages from '@/components/PricingPackages'; // Comentado - Mover a /cotizar
// import ProfessionalProcess from '@/components/ProfessionalProcess'; // Comentado - Mover a /servicios
import Testimonials from '@/components/Testimonials';
// import CredentialsSection from '@/components/CredentialsSectionDragDrop'; // Comentado - Mover a /portfolio
// import CredentialsSectionMobile from '@/components/CredentialsSectionMobile'; // Comentado - Mover a /portfolio
// import CompactFAQ from '@/components/CompactFAQ'; // Comentado - Ya existe página /faq
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import Script from 'next/script';

export default function Home() {
  const breadcrumbs = [
    { name: 'Inicio', url: 'https://www.pmdevcode.com.ar' }
  ];

  return (
    <div className="min-h-screen">
      {/* Schema para la página principal */}
      <BreadcrumbSchema items={breadcrumbs} />
      
      {/* Schema para servicios de la página principal */}
      <Script
        id="homepage-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Servicios de Desarrollo Web Dev Code",
            "description": "Servicios profesionales de desarrollo web para empresas argentinas",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Desarrollo de Sitios Web Corporativos",
                "description": "Sitios web profesionales para empresas con diseño responsivo y optimización SEO",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Dev Code"
                }
              },
              {
                "@type": "Service", 
                "position": 2,
                "name": "E-commerce y Tiendas Online",
                "description": "Plataformas de comercio electrónico completas con sistema de pagos integrado",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Dev Code"
                }
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Sistemas de Gestión Web",
                "description": "Aplicaciones web personalizadas para optimizar procesos empresariales",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Dev Code"
                }
              }
            ]
          })
        }}
      />

      {/* Contenido principal con estructura semántica */}
      <main role="main">
        {/* === SECCIÓN 1: HERO === */}
        <HeroSection />
        
        {/* === SECCIÓN 2: SERVICIOS PRINCIPALES === */}
        <Services />
        
        {/* === SECCIÓN 3: EMPRESAS QUE CONFÍAN (Social Proof) === */}
        <TrustedCompanies />
        
        {/* === SECCIÓN 4: SOLUCIONES POR SECTOR === */}
        {/* OPTIMIZACIÓN: Esta sección es muy específica para home
            Mejor en página dedicada /sectores o /industrias */}
        {/* <SolutionsBySector /> */}
        
        {/* === SECCIÓN 5: PAQUETES DE PRECIOS === */}
        {/* OPTIMIZACIÓN: Ya existe página /cotizar con formulario
            Los precios van mejor ahí para no abrumar visitantes iniciales */}
        {/* <PricingPackages /> */}
        
        {/* === SECCIÓN 6: PROCESO PROFESIONAL === */}
        {/* OPTIMIZACIÓN: Contenido secundario "cómo trabajamos"
            Mejor moverlo a /servicios con más detalle */}
        {/* <ProfessionalProcess /> */}
        
        {/* === SECCIÓN 7: TESTIMONIOS (Conversión crítica) === */}
        <Testimonials />
        
        {/* === SECCIÓN 8: CREDENCIALES === */}
        {/* OPTIMIZACIÓN: Ya existe /portfolio donde estas credenciales tienen más sentido
            Mucha carga visual para home, mejor en portfolio dedicado */}
        {/* Solo mostrar drag and drop en pantallas grandes (desktop) */}
        {/* <div className="hidden xl:block">
          <CredentialsSection />
        </div> */}
        {/* Versión móvil y tablet de las credenciales */}
        {/* <div className="block xl:hidden">
          <CredentialsSectionMobile />
        </div> */}
        
        {/* === SECCIÓN 9: FAQ COMPACTO === */}
        {/* OPTIMIZACIÓN: Ya existe página /faq completa
            Opción: Reducir a solo 3 FAQs top o eliminar completamente */}
        {/* <CompactFAQ /> */}
        
        {/* === SECCIÓN 10: CONTACTO (CTA Principal) === */}
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}