import PageLogin from "../support/pageUI/PageLogin";


describe('Register & Login page successfully', () => {
    const pageLogin = new PageLogin();

    function generate_random_string(string_length) {
        let random_string = '';
        let random_ascii;
        for(let i = 0; i < string_length; i++) {
            random_ascii = Math.floor((Math.random() * 25) + 97);
            random_string += String.fromCharCode(random_ascii)
        }
        return random_string
    }

    beforeEach (() => {
        cy.viewport(1920,1080)
        cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F')
    })

    let firstName = "Edwin"
    let lastName = "Smith"
    var random_string = generate_random_string(8)
    let email = random_string+"@let.jc"
    let password = "123456"

    it('Register account', () => {
        pageLogin.getButton("Register").click()

        pageLogin.getRButtonGender().click()

        pageLogin.inputTextbox("FirstName").type(firstName)
        pageLogin.inputTextbox("LastName").type(lastName)

        pageLogin.selectDate("Day").select("9")
        pageLogin.selectDate("Month").select("May")
        pageLogin.selectDate("Year").select("2000")


        pageLogin.inputTextbox("Email").type(email)

        pageLogin.inputTextbox("Password").type(password)
        pageLogin.inputTextbox("ConfirmPassword").type(password)

        pageLogin.getButton("Register").click()

        pageLogin.getResultSuccessfully().should("have.text","Your registration completed")
        pageLogin.getContinueButton().click()
    })

    it('Verify login successfully', () => {
        pageLogin.inputTextbox("Email").type(email)
        pageLogin.inputTextbox("Password").type(password)

        pageLogin.getButton("Log in").click()

        pageLogin.getMyAccount().click()

        pageLogin.inputTextbox("FirstName").should('have.value',firstName)
        pageLogin.inputTextbox("LastName").should('have.value',lastName)
        pageLogin.inputTextbox("Email").should('have.value',email)

    })

})