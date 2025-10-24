import { Metadata } from 'next';
import Link from 'next/link';
import { SEO_CONFIG } from '@/utils/seo-config';

export const metadata: Metadata = {
  title: 'Blog de Desarrollo Web | Guías y Tutoriales - Code Dev Argentina',
  description: 'Artículos, guías y tutoriales sobre desarrollo web, Next.js, React, SEO y tecnologías web. Consejos profesionales para empresas argentinas.',
  keywords: 'blog desarrollo web, tutoriales nextjs, guias react, seo argentina, tecnologia web',
  openGraph: {
    title: 'Blog Desarrollo Web Argentina | Code Dev',
    description: 'Artículos profesionales sobre desarrollo web, SEO, Next.js y tecnologías modernas',
    type: 'website',
  },
};

const blogPosts = [
  {
    slug: 'cuanto-cuesta-desarrollar-sitio-web-argentina-2025',
    title: '¿Cuánto Cuesta Desarrollar un Sitio Web en Argentina en 2025?',
    excerpt: 'Guía completa de precios actualizada: desde landing pages hasta ecommerce complejos. Descubre qué esperar según tu presupuesto.',
    date: '2025-10-20',
    category: 'Presupuestos',
    readTime: '8 min',
    image: '/blog/precios-desarrollo-web.jpg',
  },
  {
    slug: 'nextjs-vs-wordpress-cual-elegir-sitio-empresarial',
    title: 'Next.js vs WordPress: ¿Cuál Elegir para tu Sitio Empresarial?',
    excerpt: 'Comparativa técnica y práctica entre las dos plataformas más populares. Ventajas, desventajas y casos de uso reales.',
    date: '2025-10-15',
    category: 'Tecnología',
    readTime: '10 min',
    image: '/blog/nextjs-vs-wordpress.jpg',
  },
  {
    slug: 'como-posicionar-sitio-web-google-argentina',
    title: 'Cómo Posicionar tu Sitio Web en Google Argentina (Guía 2025)',
    excerpt: 'Estrategias SEO comprobadas para empresas argentinas. Desde keywords locales hasta optimización técnica.',
    date: '2025-10-10',
    category: 'SEO',
    readTime: '12 min',
    image: '/blog/seo-argentina.jpg',
  },
  {
    slug: '10-errores-comunes-sitios-web-pymes-argentinas',
    title: '10 Errores Comunes en Sitios Web de PyMEs Argentinas (y Cómo Evitarlos)',
    excerpt: 'Los errores más frecuentes que ahuyentan clientes: diseño anticuado, velocidad lenta, falta de responsive y más.',
    date: '2025-10-05',
    category: 'Mejores Prácticas',
    readTime: '7 min',
    image: '/blog/errores-web-pymes.jpg',
  },
  {
    slug: 'guia-completa-ecommerce-argentina-mercadopago',
    title: 'Guía Completa: Crear un Ecommerce en Argentina con MercadoPago',
    excerpt: 'Paso a paso para lanzar tu tienda online: desde la plataforma hasta la integración de pagos y envíos.',
    date: '2025-09-28',
    category: 'Ecommerce',
    readTime: '15 min',
    image: '/blog/ecommerce-mercadopago.jpg',
  },
  {
    slug: 'beneficios-sitio-web-profesional-empresas',
    title: '7 Beneficios de Tener un Sitio Web Profesional para tu Empresa',
    excerpt: 'Por qué invertir en un sitio web profesional aumenta ventas, credibilidad y alcance de tu negocio.',
    date: '2025-09-20',
    category: 'Negocios',
    readTime: '6 min',
    image: '/blog/beneficios-web.jpg',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Volver al Inicio
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog de <span className="text-blue-600">Desarrollo Web</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guías, tutoriales y consejos profesionales sobre desarrollo web, SEO, tecnologías modernas y estrategias digitales para empresas argentinas.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-6xl">{post.category === 'SEO' ? '🔍' : post.category === 'Ecommerce' ? '🛒' : '💻'}</span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('es-AR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1"
                  >
                    Leer más →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para tu Proyecto Web?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Convierte tu idea en realidad con desarrollo web profesional. Obtén una cotización personalizada sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cotizar"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              💰 Pedir Presupuesto
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-4 bg-blue-700 text-white rounded-lg font-bold text-lg hover:bg-blue-800 transition-all border-2 border-white"
            >
              📧 Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Blog de Desarrollo Web - Code Dev',
            description: 'Artículos y guías sobre desarrollo web, SEO y tecnologías modernas',
            url: `${SEO_CONFIG.company.url}/blog`,
            publisher: {
              '@type': 'Organization',
              name: SEO_CONFIG.company.name,
              logo: {
                '@type': 'ImageObject',
                url: `${SEO_CONFIG.company.url}/logo-codedev.png`,
              },
            },
            blogPost: blogPosts.map(post => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              url: `${SEO_CONFIG.company.url}/blog/${post.slug}`,
              author: {
                '@type': 'Organization',
                name: SEO_CONFIG.company.name,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
