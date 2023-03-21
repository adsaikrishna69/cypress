describe('Assetions',function(){

    it('implicit',function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // Should  and
    
    
    /*cy.url().should('include','orange')
    cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should('contain','orangehrm')*/

    
    
    /*cy.url().should('include','orange')
    .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .should('contain','orangehrm')*/


    cy.url().should('include','orange')
    .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .and('contain','orangehrm')
    .and('not.contain','greenhrm')

    cy.title().should('include','Orange')
    .and('eq','OrangeHRM')
    .and('contain','HRM')


    cy.get('.orangehrm-login-branding > img').should('be.visible')  //logo visible or not
    .and('exist')

    cy.xpath("//a").should('have.length','5')       // no of links
     
    cy.get("input[placeholder='Username']").type("Admin")  //provide a value into inputbox
    cy.get("input[placeholder='Username']").should('have.value','Admin')
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()
    cy.xpath("//h6[normalize-space()='Dashboard']").should('exist','Dashboard')


    })

    it('implicit',function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        
    })
})