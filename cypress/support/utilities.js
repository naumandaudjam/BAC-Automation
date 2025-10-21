const baseUrl_Utilities = "https://bac-test.xpresspago.com/Home/Index";
const baseUrl_Client_Utilities = "https://bac-test.xpresspago.com/Client/Index";
const baseUrl_Product_Utilities = "https://bac-test.xpresspago.com//Product/Index";
const baseUrl_addServices_Utilities = "https://bac-test.xpresspago.com/Cycle/Index/0";

const randomNum_Utilities = String(Math.floor(Math.random() * 1000)).padStart(3, "0");
const randomPhone_Utilities = `03${Math.floor(100000000 + Math.random() * 900000000)}`;
const randomEmail_Utilities = `user${randomNum_Utilities}@yopmail.com`;
const companyName_Utilities = `Croem${randomNum_Utilities}`;

export {
  baseUrl_Utilities,
  randomNum_Utilities,
  randomPhone_Utilities,
  randomEmail_Utilities,
  companyName_Utilities,
  baseUrl_Product_Utilities,
  baseUrl_Client_Utilities,
  baseUrl_addServices_Utilities,
};
