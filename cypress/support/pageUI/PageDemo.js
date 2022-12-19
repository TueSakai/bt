class PageDemo {

    putFirstName() {
        return cy.xpath('//input[@id="firstName"]')
    }

    putLastName(){
        return cy.xpath('//input[@id="lastName"]')
    }

    putGender(){
        return cy.xpath('//label[@for="gender-radio-1"]')
    }

    putContactNumber(){
        return cy.xpath('//input[@id="userNumber"]')
    }

    getSubmitButton(){
        return cy.xpath('//button[@id="submit"]')
    }

    getTitle(){
        return cy.xpath('//div[text()="Thanks for submitting the form"]')
    }

    getStudentName(){
        return cy.xpath('//td[text()="Student Name"]/following-sibling::td')
    }
    getGenderText(){
        return cy.xpath('//td[text()="Gender"]/following-sibling::td')
    }
    getContactNumber(){
        return cy.xpath('//td[text()="Mobile"]/following-sibling::td')
    }

}

export default PageDemo