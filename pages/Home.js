class Home {
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator("//button[text()='Log in ']");
  }

  async openApplication() {
    this.page.goto("https://ineuron-courses.vercel.app/");
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
}
module.exports=Home