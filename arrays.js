//Manejo de Arrays. Métodos más utilizados.

const arrEj = [1, 2, 3, 4, 5, 6]; 
const arrEj2 = [ 'Hola', 'Mundo'];
const arrEj3 = [ 1, 3, 6, [3, 5, [4, 7, 8]], 8];

// C 
//concat(). Sirve para fusionar arrays. 
arrEj.concat(arrEj2);


// E 
//every() . Todos los elementos deben cumplir con la condición. Retorna true o false.
arrEj.every(num => num > 5);


// F
//filter() Es inmutable, el array creado solo puede contener : 1) cero coincidencias, 2) todas las coincidencias, 3)algunas coincidencias.
arrEj.filter(num => num > 3);

//find(). Solo retorma un objeto que cumpla con la condición. Rteorna el primero que cumple con la condición. 
arrEj.find(num => num > 2);

//findIndex() . Solo devuelve en qué posición  se encuentra el elemento.
arrEj2.findIndex(text => text === 'Mundo');

//flat(). Cuando tenemos un array dentro de otro array, flat() los aplana y vuelve un solo array
arrEj3.flat(2); 

//flatMap(). Es la unión de flat() con map(). Une los arrays mientras transforma los elementos.
arrEj3.flatMap(num => num*3);

//forEach(). Sirve para recorrer y ejecutar la función indicada una vez por cada elemento del array
 arrEj.forEach(num => console.log('numero', num));


// I 
//includes(). Busca si un elemento esta incluido. Devuelve true o false
arrEj2.includes('Hola');


// J 
arrEj2.split('').join('--')


// M 
//map(). Es inmutable por lo tanto no modifica el array original sino que crea uno nuevo. 
arrEj.map(el => el*2);


// P 
//pop(). Elimina el último elemento del array.
arrEj.pop();

//push(). Agrega elemento al final del array.
arrEj.push(9);


// R
//reduce(). Reduce un array a un solo valor
arrEj.reduce(acc, num => acc + num );

//reverse(). Invierte los lugares del array.
arrEj.reverse();


// S 
//shift(). elimina el rpimer elemento del array. Devuelve ese elemento eliminado.
arrEj.shift();

//slice(). Devuelve una copia de una parte del array.
arrEj.slice(1, 3); 

//splice(). Elimina o reemplaza elementos existentes. 
arrEj2.splice(1, 0, 'Cálido');
arrEj2.splice(2, 1, 'Hogar');

//some(). Si algunos de los elementos cumple con la condición retornara true o false. 
arrEj.some(num=> num % 2 === 0);

//sort() ordena los elementos de manera ASC o DESC. 
arrEj.sort(a,b => a-b);
arrEj.sort(a,b => b-a);


// U 
//unshift(). Agrega uno o mas elemento desde el primer lugar en el array. 
arrEj.unshift(0, 8);