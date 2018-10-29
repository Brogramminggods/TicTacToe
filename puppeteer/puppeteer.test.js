// ./puppeteer/puppeteerTest.js
const puppeteer = require("puppeteer");

describe("puppeteer testing", () => {
  let browser, page;
  let url = "https://brogramminggods.herokuapp.com/";

  beforeEach( () => {
    browser = puppeteer.launch({headless: true, slowMo: 0});
    page = browser.newPage();
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
    await page.waitForSelector('#zero');
    const element = await page.$("#zero");
    const text = await (await element.getProperty('textContent')).jsonValue();
    expect(text).toBe("X");
  });
  
  test("O move is accounted for", async () => {
    await page.goto(url, {waitUntil: 'networkidle0'});
    await page.click('#zero');
    await page.waitForSelector('#zero');
    await page.click('#one');
    await page.waitForSelector('#one');
    const element = await page.$("#one");
    const text = await (await element.getProperty('textContent')).jsonValue();
    expect(text).toBe("O");
  });
  
  test("X wins a game", async () => {
    await page.goto(url, {waitUntil: 'networkidle0'});

    await page.click('#zero');
    await page.waitForSelector('#zero');

    await page.click('#one');
    await page.waitForSelector('#one');

    await page.click('#three');
    await page.waitForSelector('#three');
 
    await page.click('#four');
    await page.waitForSelector('#four');
  
    await page.click('#six'); 
    await page.waitForSelector('#six');

    const element = await page.$("#XplayerScoreDisplay");
    const text = await (await element.getProperty('textContent')).jsonValue();

    expect(text).toBe("1");
  });
});