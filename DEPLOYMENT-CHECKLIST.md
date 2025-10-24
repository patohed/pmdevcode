# 🚀 Deployment Checklist - Security Updates

## Pre-Deployment (Local)
- [x] CSP headers added to `next.config.js`
- [x] HSTS header configured (max-age=31536000)
- [x] X-Powered-By header removed
- [x] CookieConsent component created
- [x] layout.tsx updated (removed hardcoded GA)
- [x] .env.example updated with GA_MEASUREMENT_ID
- [x] All forms have honeypot protection (already implemented)
- [x] No TypeScript errors in modified files
- [ ] Local testing completed (run `npm run dev`)
- [ ] Production build successful (run `npm run build`)

## VPS Deployment Steps

### 1. Git Push
```bash
git add .
git commit -m "feat: Comprehensive security improvements (CSP, HSTS, GDPR consent)"
git push origin main
```

### 2. SSH to VPS
```bash
ssh usuario@pmdevcode.com.ar
cd /var/www/pmdevcode
```

### 3. Pull Changes
```bash
git pull origin main
```

### 4. Update Environment Variables
```bash
nano .env.local
```

Add this line:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Google Analytics 4 Measurement ID.

### 5. Install & Build
```bash
npm install
npm run build
```

### 6. Restart PM2
```bash
pm2 restart pmdevcode
pm2 logs pmdevcode --lines 50
```

### 7. Verify Site is Running
```bash
curl -I https://www.pmdevcode.com.ar
```

Expected: `HTTP/1.1 200 OK` or `HTTP/2 200`

## Post-Deployment Verification

### Security Headers Test
1. Go to: https://securityheaders.com/
2. Enter: `https://www.pmdevcode.com.ar`
3. Expected Grade: **A** or higher

Headers to verify:
- ✅ Content-Security-Policy (present)
- ✅ Strict-Transport-Security (max-age=31536000)
- ✅ X-Frame-Options (DENY)
- ✅ X-Content-Type-Options (nosniff)
- ✅ Referrer-Policy
- ❌ X-Powered-By (should NOT be present)

### Cookie Consent Test
1. Open https://www.pmdevcode.com.ar in incognito
2. Cookie banner should appear at bottom
3. Open DevTools → Network tab
4. **Without accepting:** No `googletagmanager.com` requests
5. Click "Aceptar Todo"
6. **After accepting:** `gtag.js` should load
7. Refresh page → Banner should NOT reappear

### Forms Anti-Spam Test
1. Go to `/contacto` or `/cotizar`
2. Fill form and submit
3. Try to submit again immediately → Should show "Espera 30 segundos"
4. Inspect HTML → Find hidden input `name="website"` (honeypot)
5. Fill honeypot field → Submit should fail silently

### SSL/TLS Test
1. Go to: https://www.ssllabs.com/ssltest/
2. Enter: `www.pmdevcode.com.ar`
3. Expected Grade: **A** or **A+**

## Rollback Plan (If Something Breaks)

```bash
# SSH to VPS
ssh usuario@pmdevcode.com.ar
cd /var/www/pmdevcode

# See recent commits
git log --oneline -10

# Rollback to previous commit (replace HASH)
git reset --hard [PREVIOUS-COMMIT-HASH]

# Rebuild
npm run build

# Restart
pm2 restart pmdevcode
```

## Known Issues / Pending

- ⚠️ **og-image.png** still missing (404 error)
  - Impact: Social media sharing won't show custom image
  - Priority: Low (doesn't affect security)
  - Solution: Create 1200x630px image (see `/public/OG-IMAGE-INSTRUCTIONS.md`)

- ⚠️ **Google Analytics ID** may need configuration
  - Default: `GA_MEASUREMENT_ID` (placeholder)
  - Action: Replace with real GA4 ID in `.env.local`
  - If not configured: CookieConsent won't load GA (safe fallback)

## Success Criteria

✅ **All must pass:**
1. Site loads without errors (200 OK)
2. SecurityHeaders.com grade A or higher
3. Cookie banner appears on first visit
4. GA loads only after consent
5. Forms work normally
6. No console errors in browser
7. PM2 shows app as "online"
8. X-Powered-By header is removed

## Emergency Contacts

If deployment fails:
1. Check PM2 logs: `pm2 logs pmdevcode`
2. Check build errors: Review output of `npm run build`
3. Verify .env.local is present and has all required variables
4. Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
5. Rollback to previous version (see Rollback Plan above)

---

**Last Updated:** 2025-01-XX  
**Author:** GitHub Copilot  
**Status:** Ready for Deployment
