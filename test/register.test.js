const RegisterPage = require("../srс/class/registerPage");
const createWebDriver = require("../srс/utils/driver");
const { describe, it, beforeEach, afterEach } = require("mocha");
const { By, until } = require("selenium-webdriver");
const should = require("chai").should();
const chrome = require("selenium-webdriver/chrome");
const makeScreenshot = require('../srс/utils/makeScreenShot');


describe("registretion of new User", async () => {
  const dogname = "Leo";
  const name = "Jon";
  const successRegistrationUrl = "https://dogsnavigator.com.ua/";
  const phone = '682029406';
  const password = '55555'

  beforeEach(async () => {
    driver = await createWebDriver();
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("success registretion of new User", async () => {
       
    const registerTest = new RegisterPage(driver);
    await registerTest.openRegisterForm();
    await registerTest.fillDogsNameInput(dogname);
    await registerTest.fillNameInput(name);
    await registerTest.fillPasswordInput(password);
    await registerTest.fillPhoneInput(phone);
    await registerTest.regiter();

    // make audit of registretion
    await driver.wait(until.urlMatches(/.+/), 3000);
    const afterRegistrationUrl = await driver.getCurrentUrl();

    if(afterRegistrationUrl!==successRegistrationUrl){
      await driver.wait(until.elementLocated(By.className("error")),3000);
      makeScreenshot(driver, 'register_error');
    };

    afterRegistrationUrl.should.to.equal(successRegistrationUrl);
    
  });


});
