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

## Custom Hook para Local Storage
---
https://www.w3schools.com/react/react_customhooks.asp

https://es.reactjs.org/docs/hooks-custom.html


Algo super interesante de React es que podemos crear hooks personalizados para ejecutar procesos para manejar información sin que afecte a otros componentes, lo que haremos será abstraer nuestra lógica de localStorage para manejarla dentro de nuestro propio hook.

**Reglas para crear un custom hook:**

- Nuestro hook personalizado debe empezar por use, por ejemplo: usePatito, useTodos o useUnicornio.
- No anidar hooks en loops u otros bloques.
- Llamar dentro de componentes de React o hooks propios, nunca dentro de funciones normales.

### Creando nuestro Custom Hook
El objetivo de un custom hook es reutilizar código, entonces este hook debería poder funcionar para guardar cualquier tipo de dato en el localStorage.

**Primero necesitamos analizar que parámetros necesita tener nuestro custom hook:**

- Un nombre para el item en nuestro localStorage.
- Un estado inicial

**También tenemos que regresar algunos datos para que nuestro hook sea funcional:**

- Los datos actuales de nuestro ítem en el localStorage.
- Una función para actualizar los datos de este ítem.

¡Ahora que sabemos qué tenemos que hacer, podemos empezar a crear nuestro custom hook!
```javascript
// Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function useLocalStorage(itemName, initialValue) {
  // Guardamos nuestro item en una constante
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  
  // ¡Podemos utilizar otros hooks!
  const [item, setItem] = React.useState(parsedItem);

  // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  // Regresamos los datos que necesitamos
  return [
    item,
    saveItem,
  ];
}
```
Ahora que hemos creado nuestro custom hook podemos usarlo las veces que queramos.
¡Vamos a añadirlo a la lógica de nuestra aplicación!
```javascript
import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

function App() {
  // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
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
    />,
  );
}

export default App;
```

## Manejo de efectos
---
El hook de efecto en react nos permite ejecutar un pedazo de código cada vez que necesitemos, a lo largo de la vida de nuestro componente, también cuando se cumplan ciertas condiciones.

Algo curioso e importante de saber es que el código dentro de nuestro hook de efecto no se ejecuta como el resto del código, se ejecutará inicialmente justo antes de hacer el renderizado del HTML que resulte de nuestro código de React.

**Condiciones para nuestro hook de efecto**

El hook de React, useEffect, puede recibir dos argumentos:

- Función que se ejecutará en cada fase del ciclo de vida de nuestro componente.

- Las condiciones de cuándo debe ejecutarse esta función dentro de un arreglo, cada que se actualice cualquier dato que le pasemos a este arreglo, se volverá a ejecutar nuestra función.
```javascript
React.useEffect(funcion, [dato1, dato2, datoN])
```
**Diferentes maneras de actualizar nuestros componentes**

Existen tres diferentes maneras para aplicar el hook de efecto, todas funcionan diferente a la hora de re-renderizar nuestros componentes.

- Sin pasar un arreglo como segundo argumento: useEffect(funcion)
Cuando no le pasamos un segundo argumento con las condiciones de cuándo se debe re-ejecutar nuestra función, React tomará como condiciones que se debe ejecutar nuestra función todas las veces que ocurra un re-renderizado, y también cada vez que se actualice alguna prop (Si es que el componente recibe alguna).

- Pasando un arreglo vacío: useEffect(funcion, [])
Cuando pasamos un arreglo vacío, le estás diciendo a React que no hay ninguna condición para volver a ejecutar el código de nuestra función, entonces solamente se ejecutará en el renderizado inicial.

- Pasando un arreglo con datos: useEffect(funcion, [val1, val2, valN])
Cuando especificas las condiciones dentro del arreglo del segundo parámetro, le estás diciendo a React que ejecute nuestra función en el renderizado inicial y también cuando algún dato del arreglo cambie.

**Simulando una petición a una API**

Dentro de una aplicación web, al trabajar con APIs, existen muchos factores para determinar cuánto tardará en cargar nuestra aplicación, como la velocidad de nuestro internet, la distancia del servidor, etc.

Al trabajar con APIs también debemos tener en cuenta que puede tardar en cargar mucho nuestra aplicación, o incluso puede ocurrir algún error, todo esto lo debemos de manejar para mantener a nuestro usuario informado.

El hook de efecto nos permite saber cuando ya renderizó nuestra aplicación, así podemos mostrar un mensaje de cargando o alguna animación en lo que se completa la petición, también con JavaScript podemos manejar los errores con try y catch, y haciendo uso del hook de estado podemos guardar si está cargando o hubo algún error.

*App/index.js*
```javascript
import React from 'react';
import { AppUI } from './AppUI';

function useLocalStorage(itemName, initialValue) {
  // Creamos el estado inicial para nuestros errores y carga
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
  // Simulamos un segundo de delay de carga 
    setTimeout(() => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
      } catch(error) {
      // En caso de un error lo guardamos en el estado
        setError(error);
      } finally {
        // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
        setLoading(false);
      }
    }, 1000);
  });
  
  const saveItem = (newItem) => {
    // Manejamos la tarea dentro de un try/catch por si ocurre algún error
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      // En caso de algún error lo guardamos en el estado
      setError(error);
    }
  };

  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  // Desestructuramos los nuevos datos de nustro custom hook
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
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
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    {/* Pasamos los valores de loading y error */}
    <AppUI
      loading={loading}
      error={error}
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
Una vez sabemos exactamente cuándo una aplicación está cargando y cuándo ha ocurrido algún error, podemos usar esta información para mostrar algo al usuario.

*App/AppUI.js*
```javascript
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

// Desescructuramos las nuesvas props
function AppUI({
  loading,
  error,
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
        // Mostramos un mensaje en caso de que ocurra algún error
        {error && <p>Desespérate, hubo un error...</p>}
        // Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos
        {loading && <p>Estamos cargando, no desesperes...</p>}
        // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
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

## React Context: estado compartido
---
Es una forma de tener acceso a datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel, usando datos globales.

Para esto tenemos un proveedor que envolverá a todos los componentes que serán los consumidores de nuestro contexto.

**Fases:**

- Crear el contexto de nuestra aplicación

- Proveer nuestro contexto con los datos que queremos globales.

- Consumir los datos desde cualquier parte de nuestra aplicación.

**Creando el contexto de nuestra aplicación**

Primero necesitamos crear nuestra carpeta TodoContext, aunque también en muchos proyectos crean una carpeta context aparte, en donde tendrán todo el contexto de su aplicación.

Es importante crear el contexto con createContext, ya que este nos regresará dos componentes: proveedor y consumidor.

*TodoContext/index.js*

```javascript
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis
const TodoContext = React.createContext();

function TodoProvider(props) {
  // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
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
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { TodoContext, TodoProvider };
```
Los componentes que consumen el contexto deben estar envueltos en la etiqueta proveedora.

*App/index.js*

Ahora importamos nuestro proveedor para envolver nuestra aplicación:

```javascript
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
```
**Consumir el contexto desde otro componente**

Una vez ya tenemos nuestro proveedor envolviendo toda nuestra aplicación, ya podemos acceder a los datos desde cualquier componente hijo y olvidarnos de pasar props componente por componente.

*AppUI.js*

```javascript
import React from 'react';
// Importamos nuestro contexto
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      {/* Podemos acceder a nuestro contexto con el consumer */}
      <TodoContext.Consumer>
        {({
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
```
Con esto evitas pasar props a todos los componentes. Puedes tener muchos componentes que consuman un solo contexto y también varios contextos.

Si el valor del contexto cambia, todos los componentes suscritos se re-renderizan y actualizarán su estado.

Todavía nos falta utilizar nuestro consumer en todos los demás componentes, pero la verdad es que esta no es la mejor forma de consumir nuestro contexto.

https://cloudappi.net/patrones-de-diseno-composicion-en-react/

https://react-redux.js.org/api/provider

https://guias.makeitreal.camp/react/context

https://reactjs.org/docs/context.html

https://dmitripavlutin.com/react-context-and-usecontext/

## useContext
---
El hook de contexto nos ayuda a acceder a datos globales de nuestro contexto, desde cualquier componente hijo, sin tener que pasar estos datos por props componente por componente.

Tiene la misma funcionalidad que el consumer de nuestro contexto, pero useContext también tiene una manera más sencilla de utilizar y una sintaxis mucho más clara.

*Context.Consumer a useContext*
```javascript
import React from 'react';
// También es importante importar nuestro contexto
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
  // Desesctructuramos los valores de nuestro contexto
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
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
Ahora solo nos queda utilizar este hook para acceder a nuestro contexto desde los componentes faltantes.

*TodoCounter.js*
```javascript
import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };
TodoSearch.js
import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
```

***¿Cuándo se recomienda emplear React Context?***

- Estado global
- Tema
- Configuración de la app
- Autenticación de usuario
- Configuración de usuario
- Lenguaje preferido
- Colección de servicios