const baseUrl_Utilities = "https://bac-test.xpresspago.com/Home/Index";
const baseUrl_Client_Utilities = "https://bac-test.xpresspago.com/Client/Index";
const baseUrl_Bank_Utilities = "https://bac-test.xpresspago.com//Bank/Index";
const baseUrl_Product_Utilities = "https://bac-test.xpresspago.com//Product/Index";
const baseUrl_addServices_Utilities = "Cycle/Index";
const baseUrl_addServices_Utilities_Success = "https://bac-test.xpresspago.com/Product/Index?PageResponse=Saved";

const randomNum_Utilities = String(Math.floor(Math.random() * 1000)).padStart(3, "0");
const randomPhone_Utilities = `03${Math.floor(100000000 + Math.random() * 900000000)}`;
const randomEmail_Utilities = `user${randomNum_Utilities}@yopmail.com`;
const companyName_Utilities = `Croem${randomNum_Utilities}`;
const serviceName_Utilities = `Service${randomNum_Utilities}`;

const baseOrigin = new URL(baseUrl_Utilities).origin;
const STATIC_ASSET_PATTERNS = [
  `${baseOrigin}/**/*.woff2`,
  `${baseOrigin}/**/*.woff`,
  `${baseOrigin}/**/*.ttf`,
  `${baseOrigin}/**/*.otf`,
  `${baseOrigin}/**/*.png`,
  `${baseOrigin}/**/*.jpg`,
  `${baseOrigin}/**/*.jpeg`,
  `${baseOrigin}/**/*.svg`,
];

const suppressStaticAssets = () => {
  STATIC_ASSET_PATTERNS.forEach((pattern) => {
    cy.intercept("GET", pattern, {
      statusCode: 204,
      headers: { "cache-control": "public, max-age=3600" },
      body: "",
    });
  });
};

const visitIfNotCurrent = (targetUrl) => {
  cy.then(() => {
    const currentWindow = Cypress.state("window");
    const currentHref = currentWindow?.location?.href || null;
    if (currentHref === targetUrl) {
      return;
    }
    return cy.visit(targetUrl);
  });
};

export {
  baseUrl_Utilities,
  randomNum_Utilities,
  randomPhone_Utilities,
  randomEmail_Utilities,
  companyName_Utilities,
  baseUrl_Product_Utilities,
  baseUrl_Client_Utilities,
  baseUrl_addServices_Utilities,
  serviceName_Utilities,
  baseUrl_addServices_Utilities_Success,
  baseUrl_Bank_Utilities,
  suppressStaticAssets,
  visitIfNotCurrent,
};
