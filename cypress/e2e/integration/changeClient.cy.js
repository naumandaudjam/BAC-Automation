import changeClient from "../../PageObjects/changeClient";

const change_Client = changeClient

describe("Change Client", () => {
  it("Change Client", () => {
    change_Client.visitDashboard();
    change_Client.tapOnChangeClient();
    change_Client.searchCompany();
    change_Client.selectCompany();
  });
});
