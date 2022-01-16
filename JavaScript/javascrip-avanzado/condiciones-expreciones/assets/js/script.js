/* Operadores arimeticos
+ sumA
- Resta
/ Division
* Multiplicacion
% Modulo
()  */

let operacion = 3 * 5 + (10 -5);
console.log(operacion);

let operacion2 = 3 - 5 / 2 * 4;
console.log(operacion2);

//Operadores relacionales.
// <, >, <=, >=, ==,===, !=, !==.
//Resultado booleano: true o false.

console.log(7 < 7);
console.log(7 <= 7);// incluyendo el numero a comparar
console.log(7 == "7");// compara el valor
console.log(7 === "7 "); // compara valor y tipo de dato. 

console.log(7 != "7");
console.log(7 !== "7");

/* Incremento y decremento  */
// +=, +=, *=, /=,  Aumentan o disminuyen en uno o mas elementos

let Incremento = 5;
Incremento +=5;//incremento = incremento + 5
Incremento -=5;
Incremento *=5;
Incremento /= 5;
console.log(Incremento);

/* Operador unario */
//Incremendo y decremento
// ++, --
//sumar uno o restar uno

let sumar = 0;
console.log(sumar);
sumar ++
console.log(sumar + " Linea 44");
sumar ++;
console.log(sumar);
sumar --;
sumar --;
console.log(sumar);


/*  */
for (let i = 0; i < 10; i++) {

    
}

/* ++variable = preincremento, primero midifica el valor y despues hace uso de l variable
variable++ = postincremento, usando la variable y despues hace el incremento.
 */
let num =5;
console.log(num++);
console.log(num);


for (let i = 0; i < 5 ; i++) {
    //iteracion =una vuelta
    //Primer iteracion, se detiene
    console.log("Este es un padre");
    for (let j = 0; j < 5; j++) {
        //Hace sus interaciones
        console.log("Este es un hijo");
    }
    
}