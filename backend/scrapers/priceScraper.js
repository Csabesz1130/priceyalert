const puppeteer = require('puppeteer');

const scrapePrice = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const price = await page.evaluate(() => document.querySelector('.price').innerText);
  
  await browser.close();
  return price;
};

module.exports = { scrapePrice };
