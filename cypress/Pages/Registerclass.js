export class Registerclass{

    //weblocators
    weblocator ={
         firstname : '#input-firstname',
         lastname : '#input-lastname',
         email: '#input-email',
         telephone: '#input-telephone',
         password: '#input-password',
         confirmpassword: '#input-confirm',
         policycheckbox: '//input[@type="checkbox"]',
         continuebutton: '.btn.btn-primary'

    }


    //Actions
    openurl(){
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")

    }
    enterfirstname(Fname){
        cy.get(this.weblocator.firstname).type(Fname)
    }


    enterlastname(Lname){
        cy.get(this.weblocator.lastname).type(Lname)
    }
    enteremail(email){
        cy.get(this.weblocator.email).type(email)
    }
    entertelephone(telephone){
        cy.get(this.weblocator.telephone).type(telephone)
    }
    enterpassword(password){
        cy.get(this.weblocator.password).type(password)
    }
    enterconfirmpassword(confirmpassword){
        cy.get(this.weblocator.confirmpassword).type(confirmpassword)
    }
    clickpolicycheckbox(){
        cy.xpath(this.weblocator.policycheckbox).click()
    }
    clickcontinuebutton(){
        cy.get(this.weblocator.continuebutton).click()
    }

}