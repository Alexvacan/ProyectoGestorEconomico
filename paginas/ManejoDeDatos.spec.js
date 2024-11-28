import ManejoDeDatos from "./ManejoDeDatos";
describe("Pruebas de la funcion EliminarDatoInicialSiEstaVacio",()=>{
    let manejoDeDatos = new ManejoDeDatos
    it("La funcion deberia devolver la funcion tal cual si el valor en la pocicion 0 no esta vacio",()=>{
        let array=['1','2','3']
        expect(manejoDeDatos.EliminarDatoInicialSiEstaVacio(array)).toEqual(array)
    })
    it("La funcion deberia devolver la funcion eliminando la pocicion 0 si esta esta vacia",()=>{
        let array=['','2','3']
        let arrayEsperado=['2','3']
        expect(manejoDeDatos.EliminarDatoInicialSiEstaVacio(array)).toEqual(arrayEsperado)
    })
})

describe("Pruebas de la funcion convertirArrayAEnteros",()=>{
    let manejoDeDatos = new ManejoDeDatos
    it("La funcion deberia devolver una array de enteros",()=>{
        let array=[1,2,3]
        expect(manejoDeDatos.convertirArrayAEnteros(array)).toEqual(array)
    })
    it("La funcion deberia recivir un array de enteros con numeros en texto y devolver una array de enteros",()=>{
        let array=['1','2','3']
        let arrayEsperado=[1,2,3]
        expect(manejoDeDatos.convertirArrayAEnteros(array)).toEqual(arrayEsperado)
    })
})


describe("Pruebas de la funcion SumaArray",()=>{
    let manejoDeDatos = new ManejoDeDatos
    it("La funcion deberia devolver un numero y resivir un array",()=>{
        let array=[1,2,3]
        expect(manejoDeDatos.sumaArray(array)).toEqual(6)
    })
})

