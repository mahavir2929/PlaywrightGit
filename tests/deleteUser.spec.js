import { test, expect } from "@playwright/test";
const Home = require("../pages/Home");
const Dashboard = require("../pages/Dashboard");
const Login = require("../pages/Login");

test("delete user from app", async function ({ page }) {
  const home = new Home(page);
  const dashboard = new Dashboard(page);
  const login = new Login(page);
  await home.openApplication();
  await home.clickLoginButton();
  await login.loginToApplication("ineuron@ineuron.ai", "ineuron");
  const count = await dashboard.deleteUser("rajeshmishra4@gmail.com");
  expect(count).toBe(0);
});
test('delete all users',async function({page}){
  const home = new Home(page);
  const dashboard = new Dashboard(page);
  const login = new Login(page);
  await home.openApplication();
  await home.clickLoginButton();
  await login.loginToApplication("ineuron@ineuron.ai", "ineuron");
  const count=await dashboard.deleteAllUser()
  expect(count).toBe(0)



})