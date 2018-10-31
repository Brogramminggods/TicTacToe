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
    const response = await page.goto(url, {waitUntil: 'networkidle0'});
    const pageTitle = await page.title();
    expect(pageTitle).toBe('TICTACTOE');
  });
  
  test("X move is accounted for", async () => {
    await page.goto(url, {waitUntil: 'networkidle0'});
    await page.click('#zero');
    //await page.waitFor(350);
    const element = await page.$("#one");
    const text = await (await element.getProperty('textContent')).jsonValue();
    expect(text).toBe('');
  });
  
  test("O move is accounted for", async () => {
    const response = await page.goto(url, {waitUntil: 'networkidle0'});
    await page.click('#zero');
   // await page.waitFor(350);
    await page.click('#one');
   // await page.waitFor(350);
    const element = await page.$("#two");
    const text = await (await element.getProperty('textContent')).jsonValue();
    expect(text).toBe('');
  });
  
  test("X wins a game", async () => {
    const response = await page.goto(url);

    await page.click('#zero');
    await page.click('#one');
    await page.click('#three'); 
    await page.click('#four');
    await page.click('#five'); 
    //await page.waitFor(200);

  const element = await page.$("#XplayerScoreDisplay");
  const text = await (await element.getProperty('textContent')).jsonValue();

    expect(text).toBe('0');
  });
});