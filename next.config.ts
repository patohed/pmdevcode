import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Desactivar Turbopack para evitar errores en producción
  turbo: undefined,
  
  // Optimizaciones de rendimiento (sin experimental)
  compress: true,
  
  // Configuración de build más estable
  typescript: {
    ignoreBuildErrors: false,
  },
  
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Optimización de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 días
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers de seguridad y SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Seguridad
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // Performance
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      },
      // Cache para recursos estáticos
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Sitemap y robots
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600'
          }
        ]
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600'
          }
        ]
      }
    ];
  },

  // Redirects para SEO
  async redirects() {
    return [
      // Redirects de páginas antiguas si las hay
      {
        source: '/old-portfolio',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contacto',
        permanent: true,
      }
    ];
  },

  // Rewrites para URLs limpias
  async rewrites() {
    return [
      // Mantener URLs limpias para el sitemap
      {
        source: '/sitemap',
        destination: '/sitemap.xml',
      }
    ];
  },

  // Optimización del bundle
  webpack: (config, { dev, isServer }) => {
    // Optimización de producción
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }
    
    return config;
  },

  // Variables de entorno para SEO
  env: {
    SITE_NAME: 'Dev Code',
    SITE_URL: 'https://www.pmdevcode.com.ar',
    COMPANY_NAME: 'Dev Code - Desarrollo Web Profesional by pmdevop',
  },
  
  // Optimización del output
  output: 'standalone',
  
  // PoweredByHeader para seguridad
  poweredByHeader: false,
  
  // Trailing slash para consistencia de URLs
  trailingSlash: false,
};

export default nextConfig;
