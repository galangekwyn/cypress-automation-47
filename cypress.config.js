const { defineConfig } = require('cypress')

module.exports = (on, config) => {
    // Load environment variables from cypress.env.json
    config.env = {
      ...config.env,
      ...require('./cypress.env.json')
    };
  
    return config;
  };
  