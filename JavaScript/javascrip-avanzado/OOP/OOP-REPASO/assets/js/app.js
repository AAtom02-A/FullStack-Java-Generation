
//20/01/2022

//Repaso de POO
//Creacion de clase Animalito.
class Animalito{
    constructor(nombre,edad,especie, revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        //Se establecen parametros por defecto
        this.enfermo = false;
        this.revisado = revisado;
    }
    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes +=1;
        let mensaje = `Paciente agregado <br/>`;
        return document.write(mensaje);
    }

    modificarPacientesRevisados(){
        this.pacientesRevisados++;
    }

    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.pacientesRevisados++;
            this.modificarPacientesRevisados();//SE llama un metodo dentro de otro.
            document.write(`<br> El paciente a sido revisado`);
        } else{
            document.write(` <br> Este paciente ya fue revisado`);
        }
    }

    mostrarlista(){
        for(let i = 0; i < this.listaPacientes.length; i++){
            document.write(" " + this.listaPacientes[i].nombre);
        }
        document.write(`<br/> cantidad de pacientes: ${this.cantidadPacientes} <br/>
                        Pacientes revisados: ${this.pacientesRevisados}`);
    }
}

//Se instancia Veterinario
const VeterinariaPanchito = new Veterinario();
//Instanciar las clases 
//objetos creados de la clase animalito
const  Animalito1 = new Animalito("Manchas", 5, "Perro", false); //objeto 1
const  Animalito2 = new Animalito("Galleta", 2, "Gato", true); //objeto 2
console.log(Animalito1);
console.log(Animalito2);


//Se manda a llamar el metodo herencia
VeterinariaPanchito.agregarPaciente(Animalito1);
VeterinariaPanchito.agregarPaciente(Animalito2);
console.log(VeterinariaPanchito.listaPacientes);
VeterinariaPanchito.mostrarlista();

VeterinariaPanchito.revisarPaciente(Animalito1);
VeterinariaPanchito.mostrarlista();

VeterinariaPanchito.revisarPaciente(Animalito2);
//operador de corto circuito
//let variable = 0;

