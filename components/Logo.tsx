"use client";
import React from "react";

interface LogoProps {
  variant?: "horizontal" | "vertical" | "icon" | "text";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  color?: "default" | "white" | "dark" | "gradient";
}

const Logo: React.FC<LogoProps> = ({ 
  variant = "horizontal", 
  size = "md", 
  className = "",
  color = "default"
}) => {
  // Configuración de tamaños
  const sizeConfig = {
    xs: { width: 80, height: 24, iconSize: 20, fontSize: "text-sm", spacing: "space-x-1.5" },
    sm: { width: 100, height: 30, iconSize: 24, fontSize: "text-base", spacing: "space-x-2" },
    md: { width: 140, height: 42, iconSize: 32, fontSize: "text-xl", spacing: "space-x-2.5" },
    lg: { width: 180, height: 54, iconSize: 40, fontSize: "text-2xl", spacing: "space-x-3" },
    xl: { width: 240, height: 72, iconSize: 52, fontSize: "text-4xl", spacing: "space-x-4" }
  };

  const config = sizeConfig[size];

  // Configuración de colores
  const colorConfig = {
    default: {
      primary: "#3B82F6", // blue-500
      secondary: "#EF4444", // red-500
      text: "#1F2937", // gray-800
      accent: "#6366F1" // indigo-500
    },
    white: {
      primary: "#FFFFFF",
      secondary: "#F3F4F6",
      text: "#FFFFFF",
      accent: "#E5E7EB"
    },
    dark: {
      primary: "#1F2937",
      secondary: "#374151",
      text: "#1F2937",
      accent: "#4B5563"
    },
    gradient: {
      primary: "url(#logoGradient)",
      secondary: "url(#logoGradientSecondary)",
      text: "#1F2937",
      accent: "url(#logoGradient)"
    }
  };

  const colors = colorConfig[color];

  // Componente del isotipo (ícono)
  const Isotipo = () => (
    <svg
      width={config.iconSize}
      height={config.iconSize}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {color === "gradient" && (
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
          <linearGradient id="logoGradientSecondary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      )}
      
      {/* Contenedor principal con bordes redondeados */}
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="12"
        ry="12"
        fill={colors.primary}
        stroke={colors.accent}
        strokeWidth="2"
      />
      
      {/* Símbolo de código estilizado */}
      <g transform="translate(12, 12)">
        {/* Bracket izquierdo */}
        <path
          d="M8 8 L4 12 L4 28 L8 32"
          stroke={colors.secondary}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Bracket derecho */}
        <path
          d="M32 8 L36 12 L36 28 L32 32"
          stroke={colors.secondary}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Slash central */}
        <path
          d="M24 6 L16 34"
          stroke={color === "white" ? colors.text : "#FFFFFF"}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Puntos decorativos */}
        <circle cx="12" cy="20" r="2" fill={color === "white" ? colors.text : "#FFFFFF"} />
        <circle cx="28" cy="20" r="2" fill={color === "white" ? colors.text : "#FFFFFF"} />
      </g>
    </svg>
  );

  // Componente del texto
  const TextLogo = ({ isVertical = false }: { isVertical?: boolean }) => (
    <div className={`${isVertical ? "text-center" : ""}`}>
      <div className={`${config.fontSize} font-bold leading-tight`} style={{ color: colors.text }}>
        <span className="font-black">Dev</span>
        <span className="font-light ml-1" style={{ color: colors.primary }}>Code</span>
      </div>
      {size !== "xs" && (
        <div 
          className={`text-xs font-medium tracking-wider ${isVertical ? "mt-1" : "mt-0"}`} 
          style={{ color: colors.accent === "url(#logoGradient)" ? colors.text : colors.accent }}
        >
          by pmdevop
        </div>
      )}
    </div>
  );

  // Renderizado según variante
  const renderVariant = () => {
    switch (variant) {
      case "horizontal":
        return (
          <div className={`flex items-center ${config.spacing} ${className}`}>
            <Isotipo />
            <TextLogo />
          </div>
        );
      
      case "vertical":
        return (
          <div className={`flex flex-col items-center space-y-2 ${className}`}>
            <Isotipo />
            <TextLogo isVertical />
          </div>
        );
      
      case "icon":
        return (
          <div className={className}>
            <Isotipo />
          </div>
        );
      
      case "text":
        return (
          <div className={className}>
            <TextLogo />
          </div>
        );
      
      default:
        return (
          <div className={`flex items-center ${config.spacing} ${className}`}>
            <Isotipo />
            <TextLogo />
          </div>
        );
    }
  };

  return renderVariant();
};

// Componente de logo animado (opcional)
export const AnimatedLogo: React.FC<LogoProps & { animate?: boolean }> = ({ 
  animate = true, 
  ...props 
}) => {
  if (!animate) return <Logo {...props} />;

  return (
    <div className="group">
      <Logo 
        {...props} 
        className={`transition-all duration-300 group-hover:scale-105 ${props.className || ""}`}
      />
    </div>
  );
};

// Variantes pre-configuradas para casos comunes
export const LogoVariants = {
  Header: (props: Partial<LogoProps>) => (
    <Logo variant="horizontal" size="md" color="default" {...props} />
  ),
  
  HeaderDark: (props: Partial<LogoProps>) => (
    <Logo variant="horizontal" size="md" color="white" {...props} />
  ),
  
  Footer: (props: Partial<LogoProps>) => (
    <Logo variant="vertical" size="sm" color="white" {...props} />
  ),
  
  FooterSameAsHeader: (props: Partial<LogoProps>) => (
    <Logo variant="horizontal" size="md" color="white" {...props} />
  ),
  
  Mobile: (props: Partial<LogoProps>) => (
    <Logo variant="icon" size="sm" color="default" {...props} />
  ),
  
  Brand: (props: Partial<LogoProps>) => (
    <AnimatedLogo variant="horizontal" size="lg" color="gradient" {...props} />
  ),
  
  Favicon: (props: Partial<LogoProps>) => (
    <Logo variant="icon" size="xs" color="gradient" {...props} />
  )
};

export default Logo;
