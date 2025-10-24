#!/bin/bash

###############################################################################
# 📊 Cron Job: Weekly Analytics Report
###############################################################################
# Este script envía un reporte semanal de analytics por email
# 
# CONFIGURACIÓN EN VPS:
# 1. Dar permisos de ejecución: chmod +x /var/www/pmdevcode/scripts/weekly-report.sh
# 2. Editar crontab: crontab -e
# 3. Agregar línea (ejecuta cada lunes a las 9:00 AM):
#    0 9 * * 1 /var/www/pmdevcode/scripts/weekly-report.sh >> /var/log/analytics-cron.log 2>&1
#
# VERIFICAR:
# - Revisar logs: tail -f /var/log/analytics-cron.log
# - Verificar que el email llegue a millanpatricio@hotmail.com
###############################################################################

# Variables
PROJECT_DIR="/var/www/pmdevcode"
LOG_FILE="/var/log/analytics-cron.log"
CRON_SECRET=$(grep CRON_SECRET "$PROJECT_DIR/.env.local" | cut -d '=' -f2)

# Timestamp
echo "========================================" >> "$LOG_FILE"
echo "📊 Weekly Analytics Report - $(date)" >> "$LOG_FILE"
echo "========================================" >> "$LOG_FILE"

# Verificar que el proyecto existe
if [ ! -d "$PROJECT_DIR" ]; then
  echo "❌ ERROR: Project directory not found: $PROJECT_DIR" >> "$LOG_FILE"
  exit 1
fi

# Verificar que CRON_SECRET existe
if [ -z "$CRON_SECRET" ]; then
  echo "❌ ERROR: CRON_SECRET not found in .env.local" >> "$LOG_FILE"
  exit 1
fi

# Llamar a la API para enviar el reporte
HTTP_STATUS=$(curl -s -o /tmp/analytics-response.json -w "%{http_code}" \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $CRON_SECRET" \
  https://www.pmdevcode.com.ar/api/analytics/send-report)

# Verificar respuesta
if [ "$HTTP_STATUS" -eq 200 ]; then
  echo "✅ Weekly report sent successfully" >> "$LOG_FILE"
  cat /tmp/analytics-response.json >> "$LOG_FILE"
  echo "" >> "$LOG_FILE"
else
  echo "❌ ERROR: Failed to send report (HTTP $HTTP_STATUS)" >> "$LOG_FILE"
  cat /tmp/analytics-response.json >> "$LOG_FILE"
  echo "" >> "$LOG_FILE"
fi

# Limpiar archivo temporal
rm -f /tmp/analytics-response.json

echo "Finished at: $(date)" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"
