// Karma configuration
// Generated on Sat Oct 08 2016 19:33:50 GMT+0100 (BST)

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './app/vendor/angular/angular.min.js',
      './app/vendor/angular-ui-router/release/angular-ui-router.min.js',
      './app/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
