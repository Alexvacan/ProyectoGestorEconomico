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
  it("Segunda prueba para los datos de usuario", () => {
    const usuario = new Ususarios();

    usuario.registrarNombre("Alex");
    usuario.registrarContrasenia("1234512");

    let nombreRegistrado = usuario.obtenerNombre();
    expect(nombreRegistrado).toEqual("Alex");
    let contraseniaRegistrado = usuario.obtenerContrasenia();
    expect(contraseniaRegistrado).toEqual("1234512");
  });
});
