// Promesas: son asíncronas, por lo que el código continuará su ejecución normalmente y luego dirá si la promesa 
// se resolvió o se rechazó. Por lo que varias promesas pueden llegar a entrar en ejecución al mismo tiempo.

// Una Promesa puede estar en uno de los siguientes estados:
// --Pending → Una promesa inicia en este estado: no cumplida, no rechazada:(Pendiente)
// --Fulfilled → Significa que la operación se completó satisfactoriamente, .then(res=> …)
// --Rejected → significa que la operación falló, .catch(err => …)
const cows = 15; 
const countCows = new Promise((resolve, reject)=>{
if(cows > 10){
  resolve(`We have ${cows} cows on the farm`);
} else {
  reject("There is no cows on the farm");
}
});
countCows()
.then((result) => console.log(result))
.catch((error) => console.log(error))
.finally(() => console.log('Finally'));

//Fetch
// Por medio de Fetch se puede realizar peticiones HTTP asíncronas con promesas. 
//La API Fetch proporciona una interfaz JS más cómoda para acceder y manipular; fetch() es un método global.

import fetch from 'node-fetch';// Esto es solo un apunte, en la aplicación real debemos tener en cuenta la posicion y Modulejs
const API = 'https://api.escuelajs.co/api/v1'; //https://fakeapi.platzi.com/

const fetchData = (urlApi) => fetch(urlApi);

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => console.log(products))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));


fetchData(`${API}/products`)
    .then(response => response.json()) // objeto json
    .then(products => fetchData(`${API}/products/${products[0].id}`))
    .then(response => response.json()) //trae la data
    .then(product => fetchData(`${API}/categories/${product.category.id}`))//mostrar la categoria de un producto en particular
    .then(response => response.json())
    .then(category => console.log(category.name))
    .catch(err => console.log(err)) 
    .finally(() => console.log('Finally')); 

//Fetch POST
// Ver: https://developer.mozilla.org/es/docs/Web/HTTP/Methods

//Origen cruzado: denominado “Cross Origin”, se utiliza para denominar el tipo de peticiones que se realizan 
//a un dominio diferente del dominio de origen desde donde se realiza la petición.
//Así que si se coloca cors, indica que se permiten ciertas solicitudes predeterminadas de origen cruzado
// como GET y POST para salvaguardar y evitar manipulaciones maliciosas. Ver: https://developer.mozilla.org/es/docs/Web/HTTP/CORS

const postData =(urlApi, data)=> {
    const response = fetch(urlApi, {
        method: 'POST', 
        mode: 'cors', 
        credentials: 'same-origin', 
        headers:{
            'Content-Type': 'application/json' //necesario indicar que se está enviando es de tipo json
        },
        body: JSON.stringify(data) //JSON.stringify() convierte un objeto en una cadena de texto JSON
    });
    return response;
};

const data = {
    "title": "Nunca pares de aprender",
    "price": 2,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

// Fetch PUT:
const putData =(urlApi, dataUpdate) => {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    });
    return response;
}

const dataUpdate = {
    "title": "Se puede cambiar tambien otras caracteristicas",
    "price": 10 // no es necesario colocar todas las características del objeto, solo las que se cambiarán
}

putData(`${API}/products/213`, dataUpdate) //se debe colocar el id del objeto que se quiere modificar
    .then(response => response.json())
    .then(dataUpdate => console.log(dataUpdate))
    .catch(err => console.log(err))

//Fetch DELETE:
//Eliminar un objeto indicando el id con DELETE
const deleteData = (urlApi) => { //no es necesario  data
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        } //no es necesario especificar el body
    });
    return response;
}

const idNumber = 213; //Tener en cuenta el id del objeto que se quiere modificar

deleteData(`${API}/products/${idNumber}`) //no es necesario pasar data
    .then(() => console.log(`Borrado ${idNumber}`)) //es opcional imprimir en consola);
    .catch(err => console.log(err));