var env = require('./environment');

exports.config = {
  seleniumAddress: env.seleniumAddress,
  framework: 'jasmine',
  baseUrl: env.baseUrl,
  specs: ['./takeOnAllCases.js'],
  plugins: [{
    path: '../index.js',
    takeOnAllCases: true
  }],
  onPrepare: function() {
    browser.ignoreSynchronization = true
  }
};
