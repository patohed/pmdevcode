# 📊 Sistema de Analytics Custom - Documentación Completa

## ¿Qué hace este sistema?

Un sistema de analytics **privacy-first** que:
- ✅ **No usa cookies** (no necesita consentimiento GDPR)
- ✅ **No rastrea usuarios individuales** (solo métricas agregadas)
- ✅ **Envía reportes semanales por email** automáticamente
- ✅ **100% tuyo** (no dependes de Google, Plausible, etc)
- ✅ **Gratis** (corre en tu VPS)

---

## 📋 ¿Qué métricas recolecta?

### 1. **Vistas de Página**
- Ruta visitada (ejemplo: `/`, `/servicios`, `/contacto`)
- Timestamp (cuándo se visitó)
- Referer (de dónde vino el visitante)
- User Agent (navegador/dispositivo - sin identificar usuarios)

### 2. **Envíos de Formularios**
- Tipo de formulario (contact, cotizar, consultoria)
- Timestamp del envío

### 3. **Estadísticas Calculadas**
- Total de visitas por período
- Páginas más visitadas (top 10)
- Formularios enviados por tipo
- Fuentes de tráfico externo (referrers únicos)

---

## 🔧 Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────┐
│                    USUARIO VISITA                       │
│                   www.pmdevcode.com.ar                  │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  middleware.ts        │ ← Registra visita automáticamente
         │  (Privacy-First)      │   (sin cookies, sin tracking)
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  lib/analytics.ts     │ ← Guarda en archivo JSON
         │  (trackPageView)      │   /data/analytics.json
         └───────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              USUARIO ENVÍA FORMULARIO                   │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  Contact.tsx          │ ← Después del envío exitoso
         │  WebProjectForm.tsx   │   llama a /api/analytics/track-form
         │  ConsultoriaForm.tsx  │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  /api/analytics/      │ ← Registra tipo de formulario
         │  track-form/route.ts  │   (contact, cotizar, consultoria)
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  lib/analytics.ts     │ ← Guarda en archivo JSON
         │  (trackFormSubmission)│   /data/analytics.json
         └───────────────────────┘

┌─────────────────────────────────────────────────────────┐
│           CADA LUNES 9:00 AM (CRON JOB)                │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  cron job             │ ← Script bash en VPS
         │  weekly-report.sh     │   (configurado con crontab)
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  /api/analytics/      │ ← Lee últimos 7 días de datos
         │  send-report/route.ts │   Genera HTML bonito
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  Web3Forms API        │ ← Envía email con reporte
         │  (api.web3forms.com)  │   a millanpatricio@hotmail.com
         └───────────────────────┘
```

---

## 📁 Archivos del Sistema

### Nuevos Archivos Creados:

```
lib/
  analytics.ts                          ← Core: funciones de analytics

middleware.ts                           ← Trackea visitas automáticamente

app/api/analytics/
  track-form/route.ts                   ← API: registrar formularios
  stats/route.ts                        ← API: obtener estadísticas
  send-report/route.ts                  ← API: enviar reporte semanal

data/
  .gitignore                            ← Ignora analytics.json en Git
  .gitkeep                              ← Mantiene directorio en Git
  analytics.json                        ← Datos (se crea automáticamente)

scripts/
  weekly-report.sh                      ← Script bash para cron job
```

### Archivos Modificados:

```
components/Contact.tsx                  ← + tracking formulario
app/cotizar/WebProjectForm.tsx          ← + tracking formulario
components/ConsultoriaForm.tsx          ← + tracking formulario
.env.example                            ← + CRON_SECRET
.env.local                              ← + CRON_SECRET
```

---

## 🚀 Configuración en VPS (Paso a Paso)

### 1. Deployment Inicial

```bash
# SSH al VPS
ssh usuario@pmdevcode.com.ar

# Ir al proyecto
cd /var/www/pmdevcode

# Pull del código
git pull origin main

# Instalar dependencias
npm install

# Build
npm run build

# Reiniciar PM2
pm2 restart pmdevcode
```

### 2. Configurar .env.local en VPS

```bash
nano /var/www/pmdevcode/.env.local
```

Agregar esta línea (generar secret seguro):

```bash
# 📊 Analytics Configuration
CRON_SECRET=produccion-secret-super-seguro-12345
```

**Generar secret seguro (opcional pero recomendado):**
```bash
openssl rand -hex 32
# Copiar el resultado y pegarlo como CRON_SECRET
```

### 3. Crear directorio de datos

```bash
# Crear directorio si no existe
mkdir -p /var/www/pmdevcode/data

# Dar permisos de escritura
chmod 755 /var/www/pmdevcode/data
```

### 4. Configurar Cron Job (Reportes Semanales)

```bash
# Dar permisos al script
chmod +x /var/www/pmdevcode/scripts/weekly-report.sh

# Editar crontab
crontab -e

# Agregar esta línea al final (ejecuta cada lunes a las 9:00 AM)
0 9 * * 1 /var/www/pmdevcode/scripts/weekly-report.sh >> /var/log/analytics-cron.log 2>&1
```

**Explicación del cron:**
- `0 9 * * 1` = Cada lunes (`1`) a las 9:00 AM (`9`) hora 0 minutos (`0`)
- `>>` = Guarda logs en `/var/log/analytics-cron.log`
- `2>&1` = Redirige errores también al log

### 5. Verificar que funciona

```bash
# Probar manualmente el reporte (sin esperar al lunes)
/var/www/pmdevcode/scripts/weekly-report.sh

# Ver logs
tail -f /var/log/analytics-cron.log

# Verificar que llegó el email a millanpatricio@hotmail.com
```

---

## 📧 Formato del Email Semanal

Cada lunes recibirás un email como este:

```
┌────────────────────────────────────────────┐
│ 📊 Reporte Semanal - Code Dev             │
├────────────────────────────────────────────┤
│ Período: 14/10/2025 - 21/10/2025         │
│                                            │
│ ┌─────────────┐  ┌─────────────┐         │
│ │    247      │  │      5      │         │
│ │ Visitas     │  │ Formularios │         │
│ └─────────────┘  └─────────────┘         │
│                                            │
│ 📄 Páginas Más Visitadas                  │
│ ┌────────────────────┬───────┐           │
│ │ Inicio             │  98   │           │
│ │ /servicios         │  52   │           │
│ │ /contacto          │  31   │           │
│ │ /cotizar           │  24   │           │
│ │ /portfolio         │  18   │           │
│ └────────────────────┴───────┘           │
│                                            │
│ 📝 Formularios por Tipo                   │
│ ┌────────────────────┬───────┐           │
│ │ Contacto           │   3   │           │
│ │ Cotización Web     │   1   │           │
│ │ Consultoría        │   1   │           │
│ └────────────────────┴───────┘           │
│                                            │
│ 🌐 Fuentes de Tráfico Externo            │
│ • google.com                              │
│ • linkedin.com                            │
│                                            │
│ 🤖 Reporte automático - Cada lunes 9 AM  │
└────────────────────────────────────────────┘
```

---

## 🧪 Testing Local (Antes de Deploy)

### 1. Probar tracking de visitas

```bash
# Iniciar servidor dev
npm run dev

# Abrir en navegador:
# http://localhost:3001
# http://localhost:3001/servicios
# http://localhost:3001/contacto

# Verificar que se crea el archivo:
cat data/analytics.json
```

### 2. Probar tracking de formularios

```bash
# Llenar y enviar formulario en /contacto
# Verificar que se registre en analytics:
cat data/analytics.json | grep "formSubmissions"
```

### 3. Probar API de estadísticas

```bash
# Obtener stats de últimos 7 días
curl http://localhost:3001/api/analytics/stats?days=7

# Obtener stats de últimos 30 días
curl http://localhost:3001/api/analytics/stats?days=30
```

### 4. Probar envío de reporte (simulación)

```bash
# Reemplazar YOUR_SECRET con tu CRON_SECRET de .env.local
curl -X POST http://localhost:3001/api/analytics/send-report \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_SECRET"

# Verificar que llegue email a millanpatricio@hotmail.com
```

---

## 🔍 Monitoreo y Mantenimiento

### Ver estadísticas en cualquier momento

```bash
# Crear script simple para ver stats
cat > /var/www/pmdevcode/scripts/view-stats.sh << 'EOF'
#!/bin/bash
CRON_SECRET=$(grep CRON_SECRET /var/www/pmdevcode/.env.local | cut -d '=' -f2)
curl -s https://www.pmdevcode.com.ar/api/analytics/stats?days=7 | jq
EOF

chmod +x /var/www/pmdevcode/scripts/view-stats.sh

# Ejecutar cuando quieras
/var/www/pmdevcode/scripts/view-stats.sh
```

### Ver logs del cron job

```bash
# Últimas 50 líneas
tail -50 /var/log/analytics-cron.log

# En tiempo real
tail -f /var/log/analytics-cron.log
```

### Limpieza de datos antiguos

El sistema guarda **90 días** de datos automáticamente. Para limpiar manualmente:

```bash
# SSH al VPS
ssh usuario@pmdevcode.com.ar

# Node.js REPL
cd /var/www/pmdevcode
node

# En el REPL:
const { cleanOldData } = require('./lib/analytics.js');
await cleanOldData();
console.log('✅ Datos antiguos eliminados');
process.exit();
```

---

## 🔒 Seguridad

### ¿Qué datos NO se guardan?
- ❌ IPs de usuarios
- ❌ Cookies
- ❌ Identificadores únicos de usuarios
- ❌ Información personal (nombres, emails de visitantes)
- ❌ Contenido de formularios (solo conteo)

### ¿Qué datos SÍ se guardan?
- ✅ Rutas visitadas (`/`, `/servicios`, etc)
- ✅ Timestamps (cuándo)
- ✅ Referers (de dónde vinieron)
- ✅ User Agent (navegador/SO - para estadísticas agregadas)
- ✅ Conteo de formularios por tipo

### Protección del endpoint send-report

Solo se puede llamar con el `CRON_SECRET` correcto:

```bash
# ✅ Autorizado (con secret correcto)
curl -H "Authorization: Bearer mi-secret" /api/analytics/send-report

# ❌ Rechazado (sin secret o incorrecto)
curl /api/analytics/send-report
# Response: 401 Unauthorized
```

---

## 🎯 Próximos Pasos Opcionales

### 1. Dashboard Web Interno
Crear página protegida con gráficos:
```bash
/admin/analytics → Muestra gráficos con Chart.js
```

### 2. Alertas Automáticas
Email si no hay visitas en 24 horas:
```bash
# Agregar otro cron daily
0 0 * * * /scripts/check-traffic.sh
```

### 3. Integración con Slack/Discord
Enviar resumen a canal de equipo

### 4. Exportar a CSV
```bash
curl /api/analytics/export?format=csv > analytics.csv
```

---

## 🆘 Troubleshooting

### El email no llega

**Verificar:**
```bash
# 1. Verificar que Web3Forms funciona
tail -f /var/log/analytics-cron.log

# 2. Verificar variables de entorno
grep WEB3FORMS /var/www/pmdevcode/.env.local
grep RECIPIENT_EMAIL /var/www/pmdevcode/.env.local

# 3. Probar envío manual
/var/www/pmdevcode/scripts/weekly-report.sh
```

### El archivo analytics.json no se crea

**Verificar:**
```bash
# 1. Permisos del directorio
ls -la /var/www/pmdevcode/data

# 2. Dar permisos si es necesario
chmod 755 /var/www/pmdevcode/data

# 3. Verificar logs de PM2
pm2 logs pmdevcode --lines 100 | grep analytics
```

### El cron job no se ejecuta

**Verificar:**
```bash
# 1. Ver crontab actual
crontab -l

# 2. Verificar logs del sistema
tail -f /var/log/syslog | grep CRON

# 3. Probar ejecución manual
/var/www/pmdevcode/scripts/weekly-report.sh
```

---

## 📊 Métricas de Ejemplo (Primera Semana)

Después de una semana verás algo como:

```json
{
  "totalPageViews": 247,
  "totalFormSubmissions": 5,
  "topPages": [
    ["/", 98],
    ["/servicios", 52],
    ["/contacto", 31],
    ["/cotizar", 24],
    ["/portfolio", 18]
  ],
  "formCounts": {
    "contact": 3,
    "cotizar": 1,
    "consultoria": 1
  },
  "uniqueReferrers": [
    "google.com",
    "linkedin.com"
  ]
}
```

---

## ✅ Checklist de Deployment

- [ ] Código pusheado a GitHub
- [ ] Pull en VPS (`git pull origin main`)
- [ ] Instalado dependencias (`npm install`)
- [ ] Build exitoso (`npm run build`)
- [ ] PM2 reiniciado (`pm2 restart pmdevcode`)
- [ ] `.env.local` actualizado con `CRON_SECRET`
- [ ] Directorio `/data` creado con permisos 755
- [ ] Script `weekly-report.sh` tiene permisos de ejecución
- [ ] Cron job agregado a crontab (cada lunes 9 AM)
- [ ] Prueba manual del reporte exitosa
- [ ] Email de prueba recibido en millanpatricio@hotmail.com
- [ ] Logs del cron funcionando (`/var/log/analytics-cron.log`)

---

**¡Sistema de Analytics listo!** 🎉

Ahora tendrás reportes semanales automáticos sin depender de terceros.
