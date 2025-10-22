import Login from "../../PageObjects/loginPage";
import { baseUrl_Utilities } from "../../support/utilities";

const log = Login;

describe("Login Test Suite", () => {
  before(() => {
    cy.loginWithSession();
  });

  it("Login Test Case", () => {
    cy.visit(baseUrl_Utilities);
    log.homeDashboard();
  });
});
