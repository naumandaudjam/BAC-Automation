import LOCATORS from "../Locators/searchCompany_Locators";

const searchCompanyForm = LOCATORS;

class search_Company_Page {
    visitSearchCompanyForm() 
    {
        cy.visit(searchCompanyForm.searchCompanyForm_Locator);
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
}

export default new search_Company_Page();
