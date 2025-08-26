import FAQ from '@/components/FAQ';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - FAQ | Dev Code - Desarrollo Web Profesional',
  description: 'Encuentra respuestas a todas tus dudas sobre nuestros servicios de desarrollo web. Precios, tiempos, tecnología, proceso y más información detallada.',
  keywords: 'FAQ, preguntas frecuentes, desarrollo web, precios, React, Next.js, WordPress, e-commerce, sitios web',
  openGraph: {
    title: 'FAQ - Preguntas Frecuentes sobre Desarrollo Web',
    description: 'Respuestas transparentes sobre nuestros servicios de desarrollo web profesional',
    type: 'website',
  }
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Breadcrumb */}
      <nav className="px-4 py-4 max-w-6xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm text-gray-400">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-white">FAQ</span>
          </li>
        </ol>
      </nav>

      {/* Contenido principal */}
      <main>
        <FAQ />
      </main>
      
      {/* JSON-LD Schema para FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta un sitio web profesional?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El precio de cada proyecto se personaliza según tres factores principales: tiempo de desarrollo requerido, habilidades técnicas solicitadas, y complejidad general del sistema que necesitas. Evaluamos número de páginas, funcionalidades especiales y nivel de personalización."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto tiempo toma desarrollar un proyecto?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tiempo mínimo: 48 horas para sitios institucionales, informativos y landing pages. Los tiempos se extienden según la complejidad: e-commerce, sistemas de usuarios, integraciones y funcionalidades avanzadas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Por qué usan React y Next.js en lugar de WordPress?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "React y Next.js ofrecen velocidad superior, mejor SEO con renderizado del lado servidor, mayor seguridad sin plugins vulnerables, y escalabilidad para crecer con tu negocio."
                }
              },
              {
                "@type": "Question",
                "name": "¿Los sitios serán responsive y optimizados para móviles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "100% responsive por defecto. Desarrollamos con enfoque 'mobile-first', garantizando experiencia perfecta en smartphones, tablets y desktop."
                }
              },
              {
                "@type": "Question",
                "name": "¿Ofrecen garantía en sus proyectos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, ofrecemos garantía de 60 días contra errores de funcionamiento post-lanzamiento. Además, incluimos 3-6 meses de soporte técnico según el paquete contratado."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
