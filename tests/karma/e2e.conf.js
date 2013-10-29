module.exports = function (config) {
  config.set({
    frameworks: ['ng-scenario'],
    files: [
      '../../tests/karma/ng-scenario-require.js',  // requires loading a hack first
      '../../tests/karma/*Spec.js'
    ],
    reporters: ['progress'],
    port: 9012,
    autoWatch: true,
    browsers: ['Chrome'],
    captureTimeout: 20000,
    singleRun: false,
    reportSlowerThan: 500,
    logLevel: config.LOG_DEBUG, // try LOG_DEBUG if you want to debug
    proxies: {
      '/': 'http://localhost:9001/'
    },
    urlRoot: "/__karma__/",
    plugins: [
      'karma-ng-scenario',
      'karma-spec-reporter',
      'karma-chrome-launcher'
    ]
  });
};
