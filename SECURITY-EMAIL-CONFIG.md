# 🔒 CONFIGURACIÓN DE SEGURIDAD - EMAIL FORMS

## ⚠️ IMPORTANTE: CREDENCIALES PRIVADAS

Este proyecto utiliza un **backend API seguro** para enviar emails. **NUNCA** expongas credenciales en el frontend.

---

## 📧 Configuración de Variables de Entorno

### **Variables PRIVADAS (Backend Only)**

Estas variables **NO** tienen el prefijo `NEXT_PUBLIC_` y solo están disponibles en el servidor:

```bash
# .env.local
WEB3FORMS_ACCESS_KEY=tu-access-key-aqui
RECIPIENT_EMAIL=tu-email@dominio.com
```

✅ **Seguro:** Solo el servidor puede leer estas variables  
❌ **NO usar:** `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (expone en el frontend)

---

## 🔧 Arquitectura del Sistema

```
Frontend (Browser)          Backend (Next.js API)         Web3Forms
───────────────────        ─────────────────────        ─────────────
                                                         
Formulario                                              
   │                                                     
   │ POST /api/send-email                               
   │ { name, email, message }                           
   │                                                     
   └──────────────► API Route                           
                       │                                 
                       │ Valida datos                    
                       │ Agrega access_key (privado)     
                       │                                 
                       └──────────────► Web3Forms API   
                                            │            
                                            │ Envía email
                                            │            
                                            └──► millanpatricio@hotmail.com
```

---

## 📁 Archivos del Sistema

### **1. API Route (Backend Seguro)**
```
app/api/send-email/route.ts
```
- ✅ Lee `WEB3FORMS_ACCESS_KEY` del servidor
- ✅ Lee `RECIPIENT_EMAIL` del servidor
- ✅ Valida datos
- ✅ Rate limiting
- ✅ Envía a Web3Forms

### **2. Formularios (Frontend)**
Todos estos formularios usan la API segura:

```
components/Contact.tsx           → /api/send-email
app/cotizar/WebProjectForm.tsx   → /api/send-email
components/ConsultoriaForm.tsx   → /api/send-email
```

❌ **YA NO usan:** Credenciales en el frontend  
✅ **AHORA usan:** Endpoint seguro `/api/send-email`

---

## 🚀 Deployment (VPS/Producción)

### **Paso 1: Crear `.env.local` en el VPS**

```bash
# En /var/www/pmdevcode/.env.local
WEB3FORMS_ACCESS_KEY=984d2d92-6f93-4fc4-a2ef-5f5641abe972
RECIPIENT_EMAIL=millanpatricio@hotmail.com
NEXT_PUBLIC_APP_URL=https://www.pmdevcode.com.ar
NODE_ENV=production
PORT=3001
```

### **Paso 2: Verificar que NO esté en .gitignore**

Asegúrate de que `.env.local` esté en `.gitignore`:

```bash
# .gitignore
.env.local
.env*.local
```

### **Paso 3: Build y Deploy**

```bash
npm run build
pm2 restart pmdevcode
```

---

## 🔍 Verificación de Seguridad

### **✅ Verificar que las credenciales NO estén expuestas:**

1. **Abrir DevTools en el navegador**
2. **Ir a Network → JS files**
3. **Buscar:** `WEB3FORMS_ACCESS_KEY` o `millanpatricio`
4. **Resultado esperado:** ❌ NO encontrado (si aparece, hay problema)

### **✅ Test de envío:**

1. Llenar formulario de contacto
2. Enviar
3. Verificar en logs del servidor: `pm2 logs pmdevcode`
4. Verificar email en: `millanpatricio@hotmail.com`

---

## 🛡️ Buenas Prácticas de Seguridad

### **✅ DO (Hacer):**
- Usar variables de entorno **SIN** `NEXT_PUBLIC_` para credenciales
- Enviar emails desde API Routes (backend)
- Validar datos en el servidor
- Implementar rate limiting
- Rotar access keys periódicamente

### **❌ DON'T (No hacer):**
- Exponer access keys en el frontend
- Usar `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- Hardcodear credenciales en el código
- Commit archivos `.env.local` a Git
- Confiar en validación solo del frontend

---

## 🔄 Rotar Access Key

Si el access key se compromete:

1. **Ir a:** https://web3forms.com
2. **Generar nuevo access key**
3. **Actualizar en `.env.local`:**
   ```bash
   WEB3FORMS_ACCESS_KEY=nuevo-access-key-aqui
   ```
4. **Rebuild y restart:**
   ```bash
   npm run build
   pm2 restart pmdevcode
   ```

---

## 📊 Monitoreo

### **Ver logs de emails enviados:**
```bash
pm2 logs pmdevcode | grep "send-email"
```

### **Ver rate limiting:**
```bash
pm2 logs pmdevcode | grep "Rate limit"
```

---

## ✅ Checklist Pre-Deploy

- [ ] `.env.local` configurado en VPS
- [ ] `WEB3FORMS_ACCESS_KEY` correcto
- [ ] `RECIPIENT_EMAIL` correcto  
- [ ] `.env.local` en `.gitignore`
- [ ] No hay `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` en el código
- [ ] Build exitoso sin errores
- [ ] Test de envío funciona
- [ ] Email llega a `millanpatricio@hotmail.com`

---

## 🆘 Troubleshooting

### **Problema: Email no llega**
```bash
# Ver logs del servidor
pm2 logs pmdevcode --lines 100

# Verificar variables de entorno
pm2 show pmdevcode | grep env
```

### **Problema: Error 500**
- Verificar que `WEB3FORMS_ACCESS_KEY` esté configurado
- Verificar formato de datos enviados
- Ver logs: `pm2 logs pmdevcode --err`

### **Problema: Error 429 (Rate Limit)**
- Esperar 30 segundos entre envíos
- Verificar IP en caso de múltiples requests

---

## 📧 Contacto

Email de destino: **millanpatricio@hotmail.com**  
Access Key: **(Almacenado en .env.local - NO en código)**

🔒 **Mantén tus credenciales seguras.**
