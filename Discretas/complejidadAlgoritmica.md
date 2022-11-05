## Complejidad algorítmica
---
Un algoritmo es una secuencia de instrucciones ordenadas para solucionar un problema. La estructura de un algoritmo consiste en un proceso que mediante una entrada de datos se obtiene una salida. Los algoritmos que se analizarán tienen que contar al menos con datos de entrada (input).


Por ejemplo, el algoritmo de ordenamiento consiste en una entrada de datos desordenados que mediante un proceso se obtiene una lista de números ordenados.

**Código de la estructura de un algoritmo**

La estructura de un algoritmo se puede representar con una función que reciba las entradas como parámetros. El cuerpo de la función serán las instrucciones necesarias para retornar el valor de salida. De esta manera utilizaremos el algoritmo en la invocación de la función.
```javascript
function algoritmo(entrada) {
    // Proceso
    return salida
}

// Usando el algoritmo
algoritmo()
```
En el proceso del algoritmo, pueden existir variables de cualquier tipo, condicionales, ciclos repetitivos o incluso otras funciones.
```javascript
function algoritmo(entrada) {
    let salida = {}
    if () {
    }
    for (){
    }
    otraFuncion()
    return salida
}
```
---
El espacio y el tiempo son dos conceptos determinantes en la evaluación de un algoritmo. El espacio es la cantidad de memoria que utilizas para resolver un problema. El tiempo consiste en la velocidad que se ejecuta ese algoritmo.

Para encontrar un buen algoritmo podemos ver qué tanto tarda en ejecutarse, o qué tanto espacio ocupa en la memoria.

Tiempo o espacio, ¿cuál es mejor para el desarrollo de un algoritmo?
Lo ideal en una solución, es que el espacio sea lo mínimo posible y el tiempo sea lo más rápido. Sin embargo, esto no siempre se cumple.

Podemos sacrificar uno para dar prioridad al otro. Por ejemplo, usar más memoria para aumentar la velocidad, como ocurre en Chrome. También, podemos reducir la velocidad, pero con un uso de memoria mínimo, como en las aplicaciones Lite (Facebook Lite).

Dependiendo del objetivo de tu aplicación, el buen uso de espacio y tiempo es crucial para el desarrollo de un algoritmo óptimo, tomando en cuenta cada situación o el problema que se quiera resolver.

**Rendimiento en dispositivos embebidos**

En dispositivos embebidos, el buen manejo de la memoria es crítico, ya que se requiere maximizar el espacio que ocupa, sin importar cuánto dure su procesamiento.

**Rendimiento en JavaScript**

En particular, en JavaScript es más relevante apuntar más al tiempo, que al espacio. Porque el código JavaScript usualmente no corre en dispositivos con memoria muy limitada (como sí sucede en dispositivos embebidos).

Esto no significa que no haya casos particulares, o que el espacio siempre sea menos importante que el tiempo, solo es el ambiente del software con JavaScript.

---

La complejidad algorítmica consiste en entender el crecimiento de recursos que requiere un algoritmo al momento de ejecutar un número determinado de elementos.

En otras palabras, el algoritmo puede que se comporte de una manera con 10, 15 o 20 elementos. Sin embargo, con cientos o miles de elementos, el algoritmo probablemente se comportará de manera diferente, con respecto al tiempo y el espacio.

Los recursos para medir la complejidad de un algoritmo son el tiempo y el espacio:

- El tiempo es representado en milisegundos, segundos, minutos, etc.

- El espacio es representado en bytes, kilobytes, megabytes, gigabytes, etc.

**Teoría de la complejidad**

La teoría de la complejidad estudia el consumo de recursos (tiempo / espacio) que un algoritmo ocupa.

La complejidad algorítmica no hace referencia al tiempo de ejecución del algoritmo (segundos, minutos, horas, etc.), sino al ritmo y qué tan eficiente puede ser un algoritmo, con base en el problema que está resolviendo.

A través de la complejidad buscamos entender el crecimiento de recursos, no su tamaño. Es el crecimiento de recursos lo que importa.

## Complejidad espacial
---
La complejidad espacial es la cantidad de espacio en memoria que un algoritmo emplea al ejecutarse. En otras palabras, cómo el algoritmo ocupa espacio en memoria con la cantidad de elementos de entrada que debe procesar.

**Comparación de algoritmos**

Comparemos dos algoritmos que resuelven el mismo problema: “Visión” y “Nova”. El primer algoritmo aumenta su espacio mientras más estudiantes sean ingresados. Mientras que el segundo algoritmo aumenta exponencialmente su espacio necesario.

Aunque ambos algoritmos resuelven el mismo problema, manejan la cantidad de memoria utilizada de manera diferente a medida que procesa más elementos.

imagen:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica05.png)

**Espacio auxiliar en la complejidad espacial**

La complejidad espacial incluye el espacio auxiliar y el espacio ocupado por los datos de entrada. En el espacio auxiliar están todos los procesos que procesa el espacio de entrada.

El espacio de entrada no es importante. ¿Por qué? Porque al comparar los algoritmos, el espacio de entrada es el mismo para todos los casos, por lo que el espacio auxiliar es el que los diferencia y el necesario para evaluar el algoritmo.

imagen:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica06.png)

## Complejidad temporal
---
La complejidad temporal es la cantidad de tiempo en el que un algoritmo tarda en ejecutarse. En otras palabras, cómo el algoritmo aumenta en el tiempo, con respecto a la cantidad de elementos de entrada que debe procesar.

**Comparación de algoritmos**

Comparemos dos algoritmos que resuelven un mismo problema: “Astronauta” y “Experto”. El primer algoritmo aumenta su tiempo de ejecución mientras más estudiantes sean ingresados. El tiempo de ejecución del segundo permanece constante.

Aunque ambos algoritmos resuelven el mismo problema, manejan sus tiempos de ejecución de manera diferente a medida que procesa más elementos.

imagen:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica02.png)

La siguiente gráfica muestra el tiempo de ejecución en función de la cantidad de elementos a procesar (inputs).

- El algoritmo “Astronauta” tiene una tendencia lineal, es decir, mientras más elementos ejecute, más tiempo necesitará el programa.

- El algoritmo “Experto” es constante, es decir, ejecuta la aplicación en el mismo tiempo para cualquier valor de elementos a procesar.

imagen:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica03.PNG)


Por lo tanto, la complejidad no trata de cuántos segundos, aproximadamente, se tarda un algoritmo en ejecutar, sino de cómo aumenta el tiempo cuando existe una mayor o menor cantidad de elementos a procesar.

## Complejidad temporal en práctica
---
Los métodos perfomance.now() y console.time() se utilizan para medir el tiempo entre dos líneas de código en milisegundos. La diferencia entre ambos es que performance.now() es más preciso.

Para explicarlo, emplearemos un algoritmo de contar números.

```javascript
function contar(n){
    for (let i=0; i < n; i++){
        console.log(i)
    }
}
```

**Método performance.now**

El método performance.now() mide el tiempo en una determinada línea de código. Se debe incluir dos invocaciones de este método y guardarlos en variables, luego calcular la diferencia para obtener el dato del tiempo empleado del algoritmo.

```javascript
const tiempoInicial = performance.now()
contar(5) // Algoritmo
const tiempoFinal = performance.now()
const duracion = tiempoFinal - tiempoInicial
console.log(duracion)
```

Ejecuta el método y observa los valores de duracion. Notarás que los valores varían cada vez que ejecutas, esto es normal, por eso no hay que obsesionarse que el algoritmo duró “x” tiempo menos.

Ten en cuenta que performance.now() pertenece al objeto global. En el caso de que no te funcione en Node.js, impórtalo de la siguiente manera:

```javascript
const { performance } = require("node:perf_hooks")
```

**Método console.time**

El método console.time() mide el tiempo en una determinada línea de código. Se necesitan dos invocaciones de este método y especificando como argumento el nombre de esta operación. La segunda invocación debes utilizar el método console.timeEnd().

```javascript
console.time("duración")
contar(5) // Algoritmo
console.timeEnd("duración")
```

Ejecuta el método y observa los valores de duración. Este método funciona en cualquier contexto de ejecución.

**Complejidad del algoritmo**

Para visualizar una gráfica de los recursos que requiere en función de los elementos de entrada, usa esta herramienta de Visualización de Complejidad Temporal. https://radiant-anchorage-11930.herokuapp.com/


La gráfica indica que a medida que el algoritmo procesa más elementos, necesita mayor tiempo de ejecución.

imagen:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica04.png)


<!-- Tema: console.time

function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

console.time("duracion-contar");
contar(5);
console.timeEnd("duracion-contar"); -->
https://w3c.github.io/hr-time/#dom-performance-now

https://nodejs.org/api/perf_hooks.html#perf_hooks_performance_now


<!-- 
Tema: performance.naw

const performance = require("perf_hooks");

function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

let inicio_tiempo = performance.performance.now();
contar(5);
let final_tiempo = performance.performance.now();
let duracion = final_tiempo - inicio_tiempo;

console.log(`El algoritmo contar ha durado ${duracion}ms.`); -->

## Complejidad espacial en práctica
---
La complejidad espacial es diferente a la complejidad temporal. Los diferentes compiladores asignan un espacio distinto de memoria para almacenar variables.

La diversidad de tamaños y formas con las que el compilador almacena información es interesante, pero para el propósito que tenemos, podemos simplificarlo a contar cuántas variables se definen para almacenar arreglos, números o cadenas.

***Ejemplos de complejidad espacial***

El algoritmo contar recibe como parámetro un número y cuenta hasta ese número. ¿Qué se genera en el algoritmo? Una variable i que almacena un número.
```javascript
function contar(n) {
    for (let i = 0; i< n; i++){
        console.log(i)
    }
}
```
El algoritmo repetirArreglo recibe como parámetro un array y lo duplica, por ende, está generando un espacio en memoria similar al array inicial.
```javascript
function repertirArreglo (array) {
    let arregloRepetido = [...array]
    return arregloRepetido
}
```
El algoritmo convertirAString recibe como parámetro un array de números, y por cada número lo convierte a string. De esta manera, se está generando un valor en memoria diferente, ya que los compiladores manejan los números y las palabras de diferente manera.
```javascript
function convertirAString  (array) {
    let resultado = array.map(el => el.toString())
    return resultado
}
```

El algoritmo generarMatriz recibe un valor numérico como parámetro para generar una array de arrays o una matriz. En consecuencia, se está generando un número de elementos igual al cuadrado del parámetro y una cantidad de arrays igual al valor del parámetro.
```javascript
function generarMatriz (valor){
    let matriz = new Array(valor)
    for (let i = 0; i < valor; i++){
        matriz[i] = new Array(valor).fill(0)
    }
    return matriz
}

console.log( generarMatriz(5))

/* 
[
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ]
]*/
```
A partir de un valor numérico igual a 25, se generaron 25 elementos de la matriz y 5 arrays individuales en memoria.