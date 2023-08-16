const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
      baseUrl: "https://www.saucedemo.com/",
      viewportWidth: 1280,
      viewportHeight: 720,
      defaultCommandTimeout: 5000,

      // ... other configurations
      execTimeout: 60000,

      setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
