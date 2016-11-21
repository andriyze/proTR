// local import of the exported AngularPage class
import {AngularHomepage, } from './AngularPage';
import {browser, element, by, ElementFinder} from 'protractor';
import {WebdriverWebElement} from "protractor/built/element";


// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {

    beforeEach(() => {
        let angularHomepage = new AngularHomepage();
        angularHomepage.get();
    });

    it('should greet the named user', () => {
        let angularHomepage = new AngularHomepage();
        angularHomepage.setUserName("asd");
        angularHomepage.setNickName('newnick');

        angularHomepage.bindingUsername.getText().then((text) => {
            console.log(text);
        });

        angularHomepage.nicknameBind.getText().then((text) => {
            console.log(text);
        });


        // username.clear();
        // username.sendKeys("try out yes!!!");
        //
        // let nw_el: WebdriverWebElement = element(by.model('aboutbox'));
        // nw_el.clear();
        // nw_el.sendKeys('asdf');
        //
        // let nickname = element(by.model('nickname'));
        // nickname.clear();
        // nickname.sendKeys("hohoho1");

        //browser.driver.sleep(3000);

        it('should greet the named user', () => {
            expect(angularHomepage.bindingUsername).toEqual("asd");
            //browser.driver.sleep(1000);

            expect(angularHomepage.nicknameBind).toEqual("(" + "newnick".toUpperCase() + ")");

            expect(browser.getTitle()).toEqual("My AngularJS App")

            expect(angularHomepage.checkBoxShow.isSelected).toBeTruthy();
            if (angularHomepage.checkBoxShow.isSelected()){
                expect(element(by.id('shower')).getText).toEqual('Shown!!')
            }
        });
    });
});