Cypress.Commands.add('successLogin', function() {
    cy.get('#nickId').type('papitorocks')
    cy.get('#passId').type('pwd123')

    cy.contains('button', 'Login').click()
})
