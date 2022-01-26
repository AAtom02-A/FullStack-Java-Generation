
class Pokemon{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    atacar(){
        return console.log(`${this.nombre} esta atacando `);
    }
    
}

//Se aplica herencia
class Pikachu extends Pokemon {
    constructor(nombre,tipo,edad){
        super(nombre,tipo);//Hace referencia al constructo de la clase padre.
        this.edad = edad;
    }
    evolucionar(){
        console.log(`${this.nombre} esta evolucionando`)
    }

}
class Electrico extends Pikachu{
 constructor(nombre,tipo,edad,color){
     super(nombre,tipo,edad)
     this.color = color;
 }
}

const electrico = new Electrico("Panchito","Electrico",4,"Gris");
console.log(electrico);

const pikachu = new Pikachu("juan","Electrico",3);//pertenece  la clase pikachu
console.log(pikachu);

pikachu.atacar();
 pikachu.evolucionar(); 

const Pokemon1 = new Pokemon("Charmander","fuego");//pertene a la clase Pokemon.
Pokemon1.atacar();
/* Pokemon1.evolucionar(); */

