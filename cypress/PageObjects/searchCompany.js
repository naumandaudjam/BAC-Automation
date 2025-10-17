import LOCATORS from "../Locators/searchCompany_Locators";

const searchCompanyForm = LOCATORS;

class search_Company_Page {
    visitSearchCompanyForm() 
    {
    cy.visit(searchCompanyForm.searchCompanyForm_Locator);
    }
    searchCompanyName()
    {
        cy.get(searchCompanyForm.companyName_Locator).type("Test Company");
    }
    searchCompanyIdentification()
    {
        cy.get(searchCompanyForm.companyIdentification_Locator).type("123456789");
    }
    searchCompanyEmail()
    {
        cy.get(searchCompanyForm.companyEmail_Locator).type("test123@yopmail.com");
    }
    searchCompanyPhone()
    {
        cy.get(searchCompanyForm.companyPhone_Locator).type("1234567890");
    }
    searchCompanyMobile()
    {
        cy.get(searchCompanyForm.companyMobile_Locator).type("0987654321");
    }
    searchCompanyOfficePhone()
    {
        cy.get(searchCompanyForm.companyOfficePhone_Locator).type("1122334455");
    }
    searchBtn()
    {
        cy.get(searchCompanyForm.searchBtn_Locator).click();
    }
}

export default new search_Company_Page();