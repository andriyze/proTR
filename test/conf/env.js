"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cloud_1 = require("./cloud");
var localhost_1 = require("./localhost");
var env = process.env.ENV; // run "export ENV=cloud" to set variable and be able to run on cloud environment
var conf;
exports.conf = conf;
switch (env) {
    case 'cloud':
        exports.conf = conf = cloud_1.config;
        break;
    case 'localhost':
    default:
        exports.conf = conf = localhost_1.config;
        break;
}
