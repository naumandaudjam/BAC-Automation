import LOCATORS from "../Locators/loginPage_Locators";
import data from "../fixtures/login_data.json";
import {baseUrl_Utilities } from "../support/utilities";

const login = LOCATORS;

class LoginPage {
  visitLoginPage() 
  {
    cy.visit(baseUrl_Utilities);
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
  assertDashboardLoaded()
  {
        cy.url().should('include', baseUrl_Utilities);
  }
}

export default new LoginPage();
