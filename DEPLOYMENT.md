# 🚀 Deployment Guide - PMDevCode VPS

## Resumen del Deployment

Este proyecto **pmdevcode** ha sido exitosamente preparado para deployment en tu VPS de Banahosting con el dominio `www.pmdevcode.com.ar`.

## ✅ Estado Actual

- **Build**: ✅ Completado exitosamente
- **Dependencias**: ✅ 347 paquetes instalados sin vulnerabilidades
- **TypeScript**: ✅ Errores de compilación resueltos
- **Archivos de configuración**: ✅ Creados (PM2, Nginx, deployment script)

## 📁 Archivos de Deployment Creados

- `ecosystem.config.js` - Configuración de PM2
- `deploy.sh` - Script automático de deployment
- `logs/` - Directorio para logs de la aplicación

## 🔧 Instrucciones de Deployment en VPS

### 1. Subir archivos al VPS

Copia todos los archivos del proyecto al VPS en `/var/www/pmdevcode`:

```bash
# En el VPS (como root o sudo)
cd /var/www
git pull origin main  # Si ya tienes el repositorio clonado
# O clona nuevamente si es necesario
```

### 2. Ejecutar el deployment

```bash
cd /var/www/pmdevcode
chmod +x deploy.sh
bash deploy.sh
```

El script automáticamente:
- ✅ Instala PM2 globalmente
- ✅ Instala dependencias de producción
- ✅ Construye el proyecto
- ✅ Configura PM2
- ✅ Configura Nginx con SSL ready
- ✅ Configura el firewall
- ✅ Inicia la aplicación

### 3. Configurar SSL (Post-deployment)

Después del deployment, necesitarás:

1. **Obtener certificados SSL** (recomendado: Let's Encrypt con Certbot)
2. **Actualizar la configuración de Nginx** con las rutas de los certificados
3. **Verificar que el dominio apunte a tu VPS**

## 🌐 Configuración del Dominio

El sitio estará disponible en:
- **Producción**: `https://www.pmdevcode.com.ar`
- **Alternativo**: `https://pmdevcode.com.ar`
- **Puerto interno**: `3000` (manejado por PM2)

## 📊 Comandos de Monitoreo

```bash
# Ver estado de la aplicación
pm2 status

# Ver logs en tiempo real
pm2 logs pmdevcode

# Monitoreo gráfico
pm2 monit

# Reiniciar aplicación
pm2 restart pmdevcode

# Detener aplicación
pm2 stop pmdevcode
```

## 🔒 Configuración de Seguridad

El deployment incluye:
- ✅ Headers de seguridad en Nginx
- ✅ Compresión Gzip
- ✅ Cache de archivos estáticos
- ✅ Configuración SSL lista
- ✅ Firewall configurado (puertos 80, 443)

## 📝 Configuración de SSL con Let's Encrypt

Después del deployment, ejecuta:

```bash
# Instalar Certbot
apt update && apt install certbot python3-certbot-nginx

# Obtener certificado SSL
certbot --nginx -d www.pmdevcode.com.ar -d pmdevcode.com.ar

# Verificar renovación automática
certbot renew --dry-run
```

## 🚨 Troubleshooting

### Error de Turbopack (SOLUCIONADO)

Si obtienes el error `TurbopackInternalError: Failed to write page endpoint /_error`, hemos preparado varias soluciones:

**Solución 1: Build limpio sin Turbopack**
```bash
cd /var/www/pmdevcode
bash clean-build.sh
```

**Solución 2: Si persiste el error**
```bash
# Usar configuración minimal
cp next.config.minimal.js next.config.js
rm -rf .next node_modules/.cache
npm run build
```

**Solución 3: Build manual paso a paso**
```bash
# Limpiar todo
rm -rf .next node_modules/.cache /tmp/next-*
rm -rf node_modules && npm install

# Build sin Turbopack
NODE_ENV=production npm run build
```

```bash
# Revisar logs
pm2 logs pmdevcode --lines 50

# Verificar estado de Nginx
systemctl status nginx
nginx -t

# Reiniciar servicios
pm2 restart pmdevcode
systemctl restart nginx
```

### Si hay problemas de memoria:

```bash
# El PM2 está configurado con límite de 1GB
# Ajustar en ecosystem.config.js si es necesario
```

## 📱 Verificación Post-Deployment

1. ✅ **Verificar aplicación**: `curl http://localhost:3000`
2. ✅ **Verificar Nginx**: `curl -I http://tu-dominio.com`
3. ✅ **Verificar SSL**: `curl -I https://www.pmdevcode.com.ar`
4. ✅ **Verificar PM2**: `pm2 status`

## 🔄 Actualizaciones Futuras

Para actualizar el sitio:

```bash
cd /var/www/pmdevcode
git pull origin main
npm ci --production
npm run build
pm2 restart pmdevcode
```

---

**✅ DEPLOYMENT READY**: Tu aplicación está lista para ser desplegada en el VPS de Banahosting.

**Dominio objetivo**: `www.pmdevcode.com.ar`

**Next Steps**: Ejecuta `bash deploy.sh` en el VPS para completar el deployment.
