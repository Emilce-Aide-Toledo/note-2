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

## Análisis asintótico
---
La asíntota es una recta que se aproxima lo máximo posible a una función, pero nunca llegan a cruzarse.

image:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica07.png)

**Análisis asintótico**

El análisis asintótico consiste en modelar nuestros algoritmos en una representación gráfica de su comportamiento limitante. Recordarás que los datos arrojados en el cálculo de la eficiencia del algoritmo no eran iguales en cada ejecución.

Para evitar esto se modela una función capaz de representar el algoritmo a partir de sus procesos en función de la cantidad de entradas, que se aproxime al comportamiento real.

Mientras la asíntota sea más vertical, la curva de la función de nuestro algoritmo necesitará muchos más recursos por pocos elementos de entrada, es decir, ocupará demasiado espacio o tiempo del necesario.

Como puedes ver en la siguiente gráfica, estas curvas son las que debemos evitar y mantener una asíntota lo más horizontal posible. No te preocupes de la representación, lo veremos en la siguiente clase.

image:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica08.png)

Existen varios tipos de funciones: constante, lineal, polinomial, logarítmica y exponencial.


https://radiant-anchorage-11930.herokuapp.com/

https://www.geogebra.org/calculator

https://www.bigocheatsheet.com/

## Notación Big-O
---

Con la notación Big-O buscamos descubrir una función (constante, lineal, polinomial, logarítmica y exponencial) que sea mayor o igual que la complejidad de un algoritmo, es decir, el peor caso que puede ejecutarse el programa.

***Clases de Big-O***

Las clases de Big-O son las representaciones simbólicas del tipo de crecimiento del algoritmo en el peor de los casos. El tipo de crecimiento es la función que se aproxima a los resultados de los valores de tiempo o espacio.

Esta representación simbólica consiste en la letra O mayúscula seguida de paréntesis que incluyen el tipo de crecimiento.

image:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica09.png)

De esta manera, ya conoces las funciones representadas en la siguiente gráfica, donde las peores complejidades están situadas al extremo superior izquierdo, y las mejores están en el extremo inferior derecho. De las cuales representan el rendimiento del algoritmo.


image:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica08.png)

## Cálculo de la notación Big-O
---
Si queremos un algoritmo que sea óptimo en el espacio o en tiempo, necesitamos una notación Big-O. ¿Cómo la calculamos? El proceso para calcular esta notación varía según la complejidad temporal o espacial.

***Notación Big-O en complejidad temporal***


Analicemos los siguientes casos para calcular la notación Big-O en complejidad temporal, independiente de la capacidad de procesamiento de tu computador, en estos casos evaluaremos de manera general el peor de los casos que demora un algoritmo en un sistema igual.

- Variables: tienen una notación constante O(1) debido a que al crear una variable se demora un tiempo constante.

- Condicionales: tienen una notación constante O(1) debido a que procesa la condición en un tiempo constante.

- Ciclos repetitivos: tienen una notación lineal O(n) debido a que en el peor de los casos, estos ejecutan n veces una instrucción.

- Ciclos repetitivos anidados: tienen una notación cuadrática O(n^2) debido a que cada ciclo interno se ejecuta n veces el ciclo externo.

```javascript
let bar = 'test'	// O(1)
if() {}		// O(1)
for() {}		// O(n)
while() {}	// O(n)
for() { for() {} }// O(n^2)
```
***Notación Big-O en complejidad espacial***

Analicemos los siguientes casos para calcular la notación Big-O en complejidad espacial, independiente de la capacidad de procesamiento de tu computador, en estos casos evaluaremos de manera general el peor de los casos el espacio que ocupa un algoritmo en memoria.

- Variables: tienen una notación constante O(1) debido a que guarda un espacio de memoria.

- Condicionales: tienen una notación constante O(1) debido a que procesa la condición en un espacio de memoria.

- Ciclos repetitivos: tienen una notación lineal O(1) debido a que procesa el bucle en un espacio de memoria.

- Arrays: tienen una notación lineal O(n) porque guarda en memoria n elementos.

- Matrices o array de arrays: tienen una notación cuadrática O(n^2) porque por cada elemento del array guarda otro array de n elementos.
```javascript
let bar = 'test'  // 0(1)
if () {}               // 0(1)
for () {}             // 0(1)
let resultado = [1,2,...,n]  // 0(n)
let dimensional = [[2,4],[6,8],[10,12]] //0(n^2)
```
También puedes ver esta representación gráfica, donde cada cuadrado es un espacio de memoria utilizado por arrays y matrices (array de arrays).

imagen:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica12.png)

***Simplificar la notación***

Simplificar la notación consiste en representar el crecimiento del algoritmo con una notación general, en lugar de una función específica. En otras palabras, eliminar las constantes que en este análisis no cambia drásticamente el resultado final.

imagen:

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica13.PNG)

***El crecimiento siempre importa***

La complejidad de un algoritmo nace de cuántos recursos utiliza el algoritmo al ejecutarse. La notación Big-O solo se enfoca en el crecimiento en el peor de los casos, no en los valores que puede tener un algoritmo en segundos o bytes.

## Ejemplo de cómo evaluar la complejidad temporal con Big-O
--- 
Cuando existen varias sentencias, se escoge la notación mayor entre todas las existentes en el algoritmo.

En la sección de “Recursos”, en los “Archivos de la clase” se encuentran los archivos de los algoritmos, en la carpeta algorithms. Trata de resolverlos, escribiendo la complejidad de cada sentencia y la del algoritmo completo.

**Búsqueda lineal**

El siguiente algoritmo de búsqueda contiene dos notaciones Big-O. La notación contante corresponde al condicional y a las variables generadas. La notación lineal corresponde al ciclo repetitivo for.
```javascript
function linearSearch(arreglo, clave) { 
  for (let indice = 0; indice < arreglo.length; indice++) { // O(n)
    if (arreglo[indice] === clave) { // O(1)
      return indice; // O(1)
    }
  }
  return -1; // O(1)
}
```
Por lo tanto, la complejidad del algoritmo estará determinada por la complejidad mayor que exista. En este caso lineal O(n).
```javascript
/**
 * Complejidad Temporal -> O(n)
 */
```
**Ordenamiento de burbuja**

condicional y a las variables generadas. La notación lineal corresponde al ciclo repetitivo for interno. La notación cuadrática corresponde al ciclo repetitivo for externo.
```javascript
function bubbleSort(arreglo) {
  let longitud = arreglo.length; // O(1)
  for (let i = 0; i < longitud; i++) { // O(n^2)
    for (let j = 0; j < longitud; j++) { // O(n)
      if (arreglo[j] > arreglo[j + 1]) { // O(1)
        let temporal = arreglo[j]; // O(1)
        arreglo[j] = arreglo[j + 1]; // O(1)
        arreglo[j + 1] = temporal; // O(1)
      }
    }
  }
  return arreglo; // O(1)
}
```
Por lo tanto, la complejidad del algoritmo estará determinada por la complejidad mayor que exista. En este caso cuadrática O(n^2).
```javascript
/**
 * Complejidad Temporal -> O(n^2)
 */
```
**Ordenamiento de selección**

El siguiente algoritmo de búsqueda contiene tres notaciones Big-O. La notación contante corresponde al condicional y a las variables generadas. La notación lineal corresponde al ciclo repetitivo for interno. La notación cuadrática corresponde al ciclo repetitivo for externo.
```javascript
function selectionSort(arreglo) {
  let longitud = arreglo.length; // O(1)

  for (let i = 0; i < longitud; i++) { // O(n^2)
    let minimo = i; // O(1)
    for (let j = i + 1; j < longitud; j++) { // O(n)
      if (arreglo[j] < arreglo[minimo]) { // O(1)
        minimo = j; // O(1)
      }
    }
    if (minimo != i) { // O(1)
      let temporal = arreglo[i]; // O(1)
      arreglo[i] = arreglo[minimo]; // O(1)
      arreglo[minimo] = temporal; // O(1)
    }
  }
  return arreglo; // O(1)
}
```
Por lo tanto, la complejidad del algoritmo estará determinada por la complejidad mayor que exista. En este caso cuadrática O(n^2).
```javascript
/**
 * Complejidad Temporal -> O(n^2)
 */
```

https://github.com/360macky/complejidad-algoritmica-js/tree/master/algorithms

## Ejemplo de cómo evaluar la complejidad espacial con Big-O Avanzado
---

<!-- El espacio auxiliar es el espacio ocupado menos el espacio ocupados por los datos de entrada -->

Cuando existen varias sentencias, se escoge la notación mayor entre todas las existentes en el algoritmo.

Ahora que ya calculaste la complejidad temporal con Big-O, trata de calcular de la misma forma la complejidad espacial. Recuerda que el espacio auxiliar es la memoria almacenada sin tener en cuenta los datos de entrada.

**Búsqueda lineal**

El siguiente algoritmo de búsqueda contiene dos notaciones Big-O. La notación contante corresponde a la variable indice generada. La notación lineal correspondiente al arreglo en los datos de entrada.
```javascript
function linearSearch(arreglo, clave) { // O(n)
  for (let indice = 0; indice < arreglo.length; indice++) { // O(1)
    if (arreglo[indice] === clave) { // No se genera espacio en memoria
      return indice;  // No se genera espacio en memoria
    }
  }
  return -1; // No se genera espacio en memoria
}
```
Por lo tanto, la complejidad del algoritmo estará determinada por la complejidad mayor que exista. En este caso constante O(n), y el espacio auxiliar tendrá una complejidad constante O(1).
```javascript
/**
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> O(1)
 */
```

**Ordenamiento de burbuja**

El siguiente algoritmo de búsqueda contiene una notación Big-O. La notación contante corresponde a las variables generadas dentro de la función. La notación lineal correspondiente al arreglo en los datos de entrada.
```javascript
function bubbleSort(arreglo) {
  let longitud = arreglo.length; // O(1)
  for (let i = 0; i < longitud; i++) { // O(1)
    for (let j = 0; j < longitud; j++) { // O(1)
      if (arreglo[j] > arreglo[j + 1]) { // No se genera espacio en memoria
        let temporal = arreglo[j]; // O(1)
        arreglo[j] = arreglo[j + 1]; // No se genera espacio en memoria
        arreglo[j + 1] = temporal; // No se genera espacio en memoria
      }
    }
  }
  return arreglo; // No se genera espacio en memoria
}
```
Por lo tanto, la complejidad del algoritmo estará determinada por la complejidad mayor que exista. En este caso constante O(n), y el espacio auxiliar tendrá una complejidad constante O(1).
```javascript
/**
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> O(1)
 */
```
**Ordenamiento de selección**

El siguiente algoritmo de búsqueda contiene una notación Big-O. La notación contante corresponde a las variables generadas dentro de la función. La notación lineal correspondiente al arreglo en los datos de entrada.
```javascript
function selectionSort(arreglo) {
  let longitud = arreglo.length; // O(1)

  for (let i = 0; i < longitud; i++) { // O(1)
    let minimo = i; // O(1)
    for (let j = i + 1; j < longitud; j++) { // O(1)
      if (arreglo[j] < arreglo[minimo]) { // No se genera espacio en memoria
        minimo = j; // No se genera espacio en memoria
      }
    }
    if (minimo != i) { // No se genera espacio en memoria
      let temporal = arreglo[i]; // O(1)
      arreglo[i] = arreglo[minimo]; // No se genera espacio en memoria
      arreglo[minimo] = temporal; // No se genera espacio en memoria
    }
  }
  return
   arreglo; // No se genera espacio en memoria
}
```
Por lo tanto, la complejidad del algoritmo estará determinada por la complejidad mayor que exista. En este caso constante O(n), y el espacio auxiliar tendrá una complejidad constante O(1).
```javascript
/**
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> O(1)
 */
```

## Recomendaciones para la evaluación de algoritmos
---
Hasta ahora sabes que un algoritmo con O(1) es mejor que uno con O(n). ¡Genial! Pero, ¿y si ese algoritmo constante en tiempo O(1) se ejecuta en 1000 horas? ¿Y si ese algoritmo constante en espacio O(1) ocupa 1000 GB? La complejidad algorítmica es importante, pero dónde se ejecuta tu algoritmo determina qué tan importante es.

**¿El crecimiento siempre importa?**

Cuando la Complejidad Algorítmica deja de ser relevante, es donde debemos mejorar nuestro algoritmo para alcanzar nuestro objetivo de eficiencia.

Tal vez tengamos el mejor algoritmo jamás visto, pero si lo ejecutamos en una computadora de hace 20 años con un procesador antiguo, pues no podemos esperar mucha rapidez.

Si tenemos un algoritmo A con O(1) y un algoritmo B con O(1), aún podemos saber cuál tiene un mejor rendimiento midiendo el tiempo en que duran. Ya que no dependen puramente del análisis asintótico.

En este caso, la solución del problema no se trata de buscar el algoritmo con menor complejidad, sino de buscar las mejores opciones o variables de entorno para ejecutar y resolver el problema.

## Reglas para estructuras
---
Las reglas para Big-O en tiempo son:

imagen:
![](https://i.imgur.com/T62Y1ed.png)

Las reglas para Big-O en espacio son:

imagen:
![](https://i.imgur.com/de94TQe.png)

