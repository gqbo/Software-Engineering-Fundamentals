# DRAFT-CURRICULUM: Fundamentos de Ingeniería de Software

**Estado**: Borrador aprobado, ajustado por usuario  
**Última actualización**: 2026-04-29  
**Total de módulos**: 48  
**Stack**: TypeScript + Express, Python, SQL puro, Bash

---

## ESTRUCTURA DE CADA MÓDULO

Cada módulo en `src/content/modules/` tendrá esta estructura:

```markdown
---
title: "Título del módulo"
slug: "slug-unico"
category: "categoria-slug"
difficulty: "basico|intermedio|avanzado"
order: N
description: "1-2 líneas: qué cubre"
why: "1-2 líneas: por qué importa para vos"
topics:
  - Punto clave 1
  - Punto clave 2
  - ...
---

## ¿Por qué esto?

[Contextualización: por qué es importante este tema para tu carrera]

## Conceptos clave

### Concepto 1
[Explicación breve — el qué, no el por qué profundo]

### Concepto 2
[Idem]

...

## Mi explicación

[ACÁ ESCRIBÍS VOS — después de estudiar el tema]
[Cómo lo entendiste, con tus palabras, ejemplos propios, analogías]
[No es copypaste — es tu procesamiento del conocimiento]
```

**"Conceptos clave"** = guía de qué estudiar  
**"Mi explicación"** = tu síntesis personal después de aprender del tema

---

## CATEGORÍAS

### 1. Fundamentos (#d4a3ff violet) — 5 módulos

Temas: OOP, SOLID, DI/interfaces, clean code, abstracción y modularización.

#### F.1 — Programación orientada a objetos: clases, encapsulación, herencia, polimorfismo [user]

- **slug:** `oop-principios`
- **category:** `fundamentos`
- **difficulty:** `basico`
- **order:** 1
- **description:** Pillares de OOP: clases, objetos, encapsulación, herencia, polimorfismo, composición.
- **why:** Modelo mental de casi todo código backend. Necesario entenderlo profundamente.
- **topics:**
  - Clases y objetos: estado (propiedades), comportamiento (métodos)
  - Encapsulación: public, private, protected; getters/setters
  - Herencia: relación IS-A, method overriding, super
  - Polimorfismo: métodos virtuales, overriding, interfaces
  - Composición vs herencia: cuándo usar cada una
  - Abstracción: esconder complejidad, exponer interface simple
- **resources:** []

#### F.2 — Principios SOLID [user]

- **slug:** `principios-solid`
- **category:** `fundamentos`
- **difficulty:** `intermedio`
- **order:** 2
- **description:** Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.
- **why:** La diferencia entre código mantenible y código que crece mal. Patrón mental de código profesional.
- **topics:**
  - Single Responsibility: una clase, una razón para cambiar
  - Open-Closed: abierto para extensión, cerrado para modificación
  - Liskov Substitution: subclases reemplazables sin romper código
  - Interface Segregation: muchas interfaces pequeñas > una grande
  - Dependency Inversion: depender de abstracciones, no implementaciones
  - Cómo SOLID impacta en arquitectura
- **resources:** []

#### F.3 — Inyección de dependencias e interfaces [user]

- **slug:** `inyeccion-dependencias-interfaces`
- **category:** `fundamentos`
- **difficulty:** `intermedio`
- **order:** 3
- **description:** Desacoplamiento usando interfaces, tipos de inyección (constructor, property, method), testing con mocks.
- **why:** Base para código testeable y mantenible. Sin DI, no sabés cómo mockear en tests.
- **topics:**
  - Tight coupling vs loose coupling
  - Interfaces como contratos
  - Constructor injection, property injection, method injection
  - Service locator (patrón anti)
  - DI containers (concepto, no implementación pesada)
  - Relación con SOLID (especialmente DIP)
  - Mocking en tests con DI
- **resources:** []

#### F.4 — Clean code: nombres, funciones, comentarios, abstracción [user]

- **slug:** `clean-code`
- **category:** `fundamentos`
- **difficulty:** `basico`
- **order:** 4
- **description:** Prácticas para código legible, mantenible, autoexplicativo. Naming, tamaño de funciones, cuándo comentar.
- **why:** El código se lee 10x más que se escribe. Código limpio = comunicación eficaz con el equipo.
- **topics:**
  - Nombres significativos: variables, funciones, clases
  - Nombres que revelan intención
  - Evitar nombres ambiguos, números mágicos
  - Funciones pequeñas (una responsabilidad, hacerla bien)
  - Nivel de abstracción: cohesión
  - Comentarios: cuándo (WHY), cuándo no (WHAT)
  - Complejidad ciclomática
  - Duplication is the enemy of maintainability
- **resources:** []

#### F.5 — Abstracción y modularización [recomendado]

- **slug:** `abstraccion-modularizacion`
- **category:** `fundamentos`
- **difficulty:** `intermedio`
- **order:** 5
- **description:** Cómo abstraer complejidad, crear módulos cohesivos, separación de concerns, interfaces bien definidas.
- **why:** Permite que código crezca sin volverse inmanejable. La diferencia entre sistemas que escalan y spaghetti.
- **topics:**
  - Abstracción: esconder detalles, exponer interface simple
  - Niveles de abstracción: alto (qué), bajo (cómo)
  - Módulos: qué es, cohesión, acoplamiento
  - Boundaries: entre módulos, interfaces claras
  - Separación de concerns: cada módulo, una cosa
  - Information hiding: qué expones, qué ocultas
  - Refactoring hacia modularidad
- **resources:** []

---

### 2. Redes y Web (#a3ffd4 teal) — 6 módulos

Temas: IP, DNS, HTTP/HTTPS, TLS, WebSockets, CORS.

#### W.1 — Cómo funciona internet: IP, TCP/UDP, modelo OSI [user]

- **slug:** `como-funciona-internet`
- **category:** `redes-web`
- **difficulty:** `basico`
- **order:** 1
- **description:** Modelo OSI, capas de red, dirección IP, TCP vs UDP, handshake de TCP, routing.
- **why:** Si no sabés cómo viaja un packet, no entendés por qué las cosas fallan como fallan.
- **topics:**
  - Modelo OSI: 7 capas (física → aplicación)
  - Dirección IP: qué es, IPv4 vs IPv6, CIDR
  - TCP (Transmission Control Protocol): conexión, fiable, handshake 3-way
  - UDP (User Datagram Protocol): sin conexión, rápido, sin garantía
  - Puertos: qué son, bien conocidos (80, 443, 3306, etc)
  - Routing: cómo viaja un packet
  - Paquetes y frames: estructura mínima
- **resources:** []

#### W.2 — DNS y dominios [user]

- **slug:** `dns-dominios`
- **category:** `redes-web`
- **difficulty:** `basico`
- **order:** 2
- **description:** Sistema de nombres de dominio, resolución DNS, registros (A, AAAA, CNAME, MX, TXT), TTL, propagación.
- **why:** Todos los días escribís un dominio. Deberías entender qué está pasando detrás.
- **topics:**
  - Nombres de dominio: estructura (TLD, SLD, subdominio)
  - Resolución DNS: proceso paso a paso
  - Tipos de resolvers: recursive, authoritative, caching
  - Registros DNS: A, AAAA, CNAME, MX, TXT, SRV
  - TTL (Time To Live): por qué existen, impacto en cambios
  - Propagación de DNS: por qué tarda en cambiar
  - Herramientas: `nslookup`, `dig`, `host`
- **resources:** []

#### W.3 — HTTP/HTTPS: request, response, status codes, headers [user]

- **slug:** `http-https-protocolo`
- **category:** `redes-web`
- **difficulty:** `basico`
- **order:** 3
- **description:** Protocolo HTTP, métodos (GET, POST, PUT, DELETE, PATCH), status codes, headers estándar, versiones (1.1, 2, 3).
- **why:** Es el idioma del backend. Si no sabés qué significa 429 o cuándo usar PUT vs PATCH, estás ciego.
- **topics:**
  - Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS
  - Status codes: categorías (1xx, 2xx, 3xx, 4xx, 5xx)
  - Status codes comunes: 200, 201, 204, 301, 304, 400, 401, 403, 404, 409, 429, 500, 502, 503
  - Headers: Content-Type, Accept, Authorization, Cache-Control, ETag, Set-Cookie
  - Request/Response cycle
  - HTTP/1.1 vs HTTP/2 vs HTTP/3: diferencias
  - Idempotencia: cuáles métodos son idempotentes
- **resources:** []

#### W.4 — HTTPS, TLS y certificados [recomendado]

- **slug:** `https-tls-certificados`
- **category:** `redes-web`
- **difficulty:** `intermedio`
- **order:** 4
- **description:** Diferencia HTTP vs HTTPS, handshake TLS, certificados digitales (X.509), cadena de confianza, autenticación de servidor.
- **why:** Todo en producción debería ser HTTPS. Si no sabés cómo funciona TLS, no sabés por qué es seguro.
- **topics:**
  - Cifrado simétrico vs asimétrico
  - TLS handshake: pasos de la negociación
  - Certificados digitales: qué son, quién los emite (CAs), cadena de confianza
  - Certificados self-signed vs firmados por CA
  - Autenticación mutua (mTLS)
  - Perfect forward secrecy
  - HSTS y HPKP
  - Herramientas: `openssl`, `certbot`
- **resources:** []

#### W.5 — WebSockets, SSE y comunicación en tiempo real [recomendado]

- **slug:** `websockets-sse-realtime`
- **category:** `redes-web`
- **difficulty:** `intermedio`
- **order:** 5
- **description:** WebSockets (bidireccional), Server-Sent Events (SSE, unidireccional), long polling, cuándo usar cada uno.
- **why:** Fundamental para features en tiempo real (chat, notificaciones, live updates).
- **topics:**
  - WebSockets: upgrading de HTTP, full-duplex
  - WebSocket handshake y frame format
  - SSE (Server-Sent Events): unidireccional, basado en HTTP
  - Long polling: alternativa antigua
  - Comparación: WebSockets vs SSE vs polling
  - Casos de uso: chat (WebSockets), notificaciones (SSE), datos en vivo (ambos)
  - Herramientas: ws library, socket.io
- **resources:** []

#### W.6 — CORS y same-origin policy [recomendado]

- **slug:** `cors-same-origin`
- **category:** `redes-web`
- **difficulty:** `basico`
- **order:** 6
- **description:** Same-Origin Policy, CORS, preflight requests, credenciales entre orígenes, debugging de CORS.
- **why:** Cada dev debe entender CORS. Es la razón por la que ciertas requests fallan misteriosamente.
- **topics:**
  - Same-Origin Policy: qué es un "origen", por qué existe
  - CORS: cómo relaja SOP de manera segura
  - Preflight requests: cuándo ocurren, métodos seguro vs unsafe
  - Headers CORS: Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Credentials
  - Credenciales: cookies, authorization headers, cross-origin
  - Errores comunes: CORS errors y cómo debuggearlos
  - CORS en Express: usando middleware
- **resources:** []

---

### 3. APIs y Auth (#ffa3a3 coral) — 8 módulos

Temas: REST, tipos de APIs, middlewares, autenticación, autorización, sessions, JWT, OAuth, patrones avanzados.

#### A.1 — Diseño de REST APIs: resources, verbos, convenciones [user]

- **slug:** `rest-api-design`
- **category:** `apis-auth`
- **difficulty:** `basico`
- **order:** 1
- **description:** Principios REST, mapeo de recursos a endpoints, métodos HTTP, status codes apropiados, convenciones.
- **why:** 99% de las APIs son REST. Si no sabés diseñarlas bien, escalás mala arquitectura.
- **topics:**
  - REST: principios (stateless, cacheable, uniform interface)
  - Recursos vs acciones: /users vs /getUserList
  - Mapping: recurso + método HTTP = acción
  - Colecciones vs items: /users vs /users/123
  - Sub-recursos: /users/123/posts
  - Paginación, filtrado, sorting en queries
  - Convenciones de naming: kebab-case vs snake_case
  - Status codes apropiados: 200, 201, 204, 400, 404, 409, etc
  - Response format: estructura JSON, error responses
- **resources:** []

#### A.2 — Tipos de APIs: REST, GraphQL, gRPC, SOAP — cuándo usar cada uno [recomendado]

- **slug:** `tipos-apis`
- **category:** `apis-auth`
- **difficulty:** `intermedio`
- **order:** 2
- **description:** Comparativa REST, GraphQL, gRPC, SOAP. Fortalezas, debilidades, casos de uso.
- **why:** No es REST o nada. Según el caso, otra cosa encaja mejor. Necesitás saber las tradeoffs.
- **topics:**
  - REST: strengths, weaknesses, casos de uso
  - GraphQL: query language, overfetching/underfetching, schema
  - gRPC: protocol buffers, streaming bidireccional, performance
  - SOAP: XML, WSDL, enterprise legacy
  - Comparación: performance, flexibilidad, complejidad, adopción
  - Cuándo usar cada una: ejemplos reales
- **resources:** []

#### A.3 — Middlewares y pipeline de request en Express [user]

- **slug:** `middlewares-express-pipeline`
- **category:** `apis-auth`
- **difficulty:** `intermedio`
- **order:** 3
- **description:** Qué son middlewares, orden de ejecución, middlewares custom, error handling, async middlewares.
- **why:** Middlewares son donde vive la lógica transversal. Si no los entendés, tu código será un desastre.
- **topics:**
  - Qué es un middleware: función que procesa requests
  - Orden de ejecución: arriba a abajo, next()
  - Middlewares built-in en Express: express.json(), express.static()
  - Middlewares de terceros: cors, morgan, helmet
  - Escribir middlewares custom: request modification, validation
  - Scope de middlewares: global vs ruta-specific
  - Error handling middleware: 4 parámetros (err, req, res, next)
  - Async middlewares: manejo de promesas y errores
- **resources:** []

#### A.4 — Autenticación vs Autorización [user]

- **slug:** `autenticacion-autorizacion`
- **category:** `apis-auth`
- **difficulty:** `basico`
- **order:** 4
- **description:** Diferencia entre autenticación (quién sos) y autorización (qué podés hacer), flujos, roles, permisos.
- **why:** Confundir estos términos lleva a bugs de seguridad graves. Son conceptos distintos.
- **topics:**
  - Autenticación: verificar identidad, proof (password, MFA, biometría)
  - Autorización: access control, roles, scopes, permissions
  - Flujo: auth primero → luego authz
  - Password security: hashing (bcrypt, argon2), salt, pepper
  - Role-based access control (RBAC): roles → permisos
  - Attribute-based access control (ABAC): policies más granulares
  - MFA (Multi-factor authentication): factor adicional
- **resources:** []

#### A.5 — Sessions y cookies [user]

- **slug:** `sessions-cookies`
- **category:** `apis-auth`
- **difficulty:** `basico`
- **order:** 5
- **description:** Cómo funcionan las cookies, qué es una session, almacenamiento server-side, flags de seguridad (httpOnly, secure, sameSite).
- **why:** Es el mecanismo de autenticación más antiguo y todavía el más usado en webs. Necesitás entenderlo a fondo.
- **topics:**
  - HTTP stateless: por qué necesitamos sessions
  - Cookies: qué son, cómo se envían (Set-Cookie → Cookie header)
  - Session ID: identificador único del cliente
  - Session store: memory, Redis, database
  - Server-side session: qué se guarda
  - Flags de seguridad: httpOnly, secure, sameSite
  - Session lifecycle: creación, renovación, expiración
  - CSRF: Cross-Site Request Forgery y mitigación
- **resources:** []

#### A.6 — JWT y tokens [user]

- **slug:** `jwt-tokens`
- **category:** `apis-auth`
- **difficulty:** `basico`
- **order:** 6
- **description:** JSON Web Tokens, estructura (header.payload.signature), signing, verification, refresh tokens, expiration.
- **why:** JWT es el estándar para APIs stateless y mobile apps. OAuth 2.0, OpenID Connect, todo usa JWT.
- **topics:**
  - JWT vs sessions: stateless, escalable, cross-domain
  - Estructura de JWT: header (algoritmo), payload (claims), signature
  - Claims: estándar (iss, sub, aud, exp, iat) vs custom
  - Signing: algoritmos (HS256, RS256)
  - Verificación: firma + no expirado
  - Token placement: Authorization header (Bearer) vs cookie
  - Refresh tokens: access corta duración + refresh de larga duración
  - Token rotation y revocation
- **resources:** []

#### A.7 — OAuth 2.0 y OpenID Connect [recomendado]

- **slug:** `oauth-openid-connect`
- **category:** `apis-auth`
- **difficulty:** `intermedio`
- **order:** 7
- **description:** OAuth 2.0 (autorización delegada), flows, OpenID Connect (identidad), PKCE, diferencias.
- **why:** Es cómo las aplicaciones integran "Login con Google/GitHub". Necesitás saber qué está pasando.
- **topics:**
  - OAuth 2.0: autorización delegada, no autenticación
  - Flows: Authorization Code, Client Credentials, Implicit, Resource Owner
  - PKCE: Proof Key for Public Clients
  - OpenID Connect: capa de identidad sobre OAuth 2.0
  - Diferencia OAuth vs OIDC
  - ID token vs Access token
  - Scope: qué permisos solicita la app
  - Consentimiento de usuario
- **resources:** []

#### A.8 — Patrones de API: rate limiting, idempotencia, paginación, versioning [recomendado]

- **slug:** `patrones-api-avanzados`
- **category:** `apis-auth`
- **difficulty:** `intermedio`
- **order:** 8
- **description:** Rate limiting, idempotencia, paginación, sorting, filtrado, versionado de APIs, documentación.
- **why:** Son detalles que transforman una API juguete en una API production.
- **topics:**
  - Rate limiting: por IP, por usuario, algoritmos (token bucket, sliding window)
  - Headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset
  - Idempotencia: qué endpoints, Idempotency-Key header
  - Paginación: offset/limit vs cursor-based
  - Sorting: parámetros, orden ascendente/descendente
  - Filtrado: query parameters, operadores complejos
  - API versionado: URL versioning vs header
  - Deprecación: cómo anunciar y retirar versiones
  - Documentación: OpenAPI/Swagger
- **resources:** []

---

### 4. Datos (#a3f7bf mint) — 7 módulos

Temas: SQL básico y avanzado, diseño de schemas, índices, ACID, tipos de DB, caching.

#### D.1 — SQL desde cero: DDL, DML, joins [user]

- **slug:** `sql-desde-cero`
- **category:** `datos`
- **difficulty:** `basico`
- **order:** 1
- **description:** Lenguaje SQL, DDL (CREATE, ALTER, DROP), DML (SELECT, INSERT, UPDATE, DELETE), JOINs (INNER, LEFT, RIGHT, FULL).
- **why:** Si no sabés escribir una query SQL decente, no trabajás con datos. Es No-Negotiable.
- **topics:**
  - DDL: CREATE TABLE, ALTER TABLE, DROP TABLE, constraints (PK, FK, UNIQUE, CHECK, NOT NULL, DEFAULT)
  - DML: SELECT, INSERT, UPDATE, DELETE
  - JOINs: INNER, LEFT, RIGHT, FULL, CROSS
  - WHERE, GROUP BY, HAVING, ORDER BY
  - Agregaciones: COUNT, SUM, AVG, MIN, MAX
  - DISTINCT, UNION, UNION ALL
  - Subqueries: en FROM, WHERE, SELECT
  - Aliases: tablas y columnas
- **resources:** []

#### D.2 — SQL para entrevistas: subqueries, window functions, CTEs [user]

- **slug:** `sql-entrevistas`
- **category:** `datos`
- **difficulty:** `intermedio`
- **order:** 2
- **description:** Subqueries correlacionadas, window functions (ROW_NUMBER, RANK, LAG, LEAD, SUM OVER), CTEs (Common Table Expressions).
- **why:** Las entrevistas técnicas de datos preguntan estas. Y el código real las usa constantemente.
- **topics:**
  - Subqueries correlacionadas: acceso a tabla exterior desde subquery
  - EXISTS, NOT EXISTS, IN, NOT IN
  - Window functions: PARTITION BY, ORDER BY dentro de OVER
  - Row functions: ROW_NUMBER, RANK, DENSE_RANK, NTILE
  - Aggregate window functions: SUM, AVG, COUNT OVER, MIN, MAX
  - Lag/Lead: acceso a filas previas/siguientes
  - CTE (WITH clause): query nombrada reutilizable
  - Recursive CTEs: para datos jerárquicos
  - CASE: condicionales en SQL
- **resources:** []

#### D.3 — Diseño de schemas: normalización vs denormalización [recomendado]

- **slug:** `diseño-schemas`
- **category:** `datos`
- **difficulty:** `intermedio`
- **order:** 3
- **description:** Formas normales (1NF, 2NF, 3NF, BCNF), anomalías, normalización, cuándo desnormalizar por performance.
- **why:** Un schema malo escala a la mierda. Un schema bueno escala. La diferencia es normalización inteligente.
- **topics:**
  - Anomalías: inserción, actualización, eliminación
  - Formas normales: 1NF, 2NF, 3NF, BCNF, 4NF, 5NF
  - Dependencias funcionales: qué determinan qué
  - Normalización: cuándo aplicar
  - Desnormalización: casos específicos (materialized views, caching)
  - Desnormalización estratégica: readiness por performance
  - Índices y denormalización
  - Trade-offs: normalización vs denormalización
- **resources:** []

#### D.4 — Indexes y planes de ejecución [recomendado]

- **slug:** `indexes-query-plans`
- **category:** `datos`
- **difficulty:** `intermedio`
- **order:** 4
- **description:** Qué son índices (B-trees, hash), cuándo crearlos, EXPLAIN plans, query optimization, statistics.
- **why:** Una query sin índices puede ser 100x más lenta. Pero un índice incorrecto también ralentiza.
- **topics:**
  - Índices: qué son, tipos (B-tree, hash, bitmap, columnar)
  - Cuándo crear índices: columnas en WHERE, JOINs, ORDER BY
  - Cardinality: índices en columnas con muchos valores distintos
  - Composite indexes: orden importa
  - Cost de índices: insert/update/delete ralentizado, storage
  - EXPLAIN / EXPLAIN ANALYZE: leer un query plan
  - Sequential scan vs index scan
  - Join strategies: nested loop, merge join, hash join
  - Query optimization hints
  - Statistics: actualizar stats para optimización
- **resources:** []

#### D.5 — ACID y transacciones [user]

- **slug:** `acid-transacciones`
- **category:** `datos`
- **difficulty:** `intermedio`
- **order:** 5
- **description:** Propiedades ACID (Atomicity, Consistency, Isolation, Durability), niveles de aislamiento, deadlocks, rollback.
- **why:** Sin ACID, tu data se corre. Es el corazón de cualquier DB seria.
- **topics:**
  - Atomicity: todo o nada
  - Consistency: reglas de datos mantienen
  - Isolation: transacciones independientes, niveles (READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE)
  - Durability: escribe persisten
  - Anomalías: dirty read, non-repeatable read, phantom read
  - Transacciones en SQL: BEGIN, COMMIT, ROLLBACK
  - Savepoints: rollback parcial
  - Deadlocks: cuándo ocurren, cómo evitarlos
  - Lock strategies: pessimistic vs optimistic
- **resources:** []

#### D.6 — Tipos de bases de datos y cuándo usar cada una [user]

- **slug:** `tipos-bases-datos`
- **category:** `datos`
- **difficulty:** `intermedio`
- **order:** 6
- **description:** Relacional, NoSQL (documento, key-value, graph, time-series), cuándo usar cada una, polyglot persistence.
- **why:** No todo es SQL. A veces document DB es mejor. A veces graph. Necesitás pensar en la herramienta correcta.
- **topics:**
  - Relacional: ACID, schema rígido, SQL, scaling vertical
  - Document (MongoDB, CouchDB): flexible, sin schema, queries por documento, horizontal
  - Key-value (Redis, Memcached): rápido, datos en memoria, caché, sessions
  - Graph (Neo4j): relaciones complejas, traversals eficientes
  - Time-series (InfluxDB, TimescaleDB): optimizado para métricas, logs
  - Columnar (Cassandra, DuckDB): OLAP, analytics
  - Búsqueda (Elasticsearch): full-text search, inverted indexes
  - Trade-offs: consistency vs availability (CAP theorem)
  - Polyglot persistence: usar múltiples DBS
- **resources:** []

#### D.7 — Caching: Redis y estrategias [recomendado]

- **slug:** `caching-redis`
- **category:** `datos`
- **difficulty:** `intermedio`
- **order:** 7
- **description:** Redis, estructuras de datos, estrategias de cache (cache-aside, write-through, write-behind), invalidation, distributed caching.
- **why:** La mayoría de performance improvements vienen de caché. Redis es el estándar.
- **topics:**
  - Redis: in-memory data store, operaciones atómicas, TTL
  - Tipos: strings, lists, sets, hashes, sorted sets, streams
  - Operaciones: GET, SET, DEL, INCR, LPUSH, SADD
  - TTL y expiración: EXPIRE, PEXPIRE, PERSIST
  - Cache-aside: app checks cache, miss → DB, actualiza cache
  - Write-through: app writes a cache + DB, luego responde
  - Write-behind: app writes a cache, async to DB
  - Cache invalidation: timing, strategies (TTL, event-driven, manual)
  - Cache stampede: muchos misses simultáneos
  - Distributed caching: replicación, consistency
- **resources:** []

---

### 5. Arquitectura (#a3d5ff sky) — 7 módulos

Temas: design patterns, Clean Architecture, MVC, microservicios, system design, event-driven.

#### AR.1 — Patrones de diseño: creational (factory, builder, singleton) [user]

- **slug:** `patrones-creational`
- **category:** `arquitectura`
- **difficulty:** `intermedio`
- **order:** 1
- **description:** Patrones para crear objetos: Factory, Builder, Singleton. Cuándo usar cada uno, trade-offs.
- **why:** Estos patrones resuelven problemas reales. No son paja teórica.
- **topics:**
  - Factory Pattern: centralizar creación de objetos
  - Abstract Factory: familias de objetos relacionados
  - Builder Pattern: construcción step-by-step, optional parameters, fluent API
  - Singleton: una sola instancia global
  - Singleton trade-offs: testing, threading, global state
  - Prototype Pattern: clonar objetos
  - Casos de uso reales: loggers, query builders, ORMs
- **resources:** []

#### AR.2 — Patrones de diseño: structural y behavioral [recomendado]

- **slug:** `patrones-structural-behavioral`
- **category:** `arquitectura`
- **difficulty:** `intermedio`
- **order:** 2
- **description:** Structural (Adapter, Decorator, Facade, Proxy) y Behavioral (Observer, Strategy, Command, State, Chain of Responsibility).
- **why:** Estos patrones enseñan cómo estructurar código mantenible.
- **topics:**
  - Adapter: compatibilizar interfaces distintas
  - Decorator: agregar comportamiento dinámicamente
  - Facade: simplificar interfaz de subsistema complejo
  - Proxy: intermediario para control, lazy loading
  - Observer: suscripción a eventos, loose coupling
  - Strategy: algoritmos intercambiables
  - Command: encapsular requests como objetos
  - State: comportamiento basado en estado
  - Chain of Responsibility: pasar request entre handlers
  - Template Method: estructura en clase base, detalles en subclases
- **resources:** []

#### AR.3 — MVC y arquitectura por capas [user]

- **slug:** `mvc-arquitectura-capas`
- **category:** `arquitectura`
- **difficulty:** `basico`
- **order:** 3
- **description:** Patrón MVC, arquitectura por capas (presentación, lógica, datos), separación de responsabilidades, service layer.
- **why:** Probablemente tu primer proyecto grande usa MVC. Necesitás entenderlo para no convertirlo en spaghetti.
- **topics:**
  - MVC: Model (data), View (presentation), Controller (logic)
  - Data flow: request → Controller → Model → View
  - Separation of concerns: cada componente, una responsabilidad
  - Arquitectura por capas: Presentation, Business Logic, Data Access, Database
  - Fat models, thin controllers: modelos ricos, lógica en modelo
  - Thin models, fat controllers: modelo es solo data (anti-pattern)
  - Service layer: lógica intermedia, reutilizable
  - Repository pattern: abstracción del acceso a datos
  - Dónde va cada cosa: validation, business rules, formatting
- **resources:** []

#### AR.4 — Clean Architecture y Hexagonal (Ports & Adapters) [user]

- **slug:** `clean-architecture-hexagonal`
- **category:** `arquitectura`
- **difficulty:** `avanzado`
- **order:** 4
- **description:** Clean Architecture (círculos), Hexagonal (Ports & Adapters), independencia de frameworks, testabilidad, inversión de dependencias.
- **why:** Esto escala. Para sistemas que crecen y viven años, es imprescindible.
- **topics:**
  - Dependencia: puntos hacia adentro (centro = lógica pura)
  - Capas: Entities, Use Cases, Interface Adapters, Frameworks & Drivers
  - Puertos: interfaces que define el negocio
  - Adaptadores: implementaciones concretas (PostgreSQL, REST, etc)
  - Inversión de dependencias: inyectar adaptadores en use cases
  - Testing: cada capa testeable sin dependencias externas
  - Frameworks agnostic: cambiar Express por Fastify sin tocar lógica
  - Costo: mayor complejidad al inicio
- **resources:** []

#### AR.5 — Microservicios vs Monolito [recomendado]

- **slug:** `microservicios-vs-monolito`
- **category:** `arquitectura`
- **difficulty:** `intermedio`
- **order:** 5
- **description:** Monolito (un solo proceso) vs microservicios (procesos independientes), trade-offs, cuándo escalar.
- **why:** Monolito primero. Microservicios cuando duele. Si rompes monolito prematuramente, te duele diferente.
- **topics:**
  - Monolito: simple, deployment fácil, testing fácil, debugging fácil, scaling difícil
  - Microservicios: independencia, escalabilidad per-service, complejidad operacional
  - Transición: monolito modular → microservicios
  - Service discovery: cómo se encuentran los servicios
  - Inter-service communication: síncrono (HTTP, gRPC) vs asíncrono
  - Data consistency: DDD, sagas, eventual consistency
  - Fallback y resilience: circuit breaker, timeouts, retries
  - Observabilidad: traces distribuidos, logs centralizados
- **resources:** []

#### AR.6 — System design: load balancers, colas, caching, sharding [recomendado]

- **slug:** `system-design`
- **category:** `arquitectura`
- **difficulty:** `avanzado`
- **order:** 6
- **description:** Diseño de sistemas a escala: load balancing, message queues, caching, particionamiento, redundancia, CDN, API gateway.
- **why:** Esto es lo que los FAANG preguntan en entrevistas. Entender la infraestructura en la que vive tu código.
- **topics:**
  - Load balancing: round-robin, least connections, weighted, sticky sessions
  - Colas (message brokers): Kafka, RabbitMQ, async processing
  - Caching: local, distributed (Redis), invalidation strategies
  - Sharding (horizontal partitioning): por hash, range, directory
  - Replication: master-slave, master-master, eventual consistency
  - CDN: edge caching, geographical distribution
  - API gateway: single entry point, rate limiting, autenticación
  - Monitoring: métricas, alertas, SLO/SLA
  - Casos de uso: feed, e-commerce, real-time analytics
- **resources:** []

#### AR.7 — Event-driven y async patterns [recomendado]

- **slug:** `event-driven-async`
- **category:** `arquitectura`
- **difficulty:** `intermedio`
- **order:** 7
- **description:** Arquitecturas event-driven, publish-subscribe, event sourcing, CQRS, eventual consistency, sagas.
- **why:** Muchos problemas naturalmente son eventos. Pensar event-driven cambia tu forma de estructurar.
- **topics:**
  - Event-driven: entities emiten eventos, otros escuchan y reaccionan
  - Pub/Sub: publicador no sabe quién escucha (loose coupling)
  - Message brokers: Kafka, RabbitMQ
  - Event sourcing: guardar eventos, no estado final
  - CQRS: Command Query Responsibility Segregation
  - Eventual consistency: no immediate consistency, pero eventual
  - Sagas: transacciones distribuidas sin 2PC
  - Dead letter queues: manejo de fallos
  - Patterns: outbox pattern, choreography vs orchestration
- **resources:** []

---

### 6. Sistemas y DevOps (#ffe0a3 amber) — 6 módulos

Temas: Linux, procesos/threads, Docker, Git, CI/CD, observabilidad.

#### S.1 — Linux básico: filesystem, permisos, comandos esenciales [user]

- **slug:** `linux-basico`
- **category:** `sistemas-devops`
- **difficulty:** `basico`
- **order:** 1
- **description:** Sistema de archivos Linux, permisos (chmod, chown), comandos esenciales (ls, grep, find, sed, awk), usuarios, grupos.
- **why:** Si trabajás en backend, vivirás en la terminal. Linux no es opcional.
- **topics:**
  - Filesystem: /, /home, /etc, /var, /tmp, estructura
  - Absoluto vs relativo paths
  - Permisos: read (r), write (w), execute (x) para user, group, others
  - chmod: notación octal (755, 644, 600) y simbólica
  - chown, chgrp: cambiar owner y grupo
  - Comandos: ls, cd, pwd, mkdir, cp, mv, rm, cat, less, grep, find, sed, awk
  - Pipes y redirección: |, >, >>, <, 2>, &>
  - Variables de entorno: PATH, HOME, USER
  - Búsqueda y procesamiento: grep, find, xargs
- **resources:** []

#### S.2 — Procesos, threads y concurrencia [user]

- **slug:** `procesos-threads-concurrencia`
- **category:** `sistemas-devops`
- **difficulty:** `intermedio`
- **order:** 2
- **description:** Qué es un proceso, threads, context switching, race conditions, mutex/semaphores, deadlocks.
- **why:** Tu código corre en procesos y threads. Si no entendés cómo funciona, vas a tener bugs silenciosos.
- **topics:**
  - Proceso: instancia de programa con su propia memoria, stack, file descriptors
  - Threads: múltiples flows en el mismo proceso, comparten memoria
  - Context switching: cómo el OS cambia entre procesos/threads
  - Concurrencia: múltiples tasks en progreso
  - Paralelismo: múltiples tasks en paralelo (multi-core)
  - Race conditions: múltiples threads accediendo data simultáneamente
  - Mutex/locks: exclusión mutua, solo un thread puede acceder
  - Semaphores: contadores para controlar acceso
  - Deadlock: threads esperándose mutuamente
  - Starving: un thread nunca consigue tiempo
- **resources:** []

#### S.3 — Virtualización vs containers + Docker [user]

- **slug:** `virtualizacion-docker`
- **category:** `sistemas-devops`
- **difficulty:** `intermedio`
- **order:** 3
- **description:** Virtualización (VMs, hipervisores), containers (namespaces, cgroups), Docker, Dockerfile, docker-compose, networking.
- **why:** Docker es estándar en la industria. Sin containers, cada deploy es frágil.
- **topics:**
  - Virtualización: máquinas virtuales, overhead, hypervisor Type 1 vs Type 2
  - Containers: aislamiento ligero, procesos en el mismo kernel
  - Namespaces: aislamiento de network, PID, filesystem
  - Cgroups: límites de CPU, memoria
  - Docker: containerización, imágenes, registros
  - Dockerfile: instrucciones (FROM, RUN, COPY, WORKDIR, EXPOSE, ENTRYPOINT, CMD)
  - Layers: cada instrucción = una capa, caching, tamaño de imagen
  - docker-compose: orquestar múltiples containers
  - Networking: bridge, host, overlay networks
  - Volumes: persistencia de data
- **resources:** []

#### S.4 — Git: branching, merge, rebase, workflows [user]

- **slug:** `git-flujos`
- **category:** `sistemas-devops`
- **difficulty:** `intermedio`
- **order:** 4
- **description:** Git internals (commits, trees, blobs), branches, merging, rebasing, workflows (Git Flow, trunk-based), merge conflicts.
- **why:** Git es donde vive tu código. Entenderlo bien es eficiencia vs luchar.
- **topics:**
  - Objects: commits (snapshot), trees (directory), blobs (files), tags
  - HEAD, refs, branches: qué apuntan a qué
  - Staging area: qué se incluye en el commit
  - Branching: crear, cambiar, listar, borrar
  - Merging: fast-forward, 3-way merge, conflictos
  - Rebasing: reescribir historia, limpiar commits
  - Interactive rebase: squash, reorder, edit commits
  - Workflows: Git Flow, trunk-based
  - Cherry-pick: aplicar commits específicos
  - Stash: guardar cambios temporalmente
  - Revert vs reset: revert (nuevo commit), reset (mover HEAD)
- **resources:** []

#### S.5 — CI/CD y estrategias de deploy [recomendado]

- **slug:** `cicd-deploy`
- **category:** `sistemas-devops`
- **difficulty:** `intermedio`
- **order:** 5
- **description:** Integración continua, deployment continuo, pipelines, testing, blue-green, canary, rolling deploys, rollback.
- **why:** Sin CI/CD, despliegues son arriesgados. Con CI/CD bien, deployas múltiples veces por día sin susto.
- **topics:**
  - CI: tests automáticos en cada push, código siempre listo
  - CD: deployment automático a producción
  - Pipelines: stages (test, build, deploy), artifacts
  - Herramientas: GitHub Actions, GitLab CI, Jenkins, CircleCI
  - Testing en pipeline: unit, integration, e2e, linting, type checking
  - Blue-green: 2 ambientes, switch instantáneo, rollback fácil
  - Canary: gradualmente, primero en 5% de traffic
  - Rolling: reemplazar instancias una por una
  - Rollback: cómo volver atrás
  - Notifications: alertas, slack, email
  - Secrets management: variables de entorno sensibles
- **resources:** []

#### S.6 — Observabilidad: logs, metrics, traces [recomendado]

- **slug:** `observabilidad`
- **category:** `sistemas-devops`
- **difficulty:** `intermedio`
- **order:** 6
- **description:** Three pillars: logs (eventos), metrics (números en el tiempo), traces (request journey). Herramientas y prácticas.
- **why:** Si no podés ver qué está pasando en producción, trabajás a ciegas. Observabilidad te hace invencible.
- **topics:**
  - Logs: eventos, estructura (JSON vs text), niveles (debug, info, warn, error)
  - Centralized logging: ELK stack, Splunk, Datadog
  - Metrics: Prometheus, Grafana, InfluxDB
  - RED method: Request rate, Errors, Duration
  - Traces: distributed tracing, Jaeger, Zipkin
  - OpenTelemetry: estándar abierto para observability
  - Alerting: basado en métricas, runbooks
  - SLOs/SLIs: objetivos, indicadores
  - Debugging en prod: without stopping (live debugging)
- **resources:** []

---

### 7. Calidad y Proceso (#a3d5ff sky) — 5 módulos

Temas: testing, TDD, code review, SDLC, SDD con IA.

#### Q.1 — Tipos de testing y la pirámide [user]

- **slug:** `tipos-testing`
- **category:** `calidad-proceso`
- **difficulty:** `basico`
- **order:** 1
- **description:** Testing pyramid: unit tests (muchos, rápidos), integration tests (medios), e2e tests (pocos, lentos), contract testing.
- **why:** Escribir tests sin estrategia es caótico. La pirámide guía qué testear dónde.
- **topics:**
  - Unit tests: testing una función/método aislado
  - Mocking: reemplazar dependencias
  - Integration tests: testing múltiples módulos juntos
  - E2E tests: testing flujos completos desde el usuario
  - Contract tests: testing límites entre servicios
  - Test coverage: métrica, target, limitaciones
  - Flaky tests: tests que pasan a veces
  - Test structure: AAA (Arrange, Act, Assert)
  - Fixtures y factories para test data
- **resources:** []

#### Q.2 — TDD: red-green-refactor [user]

- **slug:** `tdd-red-green-refactor`
- **category:** `calidad-proceso`
- **difficulty:** `intermedio`
- **order:** 2
- **description:** Test-Driven Development, ciclo red-green-refactor, writing tests first, design through testing.
- **why:** Te obliga a pensar en la API antes de implementar. El código es más testeable.
- **topics:**
  - Red: test falla (no hay código aún)
  - Green: escribir el mínimo código para pasar
  - Refactor: limpiar, mejorar, sin romper tests
  - Ventajas: mejor diseño, confianza en cambios, documentación viva
  - Desventajas: más lento al inicio, requiere disciplina
  - Testing behavior vs implementation
  - Unittest vs BDD (Behavior-Driven Development)
  - Casos donde TDD es poderoso: algoritmos, APIs, lógica
  - Casos donde TDD es overhead: prototipado, UI experimental
- **resources:** []

#### Q.3 — Code review y refactoring [user]

- **slug:** `code-review-refactoring`
- **category:** `calidad-proceso`
- **difficulty:** `intermedio`
- **order:** 3
- **description:** Code review como práctica, qué buscar, cómo dar feedback constructivo, refactoring seguro con tests.
- **why:** Code reviews previenen bugs, mejoran conocimiento compartido. Refactoring mantiene el código joven.
- **topics:**
  - Code review: leer código ajeno, encontrar bugs, mejorar
  - Qué revisar: lógica, security, performance, style, tests
  - Feedback constructivo: específico, no personal, educativo
  - Conflictos en reviews: discrepar sobre estilo
  - Automated checks: linters, type checking, tests
  - Refactoring: mejorar sin cambiar behavior
  - Refactoring seguro: tests green antes, refactor, tests green después
  - Refactoring smells: código duplicado, métodos largos, clases grandes
  - Técnicas: extract method, extract class, move method, rename
- **resources:** []

#### Q.4 — SDLC: waterfall, agile, kanban, lean [recomendado]

- **slug:** `sdlc-metodologias`
- **category:** `calidad-proceso`
- **difficulty:** `basico`
- **order:** 4
- **description:** Ciclo de vida de software, metodologías (Waterfall, Agile, Scrum, Kanban, Lean), comparativa.
- **why:** Entender SDLC te ayuda a navegar cualquier proyecto, equipo, organización.
- **topics:**
  - Waterfall: secuencial, planificación completa upfront
  - Agile: iterativo, feedback constante, adaptive
  - Scrum: roles, artefactos, ceremonies (dailys, standups, retros)
  - Kanban: visualización, WIP limits, flow
  - Lean: eliminar waste, entregar rápido
  - Comparativa: cuándo usar cada una
  - Requirements gathering: cómo conseguir requerimientos buenos
  - User stories: INVEST principle
  - Estimation: story points, velocidad, burndown
  - Risk management: identificar, mitigar, monitorear
- **resources:** []

#### Q.5 — Spec-Driven Development con IA [user]

- **slug:** `sdd-con-ia`
- **category:** `calidad-proceso`
- **difficulty:** `intermedio`
- **order:** 5
- **description:** Cómo usar IA como herramienta sin que te controle. Especificaciones claras, iteración, verificación, human in the loop.
- **why:** IA está acá. Usarla bien es una skill. Usarla mal es entregarle el proyecto al LLM.
- **topics:**
  - Especificaciones: qué es, por qué importan, cómo escribirlas
  - SDD (Spec-Driven Development): antes de código, spec
  - Spec structure: problema, solución, verificación
  - Prompting: cómo dirigir IA, iteración, refinement
  - Verificación: leer código generado, tests, debuggear
  - Human in the loop: nunca accept ciegamente
  - Limites de IA: cuándo IA falla, necesitas pensar
  - Arquitectura: usar IA para boilerplate, vos para lógica
  - Security: IA no debería escribir auth desde cero
  - Testing: IA puede generar tests, vos verificas cobertura
- **resources:** []

---

### 8. Algoritmos y Análisis / Entrevistas (#e0aaff lavender) — 5 módulos

Temas: Big O, estructuras de datos lineales y no lineales, recursión, ordenamiento, búsqueda. **Enfoque:** preparación para entrevistas técnicas.

#### ALG.1 — Big O y análisis de complejidad [user]

- **slug:** `big-o-analisis-complejidad`
- **category:** `algoritmos-entrevistas`
- **difficulty:** `basico`
- **order:** 1
- **description:** Notación Big O, expresión de eficiencia de algoritmos, cómo identificar complejidad en código.
- **why:** Necesario para entrevistas técnicas. Común en LeetCode y pruebas de screening.
- **topics:**
  - Qué es Big O y por qué importa
  - Notaciones: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ), O(n!)
  - Cómo identificar la complejidad en código
  - Mejor caso, peor caso, caso promedio
  - Complejidad de tiempo vs espacio
- **resources:** []

#### ALG.2 — Estructuras de datos lineales: arrays, listas, pilas, colas, hashmaps [user]

- **slug:** `estructuras-datos-lineales`
- **category:** `algoritmos-entrevistas`
- **difficulty:** `basico`
- **order:** 2
- **description:** Arrays dinámicos, listas enlazadas, pilas, colas, tablas hash. Operaciones, complejidad, cuándo usar cada una.
- **why:** Bloques de construcción de problemas de entrevista. Necesitas dominar operaciones y trade-offs.
- **topics:**
  - Arrays: acceso O(1), inserción O(n), memoria contigua
  - Listas enlazadas: inserción O(1) en cabeza, búsqueda O(n)
  - Pilas (LIFO): push, pop, casos de uso
  - Colas (FIFO): enqueue, dequeue, casos de uso
  - Hashmaps/diccionarios: hashing, colisiones (chaining, linear probing), load factor
  - Comparación: cuándo usar cada estructura
- **resources:** []

#### ALG.3 — Estructuras de datos no lineales: árboles, grafos, heaps [recomendado]

- **slug:** `estructuras-datos-no-lineales`
- **category:** `algoritmos-entrevistas`
- **difficulty:** `intermedio`
- **order:** 3
- **description:** Árboles binarios, BST, heaps, grafos. Representaciones, búsquedas (DFS, BFS), algoritmos clásicos.
- **why:** Muy frecuentes en entrevistas. Problemas de árboles y grafos aparecen constantemente.
- **topics:**
  - Árboles: terminología (raíz, hoja, altura, profundidad)
  - Árboles binarios: recorridos (inorden, preorden, postorden)
  - Binary Search Trees: inserción, búsqueda, eliminación
  - Heaps: min-heap, max-heap, heap sort
  - Grafos: tipos (dirigido, no dirigido, ponderado, cíclico)
  - Representaciones: lista de adyacencia, matriz de adyacencia
  - Búsqueda en grafos: DFS, BFS
  - Algoritmos: Dijkstra, DFS, BFS
- **resources:** []

#### ALG.4 — Recursión y backtracking [recomendado]

- **slug:** `recursion-backtracking`
- **category:** `algoritmos-entrevistas`
- **difficulty:** `intermedio`
- **order:** 4
- **description:** Recursión, base case, call stack, problemas combinatorios, backtracking, memoización.
- **why:** Patrón muy común en entrevistas. Problemas de permutaciones, combinaciones, subsets.
- **topics:**
  - Recursión: qué es, call stack, base case, recursive case
  - Complejidad recursiva: recurrence relations
  - Backtracking: explorar y descartar, optimización
  - Memoización: almacenar resultados para evitar re-cálculo
  - Problemas comunes: permutaciones, combinaciones, subsets, N-Queens
- **resources:** []

#### ALG.5 — Ordenamiento y búsqueda [recomendado]

- **slug:** `ordenamiento-busqueda`
- **category:** `algoritmos-entrevistas`
- **difficulty:** `intermedio`
- **order:** 5
- **description:** Algoritmos de ordenamiento (bubble, merge, quick, heap), búsqueda (lineal, binaria), estabilidad, análisis comparativo.
- **why:** Base para muchos problemas de entrevista. Necesitas entender cada algoritmo en profundidad.
- **topics:**
  - Búsqueda lineal vs binaria
  - Algoritmos de orden: bubble sort, selection sort, insertion sort
  - Merge sort: divide and conquer, estabilidad
  - Quick sort: pivot, particionamiento, promedio vs peor caso
  - Heap sort: usando heaps
  - Bucket sort, counting sort (no comparison-based)
  - Análisis: tiempo, espacio, estabilidad, in-place
  - Cuándo usar cada uno
- **resources:** []

---

## RESUMEN

**Estructura final:**
- **8 categorías**: Fundamentos, Redes, APIs, Datos, Arquitectura, DevOps, Calidad, **Algoritmos/Entrevistas (al final)**
- **48 módulos totales**: 5+6+8+7+7+6+5+5 = 48
- **Stack confirmado**: TypeScript + Express (APIs/auth), Python (algoritmos), SQL puro, Bash
- **Sin ejercicios** en el borrador (los definimos cuando estudies cada tema)
- **Estructura clara**: cada módulo tiene "Conceptos clave" (guía) y "Mi explicación" (síntesis tuya)
- **Algoritmos al final**: enfoque claro en preparación para entrevistas, no en core curriculum

**Orden de aprendizaje recomendado:**
1. Fundamentos (OOP, SOLID, DI, clean code)
2. Redes y Web (cómo funciona internet)
3. APIs y Auth (diseño, autenticación, middlewares)
4. Datos (SQL, schemas, transacciones)
5. Arquitectura (patterns, design, system design)
6. DevOps (Linux, Docker, CI/CD)
7. Calidad y Proceso (testing, TDD, SDLC)
8. Algoritmos y Entrevistas (preparación para pruebas técnicas)

**Próximos pasos:**
1. ✅ Revisaste y aprobaste (ya hecho)
2. Crear 8 archivos `.md` en `src/content/categories/` con frontmatter
3. Crear 48 archivos `.md` en `src/content/modules/` con estructura template
4. Construir páginas dinámicas faltantes (`category/[slug].astro`, `module/[slug].astro`)
5. Empezar a estudiar + escribir "Mi explicación" (con mi ayuda en ejercicios cuando me lo pidas)

**¿Generamos los archivos `.md` ahora?**
