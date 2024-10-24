import Gastos from "./gastos.js";

describe("Gastos", () => {
  it("registrar un gasto", () => {
    const gastos = new Gastos();
    const registroGasto = {
      fecha: "2024-10-12",
      monto: 45,
      descripcion: "compra de libros",
    };

    gastos.registrarGasto(registroGasto);

    let gastoRegistrado = gastos.obtenerGastos();
    expect(gastoRegistrado).toEqual([registroGasto]);
  });

  it("registrar un gasto en pasajes", () => {
    const gastos = new Gastos();
    const registroGasto = {
      fecha: "2024-08-12",
      monto: 20,
      descripcion: "pasajes",
    };

    gastos.registrarGasto(registroGasto);

    let gastoRegistrado = gastos.obtenerGastos();
    expect(gastoRegistrado).toEqual([registroGasto]);
  });

  it("registrar varios gastos", () => {
    const gastos = new Gastos();
    const  gastoPasajes = {
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

    let gastosRegistrados = gastos.obtenerGastos();
    expect(gastosRegistrados).toEqual([gastoPasajes, gastoCine]);
  });
});
