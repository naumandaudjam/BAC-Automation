import addBanks from "../../PageObjects/addBanksPage";
import changeClient from "../../PageObjects/changeClient";


describe("Add Services", () => {
  it("Switch to target client before adding banks", () => {
    changeClient.switchToTargetClient();
    addBanks.tapMenuBanks();

  });
});

