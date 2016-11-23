// local import of the exported AngularPage class
import {AngularFormPage, } from './AngularFormPage';
import {browser, element, by, ElementFinder} from 'protractor';
import {WebdriverWebElement} from "protractor/built/element";


// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('Angular1 Form Page', () => {

    let angularFormPage = new AngularFormPage();

    beforeEach(() => {
        angularFormPage.get();
    });

    it('should check input fields', () => {
        angularFormPage.setUserName("asd");
        angularFormPage.setNickName('newnick');

        //debug
        // angularFormPage.bindingUsername.getText().then((text) => {
        //     console.log(text);
        // });
        //
        // angularFormPage.nicknameBind.getText().then((text) => {
        //     console.log(text);
        // });

        //browser.driver.sleep(3000);
        //debug end

        expect(angularFormPage.bindingUsername.getText()).toEqual("asd");
        expect(angularFormPage.nicknameBind.getText()).toEqual("(" + "newnick".toUpperCase() + ")");

        expect(browser.getTitle()).toEqual("My AngularJS App");


        let nw_el: WebdriverWebElement = element(by.model('aboutbox'));
        nw_el.clear();
        nw_el.sendKeys('asdf');

        let nickname = element(by.model('nickname'));
        nickname.clear();
        nickname.sendKeys("hohoho1");

    });

    it('should check checkboxes', () => {

        expect(angularFormPage.checkBoxShow.isSelected()).toBeTruthy();
        //expect(angularFormPage.shower.getText).toEqual('Shown!!');
        angularFormPage.shower.getText().then((text) =>{
            expect(text).toMatch('Shown!!');
        });

        angularFormPage.checkBoxShow.click().then(() => {
            expect(angularFormPage.shower.isDisplayed()).toBeFalsy();
        });


        expect(angularFormPage.disableCheckBox.isSelected()).toBeFalsy();
        expect(angularFormPage.dummyButton.isEnabled()).toBeTruthy();
        angularFormPage.disableCheckBox.click().then(() =>{
            expect(angularFormPage.dummyButton.isEnabled()).toBeFalsy();
            expect(angularFormPage.disableCheckBox.isSelected()).toBeTruthy();
        });

    });

    it('should check alert', () => {

        angularFormPage.alertButton.click();
        browser.driver.sleep(1000);

        let alert = browser.switchTo().alert();
        expect(alert.getText()).toMatch("Hello");
        alert.accept();
        browser.driver.sleep(1000);

    });


});