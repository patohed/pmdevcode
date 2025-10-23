"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo, useCallback } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface Connection {
  from: Particle;
  to: Particle;
  distance: number;
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [mounted, setMounted] = useState(false);

  // Balance entre rendimiento y calidad visual
  const PARTICLE_COUNT = 60; // Aumentado para mejor efecto
  const MAX_DISTANCE = 16;
  const UPDATE_INTERVAL = 80; // Más fluido

  // Memoizar la generación inicial de partículas
  const initialParticles = useMemo(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.25, // Velocidad mejorada
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 2 + 0.5, // Tamaños más variados
      });
    }
    return newParticles;
  }, []);

  // Optimizar el cálculo de conexiones manteniendo calidad
  const calculateConnections = useCallback((particles: Particle[]) => {
    const newConnections: Connection[] = [];
    const maxConnections = 40; // Más conexiones para mejor efecto
    
    for (let i = 0; i < particles.length && newConnections.length < maxConnections; i++) {
      for (let j = i + 1; j < particles.length && newConnections.length < maxConnections; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAX_DISTANCE) {
          newConnections.push({
            from: particles[i],
            to: particles[j],
            distance,
          });
        }
      }
    }
    return newConnections;
  }, []);

  useEffect(() => {
    setMounted(true);
    setParticles(initialParticles);

    let frameCount = 0;
    
    const interval = setInterval(() => {
      frameCount++;
      
      setParticles((prev) => {
        const updated = prev.map((particle) => ({
          ...particle,
          x: (particle.x + particle.vx + 100) % 100,
          y: (particle.y + particle.vy + 100) % 100,
        }));

        // Calcular conexiones cada 2 frames para balance
        if (frameCount % 2 === 0) {
          const newConnections = calculateConnections(updated);
          setConnections(newConnections);
        }

        return updated;
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, [initialParticles, calculateConnections]);

  // Prevenir hydration issues
  if (!mounted) {
    return <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {connections.map((connection) => {
          const opacity = Math.max(0.2, 1 - (connection.distance / MAX_DISTANCE));
          return (
            <motion.line
              key={`${connection.from.id}-${connection.to.id}`}
              x1={`${connection.from.x}%`}
              y1={`${connection.from.y}%`}
              x2={`${connection.to.x}%`}
              y2={`${connection.to.y}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              strokeOpacity={opacity * 0.7}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          );
        })}

        {/* Flowing paths */}
        <motion.path
          d="M0,20 Q20,10 40,20 T80,20 Q90,25 100,20"
          stroke="url(#connectionGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, strokeDashoffset: 10 }}
          animate={{ 
            pathLength: 1,
            strokeDashoffset: [-10, 0]
          }}
          transition={{ 
            pathLength: { duration: 2, repeat: Infinity, repeatType: "reverse" },
            strokeDashoffset: { duration: 2.5, repeat: Infinity, ease: "linear" }
          }}
        />

        <motion.path
          d="M0,80 Q30,60 60,80 T100,75"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3,7"
          initial={{ pathLength: 0, strokeDashoffset: 10 }}
          animate={{ 
            pathLength: 1,
            strokeDashoffset: [-10, 0]
          }}
          transition={{ 
            pathLength: { duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 },
            strokeDashoffset: { duration: 3.5, repeat: Infinity, ease: "linear", delay: 1 }
          }}
        />
      </svg>

      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-gradient-to-r from-blue-400 to-orange-400 rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: 'translate(-50%, -50%)', // Centrar las partículas
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.id * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing orbs mejorados */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl pointer-events-none"
        animate={{
          x: ["10%", "75%", "10%"],
          y: ["20%", "65%", "20%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-orange-400/25 to-pink-400/25 blur-xl pointer-events-none"
        animate={{
          x: ["65%", "25%", "65%"],
          y: ["55%", "35%", "55%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />

      {/* Grid overlay mejorado */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>
    </div>
  );
}
