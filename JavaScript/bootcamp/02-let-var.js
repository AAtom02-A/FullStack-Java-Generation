/* 
variable que se utilizaba anteriormente, son vaiables globales.
Variable let es una variable de contexto, aolo vive en un bloque
de codigo. 
*/

 var numero = 40; //variable globales 
console.log(numero);

if(true) {
    var numero = 50;
    console.log(numero);
}

console.log(numero); 

var texto = "Bootcamp"; //varible local
console.log(texto);

if(true) {
    let texto = "Chorte8";
    console.log(texto);
}

console.log(texto);