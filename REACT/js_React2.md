## Stateful y Statless components
---
- Los componentes stateful son los componentes que guardan y manejan estados. Por lo que hemos aprendido hasta ahora sería los que usan alguna variable que usa React.useState

- Mientras los componentes stateless son los componentes que solo presentan información. Es decir son los componentes que reciben props o simplemente muestran algun contenido

https://programmingwithmosh.com/javascript/stateful-stateless-components-react/


La gran diferencia entre ambos tipos de componentes es:

- Stateful usa el hook useState() eso implica que el tiene que encargarse de manejar una variable que dispara un cambio en lo que muestra en la interfaz. Un ejemplo común: un contador que aumenta cuando el usuario hace click sobre el. 

- Stateless no usa el hook useState() eso implica que muestran algo que les llega externamete y esa es la palabra clave. No se encargan de lidiar con variables que puedan cambiar la interfaz. Otro componente externo se encargará de ello. Un ejemplo: los comentarios de Platzi, tu escribes en un lugar y los comentarios con formato se visualizan en otro, en el primer lugar tienes variables useState() que guardan lo que escribes y en el segundo solo tienes un componente que presenta lo que se escribe.

## Organización de archivos y carpetas
---
La organización de un proyecto es algo muy importante, nos ayuda a tener un mejor control y orden sobre nuestra aplicación.

**¿Cuál es la mejor estructura?**

No existe una mejor estructura de carpetas, existen varias estructuras, y la más utilizada es la agrupación por tipo de archivo, puedes usar la que más te guste, la que mejor se adapte a tu proyecto, o ¡incluso crear una propia!

**Agrupación por tipo de archivo**

En esta estructura solo agrupamos los archivos similares, es la más recomendada para proyectos grandes, también sirve para tener una excelente organización en proyectos pequeños, por ejemplo:
```
└── src/
    ├── assets/
    │   ├── img/
    │       └── foto.jpg
    │   ├── fonts/
    │       └──ubuntu.woff2
    ├── components/
    │   ├── CreateTodoButton/
    │       ├── index.js
    │       └── CreateTodoButton.css
    │   ├── TodoCounter/
    │   ├── TodoItem/
    │   ├── TodoList/
    │   ├── TodoSearch/
    ├── context/
    │   ├── TodoContext.js
    ├── hooks/
    │   ├── useLocalStorage.js
    ├── utils/
    │   ├── fetch.js
```
**Creando la estructura de nuestro proyecto**

Puedes usar la estructura que más te guste, en nuestra aplicación, ya que son muy pocos componentes, solamente crearemos una carpeta por cada componente.

Una vez tengamos esto listo, ahora podemos importarlo dentro de nuestro archivo App.js, pero si queremos seguir las reglas de stateful y stateless, no tiene mucho sentido, por eso vamos a abstraer la UI de nuestro archivo App.js en otro componente que llamaremos AppUI.js:

**App/index.js**
```JAVASCRIPT
import React from 'react';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
```
**App/AppUI.js**

```JAVASCRIPT
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
```

## Persistencia de datos con Local Storage
---
https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

Las aplicaciones web tienen tanto front-end como back-end, en front-end se encarga de la parte visual e interactuar con los usuarios, así como de conectarse con el back-end, en donde se maneja la autenticación, el almacenamiento de datos en bases de datos, esta es una manera muy utilizada para la persistencia de datos.

También es posible la persistencia de datos sin necesidad del back-end, utilizando la API de almacenamiento web, el localStorage, que nos permite almacenar datos localmente en el navegador, que persistirán incluso si el usuario recarga la página o cierra el navegador.

Además, existe otra forma de almacenar datos, aunque no es persistente, se llama sessionStorage, se utiliza exactamente igual que localStorage, la diferencia es que los datos en localStorage son persistentes.

### Local Storage

Nos permite guardar datos persistentes en el navegador del usuario, que podremos acceder, modificar y hasta eliminar, para esto localStorage tiene varios métodos.

- Guardar datos: setItem(nombre, dato)
- Acceder a datos: getItem(nombre)
- Borrar un dato: removeItem(nombre)
- Eliminar todos los datos: clear(nombre)

Es muy importante saber que localStorage solamente puede guardar texto, no objetos, arreglos, números, solo strings para esto podemos utilizar unos métodos de JSON:

- Convertir a texto: JSON.stringify()
- Convertir a JavaScript: JSON.parse()

#### Local Storage en ToDoApp

Para crear la lógica de nuestro almacenamiento local, antes de acceder a nuestro ítem, debemos tener en cuenta que nuestro usuario puede ser nuevo y no tener ningún TODO creado, en este caso necesitaríamos crear un arreglo vacío, si el usuario ya tiene TODOs creados, deberíamos obtener sus TODOs del localStorage.
```javascript
import React from 'react';
import { AppUI } from './AppUI';

function App() {
    // Traemos nuestros TODOs almacenados
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    // Si existen TODOs en el localStorage los regresamos como nuestros todos
    parsedTodos = JSON.parse(localStorageTodos);
  }

  // Guardamos nuestros TODOs del localStorage en nuestro estado
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
```
Todavía no creamos la lógica para agregar nuevos TODOs, pero si probamos añadiendo TODOs de prueba en nuestro localStorage, ya debería funcionar todo bien, o al menos a simple vista. Cuando interactuamos con nuestra aplicación, completando o eliminando TODOs todavía no se ve reflejado en nuestro localStorage.

Para lograr esto, crearemos una función puente, entre nuestra función que actualiza nuestro estado para actualizar nuestro localStorage.
```javascript
import React from 'react';
import { AppUI } from './AppUI';

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  
  // Creamos la función en la que actualizaremos nuestro localStorage
  const saveTodos = (newTodos) => {
    // Convertimos a string nuestros TODOs
    const stringifiedTodos = JSON.stringify(newTodos);
    // Los guardamos en el localStorage
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    // Actualizamos nuestro estado
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };
  
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
```

