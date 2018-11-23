# (Dockerized) Protractor Test Framework for Angular built with Typescript using Page Object Pattern 


**You can run tests in 3 different ways:**

    - natively via npm on your localhost

    - using docker

    - inside docker-compose


**Option 1**

Please have 3 terminals open:
- Terminal1 --> Clone this project 'git clone https://github.com/andriyze/proTR.git', go to 'proTR/app', clone protractor repo inside the folder manually or by running 'download-demo-app.sh' folder and run 'npm install' and 'npm start' inside 'protractor' folder.

- Terminal2 --> Go to 'proTR/tests' folder and run 'npm install' and 'npm start'.

- Go to 'proTR/tests' folder and run 'npm test'. This will run tests in Chrome against Protractor test app that you started in terminal1.


Here we have included different protractor config files that you can play with:
1. 'protractor.conf.js' - default config for chrome
2. 'firefox-protractor.conf.js' - config for firefox
3. 'multicapabilities-protractor.conf.js' - multi capability config running both chrome and firefox 4 threads in parallel.

To run specific config use 'node node_modules/protractor/bin/protractor {config file}'

**Option 2. Docker (alternative way to run tests)**

*You can run your tests inside docker:* 
- if you follow Option 1, simply leave the demo app running in terminal 1
- in 'tests' folder run 'docker build -t protr:1 .' this will build docker image of our tests
- start Selenium Standalone Server docker image 'docker run  -d --network=host -v /dev/shm:/dev/shm selenium/standalone-chrome' but before that please ensure that no other selenium server is running. If you followed option 1, please run 'CTRL+C' in terminal 2.
- run tests inside docker and copy reports back to project folder 'docker run --network=host -v $(pwd)/reports:/tst/reports protr:1 npm run protractor'

**Option 3. Docker-compose**

*You can run your tests inside docker:* 
- set system variable 'export ENV=dockercompose'

- build 'docker-compose -p project1 up -d --build'

- run tests 'docker-compose -p project1 exec prt npm run protractor-docker' 

- after you are finished you can run 'docker-compose -p project1 down'


*Framework includes utilities to work with files (download, upload, deletion, reading, sorting)*

*Should work on Linux,MacOS. Needs some adjustments on Windows*
