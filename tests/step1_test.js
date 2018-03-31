
Feature('Step1');

Scenario('test opening page', (I) => {

    I.amOnPage('https://uve.github.io/PowerBI-visuals/');

    I.see("Documentation");

    I.click('Documentation');


    //I.see("PowerBI Visual Tools (pbiviz) - Installation");
    //I.seeElement(".bd-title")

    I.click("What's New");

    I.see('API v1.11.0');
    I.click('FilterManager');

    I.see('File not found');

});

