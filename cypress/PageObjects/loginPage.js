import LOCATORS from "../Locators/loginPage_Locators";
import data from "../fixtures/login_data.json";

const login = LOCATORS;

class Login {
  visitLoginPage() 
  {
    cy.visit(login.pageUrl_Locator);
  }
  changeLanguageToEnglish() 
  {
    cy.get(login.changeLanguage_Locator).click();
  }
  fillLoginForm() 
  {
    cy.get(login.userName_Locator).type(data.login_username);
    cy.get(login.password_Locator).type(data.login_password);
  }
  submitLogin() 
  {
    cy.get(login.loginButton_Locator).click();
  }
}

export default new Login();
