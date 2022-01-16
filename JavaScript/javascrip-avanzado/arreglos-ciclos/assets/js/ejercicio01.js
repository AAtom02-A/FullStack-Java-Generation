/* 13/01/22 */
/* Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio. */


let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,26,32,34,76,45];
let suma = 0;
let prom ;
 for( let i = 0; i< numeros.length ; i++){ // para que se muentre de en dos en dos es 
    //Incrementando en contador i +=2
    suma += numeros[i];
    prom = suma / numeros.length;
    
 }


 document.write(`la suma es: ${suma} `);
 document.write(` <br/>  el promedio es: ${prom}`);



 
/* numeros.forEach( numero =>{//funcion anonima dentro del foreach 
    suma = numero + numero;
    prom = suma / 20;
    document.write(`la suma es: ${suma} y el promedio es: ${prom}`);
}); */
