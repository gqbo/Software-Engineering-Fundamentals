---
title: "CORS y same-origin policy"
slug: "cors-same-origin"
category: "redes-web"
difficulty: "basico"
order: 6
description: "Same-Origin Policy, CORS, preflight requests, credenciales entre orígenes, debugging de CORS."
why: "Cada dev debe entender CORS. Es la razón por la que ciertas requests fallan misteriosamente."
topics:
  - "Same-Origin Policy: qué es un \"origen\", por qué existe"
  - "CORS: cómo relaja SOP de manera segura"
  - "Preflight requests: cuándo ocurren, métodos seguro vs unsafe"
  - "Headers CORS: Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Credentials"
  - "Credenciales: cookies, authorization headers, cross-origin"
  - "Errores comunes: CORS errors y cómo debuggearlos"
  - "CORS en Express: usando middleware"
resources: []
---

## ¿Por qué esto?

Has visto el error: "No 'Access-Control-Allow-Origin' header is present on the requested resource." Es un error de CORS. CORS es por seguridad: tu navegador evita que código malicioso robe datos de otros sitios. Pero a veces necesitas hacer requests cross-origin legítimos. Entender CORS es saber cuándo el error es real, cuándo es configuración.

## Conceptos clave

### Same-Origin Policy

"Origin" = protocolo + dominio + puerto

```
https://example.com:443  ← origin
https://api.example.com:443  ← distinto origin (subdominio diferente)
http://example.com:80  ← distinto origin (protocolo diferente)
```

Same-Origin Policy: JavaScript en una página de `example.com` NO puede hacer requests a `api.different.com`.

¿Por qué? Seguridad. Si un sitio malicioso te dirigiera a tu banco, no querés que robe tus cookies.

### CORS: relajar la política

CORS (Cross-Origin Resource Sharing) es cómo decimos "OK, permite requests desde otro origin".

El servidor responde con headers:

```
Access-Control-Allow-Origin: https://example.com
```

Significa: "JavaScript desde example.com puede acceder a mis recursos."

### Preflight Requests

Cuando haces un request "unsafe" (POST, PUT, DELETE, o con headers custom):

1. Navegador envía una request OPTIONS (preflight)
2. Servidor responde si está permitido
3. Si sí, navegador envía el request real

```
OPTIONS /api/users
```

Servidor responde:

```
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type, Authorization
```

### Errores CORS comunes

**Error**: "No 'Access-Control-Allow-Origin' header"

Solución: backend debe agregar header

```typescript
// Express
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://example.com');
  next();
});
```

**Error**: "Credential mode is 'include' but Access-Control-Allow-Credentials is missing"

Solución: necesitas permitir credenciales

```typescript
res.header('Access-Control-Allow-Credentials', 'true');
```

## Mi explicación

[Aquí escribís vos tu comprensión personal del tema]

---

**Próximo paso**: Cuando hayas estudiado este tema y escrito "Mi explicación", me preguntas por ejercicios aplicados.
