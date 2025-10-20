import addCompanyPage from "../../PageObjects/addCompanyPage"; 

const addCompany = addCompanyPage;

describe('Add Company Test Suite', () => {
    it('Redirect to Company Form', () => {
        addCompany.goToCompanyForm();
        addCompany.clickAddCompanyBtn();
        addCompany.addCompanyName();
        addCompany.addRUC();
        addCompany.addCity();
        addCompany.addZip();
        addCompany.addPhone();
        addCompany.addEmail();
        addCompany.addCommunication();
        addCompany.addCountry();
        addCompany.addAddressType();
        addCompany.addAddressLine1();
        addCompany.addAddressLine2();
        addCompany.addCompanyBtn();
    });
});