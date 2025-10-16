import addCompany_Locators from '../Locators/addCompany_Locators';

const addCompany = addCompany_Locators;

class addCompanyPage {
    goToCompanyForm() {
        cy.visit(addCompany.addCompanyFormUrl);
    }
    clickAddCompanyBtn() {
        cy.get(addCompany.addCompanyButton).click();
    }
}

export default addCompanyPage;