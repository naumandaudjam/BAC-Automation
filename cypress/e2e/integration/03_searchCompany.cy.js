import searchCompany from "../../PageObjects/searchCompany";

const search_Company = searchCompany;

describe("Search Company", () => {
  it("Visit Search Company Form", () => {
    search_Company.visitSearchCompanyForm();
    search_Company.searchCompanyName();
    search_Company.searchBtn();
    search_Company.searchCompanyAssertion();
  });
});
