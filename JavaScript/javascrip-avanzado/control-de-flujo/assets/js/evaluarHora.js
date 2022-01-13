//12/02/2022
/* uenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5
 */
/* let hora = parseInt(prompt("Ingresa la hora entera, ejemplo: 1,2,3,4.., en formato de 24 horas"));


if ( hora >=6   && hora<=11  ) {
    document.write("Buenos dias")
} else if (hora >=12 && hora <=18) {
    document.write("Buenas tardes")
} else if ( hora >=19 && hora <=23) {
    document.write("Buenas noches")
}else if ( hora >=0 && hora<=5 ) {
    document.write("Dejame dormir")
} */

/* Operador ternario */
/* (condicion a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso;*/

let edad1 = 17;
//Los parentesis te la condicion no son necesarios.
(edad1 >= 18) ? console.log("Mayor de edad") : console.log("Menor de edad");
let pregunta = edad1 >= 18 ? "Mayor de edad" : "Menor de edad";


let preguntaEdad = `Tengo ${edad1} años y soy ${(edad1 >= 18) ? "Mayor de edad" : "Menor de edad"}`;
console.log(preguntaEdad);

/* Ejercicio 03 */
let dia = 5;

/* if (dia ===0) {
console.log("domingo")    
} else if ( dia === 1){
    console.log("lunes")  
}else if ( dia === 2){
    console.log("martes")  
}else if ( dia === 3){
    console.log("miercoles")  
}else if ( dia === 4){
    console.log("Jueves")  
}else if ( dia === 5){
    console.log("viernes")  
}else if ( dia === 6){
    console.log("sabado")  
} else{
    console.log("Ese valor no es un día");
} */

/* Sitch o case */

/* switch (variable a evaluar) {
    case value:
        codigo a ejecutar
        break;

    default:
        codigo a ejecutar si sale de las opciones
        break;
} */
//Evaluar una sola variable. Uso de switch.
switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:

        console.log("Viernes");
        break;
    case 6:

        console.log("Sabado");
        break;

    default:
        console.log("Este valor no es un dia");
        break;
}

let cuponDescuento = "Oro";
let descuento;
//Ejercicio de descuentos con switch
switch (cuponDescuento) {
    case "Bronce":
        descuento = 5;
        break;
    case "Plata":
        descuento = 10;
        break;
    case "Oro":
        descuento = 15;

        break;

    default:
        console.log("Cupon Erroneo")
        break;
}

console.log(descuento)