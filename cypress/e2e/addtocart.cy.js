//import { describe } from "mocha";
import { Homepage} from "../Pages/Homepage";
const homepage = new Homepage()
import testdata from "../fixtures/testdata.json"

describe('Add to cart functionality', () =>{

    before(()=>{
        cy.login(testdata.login.username, testdata.login.password)
    })

     it('should add product to cart successfully', ()=>{
        homepage.searchproduct(testdata.Product.Productname)
    
        
        homepage.addTocart()
        homepage.verifyproductadded().should('contain', testdata.Message.Successmessage)
     })

})
    