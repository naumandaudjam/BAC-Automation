import LOCATORS from "../Locators/login_Page_Locators";
const { login } = LOCATORS;
class Login {
  visitLoginPage() {
    cy.visit(login.pageUrl);
  }
  changeLanguageToEnglish() {
    cy.get(login.changeLanguage).click();
  }
  fillLoginForm() {
    cy.fixture("loginUser").then(({ login_username, login_password }) => {
      cy.get(login.userName).type(login_username);
      cy.get(login.password).type(login_password );
    });
  }
  submitLogin() {
    cy.get(login.loginButton).click();
  }
}
export default new Login();
