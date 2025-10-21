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
            cy.get(searchCompanyForm.companyName_Locator)
                .clear()
                .type(companyGenerated.companyName);
        });
    }
    searchBtn()
    {
        cy.get(searchCompanyForm.searchBtn_Locator).click();
    }
    searchCompanyAssertion()
    {
        cy.fixture("companyGenerated.json").then((companyGenerated) => {
            cy.contains(searchCompanyForm.searchCompanyResult, companyGenerated.companyName, {
                timeout: 15000,
            })
                .should("be.visible")
                .invoke("text")
                .then((text) => {
                    expect(text.trim()).to.eq(companyGenerated.companyName);
                });
        });
    }
}

export default new search_Company_Page();
