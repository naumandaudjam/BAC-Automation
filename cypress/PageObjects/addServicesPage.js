import LOCATORS from "../Locators/addServices_Locators";
import { baseUrl_Product_Utilities } from "../support/utilities";

const add_Services_Locators = LOCATORS;

class addServices {
    menuServices()
    {
        cy.visit(baseUrl_Product_Utilities);
    }
    tapOnAddServices()
    {
        
    }
}

export default new addServices();
