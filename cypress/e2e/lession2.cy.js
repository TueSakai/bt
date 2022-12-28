import PageDemo from "../support/pageUI/PageDemo.js";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Submit form and verify successfully submition', () => {
    let firstName = "Edwin"
    let lastName = "Smith"
    let contactNumber = "0123456789"
    let dayChosen = 2
    let day
    let month = 'May'
    let year = '1999'

    const pageDemo = new PageDemo();

    beforeEach (() => {
        cy.viewport(1920, 1080);
        cy.visit('https://demoqa.com/automation-practice-form');
            
    })
    it('Fill form, submit & verify', () => {

        pageDemo.putFirstName().type(firstName);
        pageDemo.putLastName().type(lastName);
        pageDemo.putGender().click();

        pageDemo.putDateOfBirth().click();
        pageDemo.putMonth().select(pageDemo.month);
        pageDemo.putYear().select(pageDemo.year);
        pageDemo.putDay().click();

        pageDemo.putContactNumber().type(contactNumber)
        pageDemo.getSubmitButton().click()

        pageDemo.getTitle().should('include.text',"Thanks for submitting the form")
        pageDemo.getStudentName().should('include.text',firstName +' '+ lastName)
        if(day > 10){
            pageDemo.getDateOfBirth().should('have.text',pageDemo.dayChosen+' '+pageDemo.month+','+pageDemo.year)
        }
        else
        {
            pageDemo.getDateOfBirth().should('have.text','0'+pageDemo.dayChosen+' '+pageDemo.month+','+pageDemo.year)
        }
        pageDemo.getGenderText().should('include.text',"Male")
        pageDemo.getContactNumber().should('include.text',contactNumber)
    })


})