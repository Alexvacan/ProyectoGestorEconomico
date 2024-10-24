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
}
  export default EstadoFinanciero;
  