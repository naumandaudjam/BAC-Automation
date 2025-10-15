import Login from "../PageObjects/Login_Page";

/// <reference types="cypress" />

const SESSION_KEY_PREFIX = "default-login-session";

const buildSessionKey = () => {
  const specName = (Cypress.spec?.name || "global").toLowerCase();
  const sanitized = specName.replace(/[^a-z0-9]+/g, "-");
  return `${SESSION_KEY_PREFIX}-${sanitized}`.replace(/-$/g, "");
};

Cypress.Commands.add("loginWithSession", () => {
  const sessionKey = buildSessionKey();
  cy.session(
    sessionKey,
    () => {
      Login.visitLoginPage();
      Login.changeLanguageToEnglish();
      Login.fillLoginForm();
      Login.submitLogin();
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
