const { defineConfig } = require("cypress");

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
    experimentalSessionAndOrigin: true,
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
