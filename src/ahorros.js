import Gastos from "./gastos";
import Ingresos from "./ingresos";

class Ahorros {
  constructor() {
    this.ingresos = new Ingresos();
    this.gastos = new Gastos();
  }

  // Registrar un nuevo ingreso
  registrarIngreso(ingreso) {
    this.ingresos.registrarIngreso(ingreso);
  }

  // Registrar un nuevo gasto
  registrarGasto(gasto) {
    this.gastos.registrarGasto(gasto);
  }

  // Calcular el ahorro neto
  calcularAhorroNeto() {
    const totalIngresos = this.ingresos.obtenerIngresos().reduce((total, ingreso) => total + ingreso.monto, 0);
    const totalGastos = this.gastos.obtenerGastos().reduce((total, gasto) => total + gasto.monto, 0);
    return totalIngresos - totalGastos;
  }

  // Obtener lista de ingresos
  obtenerIngresos() {
    return this.ingresos.obtenerIngresos();
  }

  // Obtener lista de gastos
  obtenerGastos() {
    return this.gastos.obtenerGastos();
  }
}

export default Ahorros;
