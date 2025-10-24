import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * 📊 Middleware de Analytics - Privacy-First
 * 
 * Registra vistas de página sin cookies ni tracking invasivo
 * Solo guarda: ruta, timestamp, referer (origen del tráfico)
 * 
 * NOTA: El tracking real se hace vía API route para evitar problemas
 * con Edge Runtime que no soporta módulos de Node.js
 */

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Solo trackear páginas HTML (no APIs, assets, etc)
  const shouldTrack = 
    !pathname.startsWith('/api') &&
    !pathname.startsWith('/_next') &&
    !pathname.includes('.') && // Ignorar archivos (.js, .css, .png, etc)
    pathname !== '/favicon.ico' &&
    pathname !== '/robots.txt' &&
    pathname !== '/sitemap.xml';
  
  if (shouldTrack) {
    const referer = request.headers.get('referer') || undefined;
    const userAgent = request.headers.get('user-agent') || undefined;
    
    // Track en background via API route (no bloquea la respuesta)
    // Usamos fetch() que SÍ está disponible en Edge Runtime
    const baseUrl = request.nextUrl.origin;
    fetch(`${baseUrl}/api/analytics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: pathname,
        referer,
        userAgent,
      }),
    }).catch(() => {
      // Silently fail - no bloqueamos la página si falla el tracking
    });
  }
  
  return NextResponse.next();
}

// Configuración del middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
