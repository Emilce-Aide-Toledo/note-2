## Principales paradigmas de programacion
### *Programación imperativa:*
Los primeros lenguajes de programación y, por extensión, también los primeros programas informáticos, se basaban completamente en este enfoque, que prevé una secuencia regularizada de órdenes o instrucciones determinadas. Este paradigma de programación es la base, por ejemplo, de los veteranos lenguajes Pascal y C, así como de todos los lenguajes ensambladores, entre otros. En la programación imperativa, el centro de atención radica, entre otras cosas, en trabajar lo más cerca posible del sistema. Como consecuencia, el código de programación resultante es fácil de comprender y, a la vez, muy abarcable.
imperativa.png

### *Programacion estructurada:*
La principal modificación del principio básico radica en que, en lugar de instrucciones de salto absolutas (instrucciones que provocan que el procesamiento no continúe con la siguiente instrucción, sino en otro lugar) este paradigma de programación de software prevé el uso de bucles y estructuras de control.
estructurada.png

### *Programación procedimental:*
El paradigma de programación procedimental amplía el enfoque imperativo con la posibilidad de desglosar algoritmos en porciones manejables. Estos se denominan como procedimientos, dependiendo del lenguaje de programación, o también como subprogramas, rutinas o funciones. El sentido y el propósito de esta distribución es hacer que el código de programa sea más claro y evitar las repeticiones innecesarias de código.
PROGRAMACIÓN+PROCEDIMENTAL.jpg

### *Programación modular:*
El código fuente se divide específicamente en bloques parciales lógicos independientes los unos de los otros para proporcionar más transparencia y facilitar el proceso de debugging (resolución de errores). Los bloques parciales individuales, denominados módulos, se pueden probar por separado antes de vincularlos posteriormente a una aplicación conjunta
modular.jpg

### *Programación declarativa:*
Radica en la descripción del resultado final que se busca. Por lo tanto, en primera línea se encuentra el “qué” del resultado y no el “cómo” de los pasos que llevan a la solución, como es el caso en la programación imperativa. Esto provoca que el código de la programación declarativa sea más difícil de comprender debido al alto grado de abstracción, aunque resulta muy corto y preciso.
declaratividad.png

### *Programación funcional:*
Un programa de programación funcional consta de llamadas de función concatenadas en las que cada parte del programa se interpreta como una función. En este sentido, las funciones dentro de la programación funcional pueden adoptar distintas “estructuras”. Por ejemplo, se pueden vincular entre sí como datos o se pueden utilizar en forma de parámetros. Asimismo, se pueden utilizar como resultados de función. En contraposición, el paradigma se ocupa de que no haya asignaciones independientes de valores.
function.jpg

### *Programación lógica:*
El paradigma de software lógico, denominado también como programación predicativa, se basa en la lógica matemática. En lugar de una sucesión de instrucciones, un software programado según este principio contiene un conjuntode principios que se pueden entender como una recopilación de hechos y suposiciones. Todas las solicitudes al programa se procesan de forma que el intérprete recurre a estos principios y les aplica reglas definidas previamente para alcanzar el resultado deseado.

### *Programación Orientada a Objetos*
-Orden

Uno de los primeros problemas a resolver fue el orden
Esto nos ayuda cuando todos los elementos de nuestra aplicación están conectados entre sí
Los objetos nos permiten definir:
Atributos son valores que serán propios de unos objetos
Métodos son comportamientos para nuestros objetos
- Reutilizar

Imagínate crear varias galletas las cuales deban de tener un mismo tamaño y grosor, este proceso será repetitivo.
Al tener un molde será más sencillo crear las mismas de una misma forma
Crear moldes toma un poco más de tiempo resulta un poco de más tiempo, pero a largo plazo para crear uno nos ahorra mucho más tiempo
Las clases serán nuestros moldes las cuales podremos reutilizar declarando atributos y métodos

[Ver más](https://platzi.com/clases/2332-javascript-poo/38618-bonus-futbol-y-programacion-orientada-a-objetos/ "Ver más")

### Qué es un objeto en JavaScript
*Objeto literal*
Los objetos literales se distinguen de los objetos de la POO porque no son instancias de un prototipo creado por el desarrollador.

Sin embargo los objetos literales son instancias del prototipo Object creado por defecto en JavaScript.
```javascript
    const Natalia = {
    	'Name' : 'Natalia',
    	'Age' : 20,
    	'Rank': 2000, 
    };
```

*Prototipo*
Un prototipo es una estructura de código a partir de la cual se crean objetos, ya que guarda los atributos y métodos que luego podrán ser heredados por sus instancias.

Podemos pensarlo como un “molde” de objetos.

```javascript
function Student() {
	this.name = 'Nombre';
	this.age = '18';
	this.points = '750';
}

const Juanita = new Student();
```

*Objeto*
Los objetos son estructuras de datos formadas por métodos y atributos, los cuales hereda de su prototipo padre.

De modo que los objetos son son instancias de ese prototipo, particularmente cuando dicho prototipo fue creado por el desarrollador (en caso contrario se llaman objetos literales).


*Atributos*
Dentro de los objetos se pueden guardar atributos para guardar en ellos la información la información que se les asocia. Así, toda la información del objeto se guarda en sí mismo.


*Métodos*
Dentro de los objetos también pueden guardarse métodos, los cuales son funciones que, entre otras cosas, permiten actualizar la información guardada en los atributos de forma segura.


*Atributo* *__proto__*
Es el nombre que se le da al atributo donde se guardan los métodos que las estructuras de datos tienen por defecto en JavaScript.

El atributo *__proto__ *se hereda a partir de los prototipo por defecto de JavaScript para cada estructura de datos en particular, por ejemplo de los prototipos Object y Array.

El atributo* __proto__* también se hereda a los objetos, ya que éstos son a la vez instancias de algún prototipo creado por el desarrollador y del prototipo Object.

[Qué es un objeto en JS](https://platzi.com/clases/2332-javascript-poo/38619-que-es-un-objeto-en-javascript/ "Qué es un objeto en JS")