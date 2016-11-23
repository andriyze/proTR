import {browser, element, by, ElementFinder } from 'protractor';
import {WebdriverWebElement} from "protractor/built/element";


export class RepeaterPage {

    check() {
        element.all(by.repeater("allinfo in days")).then((posts) => {
            let titleElement = posts[0].element(by.className('ng-binding'));
            titleElement.getText().then((text) => {
                console.log(text);
            });

            let titleElement2 = posts[1].element(by.className('ng-binding'));
            titleElement.getText().then((text) => {
                console.log(text);
            });
        });

    }

    get(){
        browser.get("http://127.0.0.1:8081/ng1/#/repeater");
        //browser.get("https://protractor-atico.c9users.io:8081/ng1/");
    }


}
