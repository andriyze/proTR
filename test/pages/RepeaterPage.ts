import {browser, by, element, ElementFinder } from 'protractor';

export class RepeaterPage {

    public check() {
        element.all(by.repeater('allinfo in days')).then((posts) => {
            const titleElement = posts[0].element(by.className('ng-binding'));
            titleElement.getText().then((text: any) => {
                console.log(text);
            });

            const titleElement2 = posts[1].element(by.className('ng-binding'));
            titleElement.getText().then((text: any) => {
                console.log(text);
            });
        });
    }

    public get() {
        browser.get('http://127.0.0.1:8081/ng1/#/repeater');
        // browser.get("https://protractor-atico.c9users.io:8081/ng1/");
    }
}
