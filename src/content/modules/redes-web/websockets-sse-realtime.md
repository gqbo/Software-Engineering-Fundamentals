---
title: "WebSockets, SSE y comunicación en tiempo real"
difficulty: "intermedio"
order: 5
description: "WebSockets (bidireccional), Server-Sent Events (SSE, unidireccional), long polling, cuándo usar cada uno."
why: "Fundamental para features en tiempo real (chat, notificaciones, live updates)."
topics:
  - "WebSockets: upgrading de HTTP, full-duplex"
  - "WebSocket handshake y frame format"
  - "SSE (Server-Sent Events): unidireccional, basado en HTTP"
  - "Long polling: alternativa antigua"
  - "Comparación: WebSockets vs SSE vs polling"
  - "Casos de uso: chat (WebSockets), notificaciones (SSE), datos en vivo (ambos)"
  - "Herramientas: ws library, socket.io"
resources: []
---

## ¿Por qué esto?

HTTP tradicional es request-response: cliente pregunta, servidor responde. Pero ¿qué si el servidor necesita enviar datos sin que el cliente pregunte? (ej. notificación de chat, actualización en vivo). WebSockets y SSE resuelven ese problema de formas distintas.

## Conceptos clave

### WebSockets

WebSocket es una conexión bidireccional, persistente entre cliente y servidor.

**Proceso**:
1. Cliente envía una request HTTP con header "Upgrade: websocket"
2. Servidor acepta el upgrade
3. Se establece una conexión WebSocket (TCP, pero diferente a HTTP)
4. Cliente y servidor pueden enviar datos en cualquier momento

**Características**:
- Full-duplex (cliente y servidor pueden hablar simultáneamente)
- Bidireccional (both ways)
- Bajo latency (conexión abierta, no hay overhead de new request)
- Persisten hasta que se cierren

**Casos de uso**: chat en tiempo real, multiplayer games, collaborative editors

### Server-Sent Events (SSE)

SSE es una forma de que el servidor envíe actualizaciones al cliente, pero el cliente no puede hablar de vuelta.

**Proceso**:
1. Cliente abre una conexión HTTP GET persistente
2. Servidor envía eventos como texto en formato especial
3. Cliente escucha eventos

**Características**:
- Unidireccional (solo servidor → cliente)
- Basado en HTTP (más simple, no requiere protocolo nuevo)
- Auto-reconnect (si se desconecta, reconecta automáticamente)
- Eventos nombrados

**Casos de uso**: notificaciones de servidor, stock prices live, feed updates

```javascript
// Cliente
const eventSource = new EventSource('/events');
eventSource.addEventListener('update', (event) => {
  console.log(event.data);
});

// Servidor
res.writeHead(200, { 'Content-Type': 'text/event-stream' });
res.write('data: {"price": 100}\n\n');
```

### Long Polling

Long polling es la forma antigua de "simular" push (servidor iniciando).

**Proceso**:
1. Cliente hace request: "hay nuevos datos?"
2. Servidor mantiene la conexión abierta
3. Cuando hay nuevos datos, servidor responde
4. Cliente recibe respuesta y hace otra request

Es ineficiente porque hay muchas requests, pero funciona.

### Comparación

| | WebSocket | SSE | Long Polling |
|---|---|---|---|
| Dirección | Bidireccional | Unidireccional | Unidireccional |
| Protocolo | WebSocket (nuevo) | HTTP | HTTP |
| Latency | Muy bajo | Bajo | Alto |
| Complejidad | Media | Baja | Baja |
| Uso | Chat, gaming | Notificaciones | Legacy |

## Mi explicación

[Aquí escribís vos tu comprensión personal del tema]

---

**Próximo paso**: Cuando hayas estudiado este tema y escrito "Mi explicación", me preguntas por ejercicios aplicados.
