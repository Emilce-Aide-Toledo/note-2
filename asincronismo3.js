
// Async y Await
//La declaración de función async define una función asíncrona que devuelve un objeto, lo cual permite a 
//un programa correr una función sin congelar todo la compilación.
// Dada que la finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas, 
// se hace más fácil escribir promesas.

const fnAsync = () =>{
    return new Promise((resolve, reject) =>{
        (true) 
            ? setTimeout(() => resolve('Async!!', 2000))
            : reject(new Error('Error!')); 
    })
};

const anotherFn = async () => { 
    const something = await fnAsync(); 
    console.log(something); 
    console.log('Hello!');
};

console.log('Before'); //al ser la primera orden, 'Before', se imprime primero
anotherFn();//es el segundo en llamar pero tarda 2s en ser ejecutada
console.log('After'); //retorna justo después de 'Before' 

//Try and catch
// La palabra reservada try consiste en un bloque que contiene una o más sentencias, como hacíamos con resolve.
// Su cuerpo está conformado por las llaves {} las cuales se deben utilizar siempre, incluso para un bloque de una sola sentencia.
// También puede estar presente un bloque con la palabra reservada catch.
// Un bloque catch es opcional (como hacíamos con reject) y contiene sentencias que especifican que hacer 
//si una excepción es lanzada en el bloque try.
// Si no se lanza ninguna excepción en el bloque try, el bloque catch se omite.

const fetchData = async (urlApi) => { 
    const response = await fetch(urlApi); 
    const data = await response.json(); 
    return data; 
}

const anotherFunction = async (urlApi) => {
    try{
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch(error) { 
        console.error(error);
    }
}

anotherFunction(API);

//Generators
//Consta de una función generadora que muestra un objeto iterable Generator.
//La palabra reservada yield se usa para pausar y reanudar una función generadora.
function* gen(){
	yield 1;
	yield 2;
	yield 3;
};

const g = gen();
console.log(g.next().value);//1
console.log(g.next().value);//2
console.log(g.next().value);//3

function* iterate(array){
    for(let value of array){ //El loop del for revisa cada elemento del array
        yield value; //value es asignado en cada ciclo
    }
}

const it = iterate(['Oscar', 'Omar', 'Ana', 'Lucia', 'Juan']); 
console.log(it.next().value); //Oscar
console.log(it.next().value); //Omar
console.log(it.next().value);//Ana
console.log(it.next().value);//Lucia
console.log(it.next().value);//Juan
console.log(it.next().value); //undefined