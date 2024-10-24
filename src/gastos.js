class Gastos {
  constructor() {
    this.gastos = [];
  }

  registrarGasto(gasto) {
    this.validarGasto(gasto);
    this.gastos.push(gasto);
  }

  validarGasto(gasto) {
    if (!gasto.fecha || !gasto.monto || !gasto.descripcion) {
      throw new Error("Porfavor llene todos los campos");
    }
  }

  obtenerGastos() {
    return this.gastos;
  }
}

export default Gastos;
