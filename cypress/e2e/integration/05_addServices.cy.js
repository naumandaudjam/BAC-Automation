import changeClient from "../../PageObjects/changeClient";

const change_Client = changeClient;

describe("Add Services", () => {
  it("Switch to target client before adding services", () => {
    change_Client.visitDashboard();
    change_Client.tapOnChangeClient();
    change_Client.searchCompany();
    change_Client.selectCompany();
  });

  // Additional tests related to adding services can follow here.
});
