class Login {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#email1");
    this.password = page.locator("#password1");
    this.signInButton = page.getByText("sign in");
  }

  async loginToApplication(uname, password) {
    await this.username.type(uname);
    await this.password.type(password);
    await this.signInButton.nth(1).click();
  }
}

module.exports = Login;
