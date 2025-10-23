#!/bin/bash

# Script de diagnóstico completo para VPS
echo "🔍 DIAGNÓSTICO COMPLETO DEL VPS - pmdevcode"
echo "============================================"

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() { echo -e "${GREEN}[✓]${NC} $1"; }
error() { echo -e "${RED}[✗]${NC} $1"; }
warning() { echo -e "${YELLOW}[!]${NC} $1"; }
info() { echo -e "${BLUE}[i]${NC} $1"; }

echo ""
info "1. VERIFICANDO ESTRUCTURA DE ARCHIVOS"
if [ -f "package.json" ]; then
    log "package.json encontrado"
else
    error "package.json NO encontrado - ¿Estás en /var/www/pmdevcode?"
fi

if [ -f ".env.local" ]; then
    log ".env.local encontrado"
    echo "Contenido:"
    cat .env.local | grep -v "^#" | grep -v "^$"
else
    error ".env.local NO encontrado - La aplicación no tendrá variables de entorno"
fi

if [ -d ".next" ]; then
    log "Build (.next) encontrado"
else
    error "Build (.next) NO encontrado - Necesitas ejecutar npm run build"
fi

echo ""
info "2. VERIFICANDO SERVICIOS"

# PM2
if command -v pm2 &> /dev/null; then
    log "PM2 instalado"
    echo "Estado de PM2:"
    pm2 status 2>/dev/null || warning "PM2 no tiene procesos activos"
else
    error "PM2 no instalado"
fi

# Nginx
if command -v nginx &> /dev/null; then
    log "Nginx instalado"
    if systemctl is-active --quiet nginx; then
        log "Nginx está activo"
    else
        error "Nginx NO está activo"
        echo "Para activar: sudo systemctl start nginx"
    fi
else
    error "Nginx no instalado"
fi

echo ""
info "3. VERIFICANDO PUERTOS"

# Puerto 3001 (aplicación)
if netstat -tulpn 2>/dev/null | grep -q ":3001"; then
    log "Puerto 3001 está en uso (aplicación Node.js)"
    netstat -tulpn | grep ":3001"
else
    error "Puerto 3001 NO está en uso - La aplicación no está corriendo"
fi

# Puerto 80 (HTTP)
if netstat -tulpn 2>/dev/null | grep -q ":80"; then
    log "Puerto 80 está en uso (HTTP)"
    netstat -tulpn | grep ":80"
else
    error "Puerto 80 NO está en uso - Nginx no está escuchando HTTP"
fi

# Puerto 443 (HTTPS)
if netstat -tulpn 2>/dev/null | grep -q ":443"; then
    log "Puerto 443 está en uso (HTTPS)"
    netstat -tulpn | grep ":443"
else
    warning "Puerto 443 NO está en uso - SSL no configurado"
fi

echo ""
info "4. VERIFICANDO CONFIGURACIÓN DE NGINX"

if [ -f "/etc/nginx/sites-available/www.pmdevcode.com.ar" ]; then
    log "Configuración de Nginx encontrada"
    if [ -L "/etc/nginx/sites-enabled/www.pmdevcode.com.ar" ]; then
        log "Sitio habilitado en Nginx"
    else
        error "Sitio NO habilitado - Falta enlace simbólico"
        echo "Ejecutar: sudo ln -s /etc/nginx/sites-available/www.pmdevcode.com.ar /etc/nginx/sites-enabled/"
    fi
else
    error "Configuración de Nginx NO encontrada"
fi

# Verificar sintaxis de Nginx
if command -v nginx &> /dev/null; then
    echo ""
    info "Verificando sintaxis de Nginx:"
    if nginx -t 2>/dev/null; then
        log "Sintaxis de Nginx correcta"
    else
        error "Error en sintaxis de Nginx"
        nginx -t
    fi
fi

echo ""
info "5. VERIFICANDO DNS"
echo "Verificando resolución de DNS para www.pmdevcode.com.ar:"
nslookup www.pmdevcode.com.ar 2>/dev/null || dig www.pmdevcode.com.ar 2>/dev/null || warning "No se pudo verificar DNS"

echo ""
info "6. VERIFICANDO LOGS"
if [ -d "logs" ]; then
    log "Directorio de logs encontrado"
    if [ -f "logs/combined.log" ]; then
        echo "Últimas líneas del log:"
        tail -n 5 logs/combined.log 2>/dev/null || warning "Log vacío o no accesible"
    fi
else
    warning "Directorio de logs no encontrado"
fi

# Logs de Nginx
if [ -f "/var/log/nginx/error.log" ]; then
    echo ""
    info "Últimos errores de Nginx:"
    tail -n 5 /var/log/nginx/error.log 2>/dev/null || warning "Log de Nginx no accesible"
fi

echo ""
info "7. PRUEBA DE CONECTIVIDAD"
echo "Probando conectividad local al puerto 3001:"
if command -v curl &> /dev/null; then
    if curl -s -o /dev/null -w "%{http_code}" http://localhost:3001 2>/dev/null | grep -q "200\|301\|302"; then
        log "Aplicación responde en localhost:3001"
    else
        error "Aplicación NO responde en localhost:3001"
    fi
else
    warning "curl no instalado - no se puede probar conectividad"
fi

echo ""
echo "=========================================="
echo "🎯 RESUMEN DE PROBLEMAS ENCONTRADOS:"
echo "=========================================="
echo ""

# Script de solución rápida
cat > fix-quick.sh << 'EOFFIX'
#!/bin/bash
echo "🚀 SOLUCIÓN RÁPIDA - pmdevcode"
echo "=============================="

# Crear .env.local si no existe
if [ ! -f ".env.local" ]; then
    echo "📝 Creando .env.local..."
    cat > .env.local << 'EOF'
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=785b22ca-f549-4342-b273-3dface70aeed
NEXT_PUBLIC_APP_URL=https://www.pmdevcode.com.ar
NODE_ENV=production
PORT=3001
NEXT_PUBLIC_SITE_URL=https://www.pmdevcode.com.ar
EOF
fi

# Build si no existe
if [ ! -d ".next" ]; then
    echo "🔨 Construyendo aplicación..."
    npm install
    npm run build
fi

# Iniciar con PM2
echo "🚀 Iniciando aplicación..."
pm2 stop pmdevcode 2>/dev/null || true
pm2 delete pmdevcode 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save

# Verificar Nginx
echo "🌐 Verificando Nginx..."
sudo systemctl start nginx 2>/dev/null || true
sudo systemctl reload nginx 2>/dev/null || true

echo "✅ Solución rápida completada"
echo "🔗 Verifica: http://$(curl -s ifconfig.me):80"
EOFFIX

chmod +x fix-quick.sh
echo "💡 Script de solución rápida creado: ./fix-quick.sh"
echo "   Ejecutar con: bash fix-quick.sh"
echo ""
