"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "María Elena Rodríguez",
    position: "Directora - Colegio San Patricio",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "Implementaron un sistema completo de gestión académica. Mejoramos la comunicación con padres en un 250% y automatizamos procesos administrativos.",
    border: "border-blue-200",
    delay: 0.1
  },
  {
    name: "Carlos Mendoza",
    position: "Gerente General - Naval Motor", 
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    quote: "Su portal B2B revolucionó nuestra relación con proveedores. Redujimos tiempos administrativos en un 50% y aumentamos la eficiencia operativa.",
    border: "border-green-200",
    delay: 0.2
  },
  {
    name: "Ana Lucía Vega",
    position: "Presidenta - Cámara PyME Industrial",
    image: "https://randomuser.me/api/portraits/women/65.jpg", 
    quote: "El portal de membresías y comunicación institucional aumentó la participación de socios en un 180%. Herramienta fundamental para nuestra gestión.",
    border: "border-orange-200",
    delay: 0.3
  },
  {
    name: "Roberto Silva",
    position: "Director - Agencia Mística",
    image: "https://randomuser.me/api/portraits/men/28.jpg", 
    quote: "Su e-commerce integrado con facturación AFIP nos permitió duplicar ventas online y optimizar toda la gestión fiscal automáticamente.",
    border: "border-purple-200",
    delay: 0.4
  },
  {
    name: "Patricia González",
    position: "Coordinadora - Eupi Marketing",
    image: "https://randomuser.me/api/portraits/women/38.jpg", 
    quote: "El CRM integrado nos dio visibilidad completa del funnel comercial. Aumentamos conversión en un 300% con seguimiento automatizado de leads.",
    border: "border-indigo-200",
    delay: 0.5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 px-4 bg-gradient-to-br from-blue-100 via-orange-100 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Casos de Éxito Empresariales
          </h2>
          <p className="text-xl text-gray-600">
            Resultados reales de organizaciones que transformaron su operación con nuestras soluciones
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: testimonial.delay }}
              className={`bg-white p-8 rounded-2xl shadow-lg border ${testimonial.border} hover:shadow-xl transition-all`}
            >
              <div className="flex items-center mb-6">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className={`w-16 h-16 rounded-full border-4 ${testimonial.border} mr-4`}
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
