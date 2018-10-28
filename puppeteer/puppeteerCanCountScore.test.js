// ./puppeteer/puppeteerTest.js
const puppeteer = require("puppeteer");

describe("puppeteer testing", () => {
  let browser, page;
  let url = "https://brogramminggods.herokuapp.com/";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: true, slowMo: 10 });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

  test("X wins a game", async () => {
    const response = await page.goto(url);

    await page.waitFor(350);
    await page.click('#zero');
    await page.waitFor(35);

    await page.click('#one');
    await page.waitFor(35);

    await page.click('#three');
    await page.waitFor(35);
 
    await page.click('#four');
    await page.waitFor(35);
  
    await page.click('#six'); 
    await page.waitFor(500);

  const element = await page.$("#XplayerScoreDisplay");
  const text = await (await element.getProperty('textContent')).jsonValue();

    expect(text).toBe('1');
  });
});