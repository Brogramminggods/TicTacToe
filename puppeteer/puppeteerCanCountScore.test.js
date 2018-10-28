// ./puppeteer/puppeteerCanCountScore.js
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
    await page.waitFor(200);    //API catch up

    //Plays 3 moves for X(0, 3, 6) and 2 moves for O(1, 4)
    await page.click('#zero');
    await page.waitFor(50);    //API catch up
    await page.click('#one');
    await page.waitFor(50);    //API catch up
    await page.click('#three');
    await page.waitFor(50);    //API catch up
    await page.click('#four');
    await page.waitFor(50);    //API catch up
    await page.click('#six'); 

    await page.waitFor(500);    //API catch up

    //Getting contents of XplayerScoreDisplay
    const element = await page.$("#XplayerScoreDisplay");
    const text = await (await element.getProperty('textContent')).jsonValue();
    await page.waitFor(500);    //API catch up

    expect(text).toBe('1');
  }, 10000);
});