# ✅ SECURITY CHECKLIST FINAL - PmDevCode

## 🚨 **ANTES DEL COMMIT - VERIFICACIONES OBLIGATORIAS:**

### 1. SECRETOS Y CREDENCIALES
- [ ] ❌ **CRÍTICO**: Eliminar `ConsultoriaForm_localhost.tsx` (contiene API key hardcodeada)
- [ ] ❌ **CRÍTICO**: Eliminar `ConsultoriaForm_secure.tsx` (contiene API key hardcodeada)
- [ ] ✅ Verificar que NO hay API keys en el código (`785b22ca-f549-4342-b273-3dface70aeed`)
- [ ] ✅ Verificar que todos los secretos están en `.env.local` o `.env`
- [ ] ✅ Confirmar que `.env*` están en `.gitignore`

### 2. ARCHIVOS TEMPORALES
- [ ] ❌ **CRÍTICO**: Eliminar todos los archivos `*_localhost.*`
- [ ] ❌ **CRÍTICO**: Eliminar todos los archivos `*_secure.*`
- [ ] ❌ **CRÍTICO**: Eliminar todos los archivos `*_temp.*`
- [ ] ❌ **CRÍTICO**: Eliminar todos los archivos `*_backup.*`
- [ ] ✅ Verificar que NO hay archivos `.tmp`, `.backup`

### 3. CONFIGURACIÓN DE ENTORNO
- [ ] ✅ Crear archivo `.env.local` con Web3Forms API key
- [ ] ✅ Usar `process.env.WEB3FORMS_ACCESS_KEY` en el código
- [ ] ✅ Verificar que `.env.template` existe para otros desarrolladores
- [ ] ✅ Actualizar `.gitignore` con patrones de seguridad

### 4. CÓDIGO DE PRODUCCIÓN
- [ ] ✅ Remover todas las URLs `localhost` del código de producción
- [ ] ✅ Implementar validación server-side en forms
- [ ] ✅ Verificar sanitización de inputs para prevenir XSS
- [ ] ✅ Confirmar rate limiting implementado

### 5. DEPENDENCIAS
- [ ] ✅ Ejecutar `npm audit` y resolver vulnerabilidades
- [ ] ✅ Actualizar dependencias críticas
- [ ] ✅ Verificar que no hay paquetes deprecados

---

## 🛠️ **COMANDOS PARA EJECUTAR:**

### Limpieza Automática (PowerShell):
```powershell
# Eliminar archivos temporales peligrosos
Remove-Item "*_localhost.*", "*_secure.*", "*_temp.*", "*_backup.*" -Force -ErrorAction SilentlyContinue

# Verificar secretos
findstr /r /s "785b22ca-f549-4342-b273-3dface70aeed" *.* 
```

### Verificación de Seguridad:
```bash
# Linux/Mac
./scripts/security-audit.sh

# Windows
.\scripts\security-audit.ps1
```

### Antes del git add:
```bash
git status
git add -A
git commit -m "feat: implement IT consultancy services with proper security"
```

---

## 🔐 **POST-COMMIT - CONFIGURACIÓN EN PRODUCCIÓN:**

### Vercel/Netlify Environment Variables:
```
WEB3FORMS_ACCESS_KEY=785b22ca-f549-4342-b273-3dface70aeed
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://pmdevcode.vercel.app
```

### Headers de Seguridad (next.config.js):
```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}
```

---

## 🚨 **ESTADO ACTUAL DE ARCHIVOS:**

### ❌ ARCHIVOS QUE DEBEN ELIMINARSE:
- `ConsultoriaForm_localhost.tsx` → Contiene API key hardcodeada
- `ConsultoriaForm_secure.tsx` → Contiene API key hardcodeada
- `ConsultoriaForm_temp.tsx` → Si existe
- Cualquier archivo `*_backup.*`

### ✅ ARCHIVOS SEGUROS PARA COMMIT:
- `ConsultoriaForm.tsx` → Versión principal (si usa env vars)
- `Services.tsx` → Con nuevo servicio de emails
- `FAQ.tsx` → Con categoría de emails corporativos
- `README.md` → Documentación completa
- `.env.template` → Template de configuración
- `.gitignore` → Con patrones de seguridad

---

## 📋 **VERIFICACIÓN FINAL:**

Antes de hacer `git push`:

1. **Ejecutar audit de seguridad:**
   ```powershell
   .\scripts\security-audit.ps1 -Verbose
   ```

2. **Verificar que NO aparecen estos patrones:**
   - `785b22ca-f549-4342-b273-3dface70aeed`
   - `accessKey: "`
   - `localhost:300`
   - `_localhost.tsx`
   - `_secure.tsx`

3. **Confirmar que SÍ existen:**
   - `process.env.WEB3FORMS_ACCESS_KEY`
   - `.env.template`
   - Patterns de seguridad en `.gitignore`

4. **Test final:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🎯 **RESUMEN DE ACCIONES CRÍTICAS:**

1. **ELIMINAR INMEDIATAMENTE:** `ConsultoriaForm_localhost.tsx` y `ConsultoriaForm_secure.tsx`
2. **CREAR:** `.env.local` con la API key
3. **MODIFICAR:** `ConsultoriaForm.tsx` para usar `process.env.WEB3FORMS_ACCESS_KEY`
4. **VERIFICAR:** `.gitignore` incluye `.env*`
5. **EJECUTAR:** Security audit antes del commit

**⚠️ NO HACER COMMIT HASTA COMPLETAR TODOS LOS ÍTEMS MARCADOS CON ❌**
