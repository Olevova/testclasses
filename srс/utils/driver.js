const {Builder} = require('selenium-webdriver');
const chrome = require ('selenium-webdriver/chrome');


async function createWebDriver(){
    const options = new chrome.Options();
    options.addArguments("--incognito");
    options.addArguments('--start-maximized');

   return driver = await new Builder()
      .forBrowser("chrome")
      .usingServer("http://localhost:4444/wd/hub/")
      .setChromeOptions(options)
      .build();
};


module.exports = createWebDriver;
