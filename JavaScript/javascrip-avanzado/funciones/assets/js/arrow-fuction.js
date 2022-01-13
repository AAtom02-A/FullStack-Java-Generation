//12/02/2022
/* arrow  function
    Funcion de flecha
*/

/* function sumar(numero1,numero2){
    return numero1 + numero2;
} */

//funcion flecha.
//Antes de utilizarlas, debes estar declaradas o creadas
const sumar = (numero1,numero2)=>{
return numero1 + numero2;
}

let numero1 = parseInt(prompt("numero1") ) ;
let numero2 = parseInt(prompt("numero2"));
let suma = sumar(numero1,numero2);

document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`);

