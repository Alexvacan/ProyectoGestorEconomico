import Gastos from "./gastos.js";

describe("Gastos", () => {
  it("registrar un gasto", () => {
    //Given -- arrange
    const gastos = new Gastos();
    const registroGasto = {
      fecha: "2024-10-12",
      monto: 45,
      descripcion: "compra de libros",
    };

    //When -act
    gastos.registrarGasto(registroGasto);

    //Then --assert
    let gastoRegistrado = gastos.obtenerGastos();
    expect(gastoRegistrado).toEqual([registroGasto]);
  });

  it("registrar un gasto en pasajes", () => {
    //Given -- arrange
    const gastos = new Gastos();
    const registroGasto = {
      fecha: "2024-08-12",
      monto: 20,
      descripcion: "pasajes",
    };

    //When -act
    gastos.registrarGasto(registroGasto);

    //Then --assert
    let gastoRegistrado = gastos.obtenerGastos();
    expect(gastoRegistrado).toEqual([registroGasto]);
  });

  it("registrar varios gastos", () => {
    //Given -- arrange
    const gastos = new Gastos();
    const  gastoPasajes = {
      fecha: "2024-08-12",
      monto: 20,
      descripcion: "pasajes",
    };
    gastos.registrarGasto(gastoPasajes);

    //When -act
    const gastoCine = {
      fecha: "2024-05-06",
      monto: 23,
      descripcion: "cine",
    };
    gastos.registrarGasto(gastoCine);

    //Then --assert
    let gastosRegistrados = gastos.obtenerGastos();
    expect(gastosRegistrados).toEqual([gastoPasajes, gastoCine]);
  });
});
