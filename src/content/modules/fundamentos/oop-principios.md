---
title: "Programación orientada a objetos: clases, encapsulación, herencia, polimorfismo"
difficulty: "basico"
order: 1
description: "Pillares de OOP: clases, objetos, encapsulación, herencia, polimorfismo, composición."
why: "Modelo mental de casi todo código backend. Necesario entenderlo profundamente."
topics:
  - "Clases y objetos: estado (propiedades), comportamiento (métodos)"
  - "Encapsulación: public, private, protected; getters/setters"
  - "Herencia: relación IS-A, method overriding, super"
  - "Polimorfismo: métodos virtuales, overriding, interfaces"
  - "Composición vs herencia: cuándo usar cada una"
  - "Abstracción: esconder complejidad, exponer interface simple"
resources: []
---

## ¿Por qué esto?

La programación orientada a objetos es el modelo mental en el que se construye casi todo código backend moderno. Si no entendés profundamente los pilares de OOP, no entenderás por qué las cosas están organizadas de la forma en que están, y escribirás código frágil que es difícil de mantener.

## Conceptos clave

### Clases y objetos

Una clase es un blueprint (plano) que define la estructura y comportamiento de un objeto. Un objeto es una instancia de esa clase.

Una clase tiene:
- **Propiedades (estado)**: datos que guardan información sobre el objeto
- **Métodos (comportamiento)**: funciones que el objeto puede ejecutar

```typescript
class User {
  // Propiedades
  name: string;
  email: string;

  // Método
  greet() {
    return `Hola, soy ${this.name}`;
  }
}

const user = new User();
```

### Encapsulación

Encapsulación significa esconder los detalles internos de un objeto y exponer solo lo necesario. Usamos modificadores de acceso:

- **public**: accesible desde cualquier lugar (default)
- **private**: solo dentro de la clase
- **protected**: solo dentro de la clase y sus subclases

```typescript
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

Sin encapsulación, alguien podría directamente cambiar `balance` a un valor incorrecto.

### Herencia

Herencia es una relación IS-A entre clases. Una clase puede heredar propiedades y métodos de otra clase.

```typescript
class Animal {
  name: string;
  makeSound() {
    console.log("Sonido genérico");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Guau!");
  }
}
```

**Dog IS-A Animal**: Dog hereda `name` y puede sobrescribir (override) `makeSound()`.

### Polimorfismo

Polimorfismo significa "muchas formas". Es la capacidad de un método de comportarse diferente según el objeto que lo ejecuta.

```typescript
const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach(animal => {
  animal.makeSound(); // Cada uno hace su propio sonido
});
```

Aunque todos son `Animal`, cada uno implementa `makeSound()` distinto.

### Composición vs Herencia

A veces, la composición (tener una instancia de otra clase) es mejor que herencia.

```typescript
// Herencia (a veces problemática)
class Bird extends Animal { }
class Penguin extends Bird { }

// Composición (más flexible)
class Bird {
  hasWings: boolean = true;
  canFly: boolean = true;
}

class Penguin {
  wings: Bird;
}
```

La composición es más flexible porque no creas una cadena rígida de herencia.

### Abstracción

Abstracción es esconder complejidad y exponer solo lo que es necesario.

```typescript
// Detalles complejos escondidos
class PaymentProcessor {
  private validateCard() { }
  private encryptData() { }
  private callBankAPI() { }

  // Interface simple que el usuario usa
  processPayment(amount: number): boolean { }
}
```

El usuario solo llama a `processPayment()`, no necesita saber los detalles.

## Mi explicación

[Aquí escribís vos tu comprensión personal del tema]

---

**Próximo paso**: Cuando hayas estudiado este tema y escrito "Mi explicación", me preguntas por ejercicios aplicados.
