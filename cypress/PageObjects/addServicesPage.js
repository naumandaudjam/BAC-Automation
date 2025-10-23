import LOCATORS from "../Locators/addServices_Locators";
import {
  baseUrl_Product_Utilities,
  baseUrl_addServices_Utilities,
  baseUrl_addServices_Utilities_Success,
  serviceName_Utilities,
  visitIfNotCurrent,
} from "../support/utilities";

const addServices = LOCATORS;

class addServicesPage {
    tapMenuServices()
    {
        cy.visit(baseUrl_Product_Utilities);
    }
    tapOnAddServices()
    {
        cy.get(addServices.addServiceBtn_Locator).click();
    }
    addServiceFromVisibility_Assertion()
    {
        cy.url().should('include', baseUrl_addServices_Utilities);
    }
    addProductName()
    {
        cy.get(addServices.addProductName_Locator).type(serviceName_Utilities);
    }
    addCurrency()
    {
        cy.get(addServices.dropDown_Currency_Locator).select("US Dollar - USD");
    }
    addAmount()
    {
        cy.get(addServices.addAmount_Locator).clear().type('5000');
    }
    createService()
    {
        cy.get(addServices.createServices_Locator).click();        
    }
    assertCompanyCreated()
    {
        cy.url().should('include', baseUrl_addServices_Utilities_Success);
    }
}

export default new addServicesPage();
