import LOCATORS from "../Locators/addServices_Locators";
import { baseUrl_Product_Utilities } from "../support/utilities";
import { baseUrl_addServices_Utilities } from "../support/utilities";
import { serviceName_Utilities } from "../support/utilities";

const add_Services_Locators = LOCATORS;

class addServices {
    menuServices()
    {
        cy.visit(baseUrl_Product_Utilities);
    }
    tapOnAddServices()
    {
        cy.get(add_Services_Locators.addServiceBtn_Locator).click();
    }
    addServiceFromVisibility_Assertion()
    {
        cy.url().should('include', baseUrl_addServices_Utilities);
    }
    addProductName()
    {
        cy.get(add_Services_Locators.addProductName_Locator).type(serviceName_Utilities);
    }
    addCurrency()
    {
        cy.get(add_Services_Locators.dropDown_Currency_Locator).select("US Dollar - USD");
    }
    addAmount()
    {
        cy.get(add_Services_Locators.addAmount_Locator).clear().type('5000');
    }
    createService()
    {

        cy.get(add_Services_Locators.createServices_Locator).click();
        cy.wait(10000);
        
    }
}

export default new addServices();
