describe('Prueba de botón "Ingresar Ingresos"', () => {
        let dia;
        let mes;
        let anio;
        let hora;
        let minuto;
        let fechaMesDiaActual;
        let horaActual;
    beforeEach(()=>{
        const fechaActual = new Date();
        dia = fechaActual.getDate();
        mes = fechaActual.getMonth() + 1;
        anio = fechaActual.getFullYear();
        hora = fechaActual.getHours();
        minuto = fechaActual.getMinutes();
        fechaMesDiaActual = anio.toString() + "-" + mes.toString() + "-" + dia.toString();
        horaActual = hora.toString() + ":" + minuto.toString();
        cy.clearLocalStorage()
    })

    it('Verifica que se pueda hacer insertar el valor de 34', () => {
        cy.visit("/paginas/IngresoDatosDiarios/PaginaPrincipal.html")
        cy.get('#dato-Ingresos').type(34)
        cy.get('#form-datos-Ingresos').within(() => {
            cy.get('button').click();
          });
        cy.contains('Ingrese aqui para ver los Datos').click();
        cy.url().should('include', '/MostrarDatos/mostrar.html');

    });

    it('Verifica que se pueda hacer insertar el valor de 12', () => {
        cy.visit("/paginas/IngresoDatosDiarios/PaginaPrincipal.html")
        cy.get('#dato-Ingresos').type(12)
        cy.get('#form-datos-Ingresos').within(() => {
            cy.get('button').click();
          });
        cy.contains('Ingrese aqui para ver los Datos').click();
        cy.url().should('include', '/MostrarDatos/mostrar.html');
    });
    
    it('Verifica que se pueda hacer insertar los valores de 12,23,43', () => {
        cy.visit("/paginas/IngresoDatosDiarios/PaginaPrincipal.html")
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
        cy.contains('Ingrese aqui para ver los Datos').click();
        cy.url().should('include', '/MostrarDatos/mostrar.html');
    });
  });





  describe('Prueba de botón "Ingresar Gastos"', () => {
    beforeEach(()=>{
        cy.clearLocalStorage()
    })
    it('Verifica que se pueda hacer insertar el valor de 34', () => {
        cy.visit("/paginas/IngresoDatosDiarios/PaginaPrincipal.html")
        cy.get('#dato').type(34)
        cy.get('#form-datos-Gastos').within(() => {
            cy.get('button').click();
          });
        cy.contains('Ingrese aqui para ver los Datos').click();
        cy.url().should('include', '/MostrarDatos/mostrar.html');
    });
    it('Verifica que se pueda hacer insertar el valor de 12', () => {
        cy.visit("/paginas/IngresoDatosDiarios/PaginaPrincipal.html")
        cy.get('#dato').type(12)
        cy.get('#form-datos-Gastos').within(() => {
            cy.get('button').click();
          });
        cy.contains('Ingrese aqui para ver los Datos').click();
        cy.url().should('include', '/MostrarDatos/mostrar.html');
    });
    it('Verifica que se pueda hacer insertar los valores de 12,23,43', () => {
        cy.visit("/paginas/IngresoDatosDiarios/PaginaPrincipal.html")
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
        cy.contains('Ingrese aqui para ver los Datos').click();
        cy.url().should('include', '/MostrarDatos/mostrar.html');
    });
  });
  
