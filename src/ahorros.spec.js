import Ahorros from "./ahorros";

describe("Ahorros", () => {
  it("debería registrar un ingreso correctamente", () => {
    const ahorros = new Ahorros();
    const ingresoValido = { fecha: "2024-10-15", monto: 1000, descripcion: "salario" };

    ahorros.registrarIngreso(ingresoValido);

    expect(ahorros.obtenerIngresos()).toEqual([ingresoValido]);
  });

  it("debería registrar un gasto correctamente", () => {
    const ahorros = new Ahorros();
    const gastoValido = { fecha: "2024-10-15", monto: 150, descripcion: "compra de libros" };

    ahorros.registrarGasto(gastoValido);

    expect(ahorros.obtenerGastos()).toEqual([gastoValido]);
  });



  
});
