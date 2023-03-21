
describe('Locator',function() {

    it('Locator',function() {
     
        cy.visit("https://jpetstore.aspectran.com/catalog/")
        cy.get("h1").check("JPetStore Demo")
        /*cy.get("#username").type("adsaikrishna69@gmail.com")
        cy.get("#password").type("Adsai12@$")
        cy.get("input.form-check-input").check()
        cy.get("#log-in").click()
        cy.get('.btn-primary').click()*/
    })

    
})