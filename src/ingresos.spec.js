import Ingresos from "./ingresos";

describe("Ingresos", () => {
    it("debería lanzar un error si falta un campo", () => {
        const ingresos = new Ingresos();
        const ingresoInvalido = { }; // Solo monto
      
        expect(() => ingresos.registrarIngreso(ingresoInvalido)).toThrowError(new Error("Porfavor llene todos los campos"));
      });
});

