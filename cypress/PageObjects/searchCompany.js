import LOCATORS from "../Locators/searchCompany_Locators";

const searchCompanyForm = LOCATORS;

class search_Company_Page {
    visitSearchCompanyForm() 
    {
    cy.visit(searchCompanyForm.searchCompanyForm);
    }
    searchCompanyName()
    {
        cy.get(searchCompanyForm.companyName).type("Test Company");
    }
    searchCompanyIdentification()
    {
        cy.get(searchCompanyForm.companyIdentification).type("123456789");
    }
    searchCompanyEmail()
    {
        cy.get(searchCompanyForm.companyEmail).type("test123@yopmail.com");
    }
    searchCompanyPhone()
    {
        cy.get(searchCompanyForm.companyPhone).type("1234567890");

    }
    searchCompanyMobile()
    {
        cy.get(searchCompanyForm.companyMobile).type("0987654321");
    }
    searchCompanyOfficePhone()
    {
        cy.get(searchCompanyForm.companyOfficePhone).type("1122334455");
    }
    searchBtn()
    {
        cy.get(searchCompanyForm.searchBtn).click();
    }
}

export default new search_Company_Page();