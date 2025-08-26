# 🔐 PowerShell Security Audit Script para PmDevCode
# Versión avanzada para Windows con detección mejorada

param(
    [switch]$Fix,
    [switch]$Verbose
)

Write-Host "🔐 INICIANDO SECURITY AUDIT AVANZADO..." -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan

$issues = @()
$warnings = @()

# 1. DETECTAR SECRETOS HARDCODEADOS
Write-Host "`n🚨 Analizando secretos hardcodeados..." -ForegroundColor Yellow

$secretPatterns = @{
    "API Keys" = "api[_-]?key.*[=:]\s*[`"'][^`"']*[`"']"
    "Secrets" = "secret.*[=:]\s*[`"'][^`"']*[`"']"
    "Passwords" = "password.*[=:]\s*[`"'][^`"']*[`"']"
    "Tokens" = "token.*[=:]\s*[`"'][^`"']*[`"']"
    "UUIDs" = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
    "JWT" = "ey[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*"
}

$codeFiles = Get-ChildItem -Recurse -Include "*.js", "*.jsx", "*.ts", "*.tsx", "*.json" | 
             Where-Object { $_.FullName -notmatch "node_modules|\.next" }

foreach ($pattern in $secretPatterns.GetEnumerator()) {
    foreach ($file in $codeFiles) {
        $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
        if ($content -and ($content -match $pattern.Value)) {
            $issues += "❌ $($pattern.Key) encontrado en: $($file.Name)"
            if ($Verbose) {
                $matches = [regex]::Matches($content, $pattern.Value)
                foreach ($match in $matches) {
                    Write-Host "   └─ $($match.Value)" -ForegroundColor Red
                }
            }
        }
    }
}

# 2. DETECTAR ARCHIVOS TEMPORALES PELIGROSOS
Write-Host "`n🗑️ Buscando archivos temporales..." -ForegroundColor Yellow

$tempPatterns = @("*_temp.*", "*_localhost.*", "*_secure.*", "*_backup.*", "*.tmp", "*.backup")
foreach ($pattern in $tempPatterns) {
    $tempFiles = Get-ChildItem -Recurse -Filter $pattern | 
                 Where-Object { $_.FullName -notmatch "node_modules|\.next" }
    foreach ($file in $tempFiles) {
        $issues += "❌ Archivo temporal encontrado: $($file.Name)"
        if ($Fix) {
            Remove-Item $file.FullName -Force
            Write-Host "   └─ ELIMINADO: $($file.Name)" -ForegroundColor Green
        }
    }
}

# 3. VERIFICAR CONFIGURACIÓN .ENV
Write-Host "`n📝 Verificando archivos .env..." -ForegroundColor Yellow

$envFiles = Get-ChildItem -Recurse -Filter ".env*" | 
            Where-Object { $_.Name -notmatch "\.example$|\.template$" }

foreach ($file in $envFiles) {
    if (Test-Path ".gitignore") {
        $gitignoreContent = Get-Content ".gitignore" -Raw
        if ($gitignoreContent -notmatch "\.env") {
            $warnings += "⚠️  $($file.Name) no está en .gitignore"
        }
    } else {
        $issues += "❌ .gitignore no existe"
    }
}

# 4. BUSCAR URLs DE DESARROLLO
Write-Host "`n🌐 Verificando URLs de desarrollo..." -ForegroundColor Yellow

$devUrlPattern = "localhost|127\.0\.0\.1|192\.168\.|10\.0\.0\."
foreach ($file in $codeFiles) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if ($content -and ($content -match $devUrlPattern)) {
        $warnings += "⚠️  URL de desarrollo en: $($file.Name)"
    }
}

# 5. VERIFICAR DEPENDENCIAS
Write-Host "`n📦 Verificando dependencias..." -ForegroundColor Yellow

if (Test-Path "package.json") {
    try {
        $audit = npm audit --json 2>$null | ConvertFrom-Json
        if ($audit.vulnerabilities) {
            $criticalCount = $audit.metadata.vulnerabilities.critical
            $highCount = $audit.metadata.vulnerabilities.high
            
            if ($criticalCount -gt 0) {
                $issues += "❌ $criticalCount vulnerabilidades CRÍTICAS en dependencias"
            }
            if ($highCount -gt 0) {
                $warnings += "⚠️  $highCount vulnerabilidades ALTAS en dependencias"
            }
        }
    } catch {
        $warnings += "⚠️  No se pudo verificar dependencias (npm no disponible)"
    }
}

# 6. VERIFICAR CONFIGURACIÓN DE SEGURIDAD
Write-Host "`n🛡️ Verificando configuración de seguridad..." -ForegroundColor Yellow

# Headers de seguridad en Next.js
if (Test-Path "next.config.js") {
    $nextConfig = Get-Content "next.config.js" -Raw
    $securityHeaders = @("X-Frame-Options", "X-Content-Type-Options", "Referrer-Policy", "Content-Security-Policy")
    
    foreach ($header in $securityHeaders) {
        if ($nextConfig -notmatch $header) {
            $warnings += "⚠️  Header de seguridad '$header' no configurado"
        }
    }
}

# GENERAR REPORTE
Write-Host "`n=======================================" -ForegroundColor Cyan
Write-Host "📊 REPORTE FINAL DE SEGURIDAD" -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan

if ($issues.Count -gt 0) {
    Write-Host "`n🚨 ISSUES CRÍTICOS ($($issues.Count)):" -ForegroundColor Red
    foreach ($issue in $issues) {
        Write-Host $issue -ForegroundColor Red
    }
}

if ($warnings.Count -gt 0) {
    Write-Host "`n⚠️  ADVERTENCIAS ($($warnings.Count)):" -ForegroundColor Yellow
    foreach ($warning in $warnings) {
        Write-Host $warning -ForegroundColor Yellow
    }
}

# RESULTADO FINAL
Write-Host "`n=======================================" -ForegroundColor Cyan

if ($issues.Count -gt 0) {
    Write-Host "🚨 AUDIT FALLIDO - $($issues.Count) problemas críticos" -ForegroundColor Red
    Write-Host "❌ NO HACER COMMIT hasta resolver todos los issues" -ForegroundColor Red
    
    # Generar reporte detallado
    $report = @"
# 🔐 SECURITY AUDIT REPORT - $(Get-Date)

## 🚨 ISSUES CRÍTICOS ($($issues.Count)):
$($issues -join "`n")

## ⚠️ ADVERTENCIAS ($($warnings.Count)):
$($warnings -join "`n")

## 🛠️ ACCIONES RECOMENDADAS:
1. Mover todos los secretos a variables de entorno
2. Eliminar archivos temporales con secretos
3. Actualizar .gitignore con patrones de seguridad
4. Configurar headers de seguridad en Next.js
5. Actualizar dependencias vulnerables

## 📝 PRÓXIMOS PASOS:
- Ejecutar: .\security-audit.ps1 -Fix (para limpieza automática)
- Verificar: git status (antes del commit)
- Validar: npm audit fix (para dependencias)
"@
    
    $report | Out-File "security-audit-report.md" -Encoding UTF8
    Write-Host "📄 Reporte guardado en: security-audit-report.md" -ForegroundColor Yellow
    
    exit 1
} else {
    Write-Host "✅ AUDIT PASADO - Código seguro para commit" -ForegroundColor Green
    if ($warnings.Count -gt 0) {
        Write-Host "💡 Considera resolver las $($warnings.Count) advertencias" -ForegroundColor Yellow
    }
    exit 0
}
