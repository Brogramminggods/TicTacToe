// ./puppeteer/puppeteerTest.js
const puppeteer = require("puppeteer");

describe("puppeteer testing", () => {
  let browser, page;
  let url = "https://brogramminggods.herokuapp.com/";
  const options = {
	  timeout: 500
  }

  beforeEach(async () => {
    browser = await puppeteer.launch({headless: false, slowMo: 0});
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
    await page.waitForSelector('#zero', options);
	await page.waitFor(500);
    const element = await page.$("#zero");
    const text = await (await element.getProperty('textContent')).jsonValue();
    expect(text).toBe("X");
  });
  
  test("O move is accounted for", async () => {
    await page.goto(url, {waitUntil: 'networkidle0'});
    await page.click('#zero');
    await page.waitForSelector('#zero', options);
    await page.click('#one');
    await page.waitForSelector('#one', options);
	await page.waitFor(500);
    const element = await page.$("#one");
    const text = await (await element.getProperty('textContent')).jsonValue();
    expect(text).toBe("O");
  });
  
  test("X wins a game", async () => {
    await page.goto(url, {waitUntil: 'networkidle0'});

    await page.click('#zero');
    await page.waitForSelector('#zero', options);

    await page.click('#one');
    await page.waitForSelector('#one', options);

    await page.click('#three');
    await page.waitForSelector('#three', options);
 
    await page.click('#four');
    await page.waitForSelector('#four', options);
  
    await page.click('#six'); 
    await page.waitForSelector('#six', options);
	await page.waitFor(1000);
    
	const element = await page.$("#XplayerScoreDisplay");
    const text = await (await element.getProperty('textContent')).jsonValue();

    expect(text).toBe("1");
  });
});