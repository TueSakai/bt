class PageDatePicker {
    getCalendar(value){
        return cy.xpath("//input[@id='datepicker"+value+"']")
    }
    changeDate(value){
        return cy.xpath("//select[@title='Change the "+value+"']")
    }
    changeDay(value){
        return cy.xpath("//a[text()='"+value+"']")
    }
    
    nextButton(){
        return cy.xpath("//span[text()='Next']")
    }

    previousButton(){
        return cy.xpath("//span[text()='Prev']")
    }

    changeDay2(value){
        return cy.xpath("//td[@data-handler='selectDay']/a[text()='"+value+"']")
    }

}

export default PageDatePicker