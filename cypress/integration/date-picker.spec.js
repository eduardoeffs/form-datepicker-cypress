/// <reference types="Cypress" />
import dayjs from "dayjs"

describe('Date Picker Testes', function() {
    beforeEach(function() {
        cy.visit('https://training-wheels-qaninja.herokuapp.com/datepicker')
    })

    it('verificar se está vindo com a data atual', function() {
        cy.get('.datetimepicker-dummy-input')
        .should('have.value', dayjs().format('DD/MM/YYYY'))
    })

    it('limpa o datepicker e traz data atual através do atalho', function() {
        cy.get('.datetimepicker-clear-button').click()
        
        cy.get('.datetimepicker-dummy-wrapper').click()
        cy.contains('button', 'Today').click()
    })
    
    it('coloca a data do meu aniversário', function() {
        cy.get('.datetimepicker-dummy-wrapper').click()
        cy.get('.datepicker-nav-month').click()
        cy.get('[data-month="02"]').click()
        cy.get('[data-date="Sun Feb 19 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)"] > .date-item').click()
    })

    it('coloca o dia atual no mês anterior', function() {
        const date = dayjs().subtract(1, 'month');
        cy.get('.datetimepicker-dummy-input').invoke('val', date.format('DD/MM/YYYY'))
        .should('have.value', date.format('DD/MM/YYYY'))
        
    })
})