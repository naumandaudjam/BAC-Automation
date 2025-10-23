import Login from "../../PageObjects/loginPage";
import { baseUrl_Utilities } from "../../support/utilities";

const log = Login;

describe("loginSession", () => {
  before(() => {
    cy.loginWithSession();
  });

  it("Successfully Login and Verify Dashboard", () => {
  });
});
