/* 
    Condicionales: Se utilizan para tomar desiciones dentro del programa 
    */
/* 
if (condition) { //Entonces si, se ejecuta si la condición es verdadera
    
} */ 

/* let edad = parseInt(prompt("Introduce tu edad "));

if (edad >=18 ) {
    document.write("Eres mayor de edad, puedes votar")
    //document.write imprime el texto en el html, ya no en consola. 
    
}else {
    document.write("Eres menor de edad, no puedes votar")
}
 */

let edad = parseInt(prompt("Introduce tu edad "));

if (edad >=18 && edad <30) {
    document.write("Eres un joven");
    //document.write imprime el texto en el html, ya no en consola. 
    
}else if (edad >=30 && edad < 60) {
    document.write("Eres un adulto")

}else if (edad >= 60) {
    document.write("Eres un adulto mayor ")

}
else{
    document.write("Eres un niño");

}