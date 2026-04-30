---
title: "Clean code: nombres, funciones, comentarios, abstracción"
difficulty: "basico"
order: 4
description: "Prácticas para código legible, mantenible, autoexplicativo. Naming, tamaño de funciones, cuándo comentar."
why: "El código se lee 10x más que se escribe. Código limpio = comunicación eficaz con el equipo."
topics:
  - "Nombres significativos: variables, funciones, clases"
  - "Nombres que revelan intención"
  - "Evitar nombres ambiguos, números mágicos"
  - "Funciones pequeñas (una responsabilidad, hacerla bien)"
  - "Nivel de abstracción: cohesión"
  - "Comentarios: cuándo (WHY), cuándo no (WHAT)"
  - "Complejidad ciclomática"
  - "Duplication is the enemy of maintainability"
resources: []
---

## ¿Por qué esto?

El código que escribís hoy, alguien (posiblemente vos mismo en 3 meses) lo va a leer mañana. Si ese código es un desorden sin nombre, con funciones enormes y sin estructura, quien lo lea (incluyéndote) va a gastar horas intentando entender qué hace. Clean code es escribir código que se entiende en minutos, no horas.

## Conceptos clave

### Nombres significativos

**Mala denominación** (ambigua, no revela intención):

```typescript
const d = new Date(); // ¿Qué es d? ¿Por qué?
const data = user.getInfo(); // ¿Qué info?
function process(x) { } // ¿Qué procesa?
```

**Buena denominación** (revela intención):

```typescript
const userCreationDate = new Date();
const userContactInfo = user.getContactInfo();
function calculateMonthlyRevenue(sales) { }
```

El nombre debe responder: ¿qué es esto? ¿por qué existe?

### Evitar números mágicos

```typescript
// ❌ Número mágico
if (user.age > 18) { }
const salary = baseSalary * 0.15;

// ✅ Constante nombrada
const ADULT_AGE = 18;
const TAX_RATE = 0.15;

if (user.age > ADULT_AGE) { }
const salary = baseSalary * TAX_RATE;
```

Un número mágico no dice por qué existe. Una constante nombrada sí.

### Funciones pequeñas

Una función debe hacer UNA cosa, hacerla bien, y nada más.

```typescript
// ❌ Función grande (muchas responsabilidades)
function processUser(id: number) {
  const user = fetchUser(id);
  const validated = validateEmail(user.email);
  const subscription = createSubscription(user);
  const discount = calculateDiscount(user.age);
  sendWelcomeEmail(user);
  return { user, subscription, discount };
}
```

```typescript
// ✅ Funciones pequeñas
function validateAndCreateSubscription(id: number) {
  const user = fetchUser(id);
  validateEmail(user.email);
  return createSubscription(user);
}

function calculateUserDiscount(id: number) {
  const user = fetchUser(id);
  return calculateDiscount(user.age);
}

function sendUserWelcome(id: number) {
  const user = fetchUser(id);
  sendWelcomeEmail(user);
}
```

Cada función hace UNA cosa. Fácil de testear, fácil de entender.

### Niveles de abstracción

Mezclar niveles de abstracción confunde:

```typescript
// ❌ Mezcla niveles
function getUser(id: number) {
  const url = `https://api.example.com/users/${id}`;
  const response = fetch(url);
  const parsed = JSON.parse(response);
  return parsed;
}
```

Aquí estás con details bajos (URL, JSON) dentro de una función de alto nivel (getUser).

```typescript
// ✅ Niveles claros
function getUser(id: number) {
  return userRepository.findById(id);
}

class UserRepository {
  findById(id: number) {
    const response = this.httpClient.get(`/users/${id}`);
    return this.parseResponse(response);
  }

  private parseResponse(response: any) {
    return JSON.parse(response);
  }
}
```

Función de alto nivel (`getUser`) oculta detalles bajos.

### Comentarios: cuándo sí, cuándo no

**No comentar el WHAT** (el código ya lo dice):

```typescript
// ❌ Comentario que no agrega nada
// Increment counter
counter++;

// ❌ Comentario obvio
// Create new user
const user = new User();
```

**Sí comentar el WHY** (la razón, la decisión):

```typescript
// ✅ Comentario que explica la razón
// We limit retries to 3 because API has a rate limit of 100 requests/min
const MAX_RETRIES = 3;

// ✅ Comentario que explica una decisión no obvia
// Using cache-aside instead of write-through because write-through 
// causes 500ms latency spikes during peak hours
function getUser(id: number) {
  const cached = cache.get(id);
  if (cached) return cached;

  const user = db.query(id);
  cache.set(id, user);
  return user;
}
```

Un buen comentario responde: "¿por qué lo hicimos así y no de otra manera?"

## Mi explicación

[Aquí escribís vos tu comprensión personal del tema]

---

**Próximo paso**: Cuando hayas estudiado este tema y escrito "Mi explicación", me preguntas por ejercicios aplicados.
