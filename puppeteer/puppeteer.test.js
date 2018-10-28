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

  test("Page title is 'TICTACTOE'", async () => {
    const response = await page.goto(url);
    const pageTitle = await page.title();
    expect(pageTitle).toBe('tom');
  });
});