import { test, expect } from '@playwright/test';

test('user succefully registers account', async ({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/register.htm');

    // await page.fill('[id="customer.firstName"]', '123465');
    await page.locator('[id="customer.firstName"]').fill('123465');

    await page.fill('[id="customer.lastName"]', '123465');
    await page.fill('[id="customer.address.street"]', '123465');
    await page.fill('[id="customer.address.city"]', '123465');
    await page.fill('[id="customer.address.state"]', '123465');
    await page.fill('[id="customer.address.zipCode"]', '123465');
    await page.fill('[id="customer.phoneNumber"]', '123465');
    await page.fill('[id="customer.ssn"]', '123465');
    await page.fill('[id="customer.username"]', '123465');
    await page.fill('[id="customer.password"]', '123465');
    await page.fill('[id="repeatedPassword"]', '123465');

    await page.click('input[type="submit"][value="Register"]');
    await page.waitForTimeout(10000);

    const locator = page.locator(".title");
    await expect(locator).toContainText('Welcome to 123456');
})