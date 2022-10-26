## ¿Cómo funciona el JavaScript Engine?
Cuando se escribe código en JavaScript, es necesario transformarlo en código que entienda el computador, este código es denominado Machine Code o código de máquina. El motor del navegador es el encargado de crear Machine Code a partir de instrucciones escritas en JavaScript.

Cada navegador tiene su propio motor, sin embargo, el que más impacto ha tenido sobre el lenguaje, es Engine V8 desarrollado por Google y que lo encuentras en navegadores como Google Chrome y Microsoft Edge. Engine V8 también es el motor utilizado por Node.js para trabajar con JavaScript del lado del servidor.

### Qué es y cómo funciona JIT compiler
El proceso en el que el motor V8 transforma código JavaScript en Machine Code se denomina Just in Time Compiler o JIT compiler.

### Motor  V8 
Es un motor de **código abierto para JavaScript creado por Google**.  Con la evolución rápida de V8, otros navegadores han optado por integrarlo.  Node.js utiliza el motor V8 para trabajar con JavaScript del lado del servidor de manera estable.

El motor de JavaScript genera un entorno global (Global environment). El entorno global hace tres cosas muy importantes:
- Genera un objeto global llamado window.
- Genera un contexto llamado this. En un contexto global this es igual a window.
- Ambiente de ejecución.

Después de comienza el contexto de ejecución (Execution context) donde corre el código de JavaScript utilizando un Stack de tareas, apilándolas una por una, en la cuál la última tarea añadida será la primera en ejecutarse. Cuando el motor esta interactuando con el navegador, realiza los siguientes procesos:
- Parser: genera un parseo del documento completo mediante palabras claves.
- AST: Se crea a partir de los nodos que genera el parser. Es una estructura de árbol que representa tu código sintácticamente. Puedes utilizar la página AST Explorer{target="_blank"} para ver cómo funciona.
- Intérprete: El intérprete recorre el AST y genera Bytecode (lenguaje que entiende la computadora y no es binario) basado en la información que contiene. Sin embargo, si el intérprete detecta que puede optimizar tu código, no genera Bytecode, sino que genera un proceso de optimización que consiste en el profiler y compiler.
- Profiler y compiler: El profiler monitorea y mira el código para optimizarlo. El compiler optimiza ese código y genera machine code (lenguaje binario). En esta etapa, por la intención de optimizar el código, también genera errores como el Hoisting.

![](https://i.ibb.co/cTxZ2BV/js-engine-complete-2x-285ce1e4-709b-4842-b4e4-90ec6d940f9f.webp)

## Qué es hoisting
Hoisting es un término para describir que las declaraciones de variables y funciones son movidas a la parte superior del scope más cercano: scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

El código permanece igual, solo es una interpretación del motor de JavaScript que intenta ayudar a optimizar el código, pero en este caso provoca errores y resultados no esperados. En el caso de las variables solo sucede cuando son declaradas con var.

#### Hoisting en variables declaradas con var
En el siguiente código, la respuesta del console.log es undefined, porque al hacer referencia a una variable que no está declarada, el motor de JavaScript crea esta variable antes de la declaración y le asigna un valor de undefined.

```javascript
console.log(nombre) // undefined
```
```javascript
var nombre = "Andres"
```
```javascript
var nombre = undefined
```
```javascript
console.log(nombre)
```
```javascript
nombre = "Andres"
```
Lo adecuado es evitar utilizar var para declarar las variables con let o const, ya que estas últimas el proceso de optimización que realiza el motor de JavaScript no generará variables con el valor de undefined antes de su declaración.

### Código de ejecución

El comportamiento de JavaScript es síncrono, es decir, solamente puede ejecutar una tarea a la vez. Esto puede ser beneficio o perjudicial dependiendo los casos. Por ende, para ejecutar cada tarea, JavaScript se organiza en dos estructuras de datos: el Memory Heap y el Call Stack.

### Qué es Memory Heap

Consiste en una manera desorganizada o aleatoria de guardar la información, ya sea valores, funciones, entre otros. La RAM es donde guardará esta información mediante una referencia o dirección.

### Memoria y cómo se guardan los datos.

Por ejemplo, declaras una variable nombre y le asignas un valor, esta se guardará en la memoria RAM utilizando una referencia que manejará el memory heap. De esta manera, el Engine sabrá que variable mostrar cuando sea utilizada después de la declaración, pidiendo la referencia de memoria al memory heap y buscándola en la memoria RAM.

#### Valores por referencia
¿Qué pasa con estructuras más complejas, como arrays u objetos? Pues que estas se guardarán en una dirección de memoria diferente a sus valores, pero referenciadas entre sí. Por ejemplo, mira el siguiente código y piensa cuál es el resultado:

```javascript
const objeto = {valor: 1}
```
```javascript
const objeto2 = objeto
```
```javascript
objeto2.valor = 2
```
```javascript
console.log(objeto.valor)
```
```javascript
console.log(objeto === objeto2)
```
Primero mostrará el valor 2 y después `true`. La explicación es que la referencia de ambos objetos a sus valores es la misma, por lo que si modificas un valor, también lo harás en ambos.

### Qué es Call Stack
Consiste en ordenar las funciones que son invocadas de arriba hacia abajo, donde la última tarea será la que se ejecute primero. Una vez se ha guardado la información del archivo o programa, es momento de ejecutarlas.

Primeramente, guarda todas las funciones o declaraciones en anonymous que representa el objeto global.  Sucesivamente va agregando y quitando ejecuciones en el orden correspondiente. Es por eso que JavaScript realiza una tarea a la vez.

### Garbage Collection
 Es un proceso automático realizado por el motor de JavaScript que consiste en eliminar aquellos objetos que no tienen referencias o son inalcanzables para el contexto de ejecución, a través del algoritmo mark-and-sweep (marcado y barrido).
 
 El Garbage Collection es importante para liberar aquellas referencias en memoria y no exista un desbordamiento en las tareas (Stack overflow). Por ejemplo, un ciclo infinito que provoque el colapso de la página web.

Algoritmo marcado y barrido
El algoritmo marcado y barrido (mark-and-sweep) hace referencia a cuando un tipo de dato se vuelve inalcanzable para el programa. El motor de JavaScript empieza por la raíz, la cual es el Objeto Global, a medida que el programa avanza los objetos van creando o borrando referencias a sus raíces.

Cuando un objeto se queda ninguna referencia, se dice que el objeto es inalcanzable, en este momento el Garbage Collection libera el espacio que usaban las variables u objetos cuando aún tenían una referencia.

Desde 2012, los navegadores utilizan un Garbage Collection, que ha ido recibiendo mejoras en su implementación constantemente.

Ejemplo que actúa el Garbage Collection
En este punto de tu estudio, ya conocerás los métodos shift y pop de arrays, puede que los hayas entendido como eliminar el primer y último elemento de un array, respectivamente.

Pues no funcionan exactamente como “eliminar”, sino como extraer el primer y último elemento, pero si no lo guardamos en una variable, el Garbage Collection lo eliminará.

```javascript
const array = [1,2,3,4,5]
    // Extrae el último elemento, guarda la referencia en la variable lastElement.
```
```javascript
const lastElement = array.pop() 
```
```javascript
console.log(lastElement) //5
```
```javascript 
const array = [1,2,3,4,5]
// Extrae el último elemento, pero no existe la referencia, entonces el Garbage Collection lo eliminará
```
```javascript
array.pop() 
```
```javascript
console.log(array) // [1,2,3,4]
```

### Qué es Stack overflow

Es un término empleado para referirse al desbordamiento de tareas en el Call Stack del motor de JavaScript. Esto ocurre por ciclos infinitos, funciones recursivas sin control, cambios de estado continuo, o algún programa que exceda las tareas que puede ejecutar el navegador.

Anteriormente, los navegadores no estaban preparados para manejar un stack overflow, por lo que la página web colapsaba y cerraba la aplicación. En la actualidad, si el navegador encuentra este problema, detiene la ejecución del código evitando que colapse la página web.

### JavaScript Runtime
Recordando el material de Call Stack, se mencionó que JavaScript realiza una tarea a la vez en el Call Stack, esto se denomina código síncrono o Single thread. La sincronía puede presentar problemas en operaciones que demoren demasiado.
![](https://i.ibb.co/H2zbjnZ/chrome.png)

## Qué es la asincronía en JavaScript
La asincronía de JavaScript consiste en delegar algunas tareas para que las ejecute el navegador, una vez esas tareas están terminadas entran en otra estructura llamada Callback queue. En el Callback queue la primera tarea que entra, es la primera en salir. ¿Cómo salen? Mediante el Event Loop.

El Event loop es el encargado de preguntar al Call Stack si ya ha terminado todas sus tareas. Entonces, si y solo si el Call Stack está vacío, el Event loop moverá las funciones que están en el Callback queue para que se ejecuten.

Para entender mejor este término, eetomemos el ejemplo de los tacos, pero ahora tienes un compañero. Entonces tú delegas la tarea de preparar la torta a otra persona, mientras realizas los tacos.

Luego de 5 minutos por cada tarea, entregas las tortas a los clientes correspondientes. Después de 10 minutos necesitas la torta, entonces preguntas ¿ya está lista la torta? Tu ayudante te entrega la torta y se lo entregas. En total fueron 20 minutos y todos los clientes recibieron su pedido. Así funciona la asincronía en JavaScript.

Asincronía en JavaScript
El proceso completo que sigue JavaScript se muestra en la siguiente imagen:
![](https://i.ibb.co/rt302NS/engine-js12.png)

Las Web APIs son herramientas adicionales que te ofrece el navegador para realizar peticiones, modificar el DOM, entre otras. Estas herramientas las puedes observar en el objeto global `window`.

