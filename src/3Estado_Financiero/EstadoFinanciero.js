class EstadoFinanciero {
    constructor() {
      this.ingresos = [];
    }
  
    verIngresos() {
      if (this.ingresos.length === 0) {
        return "No hay ingresos registrados";
      }
      return this.ingresos;
    }
  }
  
  export default EstadoFinanciero;
  