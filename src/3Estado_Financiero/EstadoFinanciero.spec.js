const EstadoFinanciero = require('./EstadoFinanciero'); // Asegúrate de importar correctamente

describe('EstadoFinanciero', () => {
  let estadoFinanciero;

  beforeEach(() => {
    estadoFinanciero = new EstadoFinanciero();
  });

  it("debería registrar y ver ingresos", () => {
    estadoFinanciero.registrarIngreso({ fecha: "2024-01-01", monto: 1000, descripcion: "Ingreso 1" });
    expect(estadoFinanciero.ingresos.length).toBe(1);
    expect(estadoFinanciero.ingresos[0].monto).toBe(1000);
  });

  it("debería registrar y ver gastos", () => {
    estadoFinanciero.registrarGasto({ fecha: "2024-01-02", monto: 500, descripcion: "Gasto 1" });
    expect(estadoFinanciero.gastos.length).toBe(1);
    expect(estadoFinanciero.gastos[0].monto).toBe(500);
  });

  it("debería calcular el porcentaje de ingresos gastados", () => {
    estadoFinanciero.registrarIngreso({ fecha: "2024-01-01", monto: 1000, descripcion: "Ingreso 1" });
    estadoFinanciero.registrarGasto({ fecha: "2024-01-02", monto: 500, descripcion: "Gasto 1" });

    const porcentajeGastado = estadoFinanciero.calcularPorcentajeGastado();
    expect(porcentajeGastado).toBe(50); // Ajusta el valor esperado según tu implementación
  });

  it("debería descontar del presupuesto correctamente", () => {
    estadoFinanciero.presupuesto = 1000; // Establece un presupuesto inicial
    estadoFinanciero.descontarDelPresupuesto(300);
    expect(estadoFinanciero.presupuesto).toBe(700);
  });

  it("debería lanzar un error si se intenta descontar más del presupuesto", () => {
    estadoFinanciero.presupuesto = 500; // Establece un presupuesto inicial
    expect(() => estadoFinanciero.descontarDelPresupuesto(600)).toThrow("No se puede descontar más del presupuesto disponible");
  });
});
