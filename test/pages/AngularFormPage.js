"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var env_1 = require("./../conf/env");
var AngularFormPage = /** @class */ (function () {
    function AngularFormPage() {
        this.url = env_1.conf.baseUrl + "/ng1/#/form";
        this.username = protractor_1.element(protractor_1.by.model('username'));
        this.bindingUsername = protractor_1.element(protractor_1.by.binding('username'));
        this.nickname = protractor_1.element(protractor_1.by.model('nickname'));
        this.nicknameBind = protractor_1.element(protractor_1.by.binding('nickname'));
        this.aboutText = protractor_1.element(protractor_1.by.model('aboutext'));
        this.checkBoxShow = protractor_1.element(protractor_1.by.model('show'));
        this.shower = protractor_1.element(protractor_1.by.id('shower'));
        this.disableCheckBox = protractor_1.element(protractor_1.by.xpath('//*[@id="checkboxes"]/input[2]'));
        this.dummyButton = protractor_1.$('#disabledButton');
        this.alertButton = protractor_1.$('#alertbutton');
    }
    AngularFormPage.prototype.setUserName = function (value) {
        this.username.clear();
        this.username.sendKeys(value);
    };
    AngularFormPage.prototype.setNickName = function (value) {
        this.nickname.clear();
        this.nickname.sendKeys(value);
    };
    return AngularFormPage;
}());
exports.AngularFormPage = AngularFormPage;
