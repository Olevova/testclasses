const { By, until } = require("selenium-webdriver");
const LoginPage = require("./loginnPage");


class RegisterPage extends LoginPage{

  async openRegisterForm(){
    await driver.get("https://dogsnavigator.com.ua/login");
    const RegisterMenu = this.driver.findElement(
      By.xpath("//li[text()='Зареєструватися']")
    );
    await RegisterMenu.click();

    };

    async fillDogsNameInput(dogname){
      const dogsNameInput = await this.driver.findElement(By.id("pet-name"));
      await dogsNameInput.sendKeys(dogname);
    };

    async fillNameInput(name){
      const nameInput = await this.driver.findElement(By.id("owner-name"));
      await nameInput.sendKeys(name);
    };

    async fillPhoneInput(phone){
      const phoneInput = await this.driver.findElement(By.id("tel"));
      await phoneInput.sendKeys(phone);

    };

    async regiter(){
      const enterButton = await this.driver.findElement(
      By.css("button[type='submit']")
      );
      const checkAgreeInput = await this.driver.findElement(
      By.xpath("//input[@formcontrolname='consent']")
      );
      await checkAgreeInput.click();
      await enterButton.click();
    };
}
module.exports = RegisterPage;
