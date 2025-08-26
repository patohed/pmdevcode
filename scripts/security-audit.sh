#!/bin/bash

# 🔍 SECURITY AUDIT SCRIPT PARA PMDEVCODE
# Ejecutar antes de cada commit para detectar vulnerabilidades

echo "🔐 INICIANDO AUDIT DE SEGURIDAD..."
echo "=================================="

# 1. BUSCAR SECRETOS HARDCODEADOS
echo "🚨 Buscando secretos hardcodeados..."
SECRET_PATTERNS=(
    "api[_-]?key.*[=:]\s*['\"][^'\"]*['\"]"
    "secret.*[=:]\s*['\"][^'\"]*['\"]"  
    "password.*[=:]\s*['\"][^'\"]*['\"]"
    "token.*[=:]\s*['\"][^'\"]*['\"]"
    "access[_-]?key.*[=:]\s*['\"][^'\"]*['\"]"
    "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
    "sk_[a-zA-Z0-9]{24,}"
    "pk_[a-zA-Z0-9]{24,}"
)

FOUND_SECRETS=false
for pattern in "${SECRET_PATTERNS[@]}"; do
    if grep -r -i -E "$pattern" --include="*.{js,jsx,ts,tsx,json}" .; then
        echo "❌ SECRETO DETECTADO: $pattern"
        FOUND_SECRETS=true
    fi
done

# 2. BUSCAR ARCHIVOS TEMPORALES PELIGROSOS
echo ""
echo "🗑️ Buscando archivos temporales..."
TEMP_FILES=(
    "*_temp.*"
    "*_localhost.*" 
    "*_secure.*"
    "*_backup.*"
    "*.tmp"
    "*.backup"
)

for pattern in "${TEMP_FILES[@]}"; do
    if find . -name "$pattern" -not -path "./node_modules/*" -not -path "./.next/*"; then
        echo "❌ ARCHIVO TEMPORAL ENCONTRADO: $pattern"
        FOUND_SECRETS=true
    fi
done

# 3. VERIFICAR .ENV FILES
echo ""
echo "📝 Verificando archivos .env..."
if find . -name ".env*" -not -name ".env.example" -not -name ".env.template"; then
    echo "⚠️  ARCHIVOS .ENV ENCONTRADOS - Verificar que estén en .gitignore"
fi

# 4. BUSCAR URLS DE DESARROLLO EN PRODUCCIÓN
echo ""
echo "🌐 Buscando URLs de desarrollo..."
if grep -r -i "localhost\|127.0.0.1\|192.168\|10.0.0" --include="*.{js,jsx,ts,tsx}" . | grep -v node_modules; then
    echo "⚠️  URLs DE DESARROLLO ENCONTRADAS"
fi

# 5. VERIFICAR DEPENDENCIAS CON VULNERABILIDADES
echo ""
echo "📦 Verificando dependencias..."
if command -v npm &> /dev/null; then
    npm audit --audit-level moderate
fi

# RESULTADO FINAL
echo ""
echo "=================================="
if [ "$FOUND_SECRETS" = true ]; then
    echo "🚨 AUDIT FALLIDO - Se encontraron problemas de seguridad"
    echo "❌ NO HACER COMMIT hasta resolver los issues"
    exit 1
else
    echo "✅ AUDIT PASADO - Código seguro para commit"
fi
