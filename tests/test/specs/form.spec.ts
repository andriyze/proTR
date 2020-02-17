import {browser, by, element, ElementFinder} from 'protractor';
import {WebdriverWebElement} from 'protractor/built/element';
import {AngularFormPage } from './../pages/AngularFormPage';

describe('Angular1 Form Page', () => {
    const angularFormPage = new AngularFormPage();

    beforeEach(async () => {
        await browser.get(angularFormPage.url);
    });

    it('should check input fields', async () => {
        await angularFormPage.setUserName('asd');
        await angularFormPage.setNickName('newnick');

        expect(await  angularFormPage.bindingUsername.getText()).toEqual('asd');
        expect(await  angularFormPage.nicknameBind.getText()).toEqual('(' + 'newnick'.toUpperCase() + ')');

        expect(await  browser.getTitle()).toEqual('My AngularJS App');

        const newEl: WebdriverWebElement = element(by.model('aboutbox'));
        await newEl.clear();
        await newEl.sendKeys('asdf');

        const nickname = element(by.model('nickname'));
        await nickname.clear();
        await nickname.sendKeys('hohoho1');
    });

    it('should check checkboxes', async () => {
        expect(await  angularFormPage.checkBoxShow.isSelected()).toBeTruthy();
        // expect(angularFormPage.shower.getText).toEqual('Shown!!');
        angularFormPage.shower.getText().then((text) => {
            expect(text).toMatch('Shown!!');
        });

        angularFormPage.checkBoxShow.click().then(() => {
            expect(angularFormPage.shower.isDisplayed()).toBeFalsy();
        });

        expect(await angularFormPage.disableCheckBox.isSelected()).toBeFalsy();
        expect(await angularFormPage.dummyButton.isEnabled()).toBeTruthy();
        await angularFormPage.disableCheckBox.click();
        expect(await angularFormPage.dummyButton.isEnabled()).toBeFalsy();
        expect(await angularFormPage.disableCheckBox.isSelected()).toBeTruthy();
    });

    it('should check alert message', async () => {
        await angularFormPage.alertButton.click();
        await browser.wait(browser.ExpectedConditions.alertIsPresent(), 2000);
        const alert = await browser.switchTo().alert();
        expect(await alert.getText()).toMatch('Hello');
        await alert.accept();
    });
});
