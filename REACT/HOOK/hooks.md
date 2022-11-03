## ¿Qué son los React Hooks y cómo cambian el desarrollo con React?
---
https://reactjs.org/docs/hooks-intro.html

Es una característica que salió en la versión 16.8 en febrero de 2019.

Los Hooks vienen a cambiar la forma de desarrollo en React.
⠀
Vienen a resolver problemas ligados a React, como la complejidad de los componentes, no se podía compartir la lógica de estado entre componentes, Component Hell, etc.

Los Hooks presentan una alternativa al desarrollo con clases, ya que estos vienen a trabajar con funciones.

⠀
**¿Qué es un Hook?**

Un Hook es una función especial que nos permitirá conectarnos a características de React, para trabajar con métodos especiales, los cuales nos permitirán manejar el estado de mejor forma sin depender de clases.

Uno de los creadores de los Hooks, Dan Abramov, también fue el creador de Redux.

Los hooks permiten que nuestros componentes funcionales puedan tener el ciclo de vida que tienen las clases además de mantener estado.

Así mismo, al trabajar con funciones y no con clases, no tenemos que preocuparnos por el uso de this que en React tiene un contexto distinto a los demás lenguajes, por lo que podía ser más problemático.

**Crear proyecto:**

> npx create-react-app react-hooks

Ejecutar proyecto:

> npm run start

## useState: estado en componentes creados como funciones
---
https://www.w3schools.com/react/react_usestate.asp

**useState**

Te permite poder usar variables de estado dentro de componentes funcionales.

El Hook ```useState``` siempre nos retorna un array de dos posiciones. En la primera posición [0] vamos a tener el estado y él la segunda posición [1] vamos a tener la funciona para manipular el estado.

```const [state, setState] = useState(0);```

En este caso hacemos uso de la desestructuración del array una característica de ES6.

```state ⇒ 0```

```setState ⇒ Función que actualiza el estado```

Nuestro estado puede ser de los siguente tipos:

- String

- Boolean

- Number

- Float

- Null

- Undefined

- Object

- Array

## useEffect: olvida el ciclo de vida, ahora piensa en efectos
---
https://www.w3schools.com/react/react_useeffect.asp

useEffect nos permite manejar efectos que van a ser transmitidos dentro del componente.

https://dartiles.dev/blog/useeffect-react-hooks-ciclos-de-vida

## useContext: la fusión de React Hooks y React Context
---
https://www.w3schools.com/react/react_usecontext.asp

- Conecta todos tus componentes de una manera fácil con React
- Nos ayuda pasar la información entre componentes
- Conectar sin necesidad de pasar props y no estar ligados a pasar la información de padre a hijo

![](https://static.platzi.com/media/user_upload/context-b5db2f61-4a66-493e-b57d-99c3ee6dabbb.jpg)

![](https://static.platzi.com/media/user_upload/index-e884a4c1-6f74-4225-9674-c22f27243913.jpg)

![](https://static.platzi.com/media/user_upload/consume-context-bdf2b92e-de62-42c5-a8e0-547de130dc4a.jpg)

## useReducer: como useState, pero más escalable
---
https://www.w3schools.com/react/react_usereducer.asp

- Como useState, pero más escalable
- Implementa una forma más amigables y llena de caracteristicas para trabajar con el estado
- useReducer a menudo es preferible a useState cuando:
>se tiene una lógica compleja que involucra múltiples subvalores

>el próximo estado depende del anterior.

*Ejemplo de useReducer*
```javascript
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

**useReducer**.- Esta basada en la idea de Redux de tener una función pura que devuelve estados pero que se puede aplicar de una manera local en componentes

https://es.reactjs.org/docs/hooks-reference.html#usereducer

https://platzi.com/blog/usestate-vs-usereducer/


## useMemo: evita cálculos innecesarios en componentes
---
useMemo nos permitirá usar la memoización de forma simple, como ya vimos en la clase anterior, esto nos permite almacenar los resultados de una función para que, en caso de enviar los mismo argumentos que antes, ésta no haga los cálculos otra vez sino que devuelva el resultado que registró antes.

https://www.w3schools.com/react/react_usememo.asp


## useRef: manejo profesional de inputs y formularios
---
https://www.w3schools.com/react/react_useref.asp

Con useRef puedes obtener elementos del dom y modificarlos (sin tanto problemas de bugs).

https://medium.com/trabe/react-useref-hook-b6c9d39e2022

## useCallback: evita cálculos innecesarios en funciones
---
https://www.developerway.com/posts/how-to-use-memo-use-callback

https://dmitripavlutin.com/react-usecallback/

https://kinsta.com/es/blog/react-usecallback/

https://kentcdodds.com/blog/usememo-and-usecallback

