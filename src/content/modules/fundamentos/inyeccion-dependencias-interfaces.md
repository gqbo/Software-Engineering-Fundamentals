---
title: "Inyección de dependencias e interfaces"
difficulty: "intermedio"
order: 3
description: "Desacoplamiento usando interfaces, tipos de inyección (constructor, property, method), testing con mocks."
why: "Base para código testeable y mantenible. Sin DI, no sabés cómo mockear en tests."
topics:
  - "Tight coupling vs loose coupling"
  - "Interfaces como contratos"
  - "Constructor injection, property injection, method injection"
  - "Service locator (patrón anti)"
  - "DI containers (concepto, no implementación pesada)"
  - "Relación con SOLID (especialmente DIP)"
  - "Mocking en tests con DI"
resources: []
---

## ¿Por qué esto?

La inyección de dependencias es cómo transformas código acoplado y difícil de testear en código desacoplado y testeable. Es la diferencia entre una clase que depende directamente de una base de datos y una clase que acepta una base de datos como parámetro.

## Conceptos clave

### Tight Coupling vs Loose Coupling

**Tight coupling**: la clase crea sus propias dependencias.

```typescript
class UserService {
  private db = new MySQLDatabase(); // Acoplado

  getUser(id: number) {
    return this.db.query(`SELECT * FROM users WHERE id = ${id}`);
  }
}
```

Problema: si necesitas testear `UserService`, siempre usará `MySQLDatabase` real. No puedes pasar una DB fake.

**Loose coupling**: la clase recibe sus dependencias.

```typescript
class UserService {
  constructor(private db: Database) { } // Desacoplado

  getUser(id: number) {
    return this.db.query(`SELECT * FROM users WHERE id = ${id}`);
  }
}
```

Ahora puedes pasar `MySQLDatabase` en producción y `MockDatabase` en tests.

### Interfaces como contratos

Una interfaz define un contrato: "yo prometo estos métodos".

```typescript
interface Database {
  query(sql: string): any[];
  execute(sql: string): void;
}

class UserService {
  constructor(private db: Database) { }
}
```

`Database` es el contrato. `UserService` no importa si es MySQL, Postgres, o una mock. Solo le importa que implemente ese contrato.

### Types of Dependency Injection

**Constructor injection** (más común):

```typescript
class UserService {
  constructor(private db: Database) { }
}
```

**Property injection**:

```typescript
class UserService {
  db: Database;
}

const service = new UserService();
service.db = new MySQLDatabase();
```

**Method injection**:

```typescript
class UserService {
  getUser(id: number, db: Database) {
    return db.query(`SELECT * FROM users WHERE id = ${id}`);
  }
}
```

Constructor injection es lo más usado porque es explícito.

### Mocking en tests

Con DI, mockeás fácilmente:

```typescript
class MockDatabase implements Database {
  query(sql: string) {
    return [{ id: 1, name: "Test User" }];
  }
}

it("getUser returns user", () => {
  const mockDb = new MockDatabase();
  const service = new UserService(mockDb);
  const user = service.getUser(1);
  expect(user.name).toBe("Test User");
});
```

Sin DI, tendrías que usar un mock complicado de la base de datos real.

## Mi explicación

[Aquí escribís vos tu comprensión personal del tema]

---

**Próximo paso**: Cuando hayas estudiado este tema y escrito "Mi explicación", me preguntas por ejercicios aplicados.
