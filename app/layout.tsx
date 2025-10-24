import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generatePageMetadata } from "../utils/seo-config";
import Script from "next/script";
import { LocalBusinessSchema } from "../components/SEO/LocalBusiness";
import { PerformanceOptimizer } from "../components/PerformanceOptimizer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import CookieConsent from "../components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = generatePageMetadata('home');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload recursos críticos */}
        <link rel="preload" href="/logo-codedev.png" as="image" />
        
        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Schema.org JSON-LD para LocalBusiness */}
        <LocalBusinessSchema />
        
        {/* Optimizaciones de Performance */}
        <PerformanceOptimizer />
        
        {children}
        
        {/* Botón flotante de WhatsApp */}
        <FloatingWhatsApp />
        
        {/* 🍪 GDPR Cookie Consent Banner - Carga GA solo si el usuario acepta */}
        <CookieConsent />
        
        {/* Schema.org para WebSite (búsqueda) */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Dev Code",
              "url": "https://www.pmdevcode.com.ar",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.pmdevcode.com.ar/buscar?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
