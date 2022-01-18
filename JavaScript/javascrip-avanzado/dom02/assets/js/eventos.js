let $titulo = document.querySelector("#titulo");
let $mensaje = document.querySelector("#mensaje");
let $btnMensaje = document.querySelector("#btnMensaje");
let $spanError = document.querySelector("span");

//Agregar eventos mediante addEventListener("evento","funtion (){}")
$btnMensaje.addEventListener("click" , () => {
    console.log("Me presionaste, muere!!!!");
    /* alert("Adios"); *///arlet de prueba
});
//keydown cuando presiona una tecla se activa el evento
$mensaje.addEventListener("keydown", (e)=>{ //keyup nos muestra las letras al dejar de precionar
    /* console.log("Escribidte algo"); */
    console.log(e.target.value);//con esta sentenca puedo ver lo que el usuario escribe por consola
    /* console.log(e); */
if (e.target.value.length < 3){
    $spanError.classList.remove("hide");
    $spanError.classList.add("error");
} else {
    $spanError.classList.add("hide");
    $spanError.classList.remove("error");
}

});