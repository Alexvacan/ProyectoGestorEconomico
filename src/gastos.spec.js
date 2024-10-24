import Gastos from "./gastos";

describe("Gastos", () => {
  it("Error!!! Falta algun campo por rellenar", () => {
    const gastos = new Gastos();
    const gastoInvalido = { fecha: "2024-10-12", descripcion: "gastos varios" };

    expect(() => gastos.registrarGasto(gastoInvalido)).toThrow("Porfavor llene todos los campos");
  });

  it("Se deberia registrar un gasto correctamente", () => {
    const gastos = new Gastos();
    const gastoValido = {
      fecha: "2024-10-12",
      monto: 45,
      descripcion: "compra de libros",
    };

    gastos.registrarGasto(gastoValido);
    expect(gastos.obtenerGastos()).toEqual([gastoValido]);
  });

  it("debería registrar varios gastos correctamente", () => {
    const gastos = new Gastos();
    const gastoPasajes = {
      fecha: "2024-08-12",
      monto: 20,
      descripcion: "pasajes",
    };
    gastos.registrarGasto(gastoPasajes);

    const gastoCine = {
      fecha: "2024-05-06",
      monto: 23,
      descripcion: "cine",
    };
    gastos.registrarGasto(gastoCine);

    const gastosRegistrados = gastos.obtenerGastos();
    expect(gastosRegistrados).toEqual([gastoPasajes, gastoCine]);
  });
});
