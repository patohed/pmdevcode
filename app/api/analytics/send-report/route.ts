import { NextResponse } from 'next/server';
import { getStats } from '@/lib/analytics';

/**
 * 📧 API: Send Weekly Analytics Report
 * 
 * Envía reporte semanal de analytics por email
 * Este endpoint se debe llamar con un cron job
 */

export async function POST(request: Request) {
  try {
    // Verificar token de seguridad (para que solo el cron job pueda llamarlo)
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET || 'change-me-in-production';
    
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Obtener estadísticas de los últimos 7 días
    const stats = await getStats(7);
    
    // Generar HTML del email
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
    h1 { color: #3b82f6; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; }
    h2 { color: #1e40af; margin-top: 30px; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
    th { background-color: #3b82f6; color: white; }
    .stat-box { background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 10px 0; }
    .stat-number { font-size: 32px; font-weight: bold; color: #3b82f6; }
    .stat-label { color: #6b7280; text-transform: uppercase; font-size: 12px; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 14px; }
  </style>
</head>
<body>
  <h1>📊 Reporte Semanal - Code Dev</h1>
  
  <p><strong>Período:</strong> ${new Date(stats.period.from).toLocaleDateString('es-AR')} - ${new Date(stats.period.to).toLocaleDateString('es-AR')}</p>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
    <div class="stat-box">
      <div class="stat-number">${stats.totalPageViews.toLocaleString()}</div>
      <div class="stat-label">Visitas Totales</div>
    </div>
    <div class="stat-box">
      <div class="stat-number">${stats.totalFormSubmissions}</div>
      <div class="stat-label">Formularios Enviados</div>
    </div>
  </div>
  
  <h2>📄 Páginas Más Visitadas</h2>
  <table>
    <thead>
      <tr>
        <th>Página</th>
        <th style="text-align: right;">Visitas</th>
      </tr>
    </thead>
    <tbody>
      ${stats.topPages.map(([page, count]) => `
        <tr>
          <td>${page === '/' ? 'Inicio' : page}</td>
          <td style="text-align: right;"><strong>${count}</strong></td>
        </tr>
      `).join('')}
    </tbody>
  </table>
  
  <h2>📝 Formularios por Tipo</h2>
  <table>
    <thead>
      <tr>
        <th>Formulario</th>
        <th style="text-align: right;">Envíos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Contacto</td>
        <td style="text-align: right;"><strong>${stats.formCounts.contact}</strong></td>
      </tr>
      <tr>
        <td>Cotización Web</td>
        <td style="text-align: right;"><strong>${stats.formCounts.cotizar}</strong></td>
      </tr>
      <tr>
        <td>Consultoría</td>
        <td style="text-align: right;"><strong>${stats.formCounts.consultoria}</strong></td>
      </tr>
    </tbody>
  </table>
  
  ${stats.uniqueReferrers.length > 0 ? `
    <h2>🌐 Fuentes de Tráfico Externo</h2>
    <ul>
      ${stats.uniqueReferrers.map(ref => `<li>${ref}</li>`).join('')}
    </ul>
  ` : ''}
  
  <div class="footer">
    <p>🤖 Este reporte se genera automáticamente cada lunes a las 9:00 AM.</p>
    <p>📊 Sistema de Analytics Custom - Code Dev</p>
    <p>🌐 <a href="https://www.pmdevcode.com.ar">www.pmdevcode.com.ar</a></p>
  </div>
</body>
</html>
    `;
    
    // Enviar email usando Web3Forms
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    const recipientEmail = process.env.RECIPIENT_EMAIL;
    
    if (!accessKey || !recipientEmail) {
      throw new Error('Missing email configuration');
    }
    
    const formData = {
      access_key: accessKey,
      subject: `📊 Reporte Semanal - Code Dev (${new Date().toLocaleDateString('es-AR')})`,
      from_name: 'Analytics - Code Dev',
      email: recipientEmail,
      message: emailHtml,
      replyto: recipientEmail,
      // Web3Forms acepta HTML en el campo message si se especifica
      content_type: 'html',
    };
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const result = await response.json();
    
    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Failed to send email');
    }
    
    return NextResponse.json({
      success: true,
      message: 'Weekly report sent successfully',
      stats: {
        totalPageViews: stats.totalPageViews,
        totalFormSubmissions: stats.totalFormSubmissions,
        topPages: stats.topPages.length,
      },
    });
    
  } catch (error) {
    console.error('Error sending weekly report:', error);
    return NextResponse.json(
      { error: 'Failed to send weekly report', details: String(error) },
      { status: 500 }
    );
  }
}
