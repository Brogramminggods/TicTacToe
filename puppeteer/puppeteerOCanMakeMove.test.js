  // ./puppeteer/puppeteerOCanMakeMove.js
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
    await page.waitFor(300);    //API catch up

    //X plays on cell zero, O plays on cell 1
    await page.click('#zero');
    await page.waitFor(50);    //API catch up
    await page.click('#one');

    await page.waitFor(300); //API catch upp
    
    //Getting contents of one
    const element = await page.$("#one"); //O should have played this cell
    const text = await (await element.getProperty('textContent')).jsonValue();

    expect(text).toBe('O');
  }, 10000);
});




