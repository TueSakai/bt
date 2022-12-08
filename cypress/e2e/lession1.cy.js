describe('Test case search keyword in Google and verify result', () => {
    beforeEach (() => {
        cy.visit('https://www.google.com')
    })

    it('TC01 - Search an random keyword (Google)', () => {
        
        cy.get('input[name="q"]').should('be.empty').type('google{enter}');
        //verify result
        cy.get('h3').should('include.text',"Google");
        cy.get('cite').should('include.text',"www.google.com.vn");
        
    })
})