import addCompany_Locators from "../Locators/addCompany_Locators";
import { companyName_Utilities, randomPhone_Utilities, randomEmail_Utilities } from "../support/utilities.js";

const addCompany = addCompany_Locators;

class addCompanyPage {
    
    goToCompanyForm() 
    {
        cy.visit(addCompany.addCompanyFormUrl_Locator);
    }
    clickAddCompanyBtn() 
    {
        cy.get(addCompany.addCompanyButton_Locator).click();
    }
    addCompanyName()
    {
        cy.get(addCompany.addCompanyName_Locator).type(companyName_Utilities);
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
        cy.get(addCompany.addPhone_Locator).type(randomPhone_Utilities)
    }
    addEmail()
    {
        const email = randomEmail_Utilities;
        cy.get(addCompany.addEmail_Locator).type(email);
        cy.writeFile('cypress/fixtures/emailGenerated.json', { companyEmail: email });
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

export default new addCompanyPage();
