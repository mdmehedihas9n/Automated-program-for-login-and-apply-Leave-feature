// apply-leave.spec.js
import { test, expect } from '@playwright/test';

const loginURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
const leaveURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave';
const username = 'Admin';
const password = 'admin123';

test.describe('OrangeHRM Apply Leave Automation', () => {

  test('✅ Login and Apply Leave', async ({ page }) => {
    // Step 1: Login
    await page.goto(loginURL);
    console.log("1 check url");
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/dashboard/);
    console.log("2 successfully login");

    // Step 2: Navigate to Apply Leave
    await page.goto(leaveURL);
    await expect(page.locator('h6')).toContainText('Apply Leave');

    // Step 3: Fill Leave Form
    await page.click('div.oxd-select-text'); // Open dropdown
    await page.click('text=CAN - Bereavement'); // Select leave type (adjust if different)
    await page.fill('input[placeholder="yyyy-mm-dd"]', '2025-11-03'); // From date
    const inputs = await page.$$('input[placeholder="yyyy-mm-dd"]');
    await inputs[1].fill('2025-11-04'); // To date

    // Step 4: Submit Leave
    await page.click('button:has-text("Apply")');

    // Step 5: Verify success message
    await page.waitForTimeout(2000);
    const successToast = page.locator('div.oxd-toast-content');
    await expect(successToast).toContainText('Successfully Applied');
  });

  test('❌ Apply Leave with Empty Fields', async ({ page }) => {
    await page.goto(loginURL);
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
    await page.click('button[type="submit"]');
    await page.goto(leaveURL);
    await page.click('button:has-text("Apply")');
    const errorField = page.locator('span:has-text("Required")');
    await expect(errorField.first()).toBeVisible();
  });

});
