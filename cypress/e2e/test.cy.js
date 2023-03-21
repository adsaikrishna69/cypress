describe('Test', function() {

    it('positive', function() {
      cy.visit("https://jpetstore.aspectran.com/catalog/")
      cy.title().should('eq','JPetStore Demo')
    })

    it('negative', function() {
        cy.visit("https://jpetstore.aspectran.com/catalog/")
        cy.title().should('eq','petstore')
      })

  })