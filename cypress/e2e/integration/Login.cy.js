import Login from "../../PageObjects/loginPage";
const log = Login;
describe("Login", () => {
  it("Login User", () => {
    log.visitLoginPage();
    log.changeLanguageToEnglish();
    log.fillLoginForm();
    log.submitLogin();
  });
});
