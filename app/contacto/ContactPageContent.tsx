"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BreadcrumbSchema, useBreadcrumbs } from '../../components/SEO/BreadcrumbSchema';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { SEO_CONFIG } from '../../utils/seo-config';

export default function ContactPageContent() {
  const pathname = usePathname();
  const breadcrumbs = useBreadcrumbs(pathname);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    privacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* SEO Schema */}
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto - Dev Code",
            "description": "Contacta con Dev Code para tu proyecto de desarrollo web. Consulta gratuita y cotización personalizada.",
            "url": "https://www.pmdevcode.com.ar/contacto",
            "mainEntity": {
              "@type": "LocalBusiness",
              "@id": `${SEO_CONFIG.company.url}#organization`,
              "name": SEO_CONFIG.company.name,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": SEO_CONFIG.company.address.streetAddress,
                "addressLocality": SEO_CONFIG.company.address.addressLocality,
                "addressRegion": SEO_CONFIG.company.address.addressRegion,
                "postalCode": SEO_CONFIG.company.address.postalCode,
                "addressCountry": SEO_CONFIG.company.address.addressCountry
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": SEO_CONFIG.company.geo.latitude,
                "longitude": SEO_CONFIG.company.geo.longitude
              },
              "email": SEO_CONFIG.company.email,
              "url": SEO_CONFIG.company.url,
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ]
            }
          })
        }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors flex items-center">
              <span className="mr-1">🏠</span>
              Inicio
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Contacto</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contactanos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Nos encantaría conocer tus ideas y ayudarte a convertirlas en realidad. 
              Solicita una consulta gratuita sin compromiso.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Información de Contacto</h2>
            
            <div className="space-y-8">
              {/* Dirección */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dirección</h3>
                  <address className="text-gray-600 not-italic">
                    {SEO_CONFIG.company.address.streetAddress}<br />
                    {SEO_CONFIG.company.address.addressLocality}, {SEO_CONFIG.company.address.addressRegion}<br />
                    {SEO_CONFIG.company.address.postalCode}, Argentina
                  </address>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a 
                    href={`mailto:${SEO_CONFIG.company.email}`}
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {SEO_CONFIG.company.email}
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 text-xl">🕒</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Horarios de Atención</h3>
                  <p className="text-gray-600">
                    Lunes a Viernes: 9:00 - 18:00<br />
                    Sábados y Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Síguenos en Redes Sociales</h3>
              <div className="flex space-x-4">
                <a
                  href={SEO_CONFIG.company.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn de Dev Code"
                >
                  <span className="text-xl">💼</span>
                </a>
                <a
                  href={SEO_CONFIG.company.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                  aria-label="Instagram de Dev Code"
                >
                  <span className="text-xl">📷</span>
                </a>
                <a
                  href={SEO_CONFIG.company.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                                    aria-label="Twitter de Dev Code"
                >
                  <span className="text-xl">🐦</span>
                </a>
                <a
                  href={SEO_CONFIG.company.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
                  aria-label="Facebook de Dev Code"
                >
                  <span className="text-xl">📘</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Solicita tu Consulta Gratuita</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servicio de interés *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="sitio-corporativo">Sitio Web Corporativo</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="sistema-gestion">Sistema de Gestión</option>
                      <option value="emails-corporativos">Gestión de Emails Corporativos</option>
                      <option value="consultoria">Consultoría Digital</option>
                      <option value="mantenimiento">Mantenimiento Web</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Presupuesto aproximado
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="menos-100k">Menos de $100.000</option>
                      <option value="100k-300k">$100.000 - $300.000</option>
                      <option value="300k-500k">$300.000 - $500.000</option>
                      <option value="500k-1m">$500.000 - $1.000.000</option>
                      <option value="mas-1m">Más de $1.000.000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                    placeholder="Cuéntanos sobre tu proyecto, objetivos, plazos y cualquier detalle relevante..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Acepto la{' '}
                    <Link href="/politicas-privacidad" className="text-blue-600 hover:text-blue-700 underline">
                      política de privacidad
                    </Link>{' '}
                    y autorizo el tratamiento de mis datos personales para responder a mi consulta *
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 15px 35px rgba(147, 51, 234, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>💬</span>
                  <span>Recibir Propuesta Personalizada</span>
                  <motion.div
                    className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </motion.div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestra Ubicación</h2>
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-slate-200">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016168179513!2d-58.38591468505707!3d-34.60373328045814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaccc9f59acf%3A0x8a7a9b4bb84e7555!2sAv.%20Corrientes%201234%2C%20C1043AAZ%20CABA!5e0!3m2!1ses!2sar!4v1640995200000!5m2!1ses!2sar`}
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Dev Code en Buenos Aires"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
