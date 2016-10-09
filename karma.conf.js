module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './app/vendor/angular/angular.js',
      './app/vendor/angular-ui-router/release/angular-ui-router.min.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './app/**/*.module.js',
      './app/**/*.controller.js',
      './app/**/*.service.js',
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
//  './node_modules/angular/angular.js',                             // angular
//     './node_modules/angular-ui-router/release/angular-ui-router.js', // ui-router
//     './node_modules/angular-mocks/angular-mocks.js',                 // loads our modules for tests
//     './app/services/users/users.js',                                 // our Users factory
//     './app/app.js',                                                  // our angular app
//     './app/services/users/users.spec.js'