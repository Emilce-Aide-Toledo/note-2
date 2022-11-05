## Complejidad algorítmica
---
La complejidad algorítmica consiste en entender el crecimiento de recursos que requiere un algoritmo al momento de ejecutar un número determinado de elementos.

En otras palabras, el algoritmo puede que se comporte de una manera con 10, 15 o 20 elementos. Sin embargo, con cientos o miles de elementos, el algoritmo probablemente se comportará de manera diferente, con respecto al tiempo y el espacio.

Los recursos para medir la complejidad de un algoritmo son el tiempo y el espacio:

- El tiempo es representado en milisegundos, segundos, minutos, etc.

- El espacio es representado en bytes, kilobytes, megabytes, gigabytes, etc.

Teoría de la complejidad
La teoría de la complejidad estudia el consumo de recursos (tiempo / espacio) que un algoritmo ocupa.

La complejidad algorítmica no hace referencia al tiempo de ejecución del algoritmo (segundos, minutos, horas, etc.), sino al ritmo y qué tan eficiente puede ser un algoritmo, con base en el problema que está resolviendo.

A través de la complejidad buscamos entender el crecimiento de recursos, no su tamaño. Es el crecimiento de recursos lo que importa.

## Complejidad espacial
---
La complejidad espacial es la cantidad de espacio en memoria que un algoritmo emplea al ejecutarse. En otras palabras, cómo el algoritmo ocupa espacio en memoria con la cantidad de elementos de entrada que debe procesar.

**Comparación de algoritmos**

Comparemos dos algoritmos que resuelven el mismo problema: “Visión” y “Nova”. El primer algoritmo aumenta su espacio mientras más estudiantes sean ingresados. Mientras que el segundo algoritmo aumenta exponencialmente su espacio necesario.

Aunque ambos algoritmos resuelven el mismo problema, manejan la cantidad de memoria utilizada de manera diferente a medida que procesa más elementos.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica05.png)

**Espacio auxiliar en la complejidad espacial**

La complejidad espacial incluye el espacio auxiliar y el espacio ocupado por los datos de entrada. En el espacio auxiliar están todos los procesos que procesa el espacio de entrada.

El espacio de entrada no es importante. ¿Por qué? Porque al comparar los algoritmos, el espacio de entrada es el mismo para todos los casos, por lo que el espacio auxiliar es el que los diferencia y el necesario para evaluar el algoritmo.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica06.png)

## Complejidad temporal
---
La complejidad temporal es la cantidad de tiempo en el que un algoritmo tarda en ejecutarse. En otras palabras, cómo el algoritmo aumenta en el tiempo, con respecto a la cantidad de elementos de entrada que debe procesar.

**Comparación de algoritmos**

Comparemos dos algoritmos que resuelven un mismo problema: “Astronauta” y “Experto”. El primer algoritmo aumenta su tiempo de ejecución mientras más estudiantes sean ingresados. El tiempo de ejecución del segundo permanece constante.

Aunque ambos algoritmos resuelven el mismo problema, manejan sus tiempos de ejecución de manera diferente a medida que procesa más elementos.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica02.png)

La siguiente gráfica muestra el tiempo de ejecución en función de la cantidad de elementos a procesar (inputs).

- El algoritmo “Astronauta” tiene una tendencia lineal, es decir, mientras más elementos ejecute, más tiempo necesitará el programa.

- El algoritmo “Experto” es constante, es decir, ejecuta la aplicación en el mismo tiempo para cualquier valor de elementos a procesar.

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

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/complejidad_algoritmica04.png)

