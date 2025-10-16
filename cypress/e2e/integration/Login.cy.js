import Login from "../../PageObjects/loginPage";
const log = Login;
describe("Login Test Suite", () => {
  it("Login Test Case", () => {
    log.visitLoginPage();
    log.changeLanguageToEnglish();
    log.fillLoginForm();
    log.submitLogin();
  });
});