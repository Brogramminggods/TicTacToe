  // ./puppeteer/puppeteerTest.js
const puppeteer = require("puppeteer");

describe("puppeteer testing", () => {
  let browser, page;
  let url = "https://brogramminggods.herokuapp.com/";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: true, slowMo: 0 });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

test("X move is accounted for", async () => {
    await page.goto(url);
    await page.click('#zero');
    await page.waitFor(350);
    const element = await page.$("#zero");
    const text = await (await element.getProperty('textContent')).jsonValue();
    expect(text).toBe('X');
  });
});