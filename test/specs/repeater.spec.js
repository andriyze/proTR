"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var RepeaterPage_1 = require("./../pages/RepeaterPage");
describe('Angular1 Repeater Page', function () {
    var repeaterPage = new RepeaterPage_1.RepeaterPage();
    beforeEach(function () {
        protractor_1.browser.get(repeaterPage.url);
    });
    it('should have 5 days', function () {
        expect(repeaterPage.days.count()).toEqual(5);
    });
});
