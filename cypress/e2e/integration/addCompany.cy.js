import addCompanyPage from "../../PageObjects/addCompanyPage"; 
const addCompany = new addCompanyPage();

describe('Add Company Test Suite', () => {
    it('Redirect to Company Form', () => {
        addCompany.goToCompanyForm();
        addCompany.clickAddCompanyBtn();
    });
});