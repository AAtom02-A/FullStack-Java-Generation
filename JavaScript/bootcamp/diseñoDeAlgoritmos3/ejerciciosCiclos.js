/* Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado'
 */

let numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
let resultado = [];
for(let i = 0; i <numeros.length; i++){
     resultado [i]= numeros[i]*2; //Se multiplican los indices del arreglo por 2 y se guardan en el arreglo resultado
}

for(let i = 0; i <numeros.length; i++){ // for para imprimir el arreglo resultado.
    console.log("El resultado es: " + resultado[i]);  
    document.write("<h1> El resultado del elemento es: </h1>" + "<h1>" + resultado[i] + "</h1>" );
}

console.log(resultado); 



//Ejemplo Josue
/* const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
const resultados = [];

for (let i = 0; i < numeros.length; i++) {
    resultados.push((numeros[i] * 2));    
}


resultados.forEach(function(el, i){
    document.write("<h1>El resultado del elemento "+ i + " es:" + el + "</h1>" );
}) */

