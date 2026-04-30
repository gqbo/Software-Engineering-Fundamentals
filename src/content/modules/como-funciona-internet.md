---
title: "Cómo funciona internet: IP, TCP/UDP, modelo OSI"
slug: "como-funciona-internet"
category: "redes-web"
difficulty: "basico"
order: 1
description: "Modelo OSI, capas de red, dirección IP, TCP vs UDP, handshake de TCP, routing."
why: "Si no sabés cómo viaja un packet, no entendés por qué las cosas fallan como fallan."
topics:
  - "Modelo OSI: 7 capas (física → aplicación)"
  - "Dirección IP: qué es, IPv4 vs IPv6, CIDR"
  - "TCP (Transmission Control Protocol): conexión, fiable, handshake 3-way"
  - "UDP (User Datagram Protocol): sin conexión, rápido, sin garantía"
  - "Puertos: qué son, bien conocidos (80, 443, 3306, etc)"
  - "Routing: cómo viaja un packet"
  - "Paquetes y frames: estructura mínima"
resources: []
---

## ¿Por qué esto?

Cuando hablás de "conectarme a un servidor", "enviar datos", "la conexión se cayó", hay mucho pasando debajo. Entender cómo viaja la información en internet es entender por qué algunas cosas fallan, por qué toma tiempo, cómo se pierden packets.

## Conceptos clave

### Modelo OSI

OSI (Open Systems Interconnection) es un modelo de 7 capas que describe cómo viaja la información en la red:

1. **Física**: cables, voltajes, señales (WiFi, Ethernet)
2. **Enlace de datos**: frames, direcciones MAC, switches
3. **Red**: IP, routing, direcciones IP, routers
4. **Transporte**: TCP, UDP, puertos
5. **Sesión**: manejo de sesiones, autenticación
6. **Presentación**: compresión, encriptación, formato
7. **Aplicación**: HTTP, DNS, SMTP, tu app

Cuando envías un request HTTP, baja por todas las capas hasta la física (wifi/ethernet), viaja, y sube por las capas en el servidor.

### Dirección IP

Una dirección IP identifica de manera única una computadora en la red.

**IPv4**: `192.168.1.1` (4 números de 0-255)
**IPv6**: `2001:0db8:85a3:0000:0000:8a2e:0370:7334` (más direcciones, nuevo estándar)

**CIDR notation**: `192.168.1.0/24` significa "todas las IPs de 192.168.1.0 a 192.168.1.255"

### TCP vs UDP

**TCP** (Transmission Control Protocol):
- Conexión: hay que establecer conexión primero (handshake)
- Orden: los packets llegan en orden
- Confiable: si se pierde un packet, se reenvía
- Lento: requiere mucho overhead

Usado en: HTTP, HTTPS, email, FTP

**UDP** (User Datagram Protocol):
- Sin conexión: simplemente envías
- Sin garantía: si se pierde un packet, no se reenvía
- Rápido: poco overhead
- Se usa cuando la velocidad > exactitud

Usado en: video streaming, gaming, DNS queries

### TCP Handshake (3-way)

Antes de enviar datos con TCP, hay un handshake:

1. **SYN**: Client dice "quiero conectarme"
2. **SYN-ACK**: Server dice "OK, la conexión está abierta"
3. **ACK**: Client confirma

Recién después se envían datos. Por eso TCP es confiable pero lento.

### Puertos

Un puerto es como una "puerta" en una computadora. Puerto 80 es para HTTP, 443 para HTTPS, 3306 para MySQL, etc.

Dirección completa: `IP:puerto` (ej. `192.168.1.1:3000`)

### Routing

Cuando envías un packet, no va directo. Viaja por múltiples routers. Cada router decide "por dónde enviarlo" basado en la dirección IP destino.

## Mi explicación

[Aquí escribís vos tu comprensión personal del tema]

---

**Próximo paso**: Cuando hayas estudiado este tema y escrito "Mi explicación", me preguntas por ejercicios aplicados.
