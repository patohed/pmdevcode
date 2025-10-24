import { NextResponse } from 'next/server';
import { trackFormSubmission } from '@/lib/analytics';

/**
 * 📊 API: Track Form Submission
 * 
 * Endpoint para registrar envíos de formularios en analytics
 */

export async function POST(request: Request) {
  try {
    const { formType } = await request.json();
    
    // Validar tipo de formulario
    if (!['contact', 'cotizar', 'consultoria'].includes(formType)) {
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400 }
      );
    }
    
    // Registrar en analytics
    await trackFormSubmission(formType);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking form submission:', error);
    return NextResponse.json(
      { error: 'Failed to track form submission' },
      { status: 500 }
    );
  }
}
