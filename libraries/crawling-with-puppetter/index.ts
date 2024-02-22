import puppeteer from 'puppeteer'

void (async () => {
  try {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    // Navigate the page to a URL
    await page.goto('https://www.kyobobook.co.kr/')

    // Set screen size
    await page.setViewport({ width: 1440, height: 1024 })

    // Type into search box
    await page.type('#searchKeyword', '웹 개발 새로고침')

    // Wait and click on first result
    await page.locator('#shopData_list').wait()
    const temp = await page.waitForSelector('#shopData_list', { visible: true, timeout: 6000 })
    console.log('💃🏻 🕺🏻 temp:', temp)
    // await page.waitForSelector('text/[국내도서] 웹 개발 새로고침')
    // await page.click(searchResultSelector)

    // Locate the full title with a unique string
    // const temp = await page.waitForSelector(searchResultSelector)
    // console.log('💃🏻 🕺🏻 temp:', temp)
    // const textSelector = await page.waitForSelector('text/[국내도서] 웹 개발 새로고침')
    // console.log('💃🏻 🕺🏻 textSelector:', textSelector)
    // const fullTitle = await textSelector?.evaluate(el => el.textContent)

    // Print the full title
    // eslint-disable-next-line no-console
    // console.log('The title of this blog post is "%s".', fullTitle)

    await browser.close()
  } catch (error) {
    console.error(`🫣 ${error}`)
  }
})()
