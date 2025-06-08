class Dashboard {
  constructor(page) {
    this.page = page;
    this.manage = page.getByText("Manage");
    this.manageUser = page.getByText("Manage Users");
  }

  async deleteUser(userToDelete) {
    await this.manage.nth(0).hover();
    await this.manageUser.click();
    await this.page.locator("html").click();

    const button = this.page.locator(
      "//td[text()='" + userToDelete + "']//following::button[2]"
    );
    await button.click();
    await this.page.waitForLoadState("networkidle");
    const elementCount = await button.count();
    return elementCount;
  }

  async deleteAllUser() {
    await this.manage.nth(0).hover();
    await this.manageUser.click();
    await this.page.locator("html").click();
    const deleteButton = await this.page.locator("//button[text()='Delete']");
    const count = await deleteButton.count();
    for (let i = 0; i < count; i++) {
      await deleteButton.nth(i).click();
    }
    return await this.page.locator("//button[text()='Delete']").count();
  }
}
module.exports = Dashboard;
