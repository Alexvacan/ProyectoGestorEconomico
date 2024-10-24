class EstadoFinanciero {
    constructor() {
        this.ingresos = [];
        this.gastos = [];
        this.presupuesto = 0; 
    }

    registrarIngreso(ingreso) {
        if (!ingreso.fecha || !ingreso.monto || !ingreso.descripcion) {
            throw new Error("Por favor llene todos los campos");
        }
        this.ingresos.push(ingreso);
        this.presupuesto += ingreso.monto; 
    }

    registrarGasto(gasto) {
        if (!gasto.fecha || !gasto.monto || !gasto.descripcion) {
            throw new Error("Por favor llene todos los campos");
        }
        this.gastos.push(gasto);
        this.presupuesto -= gasto.monto; 
    }

    calcularPorcentajeGastado() {
        const totalIngresos = this.ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);
        const totalGastos = this.gastos.reduce((total, gasto) => total + gasto.monto, 0);
        return totalIngresos > 0 ? (totalGastos / totalIngresos) * 100 : 0; 
    }

    descontarDelPresupuesto(monto) {
        if (monto > this.presupuesto) {
            throw new Error("No se puede descontar más del presupuesto disponible");
        }
        this.presupuesto -= monto; 
    }
}

module.exports = EstadoFinanciero;
