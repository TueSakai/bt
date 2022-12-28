let dayChosen = 2
let day
let month = 'May'
let year = '1999'

if(dayChosen == 1){
    day = dayChosen +'st'
}
else if(dayChosen == 2){
    day = dayChosen + 'nd'
}
else if (dayChosen == 3){
    day = dayChosen + 'rd'
}
else {
    day = dayChosen + 'th'
}

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

    putDateOfBirth(){
        return cy.xpath('//input[@id="dateOfBirthInput"]')
    }

    putMonth(){
        return cy.xpath('//select[@class="react-datepicker__month-select"]')
    }
    putYear(){
        return cy.xpath('//select[@class="react-datepicker__year-select"]')
    }
    putDay(){
        return cy.xpath('//div[contains(@aria-label,"'+month+' '+day+', '+year+'")]')
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
    getDateOfBirth(){
        return cy.xpath('//td[text()="Date of Birth"]/following-sibling::td')
    }

}

export default PageDemo