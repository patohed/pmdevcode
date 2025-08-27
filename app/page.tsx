import HeroSection from "../components/HeroSection";
import Services from '@/components/Services';
import SolutionsBySector from '@/components/SolutionsBySector';
import PricingPackages from '@/components/PricingPackages';
import ProfessionalProcess from '@/components/ProfessionalProcess';
import Testimonials from '@/components/Testimonials';
import CredentialsSection from '@/components/CredentialsSectionDragDrop';
import CredentialsSectionMobile from '@/components/CredentialsSectionMobile';
import CompactFAQ from '@/components/CompactFAQ';
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
        <HeroSection />
        <Services />
        <SolutionsBySector />
        <PricingPackages />
        <ProfessionalProcess />
        <Testimonials />
        {/* Solo mostrar drag and drop en pantallas grandes (desktop) */}
        <div className="hidden xl:block">
          <CredentialsSection />
        </div>
        {/* Versión móvil y tablet de las credenciales */}
        <div className="block xl:hidden">
          <CredentialsSectionMobile />
        </div>
        <CompactFAQ />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}