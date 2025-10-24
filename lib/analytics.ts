/**
 * 📊 Sistema de Analytics Custom - Privacy-First
 * 
 * Características:
 * - No usa cookies
 * - No rastrea usuarios individuales
 * - Solo métricas agregadas
 * - Reportes semanales por email
 */

import { promises as fs } from 'fs';
import path from 'path';

export interface PageView {
  path: string;
  timestamp: number;
  referer?: string;
  userAgent?: string;
}

export interface FormSubmission {
  formType: 'contact' | 'cotizar' | 'consultoria';
  timestamp: number;
}

export interface AnalyticsData {
  pageViews: PageView[];
  formSubmissions: FormSubmission[];
  lastUpdated: number;
}

const ANALYTICS_FILE = path.join(process.cwd(), 'data', 'analytics.json');

/**
 * Asegura que el directorio de datos existe
 */
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

/**
 * Lee los datos de analytics del archivo
 */
export async function readAnalytics(): Promise<AnalyticsData> {
  await ensureDataDir();
  
  try {
    const data = await fs.readFile(ANALYTICS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    // Si no existe, crear archivo vacío
    const emptyData: AnalyticsData = {
      pageViews: [],
      formSubmissions: [],
      lastUpdated: Date.now(),
    };
    await writeAnalytics(emptyData);
    return emptyData;
  }
}

/**
 * Escribe los datos de analytics al archivo
 */
export async function writeAnalytics(data: AnalyticsData): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(ANALYTICS_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

/**
 * Registra una vista de página
 */
export async function trackPageView(
  path: string,
  referer?: string,
  userAgent?: string
): Promise<void> {
  const data = await readAnalytics();
  
  data.pageViews.push({
    path,
    timestamp: Date.now(),
    referer,
    userAgent,
  });
  
  data.lastUpdated = Date.now();
  await writeAnalytics(data);
}

/**
 * Registra un envío de formulario
 */
export async function trackFormSubmission(
  formType: 'contact' | 'cotizar' | 'consultoria'
): Promise<void> {
  const data = await readAnalytics();
  
  data.formSubmissions.push({
    formType,
    timestamp: Date.now(),
  });
  
  data.lastUpdated = Date.now();
  await writeAnalytics(data);
}

/**
 * Obtiene estadísticas para un rango de fechas
 */
export async function getStats(daysAgo: number = 7) {
  const data = await readAnalytics();
  const cutoffTime = Date.now() - (daysAgo * 24 * 60 * 60 * 1000);
  
  // Filtrar por rango de fechas
  const recentPageViews = data.pageViews.filter(pv => pv.timestamp >= cutoffTime);
  const recentFormSubmissions = data.formSubmissions.filter(fs => fs.timestamp >= cutoffTime);
  
  // Contar vistas por página
  const pageViewCounts: Record<string, number> = {};
  recentPageViews.forEach(pv => {
    pageViewCounts[pv.path] = (pageViewCounts[pv.path] || 0) + 1;
  });
  
  // Ordenar páginas por popularidad
  const topPages = Object.entries(pageViewCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);
  
  // Contar formularios por tipo
  const formCounts: Record<string, number> = {
    contact: 0,
    cotizar: 0,
    consultoria: 0,
  };
  recentFormSubmissions.forEach(fs => {
    formCounts[fs.formType]++;
  });
  
  // Contar referrers únicos
  const referrers = new Set(
    recentPageViews
      .filter(pv => pv.referer && !pv.referer.includes('pmdevcode.com.ar'))
      .map(pv => {
        try {
          return new URL(pv.referer!).hostname;
        } catch {
          return pv.referer;
        }
      })
  );
  
  return {
    totalPageViews: recentPageViews.length,
    totalFormSubmissions: recentFormSubmissions.length,
    topPages,
    formCounts,
    uniqueReferrers: Array.from(referrers),
    period: {
      days: daysAgo,
      from: new Date(cutoffTime).toISOString(),
      to: new Date().toISOString(),
    },
  };
}

/**
 * Limpia datos antiguos (más de 90 días)
 */
export async function cleanOldData(): Promise<void> {
  const data = await readAnalytics();
  const cutoffTime = Date.now() - (90 * 24 * 60 * 60 * 1000);
  
  data.pageViews = data.pageViews.filter(pv => pv.timestamp >= cutoffTime);
  data.formSubmissions = data.formSubmissions.filter(fs => fs.timestamp >= cutoffTime);
  
  data.lastUpdated = Date.now();
  await writeAnalytics(data);
}
