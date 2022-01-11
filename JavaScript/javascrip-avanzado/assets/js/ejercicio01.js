
let titulo = document.getElementById("titulo");
function getCambiarNombre(){
    let nombre = prompt("Introduce tu nombre");  
   titulo.textContent = "Hola " +  nombre;
   /* console.log("Hola" + titulo.value); */
}