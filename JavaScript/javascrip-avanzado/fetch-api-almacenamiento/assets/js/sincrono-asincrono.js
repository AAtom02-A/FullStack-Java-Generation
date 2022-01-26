/* Codigo sincrono */

let variableSincrona;
variableSincrona = 10*3;
console.log(variableSincrona);


/* Codigo asincrono */
let variableAsincrona;
//Esta funcion ejecuta el codigo que este dentro despues de un tiempo predeterminado
//Tiene dos parametros, funcion anonima, tiempo.
setTimeout(()=>{
variableAsincrona = 10*3;
console.log(variableAsincrona);
},2000);

console.log(variableAsincrona);