
Feature('Step1');

Scenario('test opening page', (I) => {

    I.amOnPage('/PowerBI-visuals/');
    I.click('Documentation');

    I.see("Installation");
    I.click("What's New");


    I.see('API v1.11.0');
    I.click('FilterManager');

    I.see('File not found');

});

