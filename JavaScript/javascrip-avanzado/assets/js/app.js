//11/02/2022
let title = document.getElementById("title");/* Dentro del documento, busca un elemento que tiene el sig. id 
                                                Se accede a un elemento*/

console.log(title);
title.textContent ="Este texto esta escrito desde javascript";

/* let parrafos = document.getElementsByTagName("p");/* Se accede a varios elementos. */
/* console.log(parrafos); */ 

/* Formas de cambiar texto en un solo parrafo */
/* parrafos[0].textContent = "Hola"; */

/* Modificar todos los parrafos por un texto nuevo */
/* for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = "parrafo "+ i + " Escritos desde java";
    
} */
//En este bloque de codigo lo que hace es
// por medio de consola nos mostrara el correo y la contraseña.
let email = document.getElementById("email");
let password = document.getElementById("password");

function getInformacion(){
    console.log(email.value);
    console.log(password.value);

}