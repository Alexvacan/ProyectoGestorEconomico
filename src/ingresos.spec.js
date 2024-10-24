import Ingresos from "./ingresos";

describe("Ingresos", () => {
    it("debería registrar varios ingresos correctamente", () => {
        const ingresos = new Ingresos();
        
        const ingresoSalario = {
          fecha: "2024-10-15", monto: 1850,
          descripcion: "salario",
        };
        ingresos.registrarIngreso(ingresoSalario);
        
        const ingresoBono = {
          fecha: "2024-10-20",
          monto: 500,
          descripcion: "bono de desempeño",
        };
        ingresos.registrarIngreso(ingresoBono);
      
        const ingresosRegistrados = ingresos.obtenerIngresos();
        expect(ingresosRegistrados).toEqual([ingresoSalario, ingresoBono]);
      });
      
});
