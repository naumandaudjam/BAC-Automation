import Login from "../../PageObjects/Login_Page";
const log = Login;
describe("Login", () => {
  it("Login User", () => {
    log.visitLoginPage();
    log.changeLanguageToEnglish();
    log.fillLoginForm();
    log.submitLogin();
  });
});
