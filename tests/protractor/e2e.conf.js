exports.config = {
  // (A)
  // requires `grunt connect` to be running
  //  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',

  // (B)
  seleniumServerJar: './selenium/selenium-server-standalone-2.35.0.jar',
  seleniumPort: null,
  chromeDriver: './selenium/chromedriver',

  baseUrl: 'http://0.0.0.0:9001',

  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['*Spec.js'],
  jasmineNodeOpts: {
    showColors: true
  }
};