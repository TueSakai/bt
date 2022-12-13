import PageGoogle from "../support/pageUI/PageGoogle.js";


describe('Test case search keyword in Google and verify result', () => {
    const pageGoogle = new PageGoogle();
    beforeEach (() => {
        cy.visit('https://www.google.com')
    })

    it('Search an random keyword (Google)', () => {
        //enter google on search  
        cy.searchKeyword('google');

        //check keyword
        cy.CheckKeyword('Google');
        cy.CheckLink('google.com.vn');
        
    })
})