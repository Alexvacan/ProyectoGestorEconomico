describe('Prueba de botón "Eliminar Gastos"', () => {
    beforeEach(() => {
      cy.clearLocalStorage();
    });
  
    it("Verifica que se pueda hacer insertar y eliminar el valor de 34", () => {  
      cy.visit("/paginas/IngresoDatosDiarios/PaginaPrincipal.html");
      cy.get('#dato').type(34)
      cy.get('#form-datos-Gastos').within(() => {
          cy.get('button').click();
        });

      cy.get("#dato-a-eliminar").type(34);
      cy.get("#form-eliminar-Gastos").within(() => {
        cy.get("button").click();
      });
      cy.contains("Ingrese aqui para ver los Datos").click();
      cy.url().should("include", "/MostrarDatos/mostrar.html");
    });

    it("Verifica que se pueda hacer insertar y eliminar el valor de 12", () => {
        cy.visit("/paginas/IngresoDatosDiarios/PaginaPrincipal.html");
      cy.get('#dato').type(12)
      cy.get('#form-datos-Gastos').within(() => {
          cy.get('button').click();
        });

      cy.get("#dato-a-eliminar").type(12);
      cy.get("#form-eliminar-Gastos").within(() => {
        cy.get("button").click();
      });
      cy.contains("Ingrese aqui para ver los Datos").click();
      cy.url().should("include", "/MostrarDatos/mostrar.html");
      });


});




