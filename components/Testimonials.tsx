"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Pía",
    position: "CEO - Eupi Marketing",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "Nos ayudan a desarrollar herramientas personalizadas, mantener la seguridad de nuestro equipo y la integridad de nuestros clientes, además de crear sitios web creativos y profesionales que realmente representan nuestra marca.",
    border: "border-blue-200",
    delay: 0.1
  },
  {
    name: "Federico",
    position: "Manager IT - Naval Motor", 
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    quote: "Colaboran activamente en el testeo de seguridad, detección de bugs y validación de funcionalidad de nuestro sitio web. Su compromiso con soluciones digitales adaptadas a nuestros servicios es destacable.",
    border: "border-green-200",
    delay: 0.2
  },
  {
    name: "Pablo",
    position: "Owner - VTI Logística",
    image: "https://randomuser.me/api/portraits/men/65.jpg", 
    quote: "Comprometidos con el desarrollo de soluciones digitales que fortalecen nuestra empresa desde hace años. Su conocimiento técnico y acompañamiento constante hacen la diferencia.",
    border: "border-orange-200",
    delay: 0.3
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
