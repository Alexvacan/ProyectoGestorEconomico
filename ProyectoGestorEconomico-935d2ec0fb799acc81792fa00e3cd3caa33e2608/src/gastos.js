class Gastos {
  constructor() {
    this.gastos = [];
  }
  registrarGasto(gasto) {
    this.gastos.push(gasto);
  }
  obtenerGastos() {
    return this.gastos;
  }
}
export default Gastos;
