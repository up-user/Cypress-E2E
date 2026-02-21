import { Registerclass } from "../Pages/Registerclass"
import registerdata from '../fixtures/registerpage.json'
describe('Reguster Page', ()=>{
 
    it('verifies the register page', ()=>{
const register = new Registerclass();
register.openurl();
register.enterfirstname(registerdata.firstname);
register.enterlastname(registerdata.Lastname);
register.enteremail(registerdata.Email);
register.entertelephone(registerdata.Telephone);
register.enterpassword(registerdata.Password);
register.enterconfirmpassword(registerdata.Password);
register.clickpolicycheckbox();
register.clickcontinuebutton();

})










})