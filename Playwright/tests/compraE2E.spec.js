// @ts-check
import { test, expect } from '@playwright/test';

test('Test de compra de 2 productos E2E', async ({ page }) => {


  page.on('dialog', async dialog => {
    await dialog.accept();
  });

  // Listado de todos los pasos del flujo de compra E2E

  
  await page.goto('https://www.demoblaze.com/');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Iphone 6 32gb' }).click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.waitForTimeout(3000);

  await page.goto('https://www.demoblaze.com/')
  await page.waitForTimeout(1000);
  await page.locator('#next2').click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'MacBook Pro' }).click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.waitForTimeout(3000);

  await page.locator('#cartur').click();
  await page.waitForTimeout(5000);
  await expect(page.getByRole('cell', { name: 'Iphone 6 32gb' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'MacBook Pro' })).toBeVisible();

  await page.locator('button:has-text("Place Order")').click();
  await expect(page.locator('#orderModalLabel')).toHaveText('Place order');
  await page.locator('#name').fill('Andy Ledesma');
  await page.locator('#country').fill('Uruguay');
  await page.locator('#city').fill('Montevideo');
  await page.locator('#card').fill('1234567890123456');
  await page.locator('#month').fill('09');
  await page.locator('#year').fill('2025');
  await page.locator('button:has-text("Purchase")').click();
  await expect(page.locator('h2', { hasText: 'Thank you for your purchase!' })).toBeVisible();
  await page.locator('button:has-text("OK")').click();

  await page.close()
  
});