import Ingresos from "./ingresos";

describe("Ingresos", () => {
  it("debería registrar un ingreso correctamente", () => {
    const ingresos = new Ingresos();
    const ingresoValido = {
      fecha: "2024-10-15", monto: 1000, descripcion: "salario",
    };

    ingresos.registrarIngreso(ingresoValido);

    expect(ingresos.obtenerIngresos()).toEqual([ingresoValido]);
  });
});
