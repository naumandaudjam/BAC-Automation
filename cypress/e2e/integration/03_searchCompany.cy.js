import searchCompany from "../../PageObjects/searchCompany";

const search_Company = searchCompany;

describe("Search Company", () => {
  it("Visit Search Company Form", () => {
    search_Company.loadSearchCompanyForm();
    search_Company.searchCompanyName();
    search_Company.tapSearchBtn();
    search_Company.assertCompanySearch();
  });
});
