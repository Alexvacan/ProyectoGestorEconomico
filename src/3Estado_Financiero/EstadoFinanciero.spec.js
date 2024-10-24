import EstadoFinanciero from "./verEstadoFinanciero";

describe("Estado Financiero", () => {
  it("debería mostrar un mensaje si no hay ingresos registrados", () => {
    const estadoFinanciero = new EstadoFinanciero();
    const resultado = estadoFinanciero.verIngresos();
    
    expect(resultado).toEqual("No hay ingresos registrados");
  });
});
