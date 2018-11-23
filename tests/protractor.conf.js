var globalConf = require('./protractorGlobal.conf.js');

globalConf.seleniumAddress = 'http://localhost:4444/wd/hub';

exports.config = globalConf;