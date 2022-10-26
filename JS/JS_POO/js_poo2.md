## Shallow copy en JavaScript

El Shallow Copy (copia superficial) es una copia bit a bit de un objeto. Se crea un nuevo objeto que tiene una copia exacta de los valores del objeto original. Si alguno de los campos del objeto son referencias a otros objetos, solo se copian las direcciones de referencia, es decir, solo se copia la dirección de memoria.

![](https://static.platzi.com/media/user_upload/jqOlM-029f1163-2db4-47ad-a1c4-45967791286c.jpg)
```Object.assign()```
El método Object.assign () copia todas las propiedades propias enumerables de uno o más objetos de origen a un objeto de destino. Devuelve el objeto de destino modificado.

Las propiedades del objeto de destino se sobrescriben con las propiedades de los orígenes si tienen la misma clave. Las propiedades de las fuentes posteriores sobrescriben a las anteriores.

```Object.create()```
El método ```Object.create()``` crea un nuevo objeto, utilizando un objeto existente como prototipo del objeto recién creado.

La diferencia entre ```Object.create()``` y ```Object.assign()```
La principal diferencia entre Object.create() y ```Object.assign()``` es que el método Object.assign crea un nuevo Object. utiliza el objeto proporcionado como prototipo del Objeto recién creado. Mientras que el método ```Object.assign()``` copia todas las propiedades de los objetos de origen al objeto de destino, que es el primer parámetro de esta función y devuelve este Objeto de destino.

La principal diferencia entre Object.create() y Object.assign() es que el método Object.create() crea un nuevo Object.

Código Clase
```javascript
const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
};

// Shallow Copy con for
const obj2 = {};
for (prop in obj1) {
    obj2[prop] = obj1[prop]; 
}

// Metodos de Object para hacer Shallow Copy
const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1);

```

### Qué es JSON.parse y JSON.stringify
```javascript
const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    editA() {
        this.a = 'Abcd'
    }
};

const stringifiedComplexObj = JSON.stringify(obj1);
// "{\"a\":\"a\",\"b\":\"b\",\"c\":{\"d\":\"d\",\"e\":\"e\"},\"f\":[1,\"2\",3]}"

const obj2 = JSON.parse(stringifiedComplexObj); 
// {a: "a", b: "b", c: {d: "d", e: "e"}}
```

**JSON.stringify()**
El método ```JSON.stringify()``` convierte un objeto o valor de JavaScript en una cadena JSON, reemplazando opcionalmente valores si se especifica una función de reemplazo u opcionalmente incluyendo solo las propiedades especificadas si se especifica una matriz de reemplazo.

*Descripción*

Los objetos Boolean, Number, and String se convierten a sus valores primitivos, de acuerdo con la conversión semántica tradicional.

Si durante la conversión se encuentra un undefined, una Function, o un Symbol se omite (cuando se encuentra en un objeto) o se censura a null (cuando se encuentra en un array). ```JSON.stringify()``` puede devolver undefined cuando se pasan valores “puros” como ```JSON.stringify(function(){})``` o ```JSON.stringify(undefined)```.
Todas las propiedades que utilicen Symbol en los nombres de la clave se ignoran por completo, incluso si utilizan una función replacer.

Las instancias de Date implementan la función toJSON() devolviendo una cadena de texto (igual que date.toISOString()). Por lo que son tratadas como strings.
Los números Infinity y NaN, así como el valor null, se consideran null.

El resto de instancias de Object (incluyendo Map, Set, WeakMap, y WeakSet) sólo tendrán serializadas sus propiedades enumerables.

```JSON.stringify()``` convierte un valor en notación JSON que lo representa:

**JSON.parse()**

El método ```JSON.parse()``` analiza una cadena de texto (string) como JSON, transformando opcionalmente el valor producido por el análisis.

```
Why JSON.parse(JSON.stringify()) is a bad practice to clone an object in JavaScript
```

Puedes perder tipos de datos.
JavaScript no te avisara cuando pierdas algún tipo de dato al usar ```JSON.stringify()``` , asi que GG mi rey
Convierte tipos de datos no soportados en soportados, como infinity y NaN en null
Los tipos de datos Date serán parseados como strings, no como Date
No es tan rápido y eficiente.


## Qué es recursividad
Es cuando una función se llama a sí misma. 

*¿Por qué escribir programas recursivos?*
- Son mas cercanos a la descripción matemática.
- Generalmente mas fáciles de analizar
- Se adaptan mejor a las estructuras de datos recursivas.
- Los algoritmos recursivos ofrecen soluciones estructuradas, modulares y elegantemente simples.

*Factible de utilizar recursividad*
- Para simplificar el código.
-Cuando la estructura de datos es recursiva
ejemplo : árboles

*No factible utilizar recursividad*
- Cuando los métodos usen arreglos largos.
- Cuando el método cambia de manera impredecible de campos.
- Cuando las iteraciones sean la mejor opción.

```javascript
function recursiva(arr){
    if(arr.length != 0){
        const firstNum = arr[0];
        console.log(firstNum);
        arr.shift();
        return recursiva(arr);
    }
}
```
## Deep copy con recursividad

Se dice que el objeto tiene un Deep Copy cuando cada propiedad del objeto apunta a una copia separada, incluso si la propiedad apunta a un objeto (valores de referencia). Se crea una copia separada del objeto de referencia para el objeto de destino. En caso de copia profunda, las propiedades de referencia del objeto de origen y las propiedades de referencia del objeto de destino apuntan a diferentes ubicaciones de memoria.
```javascript
const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    editA() {
        this.a = 'Abcd'
    }
};

function isObject(subject){
  return Object.prototype.toString.call(subject) == "[object Object]";
}

function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArray(subject)
 
    // inicializamos la variable copySubject segun su tipo de dato
    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    // Empieza la recursividad
    for (key in subject) {
        const keyIsObject = isObject(subject[key]); // propiedad de nuestro elemento

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]) // Si la propiedad es un objeto, se vuelve a llamar a deepCopy para volver a hacer las asignaciones por cada una de las propiedades de los objetos.
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key])
            } else {
                copySubject[key] = subject[key]
            }
        }
    }

    return copySubject;
}
```

### Abstracción con objetos literales y deep copy

### Object.isSealed()

El método **Object.isSealed()** si el objeto está sellado.

Devuelve true si el objeto está sellado, de lo contrario devuelve false. Un objeto está sellado si no es extensible y si todas sus propiedades no se pueden configurar y por lo tanto no removibles (pero no necesariamente no modificables).


### Object.isFrozen()

El método **Object.isFrozen()** determina si un objeto está congelado.

Devuelve true si el objeto está sellado, de lo contrario devuelve false. Un objeto está sellado si no es extensible y si todas sus propiedades no se pueden configurar y por lo tanto no removibles (pero no necesariamente no modificables).

Un objeto está congelado si y solo si no es extendible, todas sus propiedades son no-configurables, y todos los datos de sus propiedades no tienen capacidad de escritura.

Código Clase
```javascript
/* Codigo para hacer un DeepCopy */
const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourse: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    }
};

const carlos = deepCopy(studentBase);
// Object.defineProperty(carlos, "name", {
//     value: "Carlitos",
//     configurable: false,
// });
Object.seal(carlos); // Es lo mismo que lo de arriba pero mas easy
carlos.name = "Carlitos";

Object.isSealed(carlos); // Nos muestra con True o False si todas las propiedades estan selladas
Object.isFrozen(carlos); // Nos muestra con True o False si todas las propiedades estan congeladas
```
