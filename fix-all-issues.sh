#!/bin/bash

# 🚀 SCRIPT DE RESOLUCIÓN COMPLETA - pmdevcode VPS
# Ejecutar en el VPS como root: bash fix-all-issues.sh

echo "🚀 SOLUCIONANDO PROBLEMAS DE PMDEVCODE EN VPS"
echo "=============================================="

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

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    error "Ejecuta este script desde /var/www/pmdevcode"
    exit 1
fi

PROJECT_DIR="/var/www/pmdevcode"
DOMAIN="www.pmdevcode.com.ar"

log "🔧 PASO 1: Parar servicios y limpiar"
pm2 stop pmdevcode 2>/dev/null || true
pm2 delete pmdevcode 2>/dev/null || true
pkill -f "node.*pmdevcode" 2>/dev/null || true

log "🔧 PASO 2: Configurar variables de entorno"
cat > .env.local << 'EOF'
# Variables de entorno para producción
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=785b22ca-f549-4342-b273-3dface70aeed
NEXT_PUBLIC_APP_URL=https://www.pmdevcode.com.ar
NODE_ENV=production
PORT=3001
NEXT_PUBLIC_SITE_URL=https://www.pmdevcode.com.ar
EOF

chmod 600 .env.local
chown www-data:www-data .env.local 2>/dev/null || true
log "✅ Variables de entorno configuradas"

log "🔧 PASO 3: Verificar dependencias"
if [ ! -d "node_modules" ] || [ ! -f "package-lock.json" ]; then
    log "Instalando dependencias..."
    npm install
fi

log "🔧 PASO 4: Construir aplicación"
if [ ! -d ".next" ]; then
    log "Construyendo aplicación..."
    npm run build
else
    log "Build existente encontrado, reconstruyendo..."
    rm -rf .next
    npm run build
fi

log "🔧 PASO 5: Configurar PM2"
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

# Iniciar aplicación
log "Iniciando aplicación con PM2..."
pm2 start ecosystem.config.js
pm2 save

log "🔧 PASO 6: Configurar Nginx"

# Crear configuración de Nginx
cat > /etc/nginx/sites-available/$DOMAIN << 'EOF'
server {
    listen 80;
    server_name www.pmdevcode.com.ar pmdevcode.com.ar;
    
    # Root directory for static files
    root /var/www/pmdevcode/public;
    
    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # Static files from public directory
    location ~* \.(ico|css|js|gif|jpe?g|png|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        access_log off;
        add_header Cache-Control "public, immutable";
        try_files $uri @proxy;
    }
    
    # Next.js static files
    location /_next/static/ {
        alias /var/www/pmdevcode/.next/static/;
        expires 1y;
        access_log off;
        add_header Cache-Control "public, immutable";
    }
    
    # Main proxy to Next.js application
    location / {
        try_files $uri @proxy;
    }
    
    location @proxy {
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
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        # Buffer settings
        proxy_buffering on;
        proxy_buffer_size 128k;
        proxy_buffers 4 256k;
        proxy_busy_buffers_size 256k;
    }
    
    # Error pages
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
    
    # Security: Block access to sensitive files
    location ~ /\.(?!well-known) {
        deny all;
    }
    
    location ~ ^/(\.env|\.git|logs) {
        deny all;
    }
}
EOF

# Habilitar sitio
if [ ! -L "/etc/nginx/sites-enabled/$DOMAIN" ]; then
    ln -s /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
fi

# Deshabilitar sitio default si existe
if [ -L "/etc/nginx/sites-enabled/default" ]; then
    rm /etc/nginx/sites-enabled/default
fi

log "🔧 PASO 7: Verificar y reiniciar Nginx"
if nginx -t; then
    log "✅ Configuración de Nginx válida"
    systemctl reload nginx
    systemctl enable nginx
else
    error "❌ Error en configuración de Nginx"
    nginx -t
    exit 1
fi

log "🔧 PASO 8: Configurar firewall"
if command -v ufw &> /dev/null; then
    ufw allow 22/tcp   # SSH
    ufw allow 80/tcp   # HTTP
    ufw allow 443/tcp  # HTTPS
    ufw --force enable 2>/dev/null || true
fi

log "🔧 PASO 9: Verificar servicios"
sleep 3

echo ""
info "Estado de servicios:"
echo "==================="

# PM2
if pm2 status | grep -q "pmdevcode.*online"; then
    log "✅ PM2: pmdevcode está ejecutándose"
else
    error "❌ PM2: pmdevcode NO está ejecutándose"
    pm2 start ecosystem.config.js
fi

# Nginx
if systemctl is-active --quiet nginx; then
    log "✅ Nginx está activo y ejecutándose"
else
    error "❌ Nginx NO está activo"
    systemctl start nginx
fi

# Puerto 3001
if netstat -tulpn | grep -q ":3001"; then
    log "✅ Puerto 3001 está en uso (aplicación)"
else
    error "❌ Puerto 3001 NO está en uso"
fi

# Puerto 80
if netstat -tulpn | grep -q ":80"; then
    log "✅ Puerto 80 está en uso (Nginx)"
else
    error "❌ Puerto 80 NO está en uso"
fi

echo ""
info "Prueba de conectividad:"
echo "====================="

# Probar localhost
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3001 | grep -q "200\|301\|302"; then
    log "✅ Aplicación responde en localhost:3001"
else
    warning "❌ Aplicación NO responde en localhost:3001"
fi

if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "200\|301\|302"; then
    log "✅ Nginx responde en puerto 80"
else
    warning "❌ Nginx NO responde en puerto 80"
fi

echo ""
log "🎉 DEPLOYMENT COMPLETADO"
echo "======================="
echo ""
info "URLs para verificar:"
echo "  • http://$(curl -s ifconfig.me)/ (IP directa)"
echo "  • http://www.pmdevcode.com.ar/ (dominio)"
echo "  • http://localhost:3001/ (aplicación directa)"
echo ""
info "Comandos útiles:"
echo "  • pm2 status             - Ver estado de la aplicación"
echo "  • pm2 logs pmdevcode     - Ver logs en tiempo real"
echo "  • pm2 restart pmdevcode  - Reiniciar aplicación"
echo "  • sudo systemctl status nginx - Ver estado de Nginx"
echo "  • tail -f /var/log/nginx/error.log - Ver errores de Nginx"
echo ""
warning "SIGUIENTE PASO:"
echo "1. Verifica que el dominio www.pmdevcode.com.ar apunte a la IP de tu VPS"
echo "2. Para SSL, ejecuta: sudo certbot --nginx -d www.pmdevcode.com.ar -d pmdevcode.com.ar"
echo ""
