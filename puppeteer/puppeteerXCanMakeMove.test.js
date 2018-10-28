  // ./puppeteer/puppeteerXCanMakeMove.js
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

    await page.waitFor(500);    //API catch up

    //X playes on cell 0
    await page.click('#zero');

    await page.waitFor(500);    //API catch up

    //Getting contents of zero
    const element = await page.$("#zero");
    const text = await (await element.getProperty('textContent')).jsonValue();

    await page.waitFor(300);    //API catch up
    expect(text).toBe('X');
  }, 10000);
});