import Ahorros from "./ahorros.js";

describe("Ahorros", () => {
  it("debería registrar un ahorro", () => {
    // Given - arrange
    const ahorros = new Ahorros();

    // When - act
    ahorros.registrarAhorro("");

    // Then - assert
    let ahorroRegistrado = ahorros.obtenerAhorros();
    expect(ahorroRegistrado).toEqual();
  });
});
