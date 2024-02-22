import { expect, test } from '@playwright/test'

const text = '웹 개발 새로고침'

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.kyobobook.co.kr/')
})

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/교보문고/s)
})

test('search by keyword', async ({ page }) => {
  const searchBar = page.locator('#searchKeyword')
  await searchBar.fill(text)
  await searchBar.press('Enter')

  // const item = page.locator('.result_area > .prod_item').first()
  // await expect(item.locator('.prod_category')).toContainText('국내도서')
  await expect(page.locator('.result_area .prod_item:first-child .prod_category')).toContainText('국내도서')

  await page.locator('.result_area .prod_item:first-child .prod_info').click()

  await expect(page.locator('.prod_title').first()).toHaveText(text)
})

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/')

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click()

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible()
// })
