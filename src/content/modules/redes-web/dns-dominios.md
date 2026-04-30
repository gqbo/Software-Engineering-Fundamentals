---
title: "DNS y dominios"
difficulty: "basico"
order: 2
description: "Sistema de nombres de dominio, resolución DNS, registros (A, AAAA, CNAME, MX, TXT), TTL, propagación."
why: "Todos los días escribís un dominio. Deberías entender qué está pasando detrás."
topics:
  - "Nombres de dominio: estructura (TLD, SLD, subdominio)"
  - "Resolución DNS: proceso paso a paso"
  - "Tipos de resolvers: recursive, authoritative, caching"
  - "Registros DNS: A, AAAA, CNAME, MX, TXT, SRV"
  - "TTL (Time To Live): por qué existen, impacto en cambios"
  - "Propagación de DNS: por qué tarda en cambiar"
  - "Herramientas: `nslookup`, `dig`, `host`"
resources: []
---

## ¿Por qué esto?

Cuando escribís `google.com`, ¿cómo tu computadora sabe dónde está `google.com`? ¿Es una IP? Sí, pero hay que traducir el nombre a IP. DNS es ese sistema de traducción. Sin DNS, tendrías que escribir `142.250.185.46` en lugar de `google.com`.

## Conceptos clave

### Estructura de dominios

Un dominio tiene partes:

`subdomain.example.co.uk`

- **co.uk**: TLD (Top-Level Domain, dominio de nivel superior)
- **example**: SLD (Second-Level Domain)
- **subdomain**: Subdominio (opcional)

### Resolución DNS

Cuando escribís `example.com` en el navegador:

1. **Tu computadora** pregunta a su resolver local: "¿Dónde está example.com?"
2. **Resolver local** (generalmente tu ISP) pregunta a un **root nameserver**: "¿Dónde está example.com?"
3. **Root nameserver** responde: "No sé, pero pregúntale al TLD server de .com"
4. **TLD server** responde: "No sé, pero pregúntale al authoritative nameserver de example.com"
5. **Authoritative nameserver** responde: "example.com es 93.184.216.34"
6. La respuesta vuelve, y tu navegador se conecta a esa IP.

Este proceso se llama **recursive resolution** (resolver recursivo hace todo el trabajo).

### Registros DNS

Diferentes tipos de registros para diferentes usos:

- **A**: Mapea dominio a IPv4 (ej. example.com → 93.184.216.34)
- **AAAA**: Mapea dominio a IPv6
- **CNAME**: Alias (ej. www.example.com → example.com)
- **MX**: Mail exchange (ej. mail.example.com para recibir emails)
- **TXT**: Texto libre (usado para verificaciones, SPF, DKIM)
- **SRV**: Servicio (ej. SIP servers)

### TTL (Time To Live)

TTL es un número que dice "cuánto tiempo cachear esta respuesta DNS".

```
A 93.184.216.34 (TTL: 3600)
```

Significa: "example.com es 93.184.216.34 durante 1 hora. Luego pregunta de nuevo."

**TTL bajo** (300 = 5 minutos): cambios rápidos, pero más queries
**TTL alto** (86400 = 1 día): menos queries, pero cambios lentos

### Propagación DNS

Cuando cambias un registro DNS (ej. cambias la IP), no es instantáneo. Depende del TTL:

1. Cambias el registro en tu proveedor de DNS
2. Los nameservers se actualizan
3. Otros DNS caches espiran (según TTL)
4. Gradualmente, todos se dan cuenta del cambio

Por eso dicen "el cambio se propaga en 24 horas" (si tu TTL era 24h).

## Mi explicación

[Aquí escribís vos tu comprensión personal del tema]

---

**Próximo paso**: Cuando hayas estudiado este tema y escrito "Mi explicación", me preguntas por ejercicios aplicados.
