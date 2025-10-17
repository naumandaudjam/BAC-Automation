import addCompany_Locators from '../Locators/addCompany_Locators';

const addCompany = addCompany_Locators;

const randomNum = Math.floor(Math.random() * 10000);
const randomPhone = `03${Math.floor(100000000 + Math.random() * 900000000)}`;
const randomEmail = `user${randomNum}@yopmail.com`;
const companyName = `Nauman${randomPhone}`;

class addCompanyPage {
    
    goToCompanyForm() {
        cy.visit(addCompany.addCompanyFormUrl_Locator);
    }
    clickAddCompanyBtn() {
        cy.get(addCompany.addCompanyButton_Locator).click();
    }
    addCompanyName()
    {
        cy.get(addCompany.addCompanyName_Locator).type(companyName);
    }
    addRUC()
    {
        cy.get(addCompany.addRUC_Locator).type('123')
    }
    addCity()
    {
        cy.get(addCompany.addCity_Locator).clear().type('islamabad')   
    }
    addZip()
    {
        cy.get(addCompany.addZip_Locator).type('1233')
    }
    addPhone()
    {
        cy.get(addCompany.addPhone_Locator).type(randomNum)
    }
    addEmail()
    {
        cy.get(addCompany.addEmail_Locator).type(randomEmail)
    }
    addCommunication()
    {
        cy.get(addCompany.addPreferredCommunication_Locator).select('Email')
    }
    addCountry()
    {
        cy.get(addCompany.addCountry_Locator).select('Pakistan')
    }
    addAddressType()
    {
        cy.get(addCompany.addAddressType_Locator).select('2 Lines')
    }
    addAddressLine1()
    {
        cy.get(addCompany.addAddress1_Locator).type('Test')
    }
    addAddressLine2()
    {
        cy.get(addCompany.addAddress2_Locator).type('Test')
    }
    addCompanyBtn()
    {
        cy.get(addCompany.addSaveBtn_Locator).click();
    }
}

export default addCompanyPage;
