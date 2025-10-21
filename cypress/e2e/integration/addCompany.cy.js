import addCompanyPage from "../../PageObjects/addCompanyPage"; 

const addCompany = addCompanyPage;

describe('Add Company Test Suite', () => {
    it('Redirect to Company Form', () => {
        addCompany.goToCompanyForm();
        addCompany.clickAddCompanyBtn();
        addCompany.addCompanyName();
        addCompany.addRUC();
        addCompany.addCity();
        addCompany.addEmail();
        addCompany.addCommunication();
        addCompany.addCountry();
        addCompany.addCompanyBtn();
        addCompany.companyCreatedAssertion();
    });
});