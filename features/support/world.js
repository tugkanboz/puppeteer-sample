const { setWorldConstructor } = require('@cucumber/cucumber')
const { assert } = require('chai')
const puppeteer = require('puppeteer')

class CustomWorld {
  async launchBrowser() {
    this.browser = await puppeteer.launch({ headless: true, defaultViewport: null, args: ['--disable-setuid-sandbox', '--no-sandbox'] })
    this.page = await this.browser.newPage()
  }

  async closeBrowser() {
    await this.browser.close()
  }

  async visit() {
    await this.page.goto('https://www.mizu.com/en-mx/login')
  }

  async fillLoginForm() {
    await this.page.type('#EmailLogin', 'test.try.test@test.com')
    await this.page.type('#Password', 'test123.')
  }

  async submitLogin() {
    await this.page.click('.js-login-button')
  }

  async verifySuccessfulLogin() {
    const url = this.page.url();
    assert.notEqual(url, 'login');
  }
}

setWorldConstructor(CustomWorld)
