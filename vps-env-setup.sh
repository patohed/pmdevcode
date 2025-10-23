#!/bin/bash

# Script para configurar variables de entorno en VPS
# Ejecutar en: /var/www/pmdevcode

echo "🔧 Configurando variables de entorno para VPS..."

cat > .env.local << 'EOF'
# Configuración de producción VPS
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=785b22ca-f549-4342-b273-3dface70aeed
NEXT_PUBLIC_APP_URL=https://www.pmdevcode.com.ar
NODE_ENV=production
PORT=3001
NEXT_PUBLIC_SITE_URL=https://www.pmdevcode.com.ar
EOF

echo "✅ Archivo .env.local creado correctamente"
echo "📁 Ubicación: $(pwd)/.env.local"

# Verificar permisos
chmod 600 .env.local
chown www-data:www-data .env.local 2>/dev/null || true

echo "🔐 Permisos configurados"
echo ""
echo "Contenido del archivo:"
cat .env.local
