import { test, expect } from '@playwright/test';

test('successful submit shows success notification', async ({ page }) => {
  await page.goto('http://localhost:9000/');

  // กรอกฟอร์ม
  const nameInput = page.locator('#name');
  await expect(nameInput).toBeVisible({ timeout: 10000 });
  await nameInput.fill('John Doe');

  const ageInput = page.locator('#age');
  await expect(ageInput).toBeVisible();
  await ageInput.fill('25');

  const termsCheckbox = page.locator('#terms');
  await expect(termsCheckbox).toBeVisible();
  await termsCheckbox.check();

  const submitButton = page.locator('button:has-text("Submit")');
  await expect(submitButton).toBeVisible();
  await submitButton.click();

  // ตรวจสอบ Success
  const successMessage = page.locator('#success');
  await expect(successMessage).toBeVisible({ timeout: 5000 });
});

