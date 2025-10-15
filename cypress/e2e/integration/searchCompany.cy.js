import searchCompany from "../../PageObjects/searchCompany";
const search_Company = searchCompany;
describe("Search Company", () => {
  it("Search Company", () => {
    search_Company.visitSearchCompanyForm();
    search_Company.searchCompanyName();
    search_Company.searchCompanyIdentification();
    search_Company.searchCompanyEmail();
    search_Company.searchCompanyPhone();
    search_Company.searchCompanyMobile();
    search_Company.searchCompanyOfficePhone();
    searchCompany.searchBtn();
  });
});