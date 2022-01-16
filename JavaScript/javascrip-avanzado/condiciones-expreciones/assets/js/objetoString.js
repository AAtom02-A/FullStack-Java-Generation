let cadena1 = "hola";
console.log();
















/* Funcion que recibe una palabra y la 
regresa invertid*/
//split convierte una cadena arreglo
let palabra = prompt("Introduce tu palabra");
let arreglo = palabra.split("");
console.log(arreglo);
/* let arregloInvertido = arreglo.reverse();
console.log(arregloInvertido); */

function invertirPalabra(cadena){
  
    let arreglo = cadena.split("");//convirtiendo cadena en un arreglo
 arreglo.reverse();//invirtiendo el arreglo
    let cadenaInvertida = arreglo.join("");//une los elementos de un arrelo
    //Y regresa un string,
    return console.log(cadenaInvertida);
}
invertirPalabra("Generation");