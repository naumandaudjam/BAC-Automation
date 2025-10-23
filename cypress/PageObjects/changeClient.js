import LOCATORS from "../Locators/changeClient_Locators";
import {baseUrl_Utilities } from "../support/utilities";

const changeClient_Locator = LOCATORS;

class changeClient {
    visitDashboard()
    {
        cy.visit("/")
    }
    tapChangeClient()
    {
        cy.get(changeClient_Locator.changeClient_btn_Locator).click();
    }
    searchCompany() {
        cy.fixture("companyGenerated.json").then((companyGenerated) => {
            cy.get(changeClient_Locator.searchCompany_Locator).type(companyGenerated.companyName);
        });
    }
    selectCompany()
    {
        cy.get(changeClient_Locator.selectCompany_Locator).click();
    }
    switchToTargetClient()
    {
        this.visitDashboard();
        this.tapChangeClient();
        this.searchCompany();
        this.selectCompany();
    }
}

export default new (changeClient);
