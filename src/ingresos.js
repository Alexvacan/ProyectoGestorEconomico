class Ingresos {
    constructor() {
        this.ingresos = [];
    }

    registrarIngreso(ingreso) {
        this.validarIngreso(ingreso);
        this.ingresos.push(ingreso);
    }

    modificarIngreso(index, camposActualizados) {
        let ingreso = this.ingresos[index];
        if (!ingreso) {
            throw new Error("Ingreso no encontrado");
        }
        if (camposActualizados.monto <= 0) {
            throw new Error("El monto debe ser mayor que 0");
        }
        this.ingresos[index] = { ...ingreso, ...camposActualizados };
    }

    validarIngreso(ingreso) {
        if (!ingreso.fecha || !ingreso.monto || !ingreso.descripcion) {
            throw new Error("Porfavor llene todos los campos");
        }
        if (ingreso.monto <= 0) {
            throw new Error("El monto debe ser mayor que 0");
        }
    }

    obtenerIngresos() {
        return this.ingresos;
    }
}
