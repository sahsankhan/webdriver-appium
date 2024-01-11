const { Given, When, Then } = require('@cucumber/cucumber');
const WelcomeScreen = require('../../../features/ios/pageobjects/welcome-screen');
const expectChai = require('chai');

Given(/^I opened the App$/, async () => {

  console.log("Loyalty app is opened.");
  // browser.closeApp();
  // browser.launchApp();
});

When(/^I click on Get Started Button$/, async () => {

  await WelcomeScreen.clickOnGetStartedBtn();
});

When(/^I click on Next Button on Language$/, async () => {

  await WelcomeScreen.clickOnNextBtnOnSelectLanguage();
});