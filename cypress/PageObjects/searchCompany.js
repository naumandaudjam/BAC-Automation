import LOCATORS from "../Locators/searchCompany_Locators";
import data from "../fixtures/login_data.json";

const searchCompanyForm = LOCATORS;

class search_Company_Page {
    visitSearchCompanyForm() 
    {
        cy.visit(searchCompanyForm.searchCompanyForm_Locator);
    }

    searchCompanyEmail()
    {
        cy.fixture("emailGenerated.json").then((emailGenerated) => {
            cy.get(searchCompanyForm.companyEmail_Locator).type(emailGenerated.companyEmail);
        });
    }
    searchBtn()
    {
        cy.get(searchCompanyForm.searchBtn_Locator).click();
    }
}

export default new search_Company_Page();
