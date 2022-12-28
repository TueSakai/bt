
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Date picker', () => {

    beforeEach (() => {
        cy.viewport(1920,1080)
        cy.visit('https://demo.automationtesting.in/Datepicker.html')
    })
    let i=0
    it('DatePicker Enable', () => {
        cy.xpath("//input[@id='datepicker2']").click()
    })


})