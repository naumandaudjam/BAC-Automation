const { defineConfig } = require("cypress");
const fs = require("fs");
const { execSync } = require("child_process");

const shouldRecordArtifacts = process.env.CYPRESS_RECORD_ARTIFACTS === "1";

module.exports = defineConfig({
  video: shouldRecordArtifacts,
  screenshotOnRunFailure: shouldRecordArtifacts,
  e2e: {
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {
      const chromeCandidates = [
        "C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe",
        "C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe",
      ];
      const chromePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));

      if (chromePath && config.browsers.every((browser) => browser.name !== "chrome")) {
        let version = "stable";
        let majorVersion = 0;

        try {
          const rawVersion = execSync(`"${chromePath}" --version`).toString().trim();
          const versionMatch = rawVersion.match(/(\d+\.\d+\.\d+\.\d+)/);
          if (versionMatch) {
            version = versionMatch[1];
            const majorMatch = version.match(/^(\d+)/);
            if (majorMatch) {
              majorVersion = Number(majorMatch[1]);
            }
          }
        } catch (error) {
          // fallback to defaults if version detection fails
        }

        config.browsers.push({
          name: "chrome",
          displayName: "Chrome",
          family: "chromium",
          channel: "stable",
          version,
          majorVersion,
          path: chromePath,
          info: "Custom Chrome binary registration",
        });
      }

      return config;
    },
  },
});
