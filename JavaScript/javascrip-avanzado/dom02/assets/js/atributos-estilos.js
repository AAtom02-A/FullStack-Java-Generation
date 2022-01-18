let $titulo = document.querySelector("#titulo");//Se accede a un id
let $texto = document.querySelector(".texto");// se accede a una clase
$texto.id = "texto";
/* $texto.style = "color: red; font-size: 24px"; */
//className remplaza clases
$texto.className = "bg-purple    h3 ";
/* $texto.className = "h3"; */
//revover clases de forma selectiva
//classList Añade clases con add
$texto.classList.add("text-center");
//classList revueve clases con remove
$texto.classList.remove("bg-purple");





