class PageGoogle {

    getGoogleSearch() {
        return cy.xpath('//input[@name="q"]');
    }

    getGoogleText(){
        return cy.xpath('//h3[text()="Google"]');
    }

    getGoogleLink(){
        return cy.xpath('//cite[text()="https://www.google.com.vn"]');
    }

}

export default PageGoogle