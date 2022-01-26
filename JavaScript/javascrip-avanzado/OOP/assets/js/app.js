//Clase de Progamcion Orientada a Objetos 19-01-22
//Clases, molde que nos permite crear objetos
//Creacion de una clase
class Animal{

    //Creacion del metodo constructor
    constructor(nombre, especie){
        this.nombre = nombre;
        this.especie = especie;
        /* this hace referencia a una variable
            Hace referencia al contexto que se esta utilizando
             contiene los datos o variables al utilizar un objeto*/
    }
    //getters y setters su proposito es leer o modificar un atributo 
    // creacion de getters
            get getNombre(){
                return this.nombre;
            }

    //Creacion de setters
            set setNombre(nombre){
                this.nombre = nombre;
            }

            get getEspecie(){
                return this.especie;
            }
            set setEspecie(especie){
                this.especie = especie;
            }
    //Creacion de un metodo
    presentarse(){
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br/>`)
    }

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `mi nuevo nombre es ${this.nombre} y soy un ${this.especie}` ;
        return mensaje;
    }
    
    //Metodos estaticos
    //No necesitan objetos y no se herada a los objetos
    static saludar (){
        return console.log("HOla, este es un metodo estático");
    }

}

Animal.saludar();
//Heredan los atributos y  los metodos de la clase que estan utilizando. 
const Animal1 =  new Animal("scooby","perro");
//instanciar = hacer una copia, crear un objeto
console.log(Animal1);

const Animal2 = new Animal("Pecas","Gato");
console.log(Animal2);

Animal1.presentarse();
Animal2.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = "Scrappy";//notación de punto para cambiar el valor
console.log(Animal1.nombre);

document.write(Animal1.cambiarNombre("Oddies"));//metodo para cambiar el valor.

//en Js los metodos los utilizamos como si fueran atributos. 
console.log(Animal1.getNombre);
Animal1.setNombre ="Manchas"; //Se asigna directamente el parametro a modificar como atributo. 
console.log(Animal1.getNombre);

console.log(Animal1);


//Getters y Setters
//Getters = obtener el valor de una variable.
//Setters = fijar o cambiar un valor de un atributo. 