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
---

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

---

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
---
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
---
### Object.freeze()

Este método congela un objeto que sea pasado. Es decir:

- Impide que se le agreguen nuevas propiedades
- Impide que sean eliminas propiedades ya existentes
- Impide que sus las propiedades internas (writable, - enumerable y configurable) sean modificadas
### Object.seal()

Este método sella un objeto que sea pasada. Es decir:

- Impide que nuevas propiedades sean agregadas
- Cambia en todas las propiedades configurable: false, con lo que impide que sean borradas
- Las propiedades aún puede ser modificadas, ya que writable esta true
### Object.isSealed()

Este método determina si un objeto se encuentra sellado. 
Devuelve un valor boolean. Es decir:

- El objeto no es extendible, por lo cual no se pueden agregar más propiedades
- Todas sus propiedades no se pueden configurar, por lo tanto no son removibles

### Object.isFrozen()

Este método determina si un objeto se encuentra congelado. Devuelve un valor boolean. Es decir:

- El objeto no es extendible, por lo cual no se pueden agregar más propiedades
- Todas sus propiedades no se pueden configurar, por lo tanto no son removibles
- Todas sus propiedades no pueden ser reescritas
---
## Factory pattern y RORO
Ver: https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/

```javascript
/* Codigo Deep Copy */

// Requerimientos de parametros obligatorios
function requiredParam(param){
    throw new Error(param + " Campo obligatorio");
}

// Fabrica de estudiantes
function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    return {
        name,
        age,
        email,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
    };
}

const carlos = createStudent({
    name: 'Carlito',
    age: 20,
    email: 'carlito@mazzarolito.com',
    twitter: 'carlitosmzz',
}); // {}
```
---
## Module pattern y namespaces: propiedades privadas en JavaScript
Ver: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

### Object.defineProperty
Podemos usar el Object.defineProperty() para crear la variable publica o privada
```javascript
function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    "_name": name,
  };

  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    readName() {
      return private["_name"];
    },
    changeName(newName) {
      private["_name"] = newName;
    },
  };

  Object.defineProperty(public, "readName", {
    writable: false,
    configurable: false,
  });
  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });

  return public;
}

const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });
```
---
## Getters y setters
Los Getters y setters son métodos de acceso, lo que significa que generalmente son una interfaz publica para cambiar miembros de las clases privadas.
```javascript
function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    "_name": name,
  };

  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
 
  };


  return public;
}

const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });
```
---
 ## Duck typing

 El duck typing es la forma de progamar donde identificamos a nuestros elementos dependiendo de los métodos y atributos que tengan por dentro.

 ---
 ## Duck typing

 El duck typing es la forma de progamar donde identificamos a nuestros elementos dependiendo de los métodos y atributos que tengan por dentro.
```javascript
 function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}


function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createLearningPath({
  name = requiredParam("name"),
  courses = [],
}) {
  const private = {
    "_name": name,
    "_courses": courses,
  };

  const public = {
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get courses() {
      return private["_courses"];
    },
  };

  return public;
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    "_name": name,
    "_learningPaths": learningPaths,
  };

  const public = {
    email,
    age,
    approvedCourses,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get learningPaths() {
      return private["_learningPaths"];
    },
    set learningPaths(newLP) {
      if (!newLP.name) {
        console.warn("Tu LP no tiene la propiedad name");
        return;
      }

      if (!newLP.courses) {
        console.warn("Tu LP no tiene courses");
        return;
      }

      if (!isArray(newLP.courses)) {
        console.warn("Tu LP no es una lista (*de cursos)");
        return;
      }
      
      private["_learningPaths"].push(newLP);
    },
  };

  return public;
}

const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });
```
---
### Instance Of en JS con instancias y prototipos
Convertiremos nuestras fabricas de objetos en prototipos y gracias a crear prototipos, utilizaremos el instance of para ver si ej nuestros learning paths realmente fueron creados con el prototipo learningpath, es decir, si realmete son instancias de este prototipo o en realidad son imitadores.
```
RECORDA que para crear prototipos, debemos usar la palabra this y new
```
Pondre como funciona el codigo completo y luego lo ire explicando de a poco.

```javascript
function LearningPath({
    name = requiredParam("name"),
    courses = [],
  }) {
      this.name = name;
      this.courses = courses;

  }
  
  function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {

    this.name = name;
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };    

    if (isArray(learningPaths)) {
      this.learningPaths = [];
/* lo que hago con if (isArray(learningPaths)) {
      this.learningPaths = []; es entenderm yo pido el argumento learningPaths, la pc lo almacena en el objeto que esta ahi arriba en student({}),luego de eso valido todos los datos ejempllo this.name = name; ahora me queda validar los learningPaths y le digo, che pibe, no me intersa lo que tenes adentro, te voy a validar que sos un array, uh si, sos un array, pero se que sos un array vavio, por lo tanto ire veindo con un bulce CADA UNA DE TOS PROPIEDADES, y las que cumplan ser instancia de LEARNING PATHS te lo metere con un push.*/      

      for (learningPathIndex in learningPaths) {
        if (learningPaths[learningPathIndex] instanceof LearningPath) {
          this.learningPaths.push(learningPaths[learningPathIndex]);
        }
      }
    }

  }
  
  const escuelaWeb = new LearningPath({ name: "Escuela de js" });
  const escuelaDataScience = new LearningPath({ name: "Escuela de data science" });

  const juan = new Student({ 
    email: "juanito@frijoles.co",
    name: "Juanito",
    learningPaths: [
      escuelaWeb,
      escuelaDataScience,
  ]
  });
```
1.Como funciona el ```instanceof``` ⇒ Es importante saber que es un metodo que devolvera true o false.
```javascript
//Aca simplemente declare 2 prototipos, el LearningPath, y Student.

function LearningPath({
    name = requiredParam("name"),
    courses = [],
  }) {
      this.name = name;
      this.courses = courses;

  }
  
  function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {

    this.name = name;
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };    
//Que sucede aca? Facil, la idea es que yo le pido toda la data al usuario de su ruta, y le pido en los argumentos de la funcion Student que me pase un     parametro de lo que sera su learningPaths, yo solo SE LO PIDO, pero NO LO TRABAJO, como a los otros.
```
```javascript
if (isArray(learningPaths)) {
      this.learningPaths = [];      

      for (learningPathIndex in learningPaths) {
        if (learningPaths[learningPathIndex] instanceof LearningPath) {
          this.learningPaths.push(learningPaths[learningPathIndex]);
        }
      }
    }
  }
//Genial! ya el usuario nos debio pasar sus parametro learningpath,entonces esste codigo trbajare este parametro,si? bien lo primero que haremos con ese dato que no paso es decir con learningPaths, es verificar si es un array, es un   array? si lo es, entra a lo que sucede dentro, y lo primero que se hace es el  this.learningPaths = []; este afirmara que es un array, es neceario para guardar la data. luego de eso entramos a un bucle, un bucle bellisimo. Que hara este? facil, el con la variable learningPathIndex, agarrara cada dato de el array learningPaths, de esta manera => learningPaths[learningPathIndex]. por cada interracion esto learningPaths[learningPathIndex] cambiara, ya que solo es una variable del array. ahora por cada elemento, se vera si son instancias del LearningPath, que es nuestro prototipo. Por cada vez que ses verdadero, meteremos en el array learningPaths, esto learningPaths[learningPathIndex]. es decir, el elemento del array que respete tal condicion que hemos escrito.

```
---
### Atributos y métodos privados en prototipos
Para asignar los métodos y atributos privados en Clases actualmente  seran con un #

- en la clase
Escondemos la propiedad
```javascript
const private = {
        _learningPaths: []
    }
```
Modificamos el metodo .map con el que validabamos y empujabamos cada elemento que viniera dentro learningPaths, para que ahora haga uso de un setter que se utilice al llamar a la propiedad.
```javascript
if( !isArray(learningPaths) ){
        throw new Error('LP no es una lista valida')
    } else{
        learningPaths.map(elm => {
            this.learningPaths = elm
        })
    }
```
Por último, declaramos una propiedad learningPath con el getter y setter para acceder a la propieda oculta, y dentro del setter hacemos la validación (que antes haciamos dentro del .map) para saber si es instancia del prototipo LearningPath
```javascript
Object.defineProperty(this, "learningPaths", {
        get(){
            return private._learningPaths
        },
        set(newLp){
            // debugger;
            if(newLp instanceof LearningPath){
                private._learningPaths.push(newLp)
            } else{
                console.warn(`${newLp} no es una LP valida`)
            }
        }
    })
```
Y listo, sin enredos, sin un monton de scroll, sin jergas adolescentes innecesarias, simplemente claro y consiso.
El codigo completo queda así
```javascript
const private = {
        _learningPaths: []
    }

    Object.defineProperty(this, "learningPaths", {
        get(){
            return private._learningPaths
        },
        set(newLp){
            // debugger;
            if(newLp instanceof LearningPath){
                private._learningPaths.push(newLp)
            } else{
                console.warn(`${newLp} no es una LP valida`)
            }
        }
    })

    if( !isArray(learningPaths) ){
        throw new Error('LP no es una lista valida')
    } else{
        learningPaths.map(elm => {
            this.learningPaths = elm
        })
    }
```
---