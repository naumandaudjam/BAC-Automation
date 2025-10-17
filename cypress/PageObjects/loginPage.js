import LOCATORS from "../Locators/loginPage_Locators";

const { login } = LOCATORS;

class Login {
  visitLoginPage() {
    cy.visit(login.pageUrl_Locator);
  }
  changeLanguageToEnglish() {
    cy.get(login.changeLanguage_Locator).click();
  }
  fillLoginForm() {
    cy.fixture("data").then(({ login_username, login_password }) => {
      cy.get(login.userName_Locator).type(login_username);
      cy.get(login.password_Locator).type(login_password);
    });
  }
  submitLogin() {
    cy.get(login.loginButton_Locator).click();
  }
}

export default new Login();
