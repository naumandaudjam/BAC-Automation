import addCompany_Locators from "../Locators/addCompany_Locators";
import { baseUrl_Client_Utilities, companyName_Utilities, randomEmail_Utilities } from "../support/utilities.js";

const addCompany = addCompany_Locators;

class addCompanyPage {
    loadCompanyForm() 
    {
        cy.visit("/Client/Index");
    }
    tapAddCompanyBtn() 
    {
        cy.get(addCompany.addCompanyButton_Locator).click();
    }
    addCompanyName()
    {
        const companyName = companyName_Utilities;
        cy.get(addCompany.addCompanyName_Locator).type(companyName);
        cy.writeFile('cypress/fixtures/companyGenerated.json', { companyName });
    }
    addRUC()
    {
        cy.get(addCompany.addRUC_Locator).type('123')
    }
    addCity()
    {
        cy.get(addCompany.addCity_Locator).clear().type('islamabad')   
    }
    addEmail()
    {
        cy.get(addCompany.addEmail_Locator).type(randomEmail_Utilities);
    }
    addCommunication()
    {
        cy.get(addCompany.addPreferredCommunication_Locator).select('Email')
    }
    addCountry()
    {
        cy.get(addCompany.addCountry_Locator).select('Pakistan')
    }
    tapCreateCompanyBtn()
    {
        cy.get(addCompany.addSaveBtn_Locator).click();
    }
    assertCompanyCreated()
    {
        cy.url().should('include', baseUrl_Client_Utilities);
    }
}

export default new addCompanyPage();
