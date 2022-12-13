
describe('Test case search keyword in Google and verify result', () => {
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