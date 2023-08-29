const LoginPage = require("../srс/class/loginnPage");
const createWebDriver = require("../srс/utils/driver");
const { describe } = require("mocha");
const makeScreenshot = require('../srс/utils/makeScreenShot');


describe("loggin", async () => {
  const phone = "963653768";
  const password = "22222"

  beforeEach(async () => {
    const driver = await createWebDriver();
  });

  afterEach(async () => {
      await driver.quit();
  });

  it("loggin in to the home page", async () => {
    const logginPageTest = new LoginPage(driver);
    await logginPageTest.openLoginForm();
    await logginPageTest.fillPhoneInput(phone);
    await logginPageTest.fillPasswordInput(password);
    await logginPageTest.login();
    makeScreenshot(driver, 'homepage');
  });
});
   