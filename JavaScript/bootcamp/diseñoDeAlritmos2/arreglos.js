/* 
Los arreglos son una conexcion de elementos, tienen metodos o funciones que nos permiten
ordenar o manipular los datos almacenados.
*/

//Forma 1 para crear arreglos
const arreglo1 = [];
console.log(arreglo1);
 
// Arreglos con datos ya almacenados o inicializados.
//Forma de crear arreglos actualmente, esto se debe por ECMAN 6
const arreglo2 = Array.of(1,"hola",false);
console.log(arreglo2);

//Manera 3
const arreglo3 = new Array(3, true, "adiós");
console.log(arreglo3);

//Se recomienta usar const para declarar un arreglo
//Ya que no con const no de puede mutar el contenido del arreglo. 

const frutas = ["Manzanas", "Naranjas","uvas","sandías",[1,2,3,4,5,["A","B","C"]]];
//anotacion de los corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);

console.log(frutas);
frutas[4][5].push("D");
console.log(frutas);
//Metodos
/* 
    Length = Longitud
*/
    const letras = ["A","B","C","D"];
    console.log(letras.length);
/*  push 
    Añade un elemento al final de nuestro arreglo
 */

    letras.push("E");
    console.log(letras);

/* pop = elimina el ultimo elemento de nuestro arreglo */

letras.pop();
console.log(letras);

/* unshift = agrega un elemento al inicio del arreglo */

letras.unshift(1);
console.log(letras);

/* shift = elimina el primer elemento */
letras.shift();
console.log(letras);