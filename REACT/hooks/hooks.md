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



 ## Optimización en React
 ---
Optimizar no es una sola técnica o fórmula secreta. 

Optimizar significa analizar los componentes de nuestro proyecto para mejorar el tiempo que tardamos en ejecutar cierto proceso o identificar procesos que estamos ejecutando en momentos innecesarios y le cuestan trabajo a la aplicación.

 **React.memo vs. React.PureComponent**

Vamos a evitar renders innecesarios causados por un mal manejo de las props.

**¿Cómo funciona PureComponent?**

```PureComponent``` es una clase de React muy similar a React.Component, pero por defecto el método ```shouldComponentUpdate``` compara las props nuevas y viejas, si no han cambiado, evita volver a llamar el método render del componente. Esta comparación se llama Shallow Comparison.
https://github.com/facebook/react/blob/cb7075399376f4b913500c4e377d790138b31c74/packages/shared/shallowEqual.js#L19

Esta lectura te ayudará si quieres profundizar en cómo funcionan los objetos en JavaScript y por qué es necesario implementar shallow comparison en vez de una comparación “normal”: Aprende a Copiar Objetos en JavaScript sin morir en el intento.
https://platzi.com/blog/como-copiar-objetos-en-javascript-sin-morir-en-el-intento/

**¿Cuándo debo usar React.PureComponent?**

En este ejemplo práctico crearemos 3 componentes, un papá y dos hijos. El componente padre tiene un estado con dos elementos, count y canEdit. El padre tiene dos funciones que actualizan cada elemento del estado. Y cada elemento del estado se envía a un componente hijo diferente.

**Componente padre (App):**
```javascript
class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = { count: 1, canEdit: true };
    }
    
    render() {
        console.log("Render App");

        const toggleCanEdit = () => {
            console.log("Click al botón de toggleCanEdit");
            this.setState(({ canEdit: oldCanEdit }) => {
              return { canEdit: !oldCanEdit };
            });
        };

        const countPlusPlus = () => {
          console.log("Click al botón de counter");
          this.setState((prevState) => {
            return { count: prevState.count + 1 };
          });
        };

        return (
            <>
              <button onClick={countPlusPlus}>Counter +1</button>
              <Counter count={this.state.count} />

              <button onClick={toggleCanEdit}>Toggle Can Edit</button>
              <Permissions canEdit={this.state.canEdit} />
            </>
        );
    }
}
```
**Componente hijo (counter):**
```javascript
class Counter extends React.Component {
    render() {
        console.log("Render Counter")
        const { count } = this.props;
 
        return (
            <form>
                <p>Counter: {count}</p>
            </form>
        );
    }
}
```
**Componente hijo (permisos):**
```javascript
class Permissions extends React.Component {
    render() {
        console.log("Render Permissions")
        const { canEdit } = this.props;
 
        return (
            <form>
                <p>El usuario {canEdit ? "" : "no"} tiene permisos de editar...</p>
            </form>
        );
    }
}
```
Si pruebas este código en el navegador, podrás darte cuenta de que, sin importar en qué botón demos clic, todos los componentes se vuelven a renderizar.

![](https://static.platzi.com/media/user_upload/Screen%20Shot%202020-11-09%20at%2010.06.48%20PM-69fa2774-b1d5-4f4e-915c-29558de043d2.jpg)

Este error puede ser muy grave. La prop canEdit no tiene ninguna conexión con el componente Counter ni la prop count con el componente Permissions, pero, aún así, si cualquiera de las dos cambia, los 3 componentes se vuelven a renderizar.

Afortunadamente podemos arreglarlo/optimizarlo cambiando ```React.Component``` por ```React.PureComponent```.
```javascript
class App extends React.PureComponent { /* … */ }
class Counter extends React.PureComponent { /* … */ }
class Permissions extends React.PureComponent { /* … */ }

```
![](https://static.platzi.com/media/user_upload/Screen%20Shot%202020-11-09%20at%2010.12.42%20PM-61fb80b7-91a8-4dfb-ad64-1fa9d9829cda.jpg)

**¿Cómo funciona y cuándo debo usar React.memo?**

Si useEffect es el “reemplazo” del ciclo de vida en componentes creados como funciones con React Hooks, React.memo es el “reemplazo” de PureComponent.

Convirtamos el ejemplo anterior a funciones con React Hooks:
```javascript
const App = function() {
  console.log("Render App");

  const [count, setCount] = React.useState(1);
  const [canEdit, setCanEdit] = React.useState(true);

  const countPlusPlus = () => {
    console.log("Click al botón de counter");
    setCount(count + 1);
  };

  const toggleCanEdit = () => {
      console.log("Click al botón de toggleCanEdit");
      setCanEdit(!canEdit);
  };

  return (
    <>
      <button onClick={countPlusPlus}>Counter +1</button>
      <Counter count={count} />

      <button onClick={toggleCanEdit}>Toggle Can Edit</button>
      <Permissions canEdit={canEdit} />
    </>
  );
}

const Permissions = function({ canEdit }) {
  console.log("Render Permissions")

  return (
      <form>
          <p>Can Edit es {canEdit ? "verdadero" : "falso"}</p>
      </form>
  );
}

const Counter = function({ count }) {
  console.log("Render Counter")

  return (
      <form>
          <p>Counter: {count}</p>
      </form>
  );
}
```
El resultado va a ser exactamente igual que al usar React.Component.

![](https://static.platzi.com/media/user_upload/Screen%20Shot%202020-11-09%20at%2010.06.48%20PM-69fa2774-b1d5-4f4e-915c-29558de043d2.jpg)

Ahora usemos React.memo para que nuestro componente no se renderice si las props que recibe siguen igual que en el render anterior.
```javascript
const App = React.memo(function() {
    /* … */
});

const Permissions = React.memo(function({ canEdit }) {
    /* … */
});

const Counter = React.memo(function({ count }) {
    /* … */
});
```
![](https://static.platzi.com/media/user_upload/Screen%20Shot%202020-11-09%20at%2010.12.42%20PM-61fb80b7-91a8-4dfb-ad64-1fa9d9829cda.jpg)

**¿Cómo crear una comparación personalizada con React.memo o shouldComponentUpdate?**

En algunos casos puede que no necesitemos shallow comparison, sino una comparación o validación personalizada. En estos casos lo único que debemos hacer es reescribir el método shouldComponentUpdate o enviar un segundo argumento a React.memo (casi siempre incluimos los keywords are equal al nombre de esta función).

Esta nueva comparación la necesitaremos, por ejemplo, cuando nuestro componente recibe varias props, pero solo necesita su valor inicial, es decir, sin importar si cambian, a nuestro componente le da igual y solo utilizará la primera versión de las props.
```javascript
// Con clases
class Permissions extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        /* … */
    }
}

// Con hooks
function memoStopIfPropsAreEqualOrNot(oldProps, newProps) {
  return true;
}

const Permissions = React.memo(function({ canEdit }) {
    /* … */
}, memoStopIfPropsAreEqualOrNot);
```
En este caso evitamos que nuestro componente se actualice sin importar si cambian nuestras props. Pero ¿qué tal si sí debemos volver a renderizar cuando cambia alguna de nuestras props?
```javascript
// Con clases
class Permissions extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.input.value !== nextProps.input.value) {
            return true;
        } else {
            return false;
        }
    }
}

// Con hooks
function memoIsInputEqual(oldProps, newProps) {
    if (oldProps.input.value !== newProps.input.value) {
        return false;
    } else {
        return true;
    }
}

const Permissions = React.memo(function({ canEdit }) {
    /* … */
}, memoIsInputEqual);
```
Recuerda que la función shouldComponentUpdate debe devolver true si queremos que nuestro componente se vuelva a renderizar. En cambio, la función de evaluación de React.memo debe devolver false si nuestras props son diferentes y, por ende, queremos permitir un nuevo render.

https://reactjs.org/docs/react-component.html#shouldcomponentupdate

## Custom hooks: abstracción en la lógica de tus componentes
---
https://es.reactjs.org/docs/hooks-custom.html

## Custom Hooks de Redux y React Router
---

Los React Hooks cambiaron tanto la forma de hacer nuestro código para crear aplicaciones que otras herramientas también han creado sus propios custom hooks, de forma que podemos usarlos para que nuestro código sea más legible y fácil de mantener.

## React Redux
---
https://react-redux.js.org/

Seguramente conoces react-redux, aquí podrás encontrar dos custom hooks que son muy útiles al momento de usar esta biblioteca: useSelector y useDispatcher. Estos los encontrarás a partir de la versión 7.1.0 de la biblioteca y a continuación te explicaré para qué sirven:

useSelector: nos permite elegir de qué contenido en nuestro estado queremos leer información para usarla en nuestro componente.
```javascript
// Primero debemos importar el hook desde react-redux
import { useSelector } from 'react-redux';

// El hook recibe una función y aquí indicamos qué parte del estado queremos
const myProperty= useSelector(state => state.myProperty);
useDispatcher: nos permite ejecutar las acciones hacia nuestro estado.
// Importamos el hook
import { useDispatcher} from 'react-redux';

// Creamos una variable donde vivirá nuestro dispatcher
const dispatcher = useDispatcher();

// Ahora solo debemos pasarle la información de la acción que se ejecutará en nuestro reducer
dispatcher({ type: actionType, payload });
``` 
Si quieres aprender a crear un sencillo contador de clics, pero usando esta configuración de hooks y toda la configuración de Redux en React, te recomiendo seguir este tutorial: Redux es fácil si usas React Hooks.

https://platzi.com/tutoriales/2118-react-hooks/10726-redux-es-facil-si-usas-los-hooks-2/

## React Router
---
React Router también contiene diferentes custom hooks para acceder a varias funcionalidades e información de la navegación del usuario en nuestra aplicación.

- **useHistory:** nos permite acceder a los métodos de navegación para movernos a través de ella de la forma que lo veamos más conveniente. Por ejemplo:

```javascript
import { useHistory } from 'react-router-dom';
let history = useHistory();
history.push('/home');
```
- **useLocation:** nos permite acceder a la información de la URL actual en la que se encuentran nuestros usuarios.

```javascript
import { useLocation } from 'react-router-dom';
let location = useLocation();
console.log(location.pathname);
```
- **useParams:** nos permite acceder a un objeto con la información de los parámetros que tendremos en la ruta que estamos navegando, por ejemplo, el slug de un blogpost. 

```javascript
import { useParams } from 'react-router-dom';
let { slug } = useParams();
console.log(slug);
```
- **useRouteMatch:** funciona al igual que los componentes ```<Route>```, pero este hook también nos permitirá saber si existe algún match adicional que podremos usar para mostrar o no otra información en la misma vista.

```javascript
import { useRouteMatch } from 'react-router-dom';
let match = useRouteMatch('/blog/:slug');

return (
	<div>
		<h1>Hello World</h1>
		{match && <p>Route matches</p>}
	</div>
)
```
**Conclusión**

Ahora sabes cómo utilizar los React Hooks de ambas bibliotecas. Podrás darte cuenta de que usarlas nos facilita bastante el desarrollo con React porque, además de escribir menos código, lo hace más legible y rápido de leer.

Te recomiendo seguir investigando sobre este tema. También te invito a compartir en la sección de comentarios si las bibliotecas que más te gustan en React cuentan con la implementación de sus funcionalidades en React Hooks.