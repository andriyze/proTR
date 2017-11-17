import { $, browser, by, element, ElementFinder } from 'protractor';

export class AngularFormPage {
    public username = element(by.model('username'));
    public bindingUsername = element(by.binding('username'));

    public nickname = element(by.model('nickname'));
    public nicknameBind = element(by.binding('nickname'));
    public aboutText = element(by.model('aboutext'));

    public checkBoxShow = element(by.model('show'));
    public shower = element(by.id('shower'));

    public disableCheckBox = element(by.xpath('//*[@id="checkboxes"]/input[2]'));
    public dummyButton = $('#disabledButton');
    public alertButton = $('#alertbutton');

    public setUserName(value: string) {
        this.username.clear();
        this.username.sendKeys(value);
    }

    public setNickName(value: string) {
        this.nickname.clear();
        this.nickname.sendKeys(value);
    }

    public get() {
        browser.get('http://127.0.0.1:8081/ng1/');
        // browser.get("https://protractor-atico.c9users.io:8081/ng1/");
    }
}
