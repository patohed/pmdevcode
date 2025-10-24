import { NextRequest, NextResponse } from 'next/server';
import { trackPageView } from '@/lib/analytics';

/**
 * API Route para tracking de páginas vistas
 * Se llama desde el middleware vía fetch()
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path, referer, userAgent } = body;
    
    if (!path) {
      return NextResponse.json(
        { error: 'path is required' },
        { status: 400 }
      );
    }
    
    // Track de forma asíncrona
    await trackPageView(path, referer, userAgent);
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Analytics track error:', error);
    // No fallar la request aunque falle el tracking
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
