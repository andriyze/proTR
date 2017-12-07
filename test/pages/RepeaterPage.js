"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var env_1 = require("./../conf/env");
var RepeaterPage = /** @class */ (function () {
    function RepeaterPage() {
        this.url = env_1.conf.baseUrl + "/ng1/#/repeater";
        this.days = protractor_1.element.all(protractor_1.by.repeater('allinfo in days'));
    }
    return RepeaterPage;
}());
exports.RepeaterPage = RepeaterPage;
