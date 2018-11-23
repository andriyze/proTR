var globalConf = require('./protractorGlobal.conf.js');

globalConf.seleniumAddress = 'http://selenium:4444/wd/hub';

exports.config = globalConf;