## Global Scope
**Scope** 
Es el alcance que determina la accebilidad de las variables, los objetos y las funciones desde diferentes partes del código

Tipos:
- Global
- Function
- Block

**Javascript Variables**

En JS, los objetos y las funciones tambien son variables


**Hoisting**

Es un término para describir que la declaración de variables y funciones son desplazadas a la parte superior del scope más cercano.

**Redeclaración y Reasignación**

La redeclaración es volver a declarar una variable, y la reasignación es volver a asignar un valor.
```javascript
let lastName ="Toledo" // declarar y asignar
lastName = "Frances" //redeclarar

let secondName = "Emi" // delarar y asignar
let secondName = "Aide" //redeclarar
```

Una variable declarada con ```var``` puede ser redeclarada y reasignada.

Una variable declarada con ```let``` puede ser reasignada, pero no redeclarada.

Una variable declarada con ```const``` no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

**Strict Mode**

El modo estricto es una funcionalidad que le permite al motor de JavaScript cambiar la manera en que ejecuta el código. 

En este modo, se reduce las cosas que podemos hacer, esto es bueno porque permite manejar errores que son poco perceptibles o que el motor de JavaScript sobreentiende y ayuda a su compilación para corregirlos.

Este en el código colocando en la primera línea *"use strict"* para todo el archivo. También puede utilizarse en la primera línea de una función, pero no para un bloque en específico.

```javascript
"use strict";

nombre = "Andres"
console.log(nombre) // ReferenceError: nombre is not defined
```

## Closure
Permite acceder al scope de una función exterior desde una función interior. En JavaScript, los closures se crean cada vez que una función se genera. A diferencia de otros conceptos como funciones, variables u otros, los closures no se utilizan todas las veces.

Construcción de un closure
Para construir un closure necesitaremos los siguientes requisitos:

- Una función dentro de otra función.
```javascript
function padre() {
    
    function hijo(){
    }
}
```
- Una variable que se encuentre en la función con el scope superior, donde la función con scope inferior la utilice.
```javascript
function padre() {
    let numero = 5
    function hijo(){
        numero = numero + 1
        return numero
    }
}
```
- Invocar la función con scope inferior en otro scope del que fue escrita. Esto lo podemos hacer retornando la función entera y asignar la función de scope superior a una variable.
```javascript
function padre() {
    let numero = 5
    function hijo(){
        numero = numero + 1
        return numero
    }
    
    return hijo
}

const closure = padre()
```
De esta manera obtendremos una función (scope inferior) que tiene una referencia a la variable que se encontraba en un scope superior, que a su vez recordará el contexto donde fue creada.

### Ámbito léxico
El ámbito léxico se refiere al alcance de una variable, siguiendo la cadena de scopes. Es decir, una variable puede ser accedida desde un nivel inferior hasta uno superior, pero no al contrario.
```javascript
function contador ( i ) {
  let acumulador = i
  function aumentar () {
    console.log(acumulador);
    acumulador = acumulador + 1
  }
  return aumentar
};

const closure = contador(1)
closure() // 1
closure() // 2
closure() // 3

const closure2 = contador(10);
closure2() // 10
closure2() // 11

closure() // 4
```
Podemos asignar la función ```contador``` a una variable (```_closure_ y _closure2_```). Dependiendo del valor que tenga como parámetro, cada variable cambiará el valor inicial por el ámbito léxico, por la que fue originada la variable ```acumulador``` que está vinculada con la función ```aumentar```.

## Hoisting 
Es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.

Hoisting en variables declaradas con var
En el siguiente código, la respuesta del console.log es undefined, porque al hacer referencia a una variable que no está declarada aún, JavaScript crea esta variable antes de declararla y le asigna un valor de undefined.
```javascript
console.log(nombre) // undefined
var nombre = "Andres" 
// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"
```
### Hoisting en scope de bloque
Mira el siguiente código y piensa cuál sería el resultado del console.log.
```javascript
if (true){
  var saludo = "hola"
  let despedida = "chao"
}

console.log(saludo)
console.log(despedida)
```
La respuesta es primero "hola" y luego un error de referencia. Esto sucede por el hoisting, la declaración de la variable saludo se eleva fuera del bloque en un scope superior, que puede ser un scope de función o global.
```javascript
var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo) 
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined
```
Es por eso que var no tiene scope de bloque, y se debe tener cuidado porque puede provocar errores en el código.

### Hoisting en funciones
Mira el siguiente código y piensa cuál sería el resultado del console.log.
```javascript
console.log( saludar() )

function saludar() {
  return "Hola"
}
```
La respuesta es "Hola", porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.
```javascript
// Hoisting
function saludar() {
  return "Hola"
}

console.log( saludar() ) // "Hola"
```
Pero, lo que realmente sucede es que JavaScript guarda la función en memoria en la fase de creación de un contexto de ejecución, no asigna undefined como con las variables.

### Hoisting de variables dentro de una función
El hoisting desplaza las declaraciones a la parte superior del scope más cercano, en el caso de una función dentro de otra función, seguiría el siguiente comportamiento.
```javascript
function scope() {
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  var nombre = "Andres"
  var edad = 20
  for (var i = 0; i< 6; i++) {
  //...
  }
}
```
JavaScript lo interpretaría como lo siguiente:
```javascript
function scope() {
  var nombre = undefined
  var edad = undefined
  var i = undefined
  
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  nombre = "Andres"
  edad = 20
  for ( i = 0; i< 6; i++) {
  
  //
  }
}
```
### Hosting en funciones asignadas a variables
Mira el siguiente código y piensa cuál sería el resultado del console.log.
```javascript
console.log( saludar() )

var saludar = function saludar() {
  return "hola"
}
```
La respuesta es un error de tipo porque si asignas una función a una variable declarada con var, y la invocas antes declararla, la variable será de tipo undefined y no de función por el hoisting.
```javascript
var saludar = undefined

console.log( saludar() ) // TypeError: saludar is not a function

saludar = function saludar() {
  return "hola"
}
```
### Hoisting con let y const
Aunque te haya dicho que el hoisting solo ocurre con declaraciones con var, no es totalmente cierto. El hoisting hará que el intérprete de JavaScript eleve las declaraciones con let y const a la Temporal Dead Zone.

La Temporal Dead Zone es una región del código donde la variable está declarada, pero no es posible acceder a esta, provocando un error de tipo ReferenceError.
```javascript
console.log(nameVar) // undefined
console.log(nameLet) // ReferenceError: nameLet is not defined

var nameVar = "myVar"
let nameLet = "myLet"
```
### Buenas prácticas para usar hoisting
- No utilices var en las declaraciones de variables.
- Escribe primero las funciones y luego su invocación.