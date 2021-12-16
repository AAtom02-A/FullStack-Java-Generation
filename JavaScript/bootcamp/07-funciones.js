/* 
Las funciones nos sirven para hacer bloques de codigo que son reutilizables
 */

/* let numero1 = 10;
let numero2 = 20;
let suma = numero1 + numero2
document.write(suma);

let numero3 = 23;
let numero4 = 2132;

let suma2 = numero3 +  numero4;
document.write(suma2); */

// creacion de la funcion sumar
/* function sumar () {
let numero1 = 10;
let numero2 = 20;
let suma = numero1 + numero2;
document.write("<h1>" + suma + "</h1>");
}
sumar(); */

function sumar (numero1,numero2) { //se ayaden los valores a la suma
    let suma = numero1 + numero2;
    document.write("<h1>" + suma + "</h1>");
    }
    sumar(13, 45);
    sumar(10, 45);
    sumar(5, 45);