//17/01/2022

/* let titulo = document.getElementById("titulo");
titulo.textContent = "Titulo escrito desde JS";
 */

//querySelecto
/* Busca el primer elemento que coincide con el selector CSS sel
 ya sean ID, .class y etiqueta.*/
let $titulo= document.querySelector("#titulo");//Acede a los emenetos 
$titulo.textContent ="Titulo escrito desde JS";

let $parrafo = document.querySelector("p");
/* console.log($parrafo.textContent);  */

let $parrafos = document.querySelectorAll("p");
/* console.log($parrafos[1].textContent); */

/* $parrafos.forEach((parrafo1,indice)=>{
    parrafo1.textContent = `Parrafo modificado ${indice}`;
    console.log($parrafos.textContent);

})
 */
// Se crea un elemento html en memoria

let subtitulo = document.createElement ("h3");
//Se modifica en contenido del elemento.
subtitulo.textContent = "Este es un subtitulo desde JS";
//Insertar el elemento en el hmtl
//Con append agrega el elemento al final. 
document.body.append(subtitulo);

let $contenido = document.querySelector("#contenido");
console.log($contenido.textContent);//devuelve el texto
console.log($contenido.innerHTML);//Devulve el texto y la etiqueta