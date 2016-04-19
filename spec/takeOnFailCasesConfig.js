var env = require('./environment');

exports.config = {
  seleniumAddress: env.seleniumAddress,
  framework: 'jasmine',
  baseUrl: env.baseUrl,
  specs: ['./takeOnFailCases.js'],
  plugins: [{
    path: '../index.js'
  }],
  onPrepare: function() {
    browser.ignoreSynchronization = true
  }
};
