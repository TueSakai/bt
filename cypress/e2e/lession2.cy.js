import PageDemo from "../support/pageUI/PageDemo.js";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Submit form and verify successfully submition', () => {
    let firstName = "Edwin"
    let lastName = "Smith"
    let contactNumber = "0123456789"

    const pageDemo = new PageDemo();

    beforeEach (() => {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/automation-practice-form')
    })
    it('Fill form, submit & verify', () => {

        pageDemo.putFirstName().type(firstName)
        pageDemo.putLastName().type(lastName)
        pageDemo.putGender().click()
        pageDemo.putContactNumber().type(contactNumber)
        pageDemo.getSubmitButton().click()

        pageDemo.getTitle().should('include.text',"Thanks for submitting the form")
        pageDemo.getStudentName().should('include.text',firstName +' '+ lastName)
        pageDemo.getGenderText().should('include.text',"Male")
        pageDemo.getContactNumber().should('include.text',contactNumber)
    })
})