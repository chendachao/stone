// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  const codeCoverage = config.buildWebpack.options.codeCoverage;

  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    browsers: codeCoverage ? ['ChromeHeadlessNoSandbox'] : ['ChromeDebugging'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--remote-debugging-port=9222',
          '--max_old_space_size=81920',
          '--disable-web-security'
        ]
      },
      ChromeDebugging: {
        base: 'Chrome',
        flags: [
          '--remote-debugging-port=9333'
        ]
      }
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'coverage'),
      reports: ['html', 'cobertura'],
      fixWebpackSourcePaths: true,
      'report-config': {
        html: {
          subdir: 'report-html'
        },
        cobertura: {
            file: 'cobertura.xml'
        }
      },
      instrumenterOptions: {
        istanbul: { noCompact: true }
      }
    },
    reporters: ['progress', 'kjhtml', 'junit'],
    junitReporter: {
      outputDir: "testResults",
      outputFile: "TEST-unit.xml"
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true
  });
};
