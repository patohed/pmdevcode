"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
      });
    }
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles((prev) => {
        const updated = prev.map((particle) => ({
          ...particle,
          x: (particle.x + particle.vx + 100) % 100,
          y: (particle.y + particle.vy + 100) % 100,
        }));

        // Calculate connections
        const newConnections: Connection[] = [];
        const maxDistance = 15; // Maximum distance for connections

        for (let i = 0; i < updated.length; i++) {
          for (let j = i + 1; j < updated.length; j++) {
            const dx = updated[i].x - updated[j].x;
            const dy = updated[i].y - updated[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              newConnections.push({
                from: updated[i],
                to: updated[j],
                distance,
              });
            }
          }
        }

        setConnections(newConnections);
        return updated;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {connections.map((connection, index) => {
          const opacity = 1 - (connection.distance / 15);
          return (
            <motion.line
              key={index}
              x1={`${connection.from.x}%`}
              y1={`${connection.from.y}%`}
              x2={`${connection.to.x}%`}
              y2={`${connection.to.y}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              strokeOpacity={opacity * 0.6}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
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
            strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" }
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
            strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear", delay: 1 }
          }}
        />
      </svg>

      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-gradient-to-r from-blue-400 to-orange-400 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.id * 0.05,
          }}
        />
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
        animate={{
          x: ["10%", "80%", "10%"],
          y: ["20%", "70%", "20%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-orange-400/30 to-pink-400/30 blur-xl"
        animate={{
          x: ["70%", "20%", "70%"],
          y: ["60%", "30%", "60%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
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
