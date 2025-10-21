import LOCATORS from "../Locators/searchCompany_Locators";
import { baseUrl_Client_Utilities } from "../support/utilities.js";

const searchCompanyForm = LOCATORS;

class search_Company_Page {
    visitSearchCompanyForm() 
    {
        cy.visit(baseUrl_Client_Utilities);
    }
    searchCompanyName()
    {
        cy.fixture("companyGenerated.json").then((companyGenerated) => {
            cy.get(searchCompanyForm.companyName_Locator).type(companyGenerated.companyName);
        });
    }
    searchBtn()
    {
        cy.get(searchCompanyForm.searchBtn_Locator).click();
    }
    searchCompanyAssertion()
    {
        cy.fixture("companyGenerated.json").then((companyGenerated) => {
            cy.get(searchCompanyForm.searchCompanyResult).should("have.text", companyGenerated.companyName);
        });
    }
}

export default new search_Company_Page();
