## ¿Qué son las estructuras de datos?
---

Las estructuras de datos son colecciones de valores, las relaciones entre ellos y las funciones u operaciones que se pueden aplicar a los datos. 

## Memoria y cómo se guardan los datos
---
![](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-12-23%20a%20la%28s%29%2018.37.17-35f73152-b84f-42a1-815f-a954b5f322ce.jpg)

![](https://static.platzi.com/media/user_upload/3-Almacenamiento-263a8ffc-fc6f-4ac3-99b8-a112f0f9d008.jpg)

## Arrays
---

![](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-12-23%20a%20la%28s%29%2018.54.55-92ed2a3b-7382-4a68-807c-4a4e96bafd4d.jpg)

![](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-12-23%20a%20la%28s%29%2018.55.38-9a12566d-ccc8-4f22-aa0b-fe5cb8ca8148.jpg)

Un array SIEMPRE va a iniciar en la posición 0.

En lenguajes como C tú tienes que definir la cantidad de memoria que quieres reservar para ese array. Esto hace que su uso sea eficiente, pues la computadora no tiene que estar reservando más espacios “por si a caso”.

Javascript utiliza array dinámicos. 

Un array dinámico reservará un poco más de espacio del que necesita, y cuando este espacio se acabe reservará aún más espacio. Recuerda que la computadora tiene que buscar slots consecutivos disponibles para asignar ese espacio y mientras más información haya guardada más difícil será encontrar este espacio.

### Array construico con clase /código por detrás
```javascript
// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
```
https://github.com/mecanicodev/custom-array/blob/main/MyArray.js

Por si no quedó claro lo que hace la palabra reservada ```delete``` simplemente “unsetea” cierto índice de un objeto, es decir, lo elimina, es similar a usar la función unset() en PHP.

Dejo un link con más información de esta palabra reservada:

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/delete


Ahora, ¿Qué hace ```shiftIndex```?

Básicamente reordena todos los índices, al usar delete lo que sucede es que el elemento se borra junto con su índice, es decir, quedaría algo como:
```javascript
[0, 1, 3]
```
Obviamente ahí alta un “2”, shiftIndex irá posición por posición tomando el elemento de la siguiente posición ```(i + 1)``` y “jalándolo” a la posición actual ```(i)```

Algo importante a tener en cuenta es, aunque estamos usando una clase JavaScript, internamente estamos usando un JSON (el cual permite guardar pares clave-valor), por lo que realmente nuestro array es un JSON, pero a fines prácticos y de entender cómo funciona un array, la práctica viene genial!

Obviamente, JavaScript ya tiene implementada una clase nativa llamada Array.

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array

## Strings
---
No es una estructura de datos, pero la forma en la que se guarda en memoria es como una estructura de datos.

![](https://i.ibb.co/x74KR3n/string.png)

string = "cadena de caracteres”. 

Si le damos un poco de interpretación a esta traducción podemos deducir que se trata de un carácter ligado a otro y así de forma consecutiva. Son caracteres singulares que están pegados los unos a los otros y en conjunto forman una cadena, de ahí su nombre string.

Para entenderlo mejor, un caracter no es más que un simple símbolo o una simple letra, es decir, la letra “b” sería un caracter.

En otros lenguajes como C++ no existe como tal un tipo de dato String, ahí lo más que existe son caracteres, es decir, en C solo puedes guardar un caracter.


## Hash Tables
---
![](https://i.ibb.co/YZDmFXP/hast.png)

![](https://i.ibb.co/LtsbtXM/hash2.png)

![](https://i.ibb.co/zZp3DpD/hash3.png)

![](https://i.ibb.co/6YCz40p/hash4.png)

Las Hash Table funcionan similar a un Array, solo que en vez de índices numéricos se tienen índices o keys en caracteres, entonces es necesario una función intermedia que convierte el key en caracteres en índice numérico.

![](https://static.platzi.com/media/user_upload/8-hash-table-fe7079de-8834-41d5-b18f-ce58bae91844.jpg)

A la  “key” que  se le aplica una función que convertirá  a esa key en una referencia de memoria que es en donde se guardarán los valores.

Para obtener de regreso los valores, se debe usar esa misma key, que será convertida de nuevo en un hash con la referencia de memoria en donde están guardados tus valores y te los devolverá.

![](https://media4.giphy.com/media/qvEkzFvba7v6u3vKbo/giphy.gif)
```javascript
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
```
De forma grafica como se llega a cada elemento dentro de los buckets, y del currentBucket, a que arreglo de arreglos de clave, valor:

![](https://static.platzi.com/media/user_upload/cap3-0f05f4a2-30c6-46bd-a4f3-67f925ac2f24.jpg)

## Linked List
---
Linked List son simplemente un conjunto de nodos ordenados que contienen los valores que necesitemos (numbers, strings, boolean, etc). Cada uno tiene un valor y una referencia a un siguiente nodo.

![](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0038-df338d63-caf1-4bcb-86c2-f8cd72e9db73.jpg)

![](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0041-11c13a63-e3f2-4978-af91-aa1281aa6d9d.jpg)

![](https://i.ibb.co/y6d9zyB/LINKEDLIST.png)

https://levelup.gitconnected.com/array-vs-linked-list-data-structure-c5c0ff405f16

![](https://static.platzi.com/media/user_upload/idea2-3f4b94ee-ed78-4bc5-8cad-cbbf2531186c.jpg)

https://medium.com/@bohndez.dev/estructuras-de-datos-linked-list-en-javascript-e84f3c50a4c4
```JAVASCRIPT
// 0 --> 1 -- > 2 -- > 3-- > 4-- > 5 -- > 6 --> null

// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

class Node{
  constructor(value){
    this.value=value;this.next=null;
    }
    }

class MySinglyLinkedList{
  constructor(value){
    this.head={value:value,next:null,};
    this.tail=this.head;this.length=1;
    }

append(value){
  const newNode=new Node(value);
  this.tail.next=newNode;
  this.tail=newNode;this.length++;
  return this;
  }

prepend(value){
  const newNode=new Node(value);
  newNode.next=this.head;
  this.head=newNode;this.length++;
  return this;
  }

insert(index,value){
  if(index>=this.length){
    return this.append(value);
    }
const newNode=new Node(value);
const firstPointer=this.getTheIndex(index-1);
const holdingPointer=firstPointer.next;
firstPointer.next=newNode;
newNode.next=holdingPointer;
this.length++;return this;
}

getTheIndex(index){
  let counter=0;
  let currentNode=this.head;
  while(counter!==index){
    currentNode=currentNode.next;
    counter++;
    }
return currentNode;
}
}

let myLinkedList=new MySinglyLinkedList(1);
```
## Doubly Linked List

![](https://i.ibb.co/pKXGvV5/d.png)

Una doubly linked list tiene el mismo comportamiento que una simply linked list, pero con la particularidad de que esta SI puede regresar.

Aún necesita ir moviéndose una por una, pero ahora si lo desea puede regresar porque ya conoce quién es su elemento anterior y también quién es el siguiente, es decir, ya no es necesario repetir el ciclo.

![](https://media0.giphy.com/media/7z2LofJrFuKw2VBKP3/giphy.gif)

![](https://i.ibb.co/SfTpmhF/dd.png)
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
```

## Stack
---
Un stack basicamente es una pila, es decir, algo que estás apilando, lo primero que entra se queda hasta abajo y lo último que entra se queda hasta arriba, de ahí su nombre LIFO, Las In (El último que entra), First Out (Es el primero que sale).

![](https://media0.giphy.com/media/y6tP2zWXuU4ApNLEM0/giphy.gif)

![](https://i.ibb.co/wrvQkH8/metStack.png)

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;

    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;

    return this;
  }
}

const myStack = new Stack();
```

## Queues
---
Un queue básicamente es una cola (o una fila para entenderlo mejor), esto es simple de entender porque nosotros las usamos diariamente sin darnos cuenta, como cuando nos formamos para acceder a un lugar por ejemplo.

Un queue es de tipo FIFO (First In First Out). First In (El primero que entra) First Out (Es el primero que sale).

![](https://media0.giphy.com/media/4TfkVHGWzFRXwrur5M/giphy.gif)

![](https://i.ibb.co/j3N5Y1s/qu.png)
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;

    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;

    return this;
  }
}

const myQueue = new Queue();

```

