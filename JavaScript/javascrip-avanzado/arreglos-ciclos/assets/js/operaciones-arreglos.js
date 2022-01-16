

//Sintaxis foreach - funcion anonima.
/* arreglo.forEach(function callback(elemento, indice, arreglo) {
    // tu código
} */

let numeros = [1,2,3,44,55,3,654,2,333];
//Foreach recorre todos los elementos de un arreglo.
numeros.forEach(function (numero,indice ){//funcion anonima dentro del foreach
    document.write(numero + "-" + indice + "<br/>");
});

numeros.forEach( numero =>{//funcion anonima dentro del foreach
    document.write(numero + ", ");
});

//map permite crear un arreglo apartir de otro arreglo 

let numeros2 = numeros.map(function(elemnto){
    return elemnto * 1.15;
});
document.write( "<br/> " + numeros2);

//ejemplo del uso de map

/* let frutas = ["Mango","uva","piña"];
let frutas2 = frutas;
document.write("<br/>" + frutas + "<br/>")
document.write("<br/>" + frutas2 + "<br/>")
frutas2.push("Pera");
 */

/* let frutas = ["Mango","uva","piña"]; */
/* let frutas2 = frutas.map(function(elemento){
    return elemento;
});

frutas2.push("Pera");
document.write("<br/>" + frutas + "<br/>")
document.write("<br/>" + frutas2 + "<br/>")
 */


/* includes */ //verifica si un elemento esta dentro del arreglo.
document.write("<br/>" + numeros.includes(3));

/* filter 
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
*/

let numerosPares = numeros.filter((elemento) => {
   /*  if (elemnto % 2 == 0){
        return true;
    } else{
        return elemnto % 2 == 0;
    } */
   /*  console.log(elemnto % 2 == 0);
    return elemnto % 2 == 0; */

    if (elemento > 10 ) {
        return true;
    }
});

document.write("<br/>" + numerosPares + "<br/>");

let frutas = ["Mango","uva","piña", "Mandarinas ", "Manzana", "Aguacate"];
let frutas2 = frutas;
 let frutasFiltro = frutas.filter((fruta)=>{
    /*  if (fruta.includes("M") == true){ // includes  funciona para arreglos y stongs sirve para bucar una letra en especifico
        return true;
     }  */ 
     /*  return fruta.includes("M"); */
      return fruta.toLowerCase().includes("m");//tolowerCase para tomar las mayusculas en minusculas. 
 });
document.write("<br/>" + frutasFiltro);

/* sort en teoria sirve para ordenar numeros de una forma de string
    N   O   U   S   A   R*/
let otrosNumeros = [9,2,3,5,1,4,8,6,7];
document.write("<br/>" + otrosNumeros.sort() + "<br/>");

/* reverse - invierte el orden de los elementos  de un arreglo*/
document.write("<br/>" + otrosNumeros.reverse() + "<br/>");

/* find duvuelve el primer elemento que encuentre */

let frutaEncontrada = frutas.find((elemento) =>{
    return elemento.toLowerCase().includes("ña");
});

document.write("<br/>" + frutaEncontrada + "<br/>");

















