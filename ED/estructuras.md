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

