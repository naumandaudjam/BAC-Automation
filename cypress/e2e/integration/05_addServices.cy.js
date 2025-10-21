import changeClient from "../../PageObjects/changeClient";
import addServices from "../../PageObjects/addServicesPage"

const change_Client = changeClient;
const add_Services = addServices;
describe("Add Services", () => {
  it("Switch to target client before adding services", () => {
    change_Client.visitDashboard();
    change_Client.tapOnChangeClient();
    change_Client.searchCompany();
    change_Client.selectCompany();
    addServices.menuServices();
    
  });

  // Additional tests related to adding services can follow here.
});

