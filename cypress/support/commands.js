/// <reference types="cypress" />
import LoginPage from "../PageObjects/loginPage"
import { baseUrl_Utilities } from "./utilities";


const loginPage = LoginPage;

const LOGIN_SESSION_KEY = "default-login-session";

const validateLoginSession = () => {
  cy.request({
    url: baseUrl_Utilities,
    failOnStatusCode: false,
    followRedirect: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
};

Cypress.Commands.add("loginWithSession", () => {
  cy.session(
    LOGIN_SESSION_KEY,
    () => {
      loginPage.visitLoginPage();
      loginPage.changeLanguageToEnglish();
      loginPage.fillLoginForm();
      loginPage.submitLogin();
    },
    {
      cacheAcrossSpecs: true,
    }
  );
});

const shouldAutoLogin = () => {
  const specName = (Cypress.spec?.name || "").toLowerCase();
  return specName !== "" && !specName.includes("login");
};

beforeEach(() => {
  if (shouldAutoLogin()) {
    cy.loginWithSession();
  }
});
