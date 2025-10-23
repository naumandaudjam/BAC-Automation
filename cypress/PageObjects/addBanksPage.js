import addBanks_Locators from "../Locators/addBanks_Locators";

class addBanksPage {
    tapMenuBanks()
    {
        cy.visit("/Bank/Index");
    }

}

export default new addBanksPage();
