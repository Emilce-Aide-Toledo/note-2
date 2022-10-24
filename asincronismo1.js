//Callback: es una una función que se pasa como argumento de otra función y que será invocada.

function sum(num1, num2){
    return num1 + num2;
};

function calc(num1, num2, callback) {//Lo puedes o no llamar callback
    return callback(num1, num2);
}; 

console.log(calc(2, 2, sum)); //sum debe estar sin () y sin argumentos

setTimeout(function (){//setTimeout  funciona como un callback
   console.log('Hola Mundo');
}, 2000) 

function gretting(name){ 
	console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Emi'); //la función se pasa por argumento

//es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs o APIs)
//Existen 5 estados en un llamado XMLHttpRequest:
// 0 → Se ha inicializado.
// 1 → Loading (cargando).
// 2 → Se ha cargado.
// 3 → Procesamiento si existe alguna descarga.
// 4 → Completado.

// Métodos y propiedades:
// xmlhttp.open() → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).
// xmlhttp.readyState → Retorna el estado de la petición.
// xmlhttp.onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia.
// xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500)-Códigos de estado de respuesta HTTP.Ver: https://developer.mozilla.org/es/docs/Web/HTTP/Status
// xmlhttp.send() → Envía la petición.
// Ver sobre Protocolo HTTP, sus verbos que permitiran la manipulación de recursos cliente/servidor. Ver:https://developer.mozilla.org/es/docs/Web/HTTP/Methods

// Los códigos de estados del servidor:
// El código de estado (status codes) sirve para describir el estado de la petición hecha al servidor.
// 1xx → la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
// 2xx → la petición fue recibida, aceptada y procesada correctamente.
// 3xx → hay que tomar acciones adicionales para completar la solicitud.
// 4xx → errores del lado del cliente que hizo mal una solicitud.
// 5xx → errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.

const XMLHttppRequest = requiere('xmlhttprquest').XMLHttppRequest;  // esto iria en la parte superior, pero esto es solo es un código que sirve de recordatorio. 
const API = 'https://api.escuelajs.co/api/v1'; //https://fakeapi.platzi.com/

const fetchData = (urlApi, callback) =>{
	let xhttp = new XMLHttppRequest(); 

	xhttp.open('GET', urlApi, true); 
	xhttp.onreadystatechange = (event)=> {
	if(xhttp.readyState === 4) { 
		if(xhttp.status === 200 ){ 
			callback(null, JSON.parse(xhttp.responseText)); 
		}else {
			const error = new Error('Error' + urlApi);
			return callback(error,null); 
		}
	} 
	}
	xhttp.send();
};

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1); 
    fetchData (`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2); 
		fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if(error3) return console.error(error3);
            //evitar el callback hell
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        })
    })
});

// CallBacks Hell: Consiste en múltiples Callbacks anidados que provocan que el código se vuelva difícil de leer 
// y ‘debuggear’ y por eso se debe evitar.
