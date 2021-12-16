/* 
    ciclos - bucles loops
    while - hacer una tarea repetitiva la cantidad de veces que uno quiera
    for
    do while
*/

/* while

    let condicion = 1; - valor inicial
    while(condicion){
        mi codigo
        modificacion al valor inicial
    }
*/

//imprimir todos los numeros del 1 al 100
/* 
let condicion = 1;
while(condicion  <= 10){
console.log(condicion);
//condicion = condicion + 1;
condicion++;
} */

/* do while - se ejectua al menos  una vez -primero pega y despues pregunta 

*/
//imprimir todos los numeros del 1 al 100

/* let numero = 1;
do{
    console.log(numero);
    numero++;
} while(numero <=10); */

/* for - Utiliza un contador
sintaxys for (variable, condicion, contador)
*/
/* for (let control = 1; control <=100 ; control++) {
    console.log(control);
    
} */

const comidas = ["Pozole","Tacos", "Tamales","Tortas"];

for (let i = 0; i <comidas.length ; i++) {
    console.log(comidas[i]);
    
}

