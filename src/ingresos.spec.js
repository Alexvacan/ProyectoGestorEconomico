import Ingresos from "./ingresos";

describe("Ingresos", () => {
  it("debería registrar un ingreso correctamente", () => {
    const ingresos = new Ingresos();
    const ingreso = { fecha: "2024-10-15", monto: 1000, descripcion: "salario" };

    ingresos.registrarIngreso(ingreso);

    expect(ingresos.obtenerIngresos()).toEqual([ingreso]);
  });
});
