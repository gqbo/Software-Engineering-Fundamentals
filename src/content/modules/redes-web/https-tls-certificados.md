---
title: "HTTPS, TLS y certificados"
difficulty: "intermedio"
order: 4
description: "Diferencia HTTP vs HTTPS, handshake TLS, certificados digitales (X.509), cadena de confianza, autenticación de servidor."
why: "Todo en producción debería ser HTTPS. Si no sabés cómo funciona TLS, no sabés por qué es seguro."
topics:
  - "Cifrado simétrico vs asimétrico"
  - "TLS handshake: pasos de la negociación"
  - "Certificados digitales: qué son, quién los emite (CAs), cadena de confianza"
  - "Certificados self-signed vs firmados por CA"
  - "Autenticación mutua (mTLS)"
  - "Perfect forward secrecy"
  - "HSTS y HPKP"
  - "Herramientas: `openssl`, `certbot`"
resources: []
---

## ¿Por qué esto?

Cuando navegás a `https://google.com`, estás usando TLS (Transport Layer Security). El "s" en HTTPS es "secure", que significa que nadie puede ver tu tráfico. Entender cómo funciona TLS es entender por qué es seguro, y por qué certificados importan.

## Conceptos clave

### Cifrado simétrico vs asimétrico

**Cifrado simétrico**: misma clave para encriptar y desencriptar.

```
Clave: "secreto123"
Encriptar: "hola" → "a8f2k9"
Desencriptar: "a8f2k9" → "hola"
```

Problema: ¿cómo compartes la clave sin que alguien la vea?

**Cifrado asimétrico**: dos claves (pública y privada).

```
Clave pública: cualquiera puede conocerla
Clave privada: solo tú la sabes

Encriptar con pública: cualquiera puede encriptar
Desencriptar con privada: solo tú puedes desencriptar
```

### TLS Handshake

Antes de enviar datos HTTPS:

1. **ClientHello**: Cliente dice "hola, qué versión de TLS usas?"
2. **ServerHello**: Servidor responde con versión, cifrado, certificado
3. **Certificate verification**: Cliente verifica certificado del servidor
4. **Key exchange**: Negocian una clave simétrica para la sesión
5. **Change Cipher Spec**: Cambian a cifrado
6. **Finished**: Ambos confirman, handshake completo

A partir de ahí, el tráfico está encriptado.

### Certificados digitales

Un certificado es como un pasaporte del servidor. Dice "Yo soy google.com".

Estructura: propietario, dominio, clave pública, firma de autoridad

**Self-signed**: tú firmas tu propio certificado (nadie confía)
**CA-signed**: una Autoridad Certificadora (CA) firma tu certificado (todos confían)

Autoridades certificadoras: DigiCert, Let's Encrypt, Comodo, etc.

### Cadena de confianza

Tu navegador confía en certificados raíz de CAs. Si un servidor tiene un certificado firmado por esa CA, el navegador confía en el servidor.

```
Root CA (Google confía) → Intermedia CA → Servidor certificate
```

Si alguien falsifica el certificado (no está firmado), el navegador lo rechaza.

## Mi explicación

[Aquí escribís vos tu comprensión personal del tema]

---

**Próximo paso**: Cuando hayas estudiado este tema y escrito "Mi explicación", me preguntas por ejercicios aplicados.
