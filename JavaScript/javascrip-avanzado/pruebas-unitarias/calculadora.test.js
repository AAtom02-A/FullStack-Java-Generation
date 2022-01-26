

const {sumar,restar,multiplicacion, dividir} = require("./calculadora");


//ENgloba la descripcion 
describe("Pruebas en el componente calculadoras", ()=>{
test("Prueba en la funcion sumar", ()=>{
    expect(sumar(3,5)).toBe(8);
});
});



//ENgloba la descripcion 
describe("Pruebas en el componente calculadoras", ()=>{
test("Prueba en la funcion restar", ()=>{
    expect(restar(10,5)).toBe(5);
});
});

describe("Pruebas en el componente calculadoras", ()=>{
    test("Prueba en la funcion multiplicación", ()=>{
        expect(multiplicacion(10,5)).toBe(50);
    });
    });

    describe("Pruebas en el componente calculadoras", ()=>{
        test("Prueba en la funcion dividir", ()=>{
            expect(dividir(50,5)).toBe(15);
        });
        });