import {browser, by, element, ElementFinder} from 'protractor';
import {RepeaterPage } from './../pages/RepeaterPage';

describe('Angular1 Repeater Page', () => {
    const repeaterPage = new RepeaterPage();

    beforeEach(() => {
        repeaterPage.get();
    });

    it('should check input fields', () => {
        expect(browser.getTitle()).toEqual('My AngularJS App');
    });
});
