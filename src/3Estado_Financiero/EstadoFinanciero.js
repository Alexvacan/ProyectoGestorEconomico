class EstadoFinanciero {
    constructor() {
      this.ingresos = [];
      this.gastos = [];
      this.presupuesto = 1000; 
    }
  
    verIngresos() {
      return this.ingresos;
    }
  
    verGastos() {
      return this.gastos;
    }
  
    verPresupuesto() {
      return this.presupuesto;
    }
  
    porcentajeIngresosGastados() {
      const totalGastos = this.gastos.reduce((acc, gasto) => acc + gasto.monto, 0);
      const totalIngresos = this.ingresos.reduce((acc, ingreso) => acc + ingreso.monto, 0);
      return totalIngresos ? (totalGastos / totalIngresos) * 100 : 0;
    }
  
    descontarDelPresupuesto(ingreso) {
      this.presupuesto -= ingreso.monto; 
    }
  }
  
  export default EstadoFinanciero;
  