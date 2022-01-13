//12/02/2022
/* Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado */

 let precio = parseInt(prompt("Introduce el precio"));
 let cuponDescuento = prompt("Introduce el cupon de descuento");
 let descuento1 =  0.05; 
 let descuento2 = 0.10;
 let descuento3 = 0.20;
 let descuento4 = 0.25;
 let descuento;
 let precioFinal;
 
 switch (cuponDescuento) {
    case "Bronce":
        descuento = precio * descuento1 ;
        console.log(`El precio es : ${precio} y  el descuento es: ${descuento} y el precio final es: ${precio - descuento}`)
        break;
    case "Plata":
        descuento = precio * descuento2 ;
        console.log(`El precio es : ${precio} y el precio con el descuento es: ${descuento} y el precio final es: ${precio - descuento}`)
        break;
    case "Oro":
        descuento = precio * descuento3 ;
        console.log(`El precio es : ${precio} y el precio con el descuento es: ${descuento} y el precio final es: ${precio - descuento}`)
        break;
    case "Platino":
        descuento = precio * descuento4 ;
        console.log(`El precio es : ${precio} y el precio con el descuento es: ${precioFinal} y el precio final es: ${precio - descuento}`)

    default:
        console.log("Cupon Erroneo")
        break;
}