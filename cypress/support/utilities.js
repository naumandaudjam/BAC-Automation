const randomNum_Utilities = Math.floor(Math.random() * 10000);
const randomPhone_Utilities = `03${Math.floor(100000000 + Math.random() * 900000000)}`;
const randomEmail_Utilities = `user${randomNum_Utilities}@yopmail.com`;
const companyName_Utilities = `Nauman${randomPhone_Utilities}`;

export { randomNum_Utilities, randomPhone_Utilities, randomEmail_Utilities, companyName_Utilities };
