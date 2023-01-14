/// <reference types="Cypress" />

describe('Training Wheels | QAninja', function() {
    beforeEach(function() {
        cy.visit('http://training-wheels-qaninja.herokuapp.com/login')
    })

    it('mensagem de erro ao não informar o nickname', function() {
        cy.get('#passId').type('pwd123')
        
        cy.contains('button', 'Login').click()
        cy.get('#flash').should('be.visible')
    })

    it('mensagem de erro ao não informar senha', function() {
        cy.get('#nickId').type('papitorocks')
        
        cy.contains('button', 'Login').click()
        cy.get('#flash').should('be.visible')
    })

    it('login com sucesso', function() {
       cy.successLogin()
       
    })

    it('mensagem de erro ao informar nickname ou senha incorretos', function() {
        cy.get('#nickId').type('papitorocks')
        cy.get('#passId').type('pwd1234')

        cy.contains('button', 'Login').click()
        cy.get('#flash').should('be.visible')
    })

    it('mensagem de erro ao tentar acessar URL de área logada diretamente', function() {
        cy.visit('http://training-wheels-qaninja.herokuapp.com/secure')

        cy.get('#flash').should('be.visible')
    })
})