//12/02/2022
/* 1. Almacenar el año actual en una variable. Pedirle al usuario su edad y calcular su edad.
 */
let añoActual = 2022;
let añoNacimiento = prompt("inserta tu año de nacimiento"); 
    
 function calcularEdad(  añoActual, añoNacimiento){
    let edad = añoActual - añoNacimiento;
        edad.textContent = "La edad es " +  edad ;
    }

