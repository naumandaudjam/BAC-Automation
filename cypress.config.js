const { defineConfig } = require("cypress");

const environments = {
  qa: {
    baseUrl: "https://bac-test.xpresspago.com/",
  },
};

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    overwrite: false,
    html: true,
    json: true,
    timestamp: "mm-dd-yyyy_HH-MM-ss",
  },
  e2e: {
    baseUrl: environments.qa.baseUrl,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    // Add additional e2e configuration (specPattern, env, etc.) as needed.
  },
});
