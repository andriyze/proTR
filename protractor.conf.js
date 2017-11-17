var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var JasmineReporters = require('jasmine-reporters');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            prefs: {
                download: {
                    prompt_for_download: false,
                    default_directory: './downloads',
                }
            }
        }
    },
    allScriptsTimeout: 100000,
    specs: ['./tmp/**/*.spec.js'],
    suites: {
        all: [
            './tmp/**/first.spec.js',
            './tmp/**/second.spec.js'
        ]
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000,
        showColors: true
    },
    onPrepare: function() {
        browser.driver.getCapabilities().then(function(caps) {
            browser.browserName = caps.get('browserName');
        });
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                takeScreenshots: true,
                takeScreenshotsOnlyOnFailures: true,
                showPassed: false
            })
        );
        // Reporters
        jasmine.getEnv().addReporter(
            new JasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                savePath: 'reports/jUnitXmlReporter',
                filePrefix: 'xmlreport'
            })
        );
        // set screen size for headless mode
        setTimeout(function() {
            browser.driver.executeScript(function() {
                return {
                    width: window.screen.availWidth,
                    height: window.screen.availHeight
                };
            }).then(function(result) {
                browser.driver.manage().window().setPosition(0,0);
                browser.driver.manage().window().setSize(result.width, result.height);
            });
        });
    }
};