import { NextResponse } from 'next/server';
import { getStats } from '@/lib/analytics';

/**
 * 📊 API: Get Analytics Stats
 * 
 * Endpoint para obtener estadísticas de analytics
 * Query params: ?days=7 (opcional, default 7)
 */

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '7', 10);
    
    // Validar rango
    if (days < 1 || days > 365) {
      return NextResponse.json(
        { error: 'Days must be between 1 and 365' },
        { status: 400 }
      );
    }
    
    const stats = await getStats(days);
    
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error getting analytics stats:', error);
    return NextResponse.json(
      { error: 'Failed to get analytics stats' },
      { status: 500 }
    );
  }
}
