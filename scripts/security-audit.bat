@echo off
REM 🔍 WINDOWS SECURITY AUDIT SCRIPT PARA PMDEVCODE
REM Versión PowerShell para Windows

echo 🔐 INICIANDO AUDIT DE SEGURIDAD...
echo ==================================

REM 1. BUSCAR SECRETOS HARDCODEADOS
echo 🚨 Buscando secretos hardcodeados...

findstr /r /i /s "api.*key.*=" *.js *.jsx *.ts *.tsx *.json 2>nul
if not errorlevel 1 (
    echo ❌ API KEYS DETECTADAS
    set FOUND_ISSUES=true
)

findstr /r /i /s "secret.*=" *.js *.jsx *.ts *.tsx *.json 2>nul
if not errorlevel 1 (
    echo ❌ SECRETS DETECTADOS
    set FOUND_ISSUES=true
)

findstr /r /i /s "password.*=" *.js *.jsx *.ts *.tsx *.json 2>nul
if not errorlevel 1 (
    echo ❌ PASSWORDS DETECTADAS
    set FOUND_ISSUES=true
)

REM Buscar UUIDs (como Web3Forms keys)
findstr /r /s "[0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f]-[0-9a-f][0-9a-f][0-9a-f][0-9a-f]-[0-9a-f][0-9a-f][0-9a-f][0-9a-f]-[0-9a-f][0-9a-f][0-9a-f][0-9a-f]-[0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f]" *.js *.jsx *.ts *.tsx 2>nul
if not errorlevel 1 (
    echo ❌ UUID KEYS DETECTADAS
    set FOUND_ISSUES=true
)

REM 2. BUSCAR ARCHIVOS TEMPORALES
echo.
echo 🗑️ Buscando archivos temporales...

dir /s /b *_temp.* *_localhost.* *_secure.* *_backup.* *.tmp *.backup 2>nul | findstr /v node_modules | findstr /v .next
if not errorlevel 1 (
    echo ❌ ARCHIVOS TEMPORALES ENCONTRADOS
    set FOUND_ISSUES=true
)

REM 3. VERIFICAR ARCHIVOS .ENV
echo.
echo 📝 Verificando archivos .env...
dir /s /b .env* 2>nul | findstr /v .env.example | findstr /v .env.template
if not errorlevel 1 (
    echo ⚠️  ARCHIVOS .ENV ENCONTRADOS - Verificar .gitignore
)

REM 4. BUSCAR URLs DE DESARROLLO
echo.
echo 🌐 Buscando URLs de desarrollo...
findstr /r /i /s "localhost\|127.0.0.1\|192.168\|10.0.0" *.js *.jsx *.ts *.tsx 2>nul
if not errorlevel 1 (
    echo ⚠️  URLs DE DESARROLLO ENCONTRADAS
)

REM RESULTADO FINAL
echo.
echo ==================================
if defined FOUND_ISSUES (
    echo 🚨 AUDIT FALLIDO - Se encontraron problemas de seguridad
    echo ❌ NO HACER COMMIT hasta resolver los issues
    pause
    exit /b 1
) else (
    echo ✅ AUDIT PASADO - Código seguro para commit
    pause
)
