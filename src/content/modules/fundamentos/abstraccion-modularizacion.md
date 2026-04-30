---
title: "Abstracción y modularización"
difficulty: "intermedio"
order: 5
description: "Cómo abstraer complejidad, crear módulos cohesivos, separación de concerns, interfaces bien definidas."
why: "Permite que código crezca sin volverse inmanejable. La diferencia entre sistemas que escalan y spaghetti."
topics:
  - "Abstracción: esconder detalles, exponer interface simple"
  - "Niveles de abstracción: alto (qué), bajo (cómo)"
  - "Módulos: qué es, cohesión, acoplamiento"
  - "Boundaries: entre módulos, interfaces claras"
  - "Separación de concerns: cada módulo, una cosa"
  - "Information hiding: qué expones, qué ocultas"
  - "Refactoring hacia modularidad"
resources: []
---

## ¿Por qué esto?

Un proyecto pequeño puede ser un archivo de 500 líneas. Un proyecto medio es 50 archivos. Un proyecto grande es 500 archivos. Si no abstraes y modularizas bien, los 500 archivos se vuelven un laberinto donde tocar una cosa rompe 10 otras. Con abstracción y modularización, cada módulo es una caja negra: sabés qué entra, qué sale, pero no te importa cómo funciona.

## Conceptos clave

### Abstracción: esconder detalles

El propósito de la abstracción es exponerte a lo que importa, no los detalles de cómo funciona.

```typescript
// ❌ Sin abstracción (detalles expuestos)
class UserService {
  getUser(id: number) {
    const connection = new Connection("localhost", 5432);
    connection.open();
    const result = connection.query(`SELECT * FROM users WHERE id = ${id}`);
    connection.close();
    return result;
  }
}
```

El usuario de `getUser()` ve detalles de connection, query, etc.

```typescript
// ✅ Con abstracción (detalles escondidos)
class UserService {
  constructor(private userRepository: UserRepository) { }

  getUser(id: number) {
    return this.userRepository.findById(id);
  }
}
```

El usuario de `getUser()` solo ve: "dame un usuario". No le importa cómo se obtiene.

### Módulos y cohesión

Un módulo es un grupo de código relacionado. **Cohesión alta** = cosas relacionadas juntas. **Cohesión baja** = cosas sin relación mezcladas.

```typescript
// ❌ Cohesión baja (cosas sin relación juntas)
module Utils {
  export function calculateTax(amount) { }
  export function sendEmail(email) { }
  export function compressImage(image) { }
  export function validateCreditCard(card) { }
}
```

Aquí hay impuestos, emails, imágenes, y tarjetas todo mezclado.

```typescript
// ✅ Cohesión alta (cosas relacionadas juntas)
module TaxCalculation {
  export function calculateTax(amount) { }
  export function getTaxRate(country) { }
}

module EmailService {
  export function send(email) { }
  export function validateEmail(email) { }
}

module ImageProcessing {
  export function compress(image) { }
  export function resize(image) { }
}
```

Ahora cada módulo agrupa cosas relacionadas.

### Acoplamiento entre módulos

**Acoplamiento alto** = módulos dependen mucho uno del otro (frágil).
**Acoplamiento bajo** = módulos son independientes (robusto).

```typescript
// ❌ Acoplamiento alto
class OrderService {
  processOrder(order: Order) {
    const payment = new PaymentService().charge(order.amount);
    const inventory = new InventoryService().reserve(order.items);
    const notification = new NotificationService().sendConfirmation(order);
  }
}
```

`OrderService` crea sus propios servicios. Si `PaymentService` cambia, `OrderService` se rompe.

```typescript
// ✅ Acoplamiento bajo
class OrderService {
  constructor(
    private payment: PaymentService,
    private inventory: InventoryService,
    private notification: NotificationService
  ) { }

  processOrder(order: Order) {
    const paymentResult = this.payment.charge(order.amount);
    const reservationResult = this.inventory.reserve(order.items);
    const confirmationResult = this.notification.sendConfirmation(order);
  }
}
```

`OrderService` recibe sus dependencias. Está desacoplado.

### Interfaces como boundaries

Las interfaces definen los límites entre módulos.

```typescript
interface PaymentService {
  charge(amount: number): Promise<ChargeResult>;
}

interface InventoryService {
  reserve(items: Item[]): Promise<ReservationResult>;
}
```

Cualquier implementación que respete esa interfaz puede ser usada. Los módulos no se conocen entre sí, solo saben de la interfaz.

### Separación de concerns

Cada módulo se ocupa de UNA cosa.

```typescript
// ❌ Módulo se ocupa de varias cosas
class UserManager {
  // Concern 1: Database
  getFromDatabase(id) { }
  saveToDatabase(user) { }

  // Concern 2: Business Logic
  validateEmail(user) { }
  calculateAge(user) { }

  // Concern 3: API
  getUserFromAPI(id) { }
  sendUserToAPI(user) { }
}
```

```typescript
// ✅ Cada módulo, una cosa
class UserRepository {
  // Concern: Database access
  getFromDatabase(id) { }
  saveToDatabase(user) { }
}

class UserValidator {
  // Concern: Business logic
  validateEmail(user) { }
  calculateAge(user) { }
}

class UserAPIClient {
  // Concern: API communication
  getUserFromAPI(id) { }
  sendUserToAPI(user) { }
}
```

## Mi explicación

[Aquí escribís vos tu comprensión personal del tema]

---

**Próximo paso**: Cuando hayas estudiado este tema y escrito "Mi explicación", me preguntas por ejercicios aplicados.
