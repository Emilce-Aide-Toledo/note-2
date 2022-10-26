## Base de Datos
Las bases de datos surgen de la necesidad de conservar la información más allá de lo que existe en la memoria RAM.

Las bases de datos basadas en archivos eran datos guardados en texto plano, fáciles de guardar pero muy difíciles de consultar y por la necesidad de mejorar esto nacen las bases de datos relacionales. Su inventor Edgar Codd dejó ciertas reglas para asegurarse de que toda la filosofía de las bases de datos no se perdiera, estandarizando el proceso.

### Base de datos relacionales:
- SQLServer
- MySQL
- PosgreSQL
- MariaDB
- Oracle

### Bases de Datos No relacionales
- Cassandra
- MongoDB
- Etc

---
## Qué son entidades y atributos

Una entidad es algo similar a un objeto (programación orientada a objetos) y representa algo en el mundo real, incluso algo abstracto. Las entidades se escriben en Plural y están representadas por un conjunto de atributos

Estas pueden ser:
-  Concreta: Persona, empleado, casa, auto, etc …
- Abstracta: cta bancaría, empresa, curso
- Multivaluados: puede tener varios valores (teléfonos, hijos, discos duros)
- Compuestos: desde los cuales se desprenden más atributos
- Llave: aquel que identifica la entidad y no se puede repetir y existen dos tipos:
- Natural: Son inherentes del Objeto (Cedula, No. Serie)
- Artificial: No es inherente al objeto y se asigna arbitrariamente
-  Derivados: es aquel que se obtiene de un atributo definido (fecha Nac = edad)

Para representar las entidades se se utiliza la Notacion de Chen.
![](https://i.ibb.co/2P1j2jZ/img-2e2fc1ba-ad77-4045-b7a5-f74a65e3f55e.webp) 

![](https://i.ibb.co/g78Kmd0/ENTIDAD-LAPTOPS-4910405e-b261-44c6-9193-a68d85a92541.webp) 

![](https://i.ibb.co/GJ3PKyW/Captura2-8c5455ae-05a4-48bf-8e40-e9f053156c7e.webp)

---
### Relaciones

Las relaciones, representadas por un rombo, sirven para crear relaciones entre entidades. Por convención las relaciones son verbos que conectan entidades. Existen entidades multivaluadas o compuestas que tienen vida propia y se relacionan con otras entidades, por lo que se pueden normalizar (concepto que se explicará luego)

---
### Cardinalidad

Es una propiedad de las relaciones que indica la cantidad y correspondencia con la que puede estar relacionada una entidad y puede ser uno a uno, uno a varios, varios a uno y varios a varios.

![](https://i.ibb.co/99QC1zY/unnamed.png)

- Cardinalidad 1 a 1
Un registro de una entidad A se relaciona con solo un registro en una entidad B y viceversa
- Cardinalidad 0 a 1 (o 1 a 1 opcional)
Un registro de una entidad A se relaciona con solo un registro en una entidad B y pero ningún registro de B se relaciona con A
- Cardinalidad 1 a N
Una entidad en A se relaciona con cero o muchas entidades en B. Pero una entidad en B se relaciona con una única entidad en A
- Cardinalidad 0 a N (o 1 a N opcional)
Una entidad en A se relaciona con cero o muchas entidades en B. Pero ninguna entidad en B se relaciona una entidad en A
- Cardinalidad N a N
Una entidad en A se puede relacionar con 0 o muchas entidades en B y viceversa.

---
### Diagrama ER
Un diagrama entidad-relación, también conocido como modelo entidad relación o ERD, es un tipo de diagrama de flujo que ilustra cómo las "entidades", como personas, objetos o conceptos, se relacionan entre sí dentro de un sistema. 

![](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-school.svg)

---
### Tipos de Dato:

- Texto: CHAR(n), VARCHAR(n), TEXT
- Números: INTEGER, BIGINT, SMALLINT, DECIMAL(n,s), NUMERIC(n,s)
- Fecha/hora: DATE, TIME, DATETIME, TIMESTAMP
- Lógicos: BOOLEAN
- Constraints (Restricciones)

![](https://i.ibb.co/wScKnz6/Diagrama-F-sico-tipo-de-datos-y-constraints-e18d3f34-6bb7-424b-8256-8212049045ce.webp)

---
###  Constraints (Restricciones)

**NOT NULL:** Se asegura que la columna no tenga valores nulos

**UNIQUE:** Se asegura que cada valor en la columna no se repita

**PRIMARY KEY:** Es una combinación de NOT NULL y UNIQUE

**FOREIGN KEY:** Identifica de manera única una tupla en otra tabla

**CHECK:** Se asegura que el valor en la columna cumpla una condición dada

**DEFAULT:** Coloca un valor por defecto cuando no hay un valor especificado

**INDEX:** Se crea por columna para permitir búsquedas más rápidas

---
### Normalización

La normalización como su nombre lo indica nos ayuda a dejar todo de una forma normal. Esto obedece a las 12 reglas de Codd y nos permiten separar componentes en la base de datos:

- Primera forma normal (1FN): Atributos atómicos (Sin campos repetidos)
- Segunda forma normal (2FN): Cumple 1FN y cada campo de la tabla debe depender de una clave única.
- Tercera forma normal (3FN): Cumple 1FN y 2FN y los campos que NO son clave, NO deben tener dependencias.
- Cuarta forma normal (4FN): Cumple 1FN, 2FN, 3FN y los campos multivaluados se identifican por una clave única.

---