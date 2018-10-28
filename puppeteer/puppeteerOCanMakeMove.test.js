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

  test("O move is accounted for", async () => {
    const response = await page.goto(url);
    await page.click('#zero');
    await page.click('#one');
    await page.waitFor(350);
    const element = await page.$("#one");
    const text = await (await element.getProperty('textContent')).jsonValue();
    expect(text).toBe('O');
  });
});




