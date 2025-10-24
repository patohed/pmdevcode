/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ocultar header X-Powered-By que revela Next.js
  poweredByHeader: false,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
  
  // 🔐 SECURITY HEADERS COMPLETOS - Protección contra ataques
  async headers() {
    return [
      {
        // Aplicar a todas las rutas
        source: '/:path*',
        headers: [
          // CSP - Content Security Policy (Protección XSS)
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://api.web3forms.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://api.web3forms.com https://wa.me",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' https://api.web3forms.com",
              "upgrade-insecure-requests"
            ].join('; ')
          },
          // HSTS - Forzar HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          // Prevenir clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // Prevenir MIME sniffing
          {
            key: 'X-Content-Type-Options', 
            value: 'nosniff'
          },
          // Política de referrer
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Protección XSS legacy
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Permisos restrictivos
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()'
          }
        ]
      }
    ];
  },
  
  // 🔐 SECURITY: Configuración adicional de webpack para producción
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimizaciones de seguridad solo en producción
      config.optimization.minimize = true;
    }
    return config;
  }
}

module.exports = nextConfig
