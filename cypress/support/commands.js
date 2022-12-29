
import "cypress-file-upload";
import PageGoogle from "./pageUI/PageGoogle.js";
const pageGoogle = new PageGoogle();
Cypress.Commands.add("CheckKeyword", (value) => {
    
    //check keyword Google
    pageGoogle.getGoogleText().should('include.text',value);
})
Cypress.Commands.add("CheckLink", (value) => {
    
    //check link 
    pageGoogle.getGoogleLink().should('include.text',value);

})
Cypress.Commands.add("searchKeyword", (value) => {
    
    //check link 
    pageGoogle.getGoogleSearch().should('be.empty').type(value+'{enter}');

})
