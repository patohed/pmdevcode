import { NextRequest, NextResponse } from 'next/server';

// 🔒 Variables de entorno del servidor (NO se exponen en el frontend)
const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;

// Rate limiting simple (en producción usa Redis o similar)
const submissions = new Map<string, number>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const lastSubmission = submissions.get(ip) || 0;
  
  if (now - lastSubmission < 30000) { // 30 segundos
    return false;
  }
  
  submissions.set(ip, now);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Verificar que las variables de entorno estén configuradas
    if (!WEB3FORMS_ACCESS_KEY) {
      console.error('❌ WEB3FORMS_ACCESS_KEY no configurado');
      return NextResponse.json(
        { success: false, message: 'Configuración del servidor incompleta' },
        { status: 500 }
      );
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Demasiadas solicitudes. Espera 30 segundos.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validación básica
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: 'Campos requeridos faltantes' },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: 'Email inválido' },
        { status: 400 }
      );
    }

    // Preparar datos para Web3Forms
    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    
    // Agregar recipient si está configurado
    if (RECIPIENT_EMAIL) {
      formData.append('email', RECIPIENT_EMAIL);
    }
    
    // Campos del formulario
    formData.append('name', body.name);
    formData.append('email', body.email);
    formData.append('subject', body.subject || 'Nueva consulta desde pmdevcode.com.ar');
    formData.append('message', body.message);
    
    // Campos adicionales opcionales
    if (body.company) formData.append('company', body.company);
    if (body.phone) formData.append('phone', body.phone);
    
    // Configuración
    formData.append('_captcha', 'false');
    formData.append('_template', 'basic');

    // Enviar a Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return NextResponse.json({
        success: true,
        message: 'Email enviado exitosamente'
      });
    } else {
      console.error('Error de Web3Forms:', data);
      return NextResponse.json(
        { success: false, message: data.message || 'Error al enviar email' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error en API send-email:', error);
    return NextResponse.json(
      { success: false, message: 'Error del servidor' },
      { status: 500 }
    );
  }
}
