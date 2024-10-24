class Ingresos {
    constructor() {
      this.ingresos = [];
    }
  
    registrarIngreso(ingreso) {
      if (!ingreso.fecha || !ingreso.monto || !ingreso.descripcion) {
        throw new Error("Porfavor llene todos los campos");
      }
      this.ingresos.push(ingreso);
    }
  
    obtenerIngresos() {
      return this.ingresos;
    }
  }
  
  export default Ingresos;
  