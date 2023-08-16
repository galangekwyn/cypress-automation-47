describe('My First Test', () => {
    it('Get commands querying',()=>{
        cy.visit('https://example.cypress.io')
        cy.contains('Kitchen Sink')
        cy.contains('get').click()
        cy.contains('Querying')
    })

    it('Success Input Email', () => {
        cy.contains('Kitchen Sink')
        cy.contains('type').click()
        cy.get('#email1')
             .type('fakeemail@gmail.com')    
             .should('have.value','fakeemail@gmail.com')  
    })
})