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

  it("debería calcular correctamente el ahorro neto", () => {
    const ahorros = new Ahorros();
    
    const ingreso = { fecha: "2024-10-15", monto: 2000, descripcion: "salario" };
    const gasto = { fecha: "2024-10-16", monto: 500, descripcion: "compra de libros" };
    
    ahorros.registrarIngreso(ingreso);
    ahorros.registrarGasto(gasto);

    // Ahorro neto = Ingresos - Gastos = 2000 - 500 = 1500
    const ahorroNeto = ahorros.calcularAhorroNeto();

    expect(ahorroNeto).toEqual(1500);
  });

  
});
