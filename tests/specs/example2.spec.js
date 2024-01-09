const { test, expect } = require("@playwright/test");
const indexPage = require("../../pages/index.page")
const data = require("../../data/data.json")
require("dotenv").config();

test.beforeEach(async ({ page }) => {
    await test.step("Launching url", async () => {
      const dashboardPage = new indexPage.DashboardPage(test,page);
      dashboardPage.launchUrlLetsCode();
    });
  });


  test("InputFeild", async ({ page }) => {
    const dash = new indexPage.DashboardPage(test,page);
    await dash.inputFeildOperations();
    // expect(page.locator(reg.confirmButton)).toBeVisible();
    // await page.waitForTimeout(5000);
  });

  