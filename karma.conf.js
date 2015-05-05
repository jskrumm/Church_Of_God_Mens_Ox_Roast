// Karma configuration
// Generated on Sun Apr 19 2015 16:37:34 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
        'tests/test-main.js',
        'js/common/lib/jquery-1.10.2.min.js',
        {pattern: 'js/common/lib/lodash.min.js', included: false},
        {pattern: 'js/common/lib/handlebars.runtime-v3.0.1.js', included: false},
        {pattern: 'js/common/compiledTemplates/*.js', included: false},
        {pattern: 'js/page/*.js', included: false},
        {pattern: 'js/section/*.js', included: false},
        {pattern: 'js/module/*.js', included: false},
        {pattern: 'js/service/*.js', included: false},
        {pattern: 'tests/SpecHelper.js', included: false},
        {pattern: 'tests/integration/specs/**/*Spec.js', included: false},
        {pattern: 'tests/unit/specs/**/*Spec.js', included: false}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'js/page/*.js': ['coverage'],
        'js/section/*.js': ['coverage'],
        'js/module/*.js': ['coverage'],
        'js/service/*.js': ['coverage']
    },

    coverageReporter: {
        type : 'html',
        dir : 'tests/coverage'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
