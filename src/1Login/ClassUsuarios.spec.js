import Ususarios from "./ClassUsuarios";
describe("Datos", () => {
  it("optener datos de ususario", () => {
    const usuario = new Ususarios();

    usuario.registrarNombre("Jhessa");
    usuario.registrarContrasenia("123Jhessa");

    let nombreRegistrado = usuario.obtenerNombre();
    expect(nombreRegistrado).toEqual("Jhessa");
    let contraseniaRegistrado = usuario.obtenerContrasenia();
    expect(contraseniaRegistrado).toEqual("123Jhessa");
  });
});
