//ECMAScript+6
//ECMAScript es una especificación de lenguaje de scripting en la que se basa JavaScript.
//Ecma International está a cargo de estandarizar ECMAScript.

//ECMAScript 6
//Uso de "let" y "const". 
let myEdad = 30;
const myName = 'Emilce';

//Arrow Functions
let texto = 'No olvides la =>';
const arrow = (texto)=>{
    return texto;
};

const arrow2 = texto => texto;

// Parámetros en objetos
let obj1 = {myEdad, myName};

//Default Params
const user = (nombre = 'Jose',  apellido = "De la Torre", edad = 32)=>{
    return console.log(nombre, apellido, edad);
};

//Desestructuración
let objetoU = {
    nombre: 'Diego',
    apellido: 'Marte',
    edad: 38
};

let {nombre, apellido, edad} = objetoU;

//Spread Operator - operador de propagación
let squad1 =[ 'Maria', 'Ana'];
let squad2 =['Flor', 'Tatiana'];

let group = ['Francisco', 'Natalia', ...squad1, ...squad2];

//Concatenación
const usr = `${nombre} ${apellido} tiene ${edad} años.`;
//Multilínea
const text =  ` Estamos muy felices de brindarte este comienzo.
                Nos sentimos muy contentos de que seas parte del equipo. `;

//Promesas
const helloWord =() =>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Hola Mundo');
        } else {
            reject('Ups!, existe un error');
        }
    });
};

helloWord()
 .then(response => console.log(response))
 .then(()=> console.log('Perfecto'))
 .catch(err => console.log(err))

 // Class 
 class Calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
 }

 const calc = new Calculator;

 //Generator
 function*holaMundo(){
    if(true){
    yield 'Hello,';
    }
    if(true){
     yield 'Word'
    }
 };

 const generatorHello = holaMundo();
 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);

 //ModuleJS que permite usar import y export



//ECMAScript 7
//includes()
const frutas = ["manzana",  "uva"];
frutas.includes("manzana");

//Operador de potenciación: **
const potencia = (base, exponente)=> base ** exponente;



//ECMAScript 8
//Object.entries()
const usuario4 = {
    nombre: "José",
    email: "jose24@gmail.com",
    edad: 24
};

const usr1 = Object.entries(usuario4); // Matriz de string de propiedades y valores

//Object.keys()
const usr2 = Object.keys(usuario4) // Matriz de string de propiedades

//Object.values()
const usr3 = Object.values(usuario4);// Matriz de string de valores

//padStart()

let str = 'Hola';
str.padStart(10, 'Maria ');

//padEnd()
str.padEnd(6, '--');

//async y await
const helloWordAsync = async() => {
    const hello = await helloWord();
    console.log(hello);
};
//Se puede utilizar try y catch para manejar mejor los errores
const asyncFunction = async() => {
    try {
      const response = await helloWord();
      return response
    } catch (error) { // desde ES10 ya no es necesario agregar (error)
      return error
    }
};

//Trailing comma : comas al final de objetos o arrays que faciliten añadir nuevos elementos y evitar errores de sintaxis.



//ECMAScript 9
//Operador de resto
const hola = (primero, segundo, ...resto) => {
    console.log(primero, segundo);
    console.log(resto);
  };

  const objeto3 = {
    nombre: "Andres",
    age: 23,
    descipcion: "Estudiante"
  }
  const arrayNum = [0,1,2,3,4,5]
  
  const {descripcion, ...usuario} = objeto3;
  cons [cero, ...positivos] = arrayNum;
  
// se agrego propiedades al operador de propagación
const objeto = {
    nombre: "Francisco",
    edad: 23,
  };
  
  const usuario3 = {
      ...objeto,
      apellido: "Morales"
  };

//.finally (Promesas)
helloWord()
 .then(response => console.log(response))
 .catch(err => console.log(err))
 .finally(() => console.log('Finalizo'))

//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');


//ECMAScript 10
//flat()
let arrayNum1 =[2, 4, 6, [5, 6, 7, 8, [8, 6, 8], 3], 6];
arrayNum1.flat(2);

//flatMap()
arrayNum1.flatMap(el => el ** 2)

//trim() . Eliminar espacios. 
let dia ='    Lunes   ';
dia.trim();

//trimStart() || trimLeft()
let dia2 ='    Martes    ';
dia2.trimStart()

//trimEnd() || trimRight()
dia2.trimEnd();

//Object.fromEntries()
const arrayEntries = [
    [ 'name', 'Diego' ],
    [ 'email', 'diegp@gmail.com' ],
    [ 'age', 26 ]
  ];
  const usuario5 = Object.fromEntries(arrayEntries);

  //Symbol
  const nombre1 = Symbol('Emilce');



  //ECMAScript 11
  // Importación dinámica
const boton = document.getElementById("boton");
boton.addEventListener("click", async () => {
    const modulo = await import('./modulo.js')
    modulo.funcion()
});

//Big Int
const number1 = 55n;
const number2 = BigInt(55);

//Promise.all()
Promise.all([promise1, promise2, promise3]) //  se resolverá, si y solo si todas las promesas fueron resueltas

//Promise.allSettled()
Promise.allSettled([promise1, promise2, promise3]) // devuelve el valor de cada promesa, haya sido resuelta o rechazada

//Operador Nullish Coalescing - ??
const usuario7 = {}
const nombre7= usuario7.name ?? 'Emilce';

//Encadenamiento opcional - ?
console.log(usuario7.redes?.facebook);



//ECMAScript 12
//replaceAll()
const mensaje = 'Manuel viaja con su hermana. A Manuel le encanta viajar con ella.';
mensaje.replace('Manuel', 'Francisco');

//Métodos privados de clases
class Msg {
    #private(valor){
      console.log(valor)
    }
  };
  
  const msg  = new Msg();

//Promise.any()
Promise.any([promise1, promise2, promise3])//retornará la primera promesa que sea resuelta y se rechazará si todas las promesas son rechazadas

//Expresiones y operadores: 
// Asignación AND (&&=), en caso de cumplirse una verdad, asigna un valor a una variable
let hi = true
hi ??= "Hola"
console.log(hi) 

// Asignación OR (||=), en caso de cumplirse una falsedad, asigna un valor a una variable
let hey = true
hey ||= "Hey"
console.log(hey)

// Asignación Nullish (??=), en caso de cumplirse undefined o null, asigna un valor a una variable
let saludo = undefined
saludo ??= "Hola"
console.log(saludo)



//ECMAScript 13
//Top level await
const response = await fetch('url');

try{
    const response = await fetch('url');
}catch{
    console.log(error.message);
}

//.at()
const numArr = [1, 33, 65, 654, 6433];
numArr.at(1); // 33
numArr.at(-1); //6433

//Object.hasOwn(). Retorna true o false dependiendo si se encuentra dentro del objeto o no. 
const user9 = {
    name: 'Emi',
    age: 30,
}

Object.hasOwn(user9, 'name');

//Private properties y Methods. Se utiliza #