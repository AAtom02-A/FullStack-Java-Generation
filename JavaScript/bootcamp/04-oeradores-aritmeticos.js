/* 
operadores aritmeticos nos sirven para hacer operaciones
fecha: 9-12-2021

+ suma
- resta
* multiplicacón
/ división
% modulo sirve para obtener el residou de una division

*/

let numero1 = parseInt(prompt("Ingresa el numero 1")); // pide los numeros o informacion al usario lo convierte en texto
let numero2 = parseInt(prompt("Ingresa el numero 2"));

//parseInt convierte el formato en numero
const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacón = numero1 * numero2;
const division = numero1 / numero2;

console.log("El numero 1 es:" + numero1, "El numero 2 es: " + numero2)
console.log("suma:" + suma); 
console.log("resta:" + resta); 
console.log("Multiplicación:" + multiplicacón); 
console.log("División:" + division); 

//modulo obtener el residuo de una operacion, sirve para saber si el numero es par o impar.
console.log (5 % 3);

/* 
    Operadores logicos

    && AND o y ambas expresiones tienen que ser verdaderas, si una no lo es, el resultado es falso
    || OR o  Es verdadero si una de las expresiones es diferente, es falso cuando ambas son falsas.
    ! NOT no Si una expresión es verdadera el resultado es falso o viceversa. 

*/ 