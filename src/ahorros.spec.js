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

  it("debería calcular correctamente el ahorro neto con varios ingresos y gastos", () => {
    const ahorros = new Ahorros();

    const ingreso1 = { fecha: "2024-10-15", monto: 1000, descripcion: "salario" };
    const ingreso2 = { fecha: "2024-10-20", monto: 500, descripcion: "freelance" };

    const gasto1 = { fecha: "2024-10-16", monto: 200, descripcion: "comida" };
    const gasto2 = { fecha: "2024-10-17", monto: 150, descripcion: "transporte" };

    ahorros.registrarIngreso(ingreso1);
    ahorros.registrarIngreso(ingreso2);
    ahorros.registrarGasto(gasto1);
    ahorros.registrarGasto(gasto2);

    // Ahorro neto = (1000 + 500) - (200 + 150) = 1150
    const ahorroNeto = ahorros.calcularAhorroNeto();

    expect(ahorroNeto).toEqual(1150);
  });
});
