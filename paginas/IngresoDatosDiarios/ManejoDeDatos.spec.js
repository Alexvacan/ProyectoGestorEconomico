import ManejoDeDatos from "./ManejoDeDatos";
describe("Manejo de arrays",()=>{
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
