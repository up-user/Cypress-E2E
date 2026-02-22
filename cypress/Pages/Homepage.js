export class Homepage{
    //weblocaters
    weblocators ={
        search_input: '.form-control.input-lg',
        Search_click: '.btn.btn-default.btn-lg',
        
        addtoCart: "//span[text()='Add to Cart']",
        Successmessage: '.alert.alert-success.alert-dismissible'
    }
    

    //Actions
    searchproduct(productname){
        cy.get(this.weblocators.search_input).clear().type(productname)
        cy.get(this.weblocators.Search_click).click({ multiple: true })

    }
    /*selectProduct(productname){
        cy.contains(this.weblocators.product, productname).click()
    }*/
    addTocart(){
        cy.xpath(this.weblocators.addtoCart).click({force:true})
    }
    verifyproductadded(){
        return cy.get(this.weblocators.Successmessage)
    }

}
