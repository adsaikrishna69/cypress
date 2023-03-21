/// <reference types="Cypress" />
describe('dropdown',  function(){

    it('dropdown', function(){
    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    cy.get("#zcf_address_country").select('India')
    .should('have.value','India')
})
})