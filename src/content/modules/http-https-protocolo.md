---
title: "HTTP/HTTPS: request, response, status codes, headers"
slug: "http-https-protocolo"
category: "redes-web"
difficulty: "basico"
order: 3
description: "Protocolo HTTP, métodos (GET, POST, PUT, DELETE, PATCH), status codes, headers estándar, versiones (1.1, 2, 3)."
why: "Es el idioma del backend. Si no sabés qué significa 429 o cuándo usar PUT vs PATCH, estás ciego."
topics:
  - "Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS"
  - "Status codes: categorías (1xx, 2xx, 3xx, 4xx, 5xx)"
  - "Status codes comunes: 200, 201, 204, 301, 304, 400, 401, 403, 404, 409, 429, 500, 502, 503"
  - "Headers: Content-Type, Accept, Authorization, Cache-Control, ETag, Set-Cookie"
  - "Request/Response cycle"
  - "HTTP/1.1 vs HTTP/2 vs HTTP/3: diferencias"
  - "Idempotencia: cuáles métodos son idempotentes"
resources: []
---

## ¿Por qué esto?

HTTP es el protocolo que usa tu navegador para hablar con servidores. Es el "idioma" de la web. Si trabajás en backend, vos sos el que responde requests HTTP. Necesitás entender cada status code, cada header, cada método.

## Conceptos clave

### Métodos HTTP

- **GET**: Traer datos (seguro, idempotente)
- **POST**: Crear recurso (no idempotente)
- **PUT**: Reemplazar recurso (idempotente)
- **DELETE**: Borrar recurso (idempotente)
- **PATCH**: Actualización parcial (a veces idempotente)
- **HEAD**: GET pero sin body (para chequear existencia)
- **OPTIONS**: Información sobre el recurso

**Idempotencia**: si ejecutás el request 2 veces, ¿el resultado es el mismo?

GET: sí (traer datos 2 veces = mismos datos)
POST: no (crear 2 veces = 2 recursos)
PUT: sí (reemplazar 2 veces = mismo resultado final)

### Status Codes

- **1xx**: Información
- **2xx**: Éxito
  - 200: OK
  - 201: Created
  - 204: No Content
- **3xx**: Redirección
  - 301: Moved Permanently
  - 304: Not Modified (usa cache)
- **4xx**: Error del cliente
  - 400: Bad Request
  - 401: Unauthorized (necesitas auth)
  - 403: Forbidden (no tenés permiso)
  - 404: Not Found
  - 409: Conflict
  - 429: Too Many Requests (rate limited)
- **5xx**: Error del servidor
  - 500: Internal Server Error
  - 502: Bad Gateway
  - 503: Service Unavailable

### Headers comunes

**Request**:
- `Content-Type`: qué formato de datos envío
- `Accept`: qué formato espero de respuesta
- `Authorization`: token/credenciales
- `User-Agent`: quién es (navegador, curl, bot)

**Response**:
- `Content-Type`: qué formato de datos devuelvo
- `Cache-Control`: cuánto cachear
- `Set-Cookie`: guardar cookie
- `ETag`: identificador para cache
- `CORS headers`: para requests cross-origin

### HTTP Versions

- **HTTP/1.1**: keep-alive, pipelining (lento)
- **HTTP/2**: multiplexing (múltiples requests paralelos, más rápido)
- **HTTP/3**: QUIC protocol (aún más rápido)

## Mi explicación

[Aquí escribís vos tu comprensión personal del tema]

---

**Próximo paso**: Cuando hayas estudiado este tema y escrito "Mi explicación", me preguntas por ejercicios aplicados.
