class Ingresos {
    constructor() {
        this.ingresos = [];
    }

    registrarIngreso(ingreso) {
        if (!ingreso.fecha || !ingreso.monto || !ingreso.descripcion) {
            throw new Error("Porfavor llene todos los campos");
        }
        if (ingreso.monto <= 0) { // Validación para montos negativos
            throw new Error("El monto debe ser mayor que 0");
        }
        this.ingresos.push(ingreso);
    }

    obtenerIngresos() {
        return this.ingresos;
    }
}

export default Ingresos;
