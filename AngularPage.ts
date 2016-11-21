// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
import {browser, element, by, ElementFinder } from 'protractor';
import {WebdriverWebElement} from "protractor/built/element";

export class AngularHomepage {

    setUserName(value: string) {
        this._username.clear();
        this._username.sendKeys(value);
    }

    setNickName(value: string){
        this.nickname.clear();
        this.nickname.sendKeys(value);
    }


    private _username = element(by.model('username'));
    bindingUsername = element(by.binding('username'));

    nickname = element(by.model('nickname'));
    nicknameBind = element(by.binding('nickname'));
    aboutText = element(by.model('aboutext'));

    checkBoxShow = element(by.model('show'));

    get() {
        browser.get("http://127.0.0.1:8081/ng1/");
    }



    // getGreeting returns a webdriver.promise.Promise.<string>. For simplicity
    // setting the return value to any

}
