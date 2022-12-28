class PageLogin {

    getButton(value) {
        return cy.xpath("//button[text()='"+value+"']")
    }

    getRButtonGender(){
        return cy.xpath("//input[@id='gender-male']")
    }

    inputTextbox(value){
        return cy.xpath("//input[@id='"+value+"']")
    }
    selectDate(value){
        return cy.xpath("//select[@name='DateOfBirth"+value+"']")
    }
    getResultSuccessfully(){
        return cy.xpath("//div[@class='result']")
    }
    getMyAccount(){
        return cy.xpath("//a[text()='Log out']//ancestor::ul//a[text()='My account']")
    }
    getContinueButton(){
        return cy.xpath("//a[text()='Continue']")
    }
}

export default PageLogin