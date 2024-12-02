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

      it("Verifica que se pueda hacer insertar y eliminar los valores de 12,23,43", () => {
            cy.visit("/paginas/IngresoDatosDiarios/PaginaPrincipal.html");
            cy.get('#dato').type(12)
            cy.get('#form-datos-Gastos').within(() => {
                cy.get('button').click();
                });
            cy.get('#dato').clear()
            
            cy.get('#dato').type(23)
            cy.get('#form-datos-Gastos').within(() => {
                cy.get('button').click();
                });
            cy.get('#dato').clear()

            cy.get('#dato').type(43)
            cy.get('#form-datos-Gastos').within(() => {
                cy.get('button').click();
                });
            cy.get('#dato').clear()
            
            
            cy.get("#dato-a-eliminar").type(12);
            cy.get("#form-eliminar-Gastos").within(() => {
                cy.get("button").click();
            });
            cy.get("#dato-a-eliminar").clear();
            
            cy.get("#dato-a-eliminar").type(23);
            cy.get("#form-eliminar-Gastos").within(() => {
                cy.get("button").click();
            });
            cy.get("#dato-a-eliminar").clear();
            
            cy.get("#dato-a-eliminar").type(43);
            cy.get("#form-eliminar-Gastos").within(() => {
                cy.get("button").click();
            });
            cy.get("#dato-a-eliminar").clear();
            

            cy.contains("Ingrese aqui para ver los Datos").click();
            cy.url().should("include", "/MostrarDatos/mostrar.html");
        });
});









describe('Prueba de botón "Eliminar Ingresos"', () => {
    beforeEach(() => {
      cy.clearLocalStorage();
    });
  
    it("Verifica que se pueda hacer insertar y eliminar el valor de 34", () => {  
      cy.visit("/paginas/IngresoDatosDiarios/PaginaPrincipal.html");
      cy.get('#dato-Ingresos').type(34)
        cy.get('#form-datos-Ingresos').within(() => {
            cy.get('button').click();
          });

      cy.get("#dato-a-eliminar-Ingresos").type(34);
      cy.get("#form-eliminar-Ingresos").within(() => {
        cy.get("button").click();
      });
      cy.contains("Ingrese aqui para ver los Datos").click();
      cy.url().should("include", "/MostrarDatos/mostrar.html");
    });

    it("Verifica que se pueda hacer insertar y eliminar el valor de 12", () => {
        cy.visit("/paginas/IngresoDatosDiarios/PaginaPrincipal.html");
        cy.get('#dato-Ingresos').type(12)
        cy.get('#form-datos-Ingresos').within(() => {
            cy.get('button').click();
          });

        cy.get("#dato-a-eliminar-Ingresos").type(12);
        cy.get("#form-eliminar-Ingresos").within(() => {
            cy.get("button").click();
        });
        cy.contains("Ingrese aqui para ver los Datos").click();
        cy.url().should("include", "/MostrarDatos/mostrar.html");
      });

      it("Verifica que se pueda hacer insertar y eliminar los valores de 12,23,43", () => {
            cy.visit("/paginas/IngresoDatosDiarios/PaginaPrincipal.html");
            cy.get('#dato-Ingresos').type(12)
            cy.get('#form-datos-Ingresos').within(() => {
                cy.get('button').click();
            });
            cy.get('#dato-Ingresos').clear()
            
            cy.get('#dato-Ingresos').type(23)
            cy.get('#form-datos-Ingresos').within(() => {
                cy.get('button').click();
            });
            cy.get('#dato-Ingresos').clear()
            
            cy.get('#dato-Ingresos').type(43)
            cy.get('#form-datos-Ingresos').within(() => {
                cy.get('button').click();
            });
            cy.get('#dato-Ingresos').clear()
            
            
            cy.get("#dato-a-eliminar-Ingresos").type(12);
            cy.get("#form-eliminar-Ingresos").within(() => {
                cy.get("button").click();
            });
            cy.get("#dato-a-eliminar-Ingresos").clear();
            
            cy.get("#dato-a-eliminar-Ingresos").type(23);
            cy.get("#form-eliminar-Ingresos").within(() => {
                cy.get("button").click();
            });
            cy.get("#dato-a-eliminar-Ingresos").clear();
            
            cy.get("#dato-a-eliminar-Ingresos").type(43);
            cy.get("#form-eliminar-Ingresos").within(() => {
                cy.get("button").click();
            });
            cy.get("#dato-a-eliminar-Ingresos").clear();
            

            cy.contains("Ingrese aqui para ver los Datos").click();
            cy.url().should("include", "/MostrarDatos/mostrar.html");
        });
});
