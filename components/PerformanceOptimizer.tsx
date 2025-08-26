"use client";
import { useEffect } from 'react';

// Extender la interfaz Window para gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Tipo para métricas de Web Vitals
interface WebVitalMetric {
  name: string;
  id: string;
  value: number;
  rating?: 'good' | 'needs-improvement' | 'poor';
}

// Función para reportar Web Vitals
function sendToAnalytics(metric: WebVitalMetric) {
  // Enviar a Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }

  // También puedes enviar a otros servicios de analytics
  console.log('Web Vital:', metric);
}

export function WebVitalsReporter() {
  useEffect(() => {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(sendToAnalytics);
      onINP(sendToAnalytics); // onINP reemplaza a onFID en web-vitals v3
      onFCP(sendToAnalytics);
      onLCP(sendToAnalytics);
      onTTFB(sendToAnalytics);
    }).catch(() => {
      // web-vitals no está instalado, continuamos sin reportar
      console.log('Web Vitals library not found');
    });
  }, []);

  return null;
}

// Hook para precargar recursos críticos
export function useResourcePreloader() {
  useEffect(() => {
    // Precargar imágenes críticas
    const criticalImages = [
      '/logo-codedev.png',
      '/og-image.png',
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Precargar fuentes críticas si no están en Google Fonts
    const criticalFonts: string[] = [
      // '/fonts/inter-var.woff2',
    ];

    criticalFonts.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.href = src;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);
}

// Componente para optimización de performance
export function PerformanceOptimizer() {
  useResourcePreloader();

  useEffect(() => {
    // Optimización de scroll suave
    if ('scrollBehavior' in document.documentElement.style) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Lazy loading para iframes (Google Maps, etc.)
    const iframes = document.querySelectorAll('iframe[data-src]');
    const iframeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const iframe = entry.target as HTMLIFrameElement;
          iframe.src = iframe.dataset.src || '';
          iframe.removeAttribute('data-src');
          iframeObserver.unobserve(iframe);
        }
      });
    });

    iframes.forEach(iframe => iframeObserver.observe(iframe));

    // Cleanup
    return () => {
      iframeObserver.disconnect();
    };
  }, []);

  return <WebVitalsReporter />;
}
