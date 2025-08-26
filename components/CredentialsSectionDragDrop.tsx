"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Credential {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  delay: number;
}

const initialCredentials: Credential[] = [
  {
    id: "experience",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "+5 Años",
    subtitle: "de Experiencia",
    description: "Especializados en soluciones web empresariales desde 2018",
    gradient: "from-blue-600 to-blue-700",
    delay: 0.1
  },
  {
    id: "companies",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "+40",
    subtitle: "Empresas Atendidas",
    description: "Incluyendo Naval Motor, Agencia Mística y Eupi Marketing",
    gradient: "from-green-600 to-green-700",
    delay: 0.2
  },
  {
    id: "uptime",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "99.9%",
    subtitle: "Disponibilidad SLA",
    description: "Garantía de servicio con soporte técnico especializado",
    gradient: "from-gray-600 to-gray-700",
    delay: 0.3
  }
];

const guarantees = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Garantía de Plazos",
    description: "Entregamos en fechas acordadas o no cobramos el proyecto"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Satisfacción Total",
    description: "Revisiones ilimitadas hasta que apruebes el resultado final"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Soporte Post-Lanzamiento",
    description: "3-6 meses de soporte técnico incluido según paquete contratado"
  }
];

interface DraggableCredentialCardProps {
  credential: Credential;
  index: number;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => void;
  isDragging: boolean;
  isOver: boolean;
}

function DraggableCredentialCard({ 
  credential, 
  index, 
  onDragStart, 
  onDragOver, 
  onDrop, 
  isDragging, 
  isOver 
}: DraggableCredentialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: credential.delay }}
      whileHover={{ scale: isDragging ? 1 : 1.05, y: isDragging ? 0 : -5 }}
      className={`
        bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 
        hover:bg-white/20 hover:border-white/30 transition-all duration-300 
        text-center group cursor-move select-none relative
        ${isDragging ? 'opacity-50 scale-105 rotate-3 z-50' : ''}
        ${isOver ? 'ring-2 ring-blue-400/50 bg-blue-500/10' : ''}
      `}
      draggable
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => onDragStart(e, index)}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => onDragOver(e)}
      onDrop={(e: React.DragEvent<HTMLDivElement>) => onDrop(e, index)}
    >
      {/* Indicador de drag horizontal */}
      <div className="absolute top-2 right-2 opacity-60 group-hover:opacity-100 transition-opacity">
        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </div>
      
      <div className={`w-20 h-20 bg-gradient-to-r ${credential.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {credential.icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text mb-2 group-hover:from-blue-300 group-hover:to-white transition-all duration-300">
        {credential.title}
      </div>
      <p className="text-blue-300 font-semibold text-lg mb-4 group-hover:text-blue-200 transition-colors duration-300">
        {credential.subtitle}
      </p>
      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {credential.description}
      </p>
    </motion.div>
  );
}

export default function CredentialsSection() {
  const [credentials, setCredentials] = useState<Credential[]>(initialCredentials);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.outerHTML);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newCredentials = [...credentials];
    const draggedItem = newCredentials[draggedIndex];
    
    // Remove dragged item
    newCredentials.splice(draggedIndex, 1);
    
    // Insert at new position
    newCredentials.splice(dropIndex, 0, draggedItem);
    
    setCredentials(newCredentials);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Solo limpiamos si realmente salimos del elemento
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setDragOverIndex(null);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Confianza Respaldada por Resultados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Certificaciones, experiencia y garantías que respaldan la calidad de nuestro trabajo
          </motion.p>
          
          {/* Indicador de funcionalidad */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30 text-green-200 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-4-4l4 4-4 4" />
            </svg>
            <span>¡Arrastra las tarjetas horizontalmente para reordenarlas!</span>
          </motion.div>
        </div>

        {/* Credenciales Principales - Draggable */}
        <div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          onDragOver={handleDragOver}
        >
          {credentials.map((credential, index) => (
            <div
              key={credential.id}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragLeave={handleDragLeave}
            >
              <DraggableCredentialCard
                credential={credential}
                index={index}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                isDragging={draggedIndex === index}
                isOver={dragOverIndex === index && draggedIndex !== index}
              />
            </div>
          ))}
        </div>

        {/* Garantías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Nuestras Garantías Empresariales
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {guarantees.map((guarantee, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {guarantee.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {guarantee.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            ¿Querés conocer más sobre nuestras referencias y casos de éxito?
          </p>
          <motion.button
            onClick={() => window.open('https://wa.me/5491234567890?text=Hola, me gustaría conocer más sobre sus referencias comerciales y casos de éxito 📊', '_blank')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-600 to-green-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 hover:from-green-500 hover:to-green-400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
            </svg>
            Solicitar Referencias por WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
