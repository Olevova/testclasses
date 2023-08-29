const { By, until } = require("selenium-webdriver");
class LoginPage {
  
  constructor(driver) {
    this.driver = driver;
  };

  async openLoginForm(){
    await driver.get("https://dogsnavigator.com.ua/login");
    await this.driver.wait(until.elementsLocated(By.css("form")), 10000);
  }

  async fillPhoneInput(phone){
    const phoneInput = await this.driver.findElement(By.id("phone"));
    await phoneInput.sendKeys(phone);

  };

  async fillPasswordInput(password){
    const passwordInput = await this.driver.findElement(By.id("password-reg"));
    await passwordInput.sendKeys(password);

  };

  async login(){
    const enterButton = await this.driver.findElement(
      By.xpath("//button[text()='Увійти']")
    );
    await enterButton.click();
    await this.driver.wait(until.urlIs('https://dogsnavigator.com.ua/'),2000)
  }

};

module.exports = LoginPage;
