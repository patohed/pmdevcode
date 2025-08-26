#!/bin/bash

# Script de deployment para pmdevcode en VPS Banahosting
# Uso: bash deploy.sh

echo "🚀 Iniciando deployment de pmdevcode..."

# Variables
PROJECT_DIR="/var/www/pmdevcode"
DOMAIN="www.pmdevcode.com.ar"
PM2_APP_NAME="pmdevcode"

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para logs
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Verificar si estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    error "No se encontró package.json. Ejecuta este script desde el directorio del proyecto."
    exit 1
fi

# Instalar PM2 globalmente si no existe
if ! command -v pm2 &> /dev/null; then
    log "Instalando PM2 globalmente..."
    npm install -g pm2
fi

# Crear directorio de logs si no existe
mkdir -p logs

# Instalar dependencias
log "Instalando dependencias de producción..."
npm ci --production

# Construir el proyecto
log "Construyendo el proyecto para producción..."
npm run build

if [ $? -ne 0 ]; then
    error "Error al construir el proyecto"
    exit 1
fi

# Detener la aplicación existente si está corriendo
log "Deteniendo aplicación existente..."
pm2 stop $PM2_APP_NAME 2>/dev/null || true
pm2 delete $PM2_APP_NAME 2>/dev/null || true

# Iniciar la aplicación con PM2
log "Iniciando aplicación con PM2..."
pm2 start ecosystem.config.js

# Guardar configuración de PM2
pm2 save
pm2 startup

# Configurar Nginx
log "Configurando Nginx para $DOMAIN..."
cat > /etc/nginx/sites-available/$DOMAIN << EOF
server {
    listen 80;
    server_name $DOMAIN pmdevcode.com.ar;
    
    # Redirect HTTP to HTTPS
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    server_name $DOMAIN pmdevcode.com.ar;
    
    # SSL configuration (you'll need to add your SSL certificates)
    # ssl_certificate /path/to/your/certificate.pem;
    # ssl_certificate_key /path/to/your/private.key;
    
    # SSL settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/javascript application/xml+rss application/json;
    
    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|pdf|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Next.js static files
    location /_next/static/ {
        alias $PROJECT_DIR/.next/static/;
        expires 1y;
        access_log off;
    }
    
    # Main proxy configuration
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_redirect off;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Error pages
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
EOF

# Crear enlace simbólico si no existe
if [ ! -L "/etc/nginx/sites-enabled/$DOMAIN" ]; then
    ln -s /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
fi

# Verificar configuración de Nginx
log "Verificando configuración de Nginx..."
nginx -t

if [ $? -eq 0 ]; then
    log "Recargando Nginx..."
    systemctl reload nginx
else
    error "Error en la configuración de Nginx"
    exit 1
fi

# Configurar firewall si está activo
if command -v ufw &> /dev/null; then
    log "Configurando firewall..."
    ufw allow 80/tcp
    ufw allow 443/tcp
fi

# Mostrar estado final
log "Deployment completado exitosamente!"
log "Estado de la aplicación:"
pm2 status

log "Logs de la aplicación:"
echo "  - pm2 logs $PM2_APP_NAME"
echo "  - pm2 monit"

log "Configuración completada para:"
echo "  - Dominio: $DOMAIN"
echo "  - Puerto: 3000 (interno)"
echo "  - SSL: Pendiente configurar certificados"

warning "IMPORTANTE:"
echo "1. Configura tus certificados SSL en /etc/nginx/sites-available/$DOMAIN"
echo "2. Actualiza los DNS del dominio para apuntar a esta IP"
echo "3. Verifica que el dominio esté funcionando: https://$DOMAIN"

log "¡Deployment completado!"
