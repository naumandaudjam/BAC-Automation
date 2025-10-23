import LOCATORS from "../Locators/loginPage_Locators";
import data from "../fixtures/login_data.json";
import { baseUrl_Utilities, visitIfNotCurrent } from "../support/utilities";

const login = LOCATORS;
const dashboardPath = new URL(baseUrl_Utilities).pathname;

class LoginPage {
  visitLoginPage() 
  {
    visitIfNotCurrent(baseUrl_Utilities);
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
    cy.location("pathname", { timeout: 15000 }).should("eq", dashboardPath);
    cy.get(".client-change", { timeout: 10000 }).should("be.visible");
  }
}

export default new LoginPage();
