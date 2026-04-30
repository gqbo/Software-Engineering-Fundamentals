---
title: "Principios SOLID"
difficulty: "intermedio"
order: 2
description: "Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion."
why: "La diferencia entre código mantenible y código que crece mal. Patrón mental de código profesional."
topics:
  - "Single Responsibility: una clase, una razón para cambiar"
  - "Open-Closed: abierto para extensión, cerrado para modificación"
  - "Liskov Substitution: subclases reemplazables sin romper código"
  - "Interface Segregation: muchas interfaces pequeñas > una grande"
  - "Dependency Inversion: depender de abstracciones, no implementaciones"
  - "Cómo SOLID impacta en arquitectura"
resources: []
---

## ¿Por qué esto?

SOLID son cinco principios que guían el diseño de código que escala. Sin ellos, el código crece y se vuelve cada vez más frágil, más difícil de cambiar, y más fácil de romper cosas inesperadamente. Con SOLID, escribís código que es flexible, mantenible y profesional.

## Conceptos clave

### S — Single Responsibility Principle (SRP)

Una clase debe tener UNA sola razón para cambiar.

```typescript
// ❌ Viola SRP
class User {
  name: string;
  email: string;

  // Responsabilidad 1: gestionar datos del usuario
  save() { }

  // Responsabilidad 2: enviar emails
  sendEmail() { }

  // Responsabilidad 3: validar datos
  validate() { }
}
```

Si necesitas cambiar cómo se envían emails, afecta la clase `User`. Si necesitas cambiar la validación, también. Una clase, muchas razones para cambiar.

```typescript
// ✅ Respeta SRP
class User {
  name: string;
  email: string;
}

class UserRepository {
  save(user: User) { }
}

class EmailService {
  send(email: string, message: string) { }
}

class UserValidator {
  validate(user: User): boolean { }
}
```

Ahora cada clase tiene UNA razón para cambiar.

### O — Open-Closed Principle (OCP)

Una clase debe estar **abierta para extensión, cerrada para modificación**.

```typescript
// ❌ Viola OCP
class PaymentProcessor {
  process(type: string, amount: number) {
    if (type === "credit") { /* procesar tarjeta */ }
    else if (type === "paypal") { /* procesar paypal */ }
    else if (type === "crypto") { /* procesar crypto */ }
  }
}
// Si agregas un nuevo método de pago, modificas esta clase
```

```typescript
// ✅ Respeta OCP
interface PaymentMethod {
  process(amount: number): void;
}

class CreditCard implements PaymentMethod {
  process(amount: number) { }
}

class PayPal implements PaymentMethod {
  process(amount: number) { }
}

class PaymentProcessor {
  process(method: PaymentMethod, amount: number) {
    method.process(amount);
  }
}
// Si agregas un nuevo método, solo creas una nueva clase, no modificas PaymentProcessor
```

Extendiste sin modificar.

### L — Liskov Substitution Principle (LSP)

Si `B` es una subclase de `A`, deberías poder reemplazar `A` con `B` sin romper el programa.

```typescript
// ❌ Viola LSP
class Bird {
  fly() { return "Volando"; }
}

class Penguin extends Bird {
  fly() { throw new Error("Los pinguinos no vuelan"); }
}

function makeBirdFly(bird: Bird) {
  return bird.fly();
}

// Esto falla si pasas un Penguin, aunque es un Bird
makeBirdFly(new Penguin());
```

```typescript
// ✅ Respeta LSP
interface Animal {
  move(): string;
}

class Bird implements Animal {
  move() { return "Volando"; }
}

class Penguin implements Animal {
  move() { return "Nadando"; }
}

function makeAnimalMove(animal: Animal) {
  return animal.move();
}
// Penguin es intercambiable con Bird sin problemas
```

### I — Interface Segregation Principle (ISP)

Es mejor tener muchas interfaces pequeñas y específicas que una interfaz grande y general.

```typescript
// ❌ Viola ISP
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

class Robot implements Worker {
  work() { }
  eat() { throw new Error("Los robots no comen"); }
  sleep() { throw new Error("Los robots no duermen"); }
}
```

Un robot no necesita `eat()` ni `sleep()`.

```typescript
// ✅ Respeta ISP
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

class Human implements Workable, Eatable, Sleepable {
  work() { }
  eat() { }
  sleep() { }
}

class Robot implements Workable {
  work() { }
}
```

Cada clase implementa solo lo que necesita.

### D — Dependency Inversion Principle (DIP)

Depende de abstracciones (interfaces), no de implementaciones concretas.

```typescript
// ❌ Viola DIP
class UserService {
  private db = new MySQLDatabase();

  getUser(id: number) {
    return this.db.query(`SELECT * FROM users WHERE id = ${id}`);
  }
}
```

`UserService` está acoplado a `MySQLDatabase`. Si cambias de DB, hay que modificar la clase.

```typescript
// ✅ Respeta DIP
interface Database {
  query(sql: string): any[];
}

class UserService {
  constructor(private db: Database) { }

  getUser(id: number) {
    return this.db.query(`SELECT * FROM users WHERE id = ${id}`);
  }
}

// Puedo pasar cualquier Database
new UserService(new MySQLDatabase());
new UserService(new PostgresDatabase());
```

Ahora `UserService` depende de la abstracción `Database`, no de una implementación concreta.

## Mi explicación

[Aquí escribís vos tu comprensión personal del tema]

---

**Próximo paso**: Cuando hayas estudiado este tema y escrito "Mi explicación", me preguntas por ejercicios aplicados.
