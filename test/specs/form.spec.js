"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AngularFormPage_1 = require("./../pages/AngularFormPage");
describe('Angular1 Form Page', function () {
    var angularFormPage = new AngularFormPage_1.AngularFormPage();
    beforeEach(function () {
        protractor_1.browser.get(angularFormPage.url);
    });
    it('should check input fields', function () {
        angularFormPage.setUserName('asd');
        angularFormPage.setNickName('newnick');
        expect(angularFormPage.bindingUsername.getText()).toEqual('asd');
        expect(angularFormPage.nicknameBind.getText()).toEqual('(' + 'newnick'.toUpperCase() + ')');
        expect(protractor_1.browser.getTitle()).toEqual('My AngularJS App');
        var newEl = protractor_1.element(protractor_1.by.model('aboutbox'));
        newEl.clear();
        newEl.sendKeys('asdf');
        var nickname = protractor_1.element(protractor_1.by.model('nickname'));
        nickname.clear();
        nickname.sendKeys('hohoho1');
    });
    it('should check checkboxes', function () {
        expect(angularFormPage.checkBoxShow.isSelected()).toBeTruthy();
        // expect(angularFormPage.shower.getText).toEqual('Shown!!');
        angularFormPage.shower.getText().then(function (text) {
            expect(text).toMatch('Shown!!');
        });
        angularFormPage.checkBoxShow.click().then(function () {
            expect(angularFormPage.shower.isDisplayed()).toBeFalsy();
        });
        expect(angularFormPage.disableCheckBox.isSelected()).toBeFalsy();
        expect(angularFormPage.dummyButton.isEnabled()).toBeTruthy();
        angularFormPage.disableCheckBox.click().then(function () {
            expect(angularFormPage.dummyButton.isEnabled()).toBeFalsy();
            expect(angularFormPage.disableCheckBox.isSelected()).toBeTruthy();
        });
    });
    it('should check alert message', function () {
        angularFormPage.alertButton.click().then(function () {
            protractor_1.browser.wait(protractor_1.browser.ExpectedConditions.alertIsPresent(), 2000);
            var alert = protractor_1.browser.switchTo().alert();
            expect(alert.getText()).toMatch('Hello');
            alert.accept();
        });
    });
});
