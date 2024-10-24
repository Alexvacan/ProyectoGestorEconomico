import Ingresos from "./ingresos";

describe("Ingresos", () => {
    it("debería registrar varios ingresos correctamente", () => {
        const ingresos = new Ingresos();
        
        const ingresoSalario = {
          fecha: "2024-10-15", monto: 1850, descripcion: "salario",
        };
        ingresos.registrarIngreso(ingresoSalario);
        
        const ingresoBono = {
          fecha: "2024-10-20", monto: 500, descripcion: "bono de desempeño",
        };
        
        ingresos.registrarIngreso(ingresoBono);
      
        const ingresosRegistrados = ingresos.obtenerIngresos();
        expect(ingresosRegistrados).toEqual([ingresoSalario, ingresoBono]);
    });


    it("debería lanzar un error si el monto es negativo", () => {
        const ingresos = new Ingresos();
        const ingresoInvalido = { 
            fecha: "2024-10-25", 
            monto: -200, 
            descripcion: "pérdida de inversión",
        };
    
        expect(() => ingresos.registrarIngreso(ingresoInvalido)).toThrow("El monto debe ser mayor que 0");
    });
    
});
