# Protractor Test Framework for Angular built with Typescript using Page Object Pattern

Tests must be run against Protractor Test Pages found here: https://github.com/angular/protractor

**To run tests:**
1. Clone this project, go to 'proTR' folder and run 'npm install' and 'npm start'. 
2. Clone https://github.com/angular/protractor and run 'npm install' and 'npm start'.
3. Return to proTR folder and run 'npm test'.


**Includes 3 protractor config files**
1. 'protractor.conf.js' - default config for chrome
2. 'firefox-protractor.conf.js' - config for firefox 
3. 'multicapabilities-protractor.conf.js' - multi capability config running both chrome and firefox 4 threads in parallel.

To run specific config use 'node node_modules/protractor/bin/protractor {config file}'

**Includes utilities to work with files (download, upload, deletion, reading, sorting)**

**Works on Linux,MacOS and Windows**

