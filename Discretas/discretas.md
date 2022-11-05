- ¿Qué es la lógica?
- ¿Qué es un conjunto?
- Teoría de graficas
- Árboles
- Algoritmos

https://docs.google.com/presentation/d/1bdmgfEEM0Zgv_D6PFND1MLv3MtVJHIC_/edit?usp=share_link&ouid=107911106433886468726&rtpof=true&sd=true


---
***¿Qué es la lógica?***

Es todo lo que tu cerebro piensa con base a lo que para ti es coherente, está estructurado y tiene sentido.
En este curso nos vamos a centrar en la lógica proposicional, que como su nombre lo indica se basa en proposiciones o afirmaciones.

***¿Qué es una proposición o afirmación?***

No es más que una sentencia, oración o enunciado al cual le puedes dar algún de verdadero o falso. Ni las pregunta, las órdenes y los deseos contaran como proposiciones.

En la lógica proposicional, nos interesa saber la relación que hay entre estas.

Existen dos tipos de proposiciones, las simples y las compuestas:

- Las proposiciones simples tienen un valor de verdadero o falso, son representadas por la letra p, q, r, s, t.

- Las proposiciones compuestas como su nombre lo indica están compuestas por proposiciones simples. Estas proposiciones necesitan conectores lógicos para unir las diferentes proposiciones simples que la integren.

Existen múltiples conectores lógicos, entre ellos se encuentran la conjunción, disyunción, implicación, equivalencia y negación.

Antes de pasar a ver como los conectores lógicos interactúan con las proposiciones simples para poder realizar una proposición compleja debemos entender un concepto más de las proposiciones complejas, el valor de verdad. Así como una proposición simple puede tener un valor de verdadero o falso, las proposiciones complejas tienen un valor de verdad el cual puede ser verdadero o falso.

Las opciones de valor de verdad de una proposición compleja van a depender del numero de proposiciones simples que contenga, una forma rápida de calcular el numero de opciones es elevando 2 al número de proposiciones simples que contenga. Esto nos servirá para evaluar una tabla de verdad, la cual nos va a mostrar el valor de verdad de una proposición compuesta.

La tabla de verdad de una **Conjunción** nos muestra que, para que el valor de verdad de una conjunción sea verdadero ambas proposiciones simples deben ser verdaderas, si alguna es falsa o ambas son falsas entonces el valor de verdad será falso.

Para la **Disyunción débil** si una de las proposiciones simples es verdadera entonces el valor de verdad será verdadero, si todas las proposiciones simples son falsas entonces el valor de verdad será falso. Por otro lado, la Disyunción fuerte va a tener su valor de verdad verdadero solo cuando una de las proposiciones sea verdadera y la otra falsa, de otro modo el valor de verdad será falso.

El valor de verdad de un **Condicional** solamente será falso cuando la primera preposición sea verdadera y la segunda sea falsa, para los demás casos el valor de verdad será verdadero.

**Bicondicional** tendrá valor de verdad verdadero solo cuando ambas preposiciones tengan el mismo valor de verdad, si alguna es falsa y la otra es verdadera entonces el valor de verdad de una tabla Bicondicional será falso.

Obtener el valor de verdad de la Negación es bastante fácil, si la preposición era verdadera entonces pasara a ser falso y viceversa.

***Tipos de conectores lógicos***

- Conjunción: y (∨) Sólo es verdad si ambas proposiciones son verdad. Ejemplo: Es de noche y hace frío.

- Disyunción débil: o (∧) Solo es falsa si ambas proposiciones on falsas. Ejemplo: estoy programando o estoy escuchando música

- Disyunción fuerte o…o (Δ) Será verdad si sólo una de las proposiciones se cumplen. Ejemplo: O está en su casa o está en la oficina

- Condicional si…entonces (⇒) Es falso sólo en el caso de que la primera condición se cumpla y la segunda no. - Subordina la segunda proposición (consecuente) a la primera (antecedente). Ejemplo: Si llueve entonces el río crecerá

- Bicondicional: si y solo si (⇔) es verdad solo si ambas son positivas o ambas son falsas. Ejemplo: Aprobarás el examen si y sólo si estudias.

- Negación. no ~. Cambiará el estado de verdad de la proposición, Ejemplo: no está lloviendo

![](https://userscontent2.emaze.com/images/1e11cba2-6d0c-47f7-8f4e-2ffec24f1188/3c9c8a22-18d5-4c8f-9603-53f28c16db26.png)

## Tablas de verdad
---
Existen tres términos importantes en las tablas de verdad:

• Tautología: se da cuando todas las opciones de una tabla te dan verdadero.

• Contradicción: se logra cuando todas las opciones son falsas.

• Contingencia: se da cuando algunas opciones son falsas y algunas son verdaderas.

Al momento de construir una tabla de verdad lo primero que debes hacer es mirar cuantas proposiciones simples tienes, después evalúa los conectores lógicos que tengas y ve realizando las proposiciones complejas dando prioridad a las que se encuentran dentro de paréntesis.

![](https://i.ibb.co/6gbKzyH/lo.png)
Recuerda que el número de opciones de una preposición compleja esta dado por 2 elevado a la n, donde n es el número de preposiciones simples.

Recuerda tener presentes las tablas de verdad de las operaciones que vayas a realizar para apoyarte en ellas.

![](https://i.ibb.co/s3LLdh8/1.png)

![](https://i.ibb.co/k3VZ5s8/2.png)

## Circuitos lógicos
---

**¿Qué es un circuito lógico?**

Es una serie de elementos que cumple las leyes de la lógica y que nos permite representar proposiciones complejas, cumpliendo las leyes de los circuitos eléctricos.

En un circuito eléctrico tenemos un generador que proporcionara energía a, por ejemplo, una bombilla. En este caso la energía pasara libremente siempre y cuando los interruptores que conformen dicho circuito estén todos cerrados.

Así como en la lógica vemos que las proposiciones pueden tener un valor de verdadero o falso, en un circuito un interruptor puede estar cerrado o abierto, esto es igual que representar a verdadero como 1 y a falso como 0.

Dentro de los circuitos, el conector lógico de **Conjunción** es igual a un circuito en serie. Por otro lado, la **Disyunción** se representa como un circuito en paralelo.

![](https://static.platzi.com/media/user_upload/2021-05-08_11h58_47-a1b3b841-0182-4fab-adad-1204de13b01c.jpg)

![](https://static.platzi.com/media/user_upload/2021-05-08_12h03_53-aee018b5-4aa4-4ff8-8497-9f99a72728fe.jpg)


![](https://i.ibb.co/LC34c90/aa.png)

![](https://i.ibb.co/SwGNC7N/qqq.png)

![](https://static.platzi.com/media/user_upload/IMG_0140-f891856d-7e02-43c4-84d5-6bfb501050b7.jpg)

Recuerda que para el conector lógico de Conjunción lo representamos con un circuito en serie mientras que para la Disyunción usamos un circuito en paralelo.


## Conjuntos
---
"Un conjunto lo podemos definir como un grupo de objetos, personas, o elementos unidos por una misma característica como por ejemplo sería el conjunto de números pares. Dentro de un conjunto no importa el orden de los elementos ni si se repite alguno de ellos.

En conjuntos es muy importante hablar sobre la relación de pertenencia, esto indica si un objeto pertenece a algún conjunto, es representada por el símbolo ∈. Mientras que cuando un objeto no pertenece a algún conjunto, usaremos el símbolo ∉.

Podemos determinar un conjunto de dos diferentes formas:
- Por extensión: usada cuando conocemos cada elemento individualmente dentro del conjunto, nombramos cada elemento que integra el conjunto.

-  Por compresión: nos sirve para describir solamente las cualidades de los elementos que integran el conjunto.

Por lo general cuando hablamos de conjuntos finitos los determinamos por extensión a menos que sean muy grandes; los conjuntos infinitos siempre vas a ser determinados por compresión.

La cardinalidad es el número de elementos que integran un conjunto.

Un conjunto puede incluir dentro otro conjunto, a este ultimo se le llama subconjunto.

## Operaciones entre conjuntos
- Al momento de hablar de conjuntos es necesario saber que existen algunos conjuntos especiales. El primero es el conjunto nulo, es un conjunto donde no hay ningún elemento.

- Un conjunto unitario es integrado solo por un único elemento. Por otro lado, el conjunto universal es aquel que este compuesto por todos los conjuntos que estés manejando.

- Dentro de las operaciones entre conjuntos podemos encontrar la Unión, la cual representa la adición de un conjunto A con el conjunto B.

- La Intersección de dos conjuntos A y B son aquellos elementos que se encuentran tanto en A como en B.

- En la Resta de conjuntos a diferencia de la unión y la intersección, si importa el orden de los conjuntos, por ejemplo, la Resta de un conjunto B a un conjunto A retira los elementos que contiene B que se encuentran en el conjunto A.

- Por ultimo el Complemento de un conjunto son todos los elementos que le faltan al conjunto para volverse el conjunto universal.

## Teoría de grafos
---
El concepto básico de un gráfico es, un modelo matemático que sirve para representar las relaciones entre objetos de un conjunto.
Un gráfico o grafo es un conjunto de vértices, o nodos, que están conectados a través de aristas, líneas o conexiones.

Hay varios tipos de grafos, el primero de todos es el nodo simple donde tenemos los nodos y las conexiones gracias a las cuales nos podemos mover fácilmente a través del grafo.

- El Multígrafo tiene varias conexiones entre dos nodos, permitiendo tener dos rutas distintas para estos nodos.

- Un Pseudografo al igual que el multígrafo puede tener múltiples conexiones entre dos nodos y, además, una de estas conexiones puede partir y terminar en el mismo nodo.

- El Grafo Ponderado cuenta con un valor dentro de las conexiones, esto puede verse como el costo, o recurso, de una ruta de nodos.

- Por último, el Grafo Dirigido establece una dirección en las conexiones, esta dirección se representa con una flecha, también existe el Multígrafo Dirigido que cuenta con dirección en las conexiones y puede haber múltiples conexiones entre dos nodos.

![](https://i.ibb.co/VBTRCy1/gra.png)

![](https://3.bp.blogspot.com/-deOGbFEZxJ0/Vz2eLdhX0oI/AAAAAAAAAVc/4AxuQ3Z0gjALKbFSQ5xWf7-0UXvfaZWHACLcB/s640/4.PNG)

![](https://i.ibb.co/Qp6p3sT/dddddd.png)

## Grados, caminos, cadenas y ciclos
---
***¿Qué es el grado de un vértice?***

Es el número de aristas que tiene un nodo con otros nodos.

- Existe una propiedad matemática que nos dice que la sumatoria de todos los grados de los vértices de un grafo es igual al doble de las aristas.

- Otra propiedad nos indica que si tenemos más de dos vértices con grado impar es imposible recorrer de una sola vez todo el grafo sin repetir un camino.

- Una cadena es una sucesión de vértices y de conexiones entre sí.

- Un camino a diferencia de una cadena es una sucesión de vértices y conexiones donde no puedes repetir ningún vértice ni conexión, mientras en un ciclo el vértice de inicio es igual al vértice donde termina.

- Un grafo conexo es aquel donde todos los nodos están unidos entre sí.

![](https://i.ibb.co/vBbQGnz/sdsdsdsd.png)

![](https://i.ibb.co/bdMDhJK/pp.png)

## Caminos y ciclos eulerianos
---
Un Camino Euleriano es aquel camino que recorre todo el grafo sin repetir una conexión, esto se cumplirá siempre y cuando un grafo no tenga más de dos vértices con grado impar.

Un Ciclo Euleriano es aquel ciclo que recorre todo el grafo sin repetir una conexión, este se cumplirá solo cuando todos los vértices del grafo son grado par.

## Caminos y ciclos hamiltonianos
---
A diferencia de los caminos y ciclos eulerianos, los caminos y ciclos hamiltonianos buscaran recorrer los nodos una sola vez sin importar el camino que utilicemos.

Para afirmar que hay un camino hamiltoniano se debe cumplir la condición donde la suma del grado de dos vértices es mayor o igual al número de vértices menos uno, de otra forma puede que exista el camino hamiltoniano, pero no se podrá afirmar.

Si hay un camino hamiltoniano, pero no un ciclo, entonces el grafo no es hamiltoniano.

## Matriz de adyacencia
---
Existen diferentes formas de representar un grafo, ya hemos visto su representación gráfica, en esta clase vamos a ver como se representan con una matriz.

Dentro de la matriz vamos a representar cada fila y columna con un nodo, si existe una conexión entre dos nodos entonces colocaremos un uno en la celda correspondiente, si no existe una conexión colocaremos un cero. Si algún nodo tiene una conexión consigo mismo entonces colocaremos un 2.

Al sumar todas las filas nos dará como resultado el grado de cada vértice.

La matriz de adyacencia es una de las representaciones más utilizadas.

![](https://i.ibb.co/5GGpTHz/sad.png)

![](https://static.platzi.com/media/user_upload/1%20Confusion%20en%20Matriz%20de%20Adyacencia-3f293b86-c313-493c-b76d-7c2d842fe5d3.jpg)

## Matriz de incidencia
---
Antes de construir una matriz de incidencia deberás darle un nombre o identificador a cada conexión de tu grafo. Estas conexiones van a representar las columnas de tu matriz y los nodos van a representar las filas.

Colocaremos un 1 en las celdas donde una conexión incida en un nodo, si no incide en el nodo entonces colocaremos un 0.

![](https://i.ibb.co/DkGM8QP/incidencia.png)

![](https://i.ibb.co/cJ6q3yd/incidencia2.png)

Para saber a partir de nuestra matriz si nuestro grafo es dirigido o no dirigido basta con analizar si la matriz es simétrica o asimétrica, en caso de ser simétrica entonces el grafo es no dirigido y si es asimétrica entonces el grafo es dirigido.  Los vértices de la fila son de los que parte una arista.

## Árboles
---

Los árboles son un tipo de gráfica que tiene muchas aplicaciones en Machine Learning, Ciencias de la computación y en la programación. Un árbol representa una estructura de datos.

A lo largo de este módulo aprenderemos qué es un árbol, cuales son los tipos de árbol que existen dando énfasis en los árboles binarios.


Los Árboles nos permiten organizar o estructurar información. Si tenemos un nodo A y un nodo B, solo existirá una conexión entre ellos.

Los árboles son usados frecuentemente para expresar relaciones de jerarquía.

Existen diferentes tipos de árboles:

- Libre: no es claro cuál es el nodo principal o nodo raíz dentro de este árbol.

- Raíz: se ve una estructura clara de los nodos. Todos parten de un mismo nodo.

- Expansión: es similar al grafo ponderado, la conexión entre los nodos tiene un recurso asociado.

- Binario: en cada uno de los niveles del árbol se tiene un máximo de dos conexiones.

Dentro de los árboles existe el nivel y la altura, los valores de estos cambiarán dependiendo del nodo que tomes como raíz.

El nivel de un árbol es igual al máximo nivel posible de un nodo, el nivel de un nodo se define por el número de conexiones entre el nodo y la raíz más uno.

La altura de un árbol es igual al nivel del árbol más el nivel raíz.

![](https://i.ibb.co/X2DDV8J/arboles.png)

## Sub árboles, vértices, y notación
---
Un subárbol es una parte de un árbol que hace parte de un árbol más grande.

Un vértice terminal es aquel nodo que ya no tiene más hijos o donde el árbol ya no se expande. Por otro lado, los vértices internos son aquellos que tienen hijos.

## Árbol de expansión mínimo
---
Un árbol de expansión mínimo es aquel árbol que partiendo de una raíz pueda conectar todos los vértices buscando los caminos de menor costo. Para sacar el costo mínimo del árbol solo basta con ir sumando el valor que tiene cada conexión nivel por nivel, luego sumar todos los niveles.

## Árbol binario
---
Un árbol binario es aquel donde tenemos un máximo de dos hijos por cada uno de los vértices.

Existen dos tipos de arboles binarios, el primero de ellos es el árbol binario completo donde cada uno de los vértices tiene sus dos ramas bien definidas o no tiene ninguna.

El árbol binario lleno es aquel donde todos los nodos llegan a un mismo punto y al final todas sus ramas son terminales.

El árbol degenerado es donde la mayoría de sus nodos tienen solo un hijo.

Un árbol binario es una estructura recursiva pues puede llamarse a si misma, puedes descomponerlo en partes más pequeñas.

## Recorrido de árboles
---

Al momento de representar un árbol debemos elegir el orden en el cual vamos a recorrer dicho árbol. Dependiendo de qué orden se elija será la forma en que se va a representar el árbol.

Existen tres formas de recorrer un árbol:

- Pre orden: se inicia leyendo el nodo raíz, luego se pasa al hijo izquierdo y por ultimo al derecho.

- In orden: inicia leyendo el hijo izquierdo, luego la raíz y por último el hijo derecho.

- Pos orden: comienza por el hijo izquierdo para posteriormente ir al hijo derecho y por último al nodo raíz.

## Expresiones aritméticas
---
Los árboles también nos sirven para representar expresiones aritméticas, para ello debe cumplir con las siguientes condiciones:

- Los vértices terminales son operandos.
- Los vértices internos son operadores.
- La raíz siempre debe ser un operador.

Así como vimos las diferentes formas para recorrer un árbol, las expresiones aritméticas tienen también sus propias formas:

- Pre fijo: raíz-izquierda-derecha
- In fijo: izquierda-raíz-derecha
- Pos fijo: izquierda-derecha-raíz

![](https://i.ibb.co/kxdsKDt/expr-arth-to-tree-tranversal-02-03-2020-21-04.jpg)

## Algoritmo
---
 Un algoritmo es una serie de pasos que nosotros seguiremos de acuerdo con una lógica.

## Algoritmo de Prim
---
El algoritmo de Prim nos sirve para conectar todos los vértices a través de un árbol con el mínimo coste. Para calcular el coste total del árbol debemos sumar el valor de todas las aristas conectadas.

El algoritmo de Prim nos indica que este se termina cuando hemos conectado todos los vértices con n-1 aristas, donde n es el número de vértices.

![](https://i.ibb.co/SyFqM4W/prim.png)

## Algoritmo de Dijkstra
---
El algoritmo de Dijkstra va a buscar la ruta optima o de menor coste entre dos vértices.

Los pasos de este algoritmo son los siguientes:
```
1. Asignar el valor infinito a cada nodo que no ha sido visitado.
```
```
2. Mantener un registro de los nodos visitados.
```
```
3. Calcular la distancia a cada nuevo nodo sumando la distancia anterior.
```
```
4. Si la nueva distancia que se calculo es menor que la anterior entonces reemplazar en el nodo, sino dejar la anterior.
```
```
5. Se finalizará cuando se llega al nodo final.
```

![](https://i.ibb.co/g96tmCq/dis.png)

## Algoritmo de Kruskal
---
El algoritmo de Kruskal al igual que el algoritmo de Prim sirve para buscar el árbol de expansión mínimo, la diferencia es que el algoritmo de Kruskal inicia seleccionando la arista de menor valor y después en cada iteración se agrega la arista de menor valor del conjunto disponible.

## Algoritmo de Fleury
---
El algoritmo de Fleury va a encontrar un ciclo euleriano. Recordemos que un ciclo euleriano es un ciclo donde inicias y terminas en el mismo punto, pasando por todas las aristas una sola vez.

Los pasos que seguir son:
```
1. Verificar grado del grafo.
```
```
2. Realizar un circuito cerrado.
```
```
3. En cada nueva iteración realizar un nuevo camino cerrado visitando aristas que no han sido visitadas.
```
```
4. Reemplazar cada nuevo circuito en el inicial hasta visitar todas las aristas.
```

![](https://i.ibb.co/Sdytksv/f.png)

## Algoritmo de flujo máximo
---
Habrá ocasiones donde no vamos a querer el coste mínimo, sino buscar el flujo máximo, para esas ocasiones nos servirá este algoritmo. Para este algoritmo usaremos un grafo dirigido empoderado.

Los pasos del algoritmo son los siguientes:
```
1. Direccionar los flujos e iniciar en ceros.
```
```
2. Obtener trayectorias buscando el mayor flujo.
```
```
3. Escoger el menor flujo de la trayectoria, esto es la arista de menor valor dentro de tu camino que seleccionaste.
```
```
4. Actualizar el gráfico con las capacidades mínimas, ósea, restando el valor de la arista del anterior paso a cada una de las aristas del camino.
```
```
5. Buscar nueva trayectoria o camina en aumento y repetir hasta que no existan más.
```
![](https://i.ibb.co/Qm0D5rP/m.png)

