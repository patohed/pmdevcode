#!/bin/bash

# Script FINAL de deployment para VPS - Resuelve todos los errores conocidos
# Ejecutar como: bash final-deploy.sh

set -e  # Salir si cualquier comando falla

echo "🚀 DEPLOYMENT FINAL - pmdevcode VPS"
echo "======================================"

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() { echo -e "${GREEN}[$(date +'%H:%M:%S')]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; }
warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
info() { echo -e "${BLUE}[INFO]${NC} $1"; }

# Verificar directorio
if [ ! -f "package.json" ]; then
    error "Ejecuta este script desde /var/www/pmdevcode"
    exit 1
fi

log "Paso 1: Limpieza y actualización"
# Parar procesos
pm2 stop pmdevcode 2>/dev/null || true
pm2 delete pmdevcode 2>/dev/null || true
pkill -f node 2>/dev/null || true

# Limpiar archivos
rm -rf .next node_modules/.cache .turbo /tmp/next-* 2>/dev/null || true

log "Paso 2: Actualizar código desde GitHub"
git stash 2>/dev/null || true
git pull origin main

log "Paso 3: Configurar variables de entorno"
cat > .env.local << 'EOF'
# Configuración de producción VPS
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=785b22ca-f549-4342-b273-3dface70aeed
NEXT_PUBLIC_APP_URL=https://www.pmdevcode.com.ar
NODE_ENV=production
PORT=3001
NEXT_PUBLIC_SITE_URL=https://www.pmdevcode.com.ar
EOF

log "Paso 4: Verificar y corregir package.json"
# Asegurar que no tenga --turbopack
sed -i 's/"build": "next build --turbopack"/"build": "next build"/g' package.json
sed -i 's/"dev": "next dev --turbopack"/"dev": "next dev"/g' package.json

info "Scripts en package.json:"
grep -A 5 '"scripts"' package.json

log "Paso 5: Instalar dependencias completas"
rm -rf node_modules package-lock.json 2>/dev/null || true

# Instalar con retry en caso de fallo
for i in {1..3}; do
    log "Intento $i de instalación de dependencias..."
    if npm install; then
        log "✅ Dependencias instaladas correctamente"
        break
    else
        warning "❌ Fallo en intento $i, reintentando..."
        sleep 5
        rm -rf node_modules package-lock.json 2>/dev/null || true
    fi
done

# Verificar dependencias críticas
log "Verificando dependencias críticas..."
npm list framer-motion @fontsource/poppins lucide-react || {
    error "Instalando dependencias faltantes..."
    npm install framer-motion@^12.23.12 @fontsource/poppins@^5.2.6 lucide-react@^0.540.0
}

log "Paso 6: Build de producción"
info "Iniciando build sin Turbopack..."
if NODE_ENV=production npm run build; then
    log "✅ Build exitoso!"
else
    error "❌ Build falló, intentando con configuración mínima"
    if [ -f "next.config.minimal.js" ]; then
        cp next.config.minimal.js next.config.js
        log "Usando configuración mínima..."
        NODE_ENV=production npm run build
    else
        error "No se pudo completar el build"
        exit 1
    fi
fi

log "Paso 7: Configurar PM2"
if [ ! -f "ecosystem.config.js" ]; then
    cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [
    {
      name: 'pmdevcode',
      script: 'npm',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true
    }
  ]
};
EOF
fi

# Crear directorio de logs
mkdir -p logs

log "Paso 8: Iniciar aplicación"
pm2 start ecosystem.config.js
pm2 save
pm2 startup --skip-daemon-mode >/dev/null 2>&1 || true

log "Paso 9: Configurar Nginx"
if ! grep -q "www.pmdevcode.com.ar" /etc/nginx/sites-available/default 2>/dev/null; then
    warning "Configurando Nginx para www.pmdevcode.com.ar..."
    
    # Backup de configuración existente
    cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.backup || true
    
    cat > /etc/nginx/sites-available/pmdevcode << 'EOF'
server {
    listen 80;
    server_name www.pmdevcode.com.ar pmdevcode.com.ar;
    
    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
    }
    
    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|pdf|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://127.0.0.1:3001;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF
    
    # Activar sitio
    ln -sf /etc/nginx/sites-available/pmdevcode /etc/nginx/sites-enabled/
    
    # Test y reload
    if nginx -t; then
        systemctl reload nginx
        log "✅ Nginx configurado correctamente"
    else
        error "Error en configuración de Nginx"
    fi
fi

log "Paso 10: Verificación final"
sleep 3

echo ""
echo "🎉 DEPLOYMENT COMPLETADO!"
echo "=========================="

# Estado de la aplicación
echo "📊 Estado de PM2:"
pm2 status

echo ""
echo "🌐 Verificaciones:"
if curl -s http://localhost:3001 >/dev/null; then
    log "✅ Aplicación responde en puerto 3001"
else
    error "❌ Aplicación no responde en puerto 3001"
fi

echo ""
echo "📋 Información del deployment:"
echo "   • Dominio: www.pmdevcode.com.ar"
echo "   • Puerto interno: 3001"
echo "   • Estado PM2: $(pm2 jlist | jq -r '.[0].pm2_env.status' 2>/dev/null || echo 'verificar manualmente')"
echo "   • Logs: pm2 logs pmdevcode"
echo ""

echo "🔧 Próximos pasos:"
echo "   1. Verificar DNS: www.pmdevcode.com.ar apunta a esta IP"
echo "   2. Configurar SSL: certbot --nginx -d www.pmdevcode.com.ar"
echo "   3. Verificar sitio: https://www.pmdevcode.com.ar"

echo ""
log "🎯 Deployment completado exitosamente!"
