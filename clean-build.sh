#!/bin/bash

# Script de limpieza y recovery para problemas de build
# Uso: bash clean-build.sh

echo "🧹 Limpiando cache y archivos temporales..."

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

# Detener PM2 si está corriendo
log "Deteniendo aplicación PM2..."
pm2 stop pmdevcode 2>/dev/null || true
pm2 delete pmdevcode 2>/dev/null || true

# Matar procesos de Node.js
log "Terminando procesos de Node.js..."
pkill -f node 2>/dev/null || true
pkill -f next 2>/dev/null || true

# Limpiar archivos de cache y build
log "Limpiando archivos de cache..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .turbo
rm -rf dist
rm -rf build

# Limpiar logs temporales de Next.js
rm -rf /tmp/next-* 2>/dev/null || true

# Limpiar node_modules y reinstalar
log "Limpiando node_modules..."
rm -rf node_modules
rm -f package-lock.json

log "Instalando dependencias frescas..."
npm install

# Build sin Turbopack
log "Construyendo sin Turbopack..."
npm run build

if [ $? -eq 0 ]; then
    log "✅ Build exitoso! Reiniciando aplicación..."
    pm2 start ecosystem.config.js
    pm2 save
    log "✅ Aplicación reiniciada correctamente"
    
    # Mostrar estado
    pm2 status
else
    error "❌ Error en el build. Revisa los logs arriba."
    
    # Información de debug
    log "Información de debug:"
    echo "Node version: $(node --version)"
    echo "NPM version: $(npm --version)"
    echo "Next.js version: $(npm list next --depth=0 2>/dev/null | grep next || echo 'No encontrado')"
    
    # Verificar espacio en disco
    df -h
    
    exit 1
fi

log "🎉 Limpieza y rebuild completados exitosamente!"
