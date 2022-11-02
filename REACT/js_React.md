## ¿Qué es React.js?
---
React es una herramienta de JavaScript en el front end que nos ayuda a construir la parte visual de nuestras aplicaciones web, las interfaces con las que van a interactuar nuestros usuarios.

React es una librería progresiva, esto porque puedes hacer desde una página sencilla hasta poder desarrollar aplicaciones gigantes, y llegar a convertirse en un framework en conjunto de muchas herramientas que existen a su alrededor.

**¿Por qué aprender React?**

Mientras más crecen nuestras aplicaciones web, se vuelve más complicado nuestro trabajo utilizando solamente HTML, CSS y JavaScript. La magia de React es que nos facilita crear y organizar nuestro código, acelerar el proceso de creación, además de ofrecernos una mejor experiencia como desarrolladores.

**Cuándo usar React.js**

Para saber cuándo usar React es necesario conocer el tipo de proyecto que estás desarrollando. Conociendo los alcances actuales y los futuros, podrás tener un panorama completo de las necesidades que vas a cubrir y cuáles son las funciones básicas que debe tener para ser un MVP.

React es muy útil cuando queremos construir rápidamente la primera versión funcional de una aplicación web sin sacrificar su escalabilidad. Si no necesitamos escalarla después, no es necesario utilizar React, podemos utilizar JavaScript vanilla.

***¿Qué es un MVP?***

MVP (Minimum Viable Product - Producto Mínimo Viable): se refiere a construir funcionalidades pequeñas que sean completas para que podamos lanzarla y medir su impacto y decidir si seguir ese camino o probar otra cosa.

Hay que escoger el problema más crucial que debe resolver la aplicación.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/mvp.jpg)

**Flujos de trabajo para aplicaciones web**

Existen dos flujos de trabajo para crear aplicaciones web profesionalmente.

1. Modelo en cascada

Cada equipo tiene un tiempo para hacer todo su respectivo trabajo para construir una aplicación.

Por ejemplo: el equipo de diseño diseña la aplicación, el de desarrollo programa todo lo diseñado y finalmente se lanza la app recogiendo el feedback de los usuarios y se vuelve a empezar tomando en cuenta lo dicho por los usuarios.

Es problemático porque el esfuerzo puede ser en vano porque no se tiene un feedback hasta que se termina de construir la app.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/ModeloEnCascada.jpg)

2. Modelo del ciclo MVP iterativo

El modelo del ciclo MVP se refiere a que cada equipo se enfocará en ciclos pequeños para construir partes más pequeñas de una app que en conjunto se puedan ir ensamblando para hacer la app completa.

Resuelve el problema del modelo anterior, aquí se recibe el feedback al terminar cada pequeño ciclo, recibiendo así el feedback de manera más inmediata que antes.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/MVPIterativo.jpg)

**Análisis: componentes y comportamientos**

***Componentes:*** son la forma de estructurar las piezas de nuestra página web para hacerlas escalables, nos ahorran tiempo y esfuerzo. Son abstracciones de los elementos de nuestra página web para ser reusados las veces que necesitemos.

Los componentes pueden trabajar de manera independiente a los demás, pero con React todos los componentes tienen una conexión con el resto de componentes, para que en conjunto puedan reaccionar al comportamiento de los usuarios.

***Comportamiento:*** cómo actúan nuestros componentes con las interacciones de los usuarios.

## Cambios en React 18: ReactDOM.createRoot
---
React 18 fue publicado el 29 de marzo de 2022. Sus cambios más importantes van a ayudar muchísimo para optimizar el render e hidratación de aplicaciones o componentes de React en el DOM. El más importante, crucial y significativo fue la migración de ReactDOM.render a ReactDOM.createRoot.

***Migración de ReactDOM.render a ReactDOM.createRoot***

Antes de React 18:

```javascript
const root = document.getElementById('root');
ReactDOM.render(e(LikeButton), root);
```
Desde React 18:

```javascript
const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);
root.render(e(LikeButton));
```

Antes de React 18:

```javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Desde React 18:

```javascript
const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Actualizaciones de React
---
En los siguientes recursos puedes estudiar más a detalle los cambios de React y ReactDOM en su versión 18:

https://platzi.com/blog/react-conf-2021/

https://github.com/facebook/react/blob/main/CHANGELOG.md

https://reactjs.org/blog/2022/03/29/react-v18.html

https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html

Además, si quieres conocer un poco más a fondo la filosofía y principios de diseño de React para elegir cómo hacer sus actualizaciones, te recomiendo tomar la siguiente clase:

https://es.reactjs.org/docs/design-principles.html

## Instalación con Create React App
---
(Buscar más info actualizada)

Una manera muy sencilla de crear un proyecto con React es utilizando Create React App, así puedes iniciar un proyecto sin preocuparte por la configuración de herramientas como webpack o babel.

💡 Aunque siempre será mejor si nosotros hacemos esta configuración desde cero, ya que tendremos mayor control de todo e incluso nuestra aplicación tendría un mejor rendimiento.

***Maneras de instalar React***

Existen varias formas de trabajar con React, cada una tiene sus ventajas y desventajas, siempre que trabajemos con React necesitaremos las dependencias ```react``` y ```react-dom```.

***React en JavaScript vanilla***

Podemos importar los scripts del código fuente de React, existen las versiones para desarrollo que nos facilita debuggear y para producción que está optimizada para el producto final.

React con JavaScript vanilla casi no se usa, lo ideal es crear un entorno de desarrollo que facilite nuestro trabajo.

***Configuración manual desde cero***

Es la mejor manera si queremos tener control absoluto de nuestro entorno de desarrollo, necesitamos emplear y configurar varias herramientas.

**Create React App**

Esta es la manera más simple y rápida para trabajar con React, solo necesitamos ejecutar el comando:

```npx create-react-app nombre-del-proyecto```
 
 o 

 ```npx create-react-app nombre-del-proyecto --template typescript```
 
  para typescript y en unos instantes tendremos un entorno de desarrollo totalmente configurado para comenzar a trabajar.

***Entorno de Create React App***

Dentro de este entorno tenemos un archivo package.json en el que se encuentran nuestros scripts, dependencias y meta datos de nuestro proyecto, también tendremos dos carpetas principales:

- public/: Es la carpeta pública en donde tendremos nuestro archivo HTML y algunos assets

- src/: Es la carpeta fuente, en donde tendremos todos nuestros archivos de trabajo

Dentro del index.html siempre tendremos un div con un id, como root que será la raíz de nuestro proyecto, y la usaremos para empezar a construir con JavaScript:
```html
 <!-- Aquí es en donde todo nuestro código será renderizado. -->
 <div id="root"></div>
 ```

***¿Cómo inicializar nuestro servidor?***

Para iniciar el entorno de desarrollo podemos ejecutar el comando npm start, con esto tendremos nuestro servidor corriendo en el puerto 3000 y también se refrescará automáticamente con cualquier cambio hecho en el proyecto. (A excepción de los cambios hechos en el archivo index.js).

## JSX: componentes vs. elementos (y props vs. atributos)
---
JSX es una extensión de JavaScript creada por Facebook para usarse con React.js. Nos presenta muchas ventajas el trabajar con elementos y componentes muy similar a la sintaxis de HTML.

La función que JSX tiene es de ser un preprocesador y transformar el código a JavaScript.

💡 JSX es solamente azúcar sintáctica para el método ```React.createElement(component, props, ...children)``` de React.

**Nota:** dentro del código encontrarás comentarios que explicarán que es lo que se está añadiendo o algunos consejos.

***¿Cómo crear un componente?***

Existen varias formas de crear un componente en React, por convención siempre los creamos utilizando PascalCase (La primera letra de cada palabra en mayúscula y juntas).

***Crear un componente con clases***

Este es el modo que se empleaba antes, ahora ya casi nadie la utiliza, pero es bueno saber cómo funciona, por si llegamos a trabajar con proyectos que las usen, con el método render podemos renderizar el JSX que retorna nuestra clase.
```javascript
class Componente extends React.Component {
	render() {
		return (
		    // JSX
		)
	}
} 

```
Podemos agregar JSX entre los paréntesis del ```return```.

***Crear un componente con funciones***

Los componentes funcionales son los más utilizados hoy en día, ya que nos permiten controlar el ciclo de vida mucho más fácil con los hooks de React:
```javascript
function Component() {
    return (
        // JSX
    )
} 
```

```javascript
// Utilizando arrow function
const Component = () => {
    return(
        // JSX
    )
}
```
***Componentes vs. Elementos***

Los componentes son invisibles para HTML, pero no para React, de hecho React utiliza los componentes para renderizar, y optimizar los re-renderizados.

***Componente***

Un componente es una pieza de código que describe una parte reutilizable de la interfaz, recibe propiedades y retornan elementos, dentro de los componentes podemos utilizar variables de JavaScript con ayuda de las llaves {}.
```javascript
const Component = () => {
    const titulo = Soy un título;
    
    return(
        <h1>{titulo}h1>
    )
}
```

***Elemento***

Un elemento es lo que devuelve un componente, es una representación de un nodo en el DOM.
```html
<h1>Soy un título</h1>
```
***Propiedades vs. Atributos***

La diferencia principal es que un atributo no se puede modificar y una propiedad si, ya que los atributos son de HTML y las propiedades son de JavaScript.

***Atributo***

Los atributos los pueden tener las etiquetas de HTML.
```html
 <h1 class="titulo">Soy un título</h1>
 ```

***Propiedad***

Las propiedades las pueden recibir los elementos y componentes en React.
```javascript
const Component = () => {
    return(
        <h1 className="titulo">
            Soy un titulo
        </h1>
    )
}
```
Es importante notar que algunos atributos de HTML se escriben diferente como propiedades, por ejemplo; el atributo class de HTML no se debe utilizar como propiedad de una clase o elemento de React, ya que class es una palabra reservada para crear clases en JavaScript, en su lugar utilizamos className.

***Pasando propiedades a nuestros componentes***

Algo mágico de React es que podemos pasarle propiedades a nuestros componentes.
```javascript
// Le pasamos la propiedad saludo
"Oli" />
// Recibimos las propiedades

const Componente = (props) => {
    return(
        {/* ¡Así creamos un comentario en JSX! */}
        {/* Accedemos a saludo desde las props */}
        

            {props.saludo} 
            {/* props.salido = Oli */}
        

    )
}
```

***Propiedad children***

También podemos utilizar los componentes de React como etiquetas abiertas, para pasarle contenido, elementos o incluso otros componentes, la manera de acceder a ellos es con la propiedad especial children.

```javascript
//¡Soy un título anidado!

const Componente = (props) => {
    return(
        <div className="titulo">
            {props.children}
            {/* props.children = <h1>¡Soy un título anidado!h1> */}
        div>
    )
}
```
## Componentes

Para empezar a trabajar en el código, primero eliminaremos algunos archivos que no son necesarios para nuestra aplicación, solamente dejaremos dentro de nuestra carpeta ```src/``` los archivos ```index.js```, ```App.js``` y los estilos.

```index.js```

En la **versión 18** de React añadieron cambios importantes, principalmente el método para crear una raíz para renderizar o desmontar:

***Versión menor a React V18***
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, document.getElementById('root'))

```

En la versión menor a la 18 de React, utilizamos el método render de ReactDOM, que recibe dos argumentos, el componente que queremos renderizar y el contenedor.

Versión mayor o igual a React V18
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```
En la versión 18 o superior de React, utilizamos el método createRoot de ReactDom, en el que le pasamos el contenedor, guardamos este contenedor en una variable y luego ejecutamos el método render con el componente que queremos renderizar.

***App.js***

Dentro de nuestro componente App borraremos todo lo que estaba dentro del componente (No tengas miedo a romper el código), también quitaremos las importaciones de los estilos y de la imagen.

Ahora empezaremos a escribir nuestros componentes, tendremos algo como lo siguiente:
```javascript
function App() {
  return (
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
  );
}

export default App;
```
Una vez iniciamos el proyecto nos aparecerá un error como el siguiente: ```SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag.```, esto es porque solamente se puede regresar un solo componente al trabajar con JSX, si queremos regresar varios necesitamos encerrarlos en un solo elemento padre.

Para esto existen 2 posibles opciones:

Envolver todos nuestros elementos y componentes en un ```<div></div>``` u otra etiqueta.
Utilizar el componente Fragment, que será invisible al momento de renderizar nuestros elementos en el DOM.
Para no tener problemas con los estilos y no tener que crear etiquetas extras por cada componente, se usa Fragment y para utilizarlo existen 2 formas.

Maneras de utilizar Fragment en React
```javascript
import React from "react

function App() {
  return (
    <React.Fragment>
        ...
    </React.Fragment>
  );
}

// Desestructurándolo desde React
import { Fragment } from "react

function App() {
  return (
    <Fragment>
        ...
    </Fragment>
  );
}
```
O una forma muy común y la más utilizada, envolviendo nuestros elementos dentro de etiquetas vacías, que es lo equivalente a ```React.Fragment```
```javascript
function App() {
  return (
    <>
        ...
    </>
  );
}
```
Puedes utilizar la manera que veas más cómoda.

Ahora si vemos nuestro proyecto nos aparecerá otro error, como ya te imaginas es porque no hemos creado nuestros componentes, eso es justo lo que haremos.

Para esto utilizaremos los módulos de JavaScript, existen varias maneras de exportar nuestros componentes, podemos exportarlos por defecto, pero no es una buena práctica porque puede causar futuros problemas al importar estos componentes.

Para evitar este problema debemos intentar evitar export default, y exportar nuestros componentes por su nombre, por ejemplo: ```export { Componente };```, así lo tendremos que importar exactamente como lo exportamos: ```import { Componente } from './Componente';```

TodoCounter
```javascript
import React from "react";
function TodoCounter(){
    return(
        <h2> Has complentado 2 de 3 ToDos</h2>
    )
}

export {TodoCounter};
```

TodoSearch
```javascript
import react from "react";

function TodoSearch(){
    return(
        <input placeholder="Cebolla" />
    );
}
export {TodoSearch};
```
TodoList
```javascript
import react from "react";

function TodoList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};
```
TodoItem
```javascript
import react from "react";

function TodoItem(props){
    return(
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export { TodoItem };
```
CreateTodoButtom
```javascript
import react from "react";

function CreateTodoButtom(){
    return(
        <button>+</button>
    );
}

export { CreateTodoButtom};
```
Importar componentes

Una vez creamos nuestros componentes no se nos olvide importarlos en ```App.js``` para ahora si usarlos.
```javascript
import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom } from "./CreateTodoButton.js";

function App() {
  return (
   <react.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        <TodoItem />
      </TodoList>
      <CreateTodoButtom />      
   </react.Fragment>
  );
}

export default App;
```
Lógica para renderizar nuestros TODOs

Ahora crearemos la lógica para renderizar todas las TODOs que creen nuestros usuarios, nuestro componente ya recibe una propiedad llamada texto, entonces creemos un arreglo con algunas tareas dentro de App.js y ahora mapearemos cada una de nuestras TODOs con map y por cada TODO regresaremos un componente TodoItem.
```javascript
import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom } from "./CreateTodoButton.js";

const todos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];
function App() {
  return (
   <react.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
            <TodoItem text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButtom />      
   </react.Fragment>
  );
}

export default App;
```

 Todavía nos faltan algunas cosas, pero… ¿Notaste que en la consola ahora nos aparece este error? Warning: Each children in a list should have a unic "key" prop.

Esto es porque cuando renderizamos varios elementos en una lista debemos que pasarle una propiedad especial a cada item, que es key, esta propiedad ayuda a React para mantener un registro de los elementos que han cambiado, y saber cuál elemento es cuál, también es importante que esta propiedad no se repita en ningún otro item.

Entonces añadamos esta propiedad:
```javascript
import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom } from "./CreateTodoButton.js";

const todos = [
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];

function App() {
  return (
   <react.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButtom />      
   </react.Fragment>
  );
}

export default App;
```

