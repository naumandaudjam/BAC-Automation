import changeClient from "../../PageObjects/changeClient";
import addServices from "../../PageObjects/addServicesPage";

const change_Client = changeClient;
const add_Services = addServices;

describe("Add Services", () => {
  it("Switch to target client before adding services", () => {
    change_Client.switchToTargetClient();
    add_Services.tapMenuServices();
    add_Services.tapOnAddServices();
    add_Services.addProductName();
    add_Services.addCurrency();
    add_Services.addAmount();
    add_Services.createService();
    add_Services.assertCompanyCreated();
  });
});
