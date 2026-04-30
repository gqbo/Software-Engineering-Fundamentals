---
title: "CORS y same-origin policy"
difficulty: "basico"
order: 6
description: "Same-Origin Policy, CORS, preflight requests, credenciales entre orígenes, debugging de CORS."
why: "Cada dev debe entender CORS. Es la razón por la que ciertas requests fallan misteriosamente."
topics:
  - "Same-Origin Policy: qué es un \"origen\", por qué existe — Definición de origen, por qué el navegador lo aplica"
  - "CORS: cómo relaja SOP de manera segura — Qué es CORS, cómo funciona"
  - "Preflight requests: cuándo ocurren, métodos seguro vs unsafe — Cuándo el navegador hace preflight, qué es"
  - "Headers CORS: Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Credentials — Qué hace cada header"
  - "Credenciales: cookies, authorization headers, cross-origin — Cómo enviar credenciales en requests cross-origin"
  - "Errores comunes: CORS errors y cómo debuggearlos — Errores típicos, cómo leerlos"
  - "CORS en Express: usando middleware — Cómo configurar CORS en un servidor"
resources: []
---

## Recursos

## Explicación

### ¿Por qué es importante?
