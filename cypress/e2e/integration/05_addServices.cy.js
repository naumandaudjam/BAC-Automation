import changeClient from "../../PageObjects/changeClient";
import addServices from "../../PageObjects/addServicesPage";

const change_Client = changeClient;
const add_Services = addServices;

describe("Add Services", () => {
  it("Switch to target client before adding services", () => {
    change_Client.visitDashboard();
    change_Client.tapOnChangeClient();
    change_Client.searchCompany();
    change_Client.selectCompany();
    add_Services.menuServices();
    add_Services.tapOnAddServices();
    add_Services.addProductName();
    add_Services.addCurrency();
    add_Services.addAmount();
    add_Services.createService();
  });
});
