import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import HaloPage from '../pageobjects/halo.page.js';

Given(/^I open (\w+) page$/, async (page) => {
    await HaloPage.open();
});

When(/^I fill with (.+), (.+) and (.+)$/, async (name, email, message) => {
    await HaloPage.contact(name, email, message);
});

When(/^I click on the contact button$/, async () => {
    await $("//div[@class='nav__items']").waitForClickable();
    await $("//div[@class='nav__items']").click();
    await $("//form[@class='contact__form']").waitForClickable();
});

Then(/^I should see Thank you message$/, async () => {
    await $("//h3[@class='contact__header--success']").waitForDisplayed();
    const successMessage = await $("//h3[@class='contact__header--success']");
    await successMessage.waitForExist();
    const text = await successMessage.getText();
    expect(text).toContain("Thank you for your message!");
});

Then(/^I saw submit button disable$/, async () => {
    const successMessage = await HaloPage.disableSubmit();
    expect(successMessage).toBe(true);
});
