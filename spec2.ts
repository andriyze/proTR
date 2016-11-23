import {RepeaterPage, } from './RepeaterPage';
import {browser, element, by, ElementFinder} from 'protractor';
import {WebdriverWebElement} from "protractor/built/element";


// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('Angular1 Form Page', () => {

    let repeaterPage = new RepeaterPage();

    beforeEach(() => {
        repeaterPage.get();
    });

    it('should check input fields', () => {


        expect(browser.getTitle()).toEqual("My AngularJS App");
        browser.driver.sleep(2000);

        //TODO
    });
});