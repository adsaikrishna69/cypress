/// <reference types="Cypress" />

describe("Radio buttons & checkboxes", ()=> {

    /*it("radio button",  ()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of Radio buttons
        cy.get("#female").should('be.visible')
        cy.get("#male").should('be.visible')

        //selecting radio button
        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')


        cy.get("#female").check().should('be.checked')
        cy.get("#male").should('not.be.checked')
    })*/

    it("checkboxes",  ()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visiblity of the element
        //cy.get("#monday").should('be.visible')

        //selecting single checkbox
        //cy.get("#monday").check().should('be.checked')

        //unselecting checkbox
        //cy.get("#monday").uncheck().should('not.be.checked')

        //selecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        //unselecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //selecting first checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
        
    })

})
describe('hii',function(){

    it.skip("radio button",  ()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of Radio buttons
        cy.get("#female").should('be.visible')
        cy.get("#male").should('be.visible')

        //selecting radio button
        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')


        cy.get("#female").check().should('be.checked')
        cy.get("#male").should('not.be.checked')
})
})