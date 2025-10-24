'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * 🍪 Cookie Consent Banner - GDPR & Ley Argentina 25.326
 * 
 * Características:
 * - Solo se muestra si el usuario NO ha dado consentimiento
 * - Se guarda en localStorage (persiste entre sesiones)
 * - Carga Google Analytics SOLO si el usuario acepta
 * - Compatible con CSP (no usa eval ni inline scripts)
 * - Diseño moderno y no intrusivo
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si el usuario ya dio consentimiento
    const consent = localStorage.getItem('cookie-consent');
    
    if (consent === null) {
      // No ha decidido → Mostrar banner
      setShowBanner(true);
    } else if (consent === 'accepted') {
      // Ya aceptó → Cargar Google Analytics
      loadGoogleAnalytics();
    }
    // Si consent === 'rejected', no hacemos nada (no cargamos GA)
    
    setIsLoading(false);
  }, []);

  const loadGoogleAnalytics = () => {
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    
    // Si no hay ID configurado, no cargar nada
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'GA_MEASUREMENT_ID') {
      console.warn('⚠️ Google Analytics ID no configurado en .env.local');
      return;
    }

    // Cargar script de Google Analytics
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Inicializar gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true, // Anonimizar IPs (GDPR)
      cookie_flags: 'SameSite=None;Secure', // Cookies seguras
    });

    console.log('✅ Google Analytics cargado con consentimiento');
  };

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    loadGoogleAnalytics();
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
    console.log('❌ Usuario rechazó cookies analíticas');
  };

  // No renderizar nada mientras carga
  if (isLoading) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t-2 border-blue-500 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Texto del banner */}
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <span className="text-2xl" role="img" aria-label="Cookie">
                    🍪
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Uso de Cookies
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Utilizamos <strong>cookies analíticas</strong> (Google Analytics) para mejorar tu experiencia y entender cómo usas nuestro sitio. 
                      No vendemos tu información. 
                      <a
                        href="/politica-privacidad"
                        className="text-blue-600 hover:text-blue-700 underline ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver política de privacidad
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleReject}
                  className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  aria-label="Rechazar cookies analíticas"
                >
                  Solo Esenciales
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none px-6 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all hover:scale-105"
                  aria-label="Aceptar cookies analíticas"
                >
                  Aceptar Todo
                </button>
              </div>
            </div>

            {/* Disclaimer legal */}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                🇦🇷 Cumplimos con la <strong>Ley 25.326 de Protección de Datos Personales</strong> de Argentina y el <strong>GDPR</strong> europeo. 
                Puedes cambiar tus preferencias en cualquier momento desde la configuración de tu navegador.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
