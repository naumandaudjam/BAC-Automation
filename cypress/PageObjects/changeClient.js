import LOCATORS from "../Locators/changeClient_Locators";
import { baseUrl_Utilities, visitIfNotCurrent } from "../support/utilities";

const changeClient_Locator = LOCATORS;

class changeClient {
    visitDashboard()
    {
        visitIfNotCurrent(baseUrl_Utilities);
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
    assertCompanyChanged()
    {
        cy.url().should('include', baseUrl_Utilities);
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
