//12/02/2022
/*  Funciones
    Es un bloque de codigo reutiizable.
    Puede tener o no parametros de entrada.
    Puede devolver uo no un valor.

*/

//creacion de funciones
function suma(numero1,numero2){
    //Operaciones o codigo a ejecutar
    return numero1 + numero2 //return devulve el valor de una funcion y se sale de la funcion.

}
 
function restar(numero1, numero2){
    document.write(`la resta de ${numero1} y ${numero2} es ${numero1 - numero2} <br>`);
}


let numero1 = parseInt(prompt("numero1") ) ;
let numero2 = parseInt(prompt("numero2"));
let sumaNumeros = suma(numero1, numero2);
document.write(`la suma de ${numero1} y ${numero2} es ${sumaNumeros} <br>`);//dom ${sirven para indicar varibles javascript}
restar(numero1,numero2);
document.write( "la suma de " + numero1 + " y " +  numero2 +  "es" + sumaNumeros);

