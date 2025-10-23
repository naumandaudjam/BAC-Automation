import LOCATORS from "../Locators/loginPage_Locators";
import data from "../fixtures/login_data.json";
const login = LOCATORS;

class LoginPage {
  visitLoginPage() 
  {
    cy.visit("/");
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
  assertDashboardLoaded() {
    cy.url().should('not.include', "/Login");
  }
}

export default new LoginPage();
