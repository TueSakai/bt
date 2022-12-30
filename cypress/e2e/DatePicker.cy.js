import PageDatePicker from "../support/pageUI/PageDatePicker"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Date picker', () => {
    const pageDatePicker = new PageDatePicker()
    let year = 2017
    let month = 3
    let day = 1
    let yearNow = new Date().getFullYear()
    beforeEach (() => {
        cy.viewport(1920,1080)
        cy.visit('https://demo.automationtesting.in/Datepicker.html')
    })

    it('DatePicker Enable', () => {
        pageDatePicker.getCalendar("2").click()
        pageDatePicker.changeDate("month").select("May")

        pageDatePicker.changeDate("year").select("▲")
        pageDatePicker.changeDate("year").select("1999")
        pageDatePicker.changeDay("4").click()
        cy.wait(3000)
    })

    it('DatePicker Disable', () => {
        pageDatePicker.getCalendar("1").click()

        if (year > yearNow) {
            for (var i = 0; i < 12*(year-yearNow-1)+(month); i++) {
                pageDatePicker.nextButton().click()
                }
        }
        else {
            for (var i = 0; i < 12*(yearNow-year)+(12-month); i++) {
            pageDatePicker.previousButton().click()
            }
        }
        pageDatePicker.changeDay2(day).click()
    })

    it('DatePicker Enable input date', () => {
        pageDatePicker.getCalendar("2").type("5/29/2021{enter}")
    })

})