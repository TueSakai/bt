import PageGoogle from "../pageUI/PageGoogle.js";

const pageGoogle = new PageGoogle();
Cypress.Commands.add("CheckKeyword", (value1,value2) => {
    
      //verify result
    
     //have keyword Google
    pageGoogle.getGoogleText().should('include.text',value1);
     // link www.google.com appear
    pageGoogle.getGoogleLink().should('include.text',value2);

})