import { Metadata } from 'next';
import Link from 'next/link';
import { SEO_CONFIG } from '@/utils/seo-config';

export const metadata: Metadata = {
  title: '¿Cuánto Cuesta Desarrollar un Sitio Web en Argentina en 2025? | Guía de Precios',
  description: 'Precios actualizados de desarrollo web en Argentina 2025: Landing pages desde USD 500, sitios corporativos USD 1500-4000, ecommerce USD 3000-8000. Guía completa con ejemplos reales.',
  keywords: 'cuanto cuesta sitio web argentina, precios desarrollo web 2025, presupuesto pagina web, costo tienda online argentina, precio sitio corporativo',
  openGraph: {
    title: '¿Cuánto Cuesta un Sitio Web en Argentina? Precios 2025',
    description: 'Guía completa de precios: landing pages, sitios corporativos, ecommerce y sistemas personalizados. Con ejemplos reales.',
    type: 'article',
  },
};

export default function PreciosDesarrolloWebPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-blue-600">Inicio</Link></li>
            <li>›</li>
            <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
            <li>›</li>
            <li className="text-gray-900 font-semibold">Precios Desarrollo Web 2025</li>
          </ol>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4 text-sm">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
              Presupuestos
            </span>
            <time className="text-gray-600">20 de Octubre, 2025</time>
            <span className="text-gray-600">• 8 min de lectura</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ¿Cuánto Cuesta Desarrollar un Sitio Web en Argentina en 2025?
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Guía completa y actualizada con precios reales del mercado argentino. Desde landing pages hasta ecommerce complejos, descubre qué esperar según tu presupuesto y necesidades.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Intro */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Una de las preguntas más frecuentes que recibimos es: <strong>&ldquo;¿Cuánto cuesta hacer un sitio web en Argentina?&rdquo;</strong> La respuesta no es simple, ya que el precio varía enormemente según la complejidad, funcionalidades y tecnologías utilizadas. En esta guía te explicamos todo lo que necesitas saber para presupuestar tu proyecto web.
          </p>

          {/* Tabla de Precios */}
          <section className="my-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">💰 Tabla de Precios Actualizada 2025</h2>
            
            <div className="space-y-6">
              {/* Landing Page */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">Landing Page Básica</h3>
                  <span className="text-3xl font-bold text-blue-600">USD 500-1000</span>
                </div>
                <p className="text-gray-600 mb-4">Página única optimizada para conversión (ventas, leads, descargas)</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Diseño responsive (mobile, tablet, desktop)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Formulario de contacto integrado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Optimización SEO básica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Integración redes sociales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Tiempo de entrega: 1-2 semanas</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Ideal para:</strong> Lanzamiento de productos, campañas publicitarias, eventos</p>
                </div>
              </div>

              {/* Sitio Corporativo */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-500">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Sitio Web Corporativo</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">MÁS POPULAR</span>
                  </div>
                  <span className="text-3xl font-bold text-blue-600">USD 1500-4000</span>
                </div>
                <p className="text-gray-600 mb-4">Sitio profesional de 5-15 páginas con funcionalidades empresariales</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Diseño personalizado y profesional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>5-15 páginas (Inicio, Servicios, Portfolio, Contacto, etc)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Blog integrado (opcional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>SEO avanzado con keywords locales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Panel de administración</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Integración Google Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Tiempo de entrega: 3-4 semanas</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Ideal para:</strong> PyMEs, profesionales, empresas de servicios</p>
                </div>
              </div>

              {/* Ecommerce */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">Tienda Online (Ecommerce)</h3>
                  <span className="text-3xl font-bold text-blue-600">USD 3000-8000</span>
                </div>
                <p className="text-gray-600 mb-4">Plataforma completa de comercio electrónico con catálogo de productos</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Catálogo de productos ilimitado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Carrito de compras avanzado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Integración MercadoPago / TodoPago</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Sistema de envíos (Correo Argentino, OCA, Andreani)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Panel de administración completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Sistema de usuarios y cuentas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Reportes y estadísticas de ventas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Tiempo de entrega: 4-8 semanas</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Ideal para:</strong> Tiendas retail, distribuidoras, marcas con productos</p>
                </div>
              </div>

              {/* Sistema Personalizado */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">Sistema de Gestión Web</h3>
                  <span className="text-3xl font-bold text-blue-600">USD 5000+</span>
                </div>
                <p className="text-gray-600 mb-4">Aplicación web personalizada para procesos empresariales específicos</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Desarrollo 100% personalizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>CRM, ERP, Portal de clientes, etc</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Base de datos robusta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>API REST para integraciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Múltiples niveles de usuarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Reportes y dashboards personalizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Tiempo de entrega: 8-16 semanas</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Ideal para:</strong> Empresas medianas/grandes con procesos complejos</p>
                </div>
              </div>
            </div>
          </section>

          {/* Factores que Afectan el Precio */}
          <section className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📊 ¿Qué Factores Afectan el Precio?</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Complejidad del Diseño</h3>
                <p className="text-gray-700">Un diseño personalizado y premium cuesta más que usar plantillas pre-diseñadas. Incluye animaciones, interacciones especiales y diseño UX/UI profesional.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Funcionalidades Específicas</h3>
                <p className="text-gray-700">Cada funcionalidad extra suma al presupuesto: sistemas de pago, chat en vivo, reservas online, integración con ERPs, API personalizadas, etc.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Cantidad de Páginas</h3>
                <p className="text-gray-700">Más páginas = más contenido que diseñar, desarrollar y optimizar para SEO. Un sitio de 5 páginas cuesta menos que uno de 20.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Tecnología Utilizada</h3>
                <p className="text-gray-700">WordPress es más económico pero menos personalizable. Next.js/React son más costosos pero ofrecen mejor rendimiento y flexibilidad.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Contenido y Redacción</h3>
                <p className="text-gray-700">Si necesitas que escribamos el contenido SEO optimizado, esto suma USD 200-500 según volumen de texto.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">6. Urgencia del Proyecto</h3>
                <p className="text-gray-700">Proyectos urgentes (menos de 2 semanas) pueden tener un cargo adicional del 20-30% por priorización.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="my-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para Cotizar tu Proyecto?
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              Obtén un presupuesto personalizado y sin compromiso en 24 horas
            </p>
            <Link
              href="/cotizar"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              💰 Solicitar Presupuesto Gratis
            </Link>
          </section>

          {/* Consejos */}
          <section className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">💡 Consejos para Contratar Desarrollo Web</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Desconfía de precios muy bajos</h3>
                  <p className="text-gray-700">Un sitio profesional requiere tiempo, experiencia y tecnología. Precios muy bajos suelen esconder problemas de calidad o soporte inexistente.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Pide portfolio y referencias</h3>
                  <p className="text-gray-700">Revisa trabajos anteriores y habla con clientes previos. Un buen portfolio es señal de experiencia real.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Asegura el soporte post-lanzamiento</h3>
                  <p className="text-gray-700">Verifica que incluyan soporte técnico después del lanzamiento. Los bugs y ajustes son normales en las primeras semanas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Define bien tus necesidades</h3>
                  <p className="text-gray-700">Cuanto más claro tengas qué necesitas, más preciso será el presupuesto. Evita cambios constantes durante el desarrollo.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Hosting y dominio aparte</h3>
                  <p className="text-gray-700">El hosting (USD 5-50/mes) y dominio (USD 10-20/año) suelen ser costos adicionales mensuales.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <section className="mt-16 pt-8 border-t-2 border-gray-200">
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Necesitas ayuda para definir tu proyecto?
              </h2>
              <p className="text-gray-700 mb-6">
                En Code Dev ofrecemos una consulta gratuita de 30 minutos para entender tus necesidades y recomendarte la mejor solución técnica y de presupuesto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors text-center"
                >
                  📞 Agendar Consulta Gratis
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors text-center"
                >
                  👀 Ver Portfolio
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* Schema.org Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '¿Cuánto Cuesta Desarrollar un Sitio Web en Argentina en 2025?',
            description: 'Guía completa de precios actualizados de desarrollo web en Argentina: landing pages, sitios corporativos, ecommerce y sistemas personalizados.',
            author: {
              '@type': 'Organization',
              name: SEO_CONFIG.company.name,
            },
            publisher: {
              '@type': 'Organization',
              name: SEO_CONFIG.company.name,
              logo: {
                '@type': 'ImageObject',
                url: `${SEO_CONFIG.company.url}/logo-codedev.png`,
              },
            },
            datePublished: '2025-10-20',
            dateModified: '2025-10-20',
            mainEntityOfPage: `${SEO_CONFIG.company.url}/blog/cuanto-cuesta-desarrollar-sitio-web-argentina-2025`,
          }),
        }}
      />
    </div>
  );
}
