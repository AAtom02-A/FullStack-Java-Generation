/* Creacion de objetos
    coleccion de informacion con 
    cierta clasificacion */
/* let miObjeto = {
    //pares de clave valor
    nombre: "Angel Tonatiuh" //la clave no se le pone comillas, el valor si es un string si.

} */

let nombre = "carlos eduardo";
let edad = 31;
let direccion = "villa hermosa, tabasco"
let numero = 23445534;

console.log(nombre);

let persona = {
nombre: { //creacion de otro objeto, dentro del objeto.
    apellidoPaterno: "Alvarez",
    apellidoMaterno: "Rodriguez",
    nombre: "Angel"
},
edad: 23,
direccion: "san andres totoltepect",
numero: [ //Creacion de arreglos dentro del objeto
    123244545,
    213435445
]
};
//imprimir persona
console.log(persona);
//imprime unicamente el nombre
console.log(persona.nombre);

console.log()
 //Arreglos vs objetos
 //Almacenar informacion
 //cambian en la estructura
 //11/02/2022
 // [valor 1, valor2, valor 3] Arreglos trabajan con indice
 //objetos estructura mas claras
 /* let otroObjeto = {
     nombre = "sdfrgf",
     apelldos = "sdwefdfv"
 }; */

 let zapatos = {
     color: "negro",
     marca: "Adidas",
     agujetas: false,
     talla: 28
 }
 console.log(zapatos);

 let caribe = {
     modelo: "Caribe sedan",
     marca: "VW",
     puertas: 4,
     motor: 1.8,
     tanqueGasolina: "40 lt",
     color: 
         ["Azul", "Roja", "Gris", ["gris claro", "gris oscuro"]]
     
 }

 console.log(caribe.color[3][0]);