# Node - Intro to Web Scraping
<hr>

## High Level Intro
You know what web scraping is, so I don't need to impress you with anything. What you should know is that thanks to a large case, it has been ruled that <a href='https://www.eff.org/deeplinks/2019/09/victory-ruling-hiq-v-linkedin-protects-scraping-public-data' target='_blank'>web scraping is legal</a> (so long as it's what's considered public data) and frankly, web scraping is super helpful. Now, keep in mind; many websites say it directly violates their terms of use, and I am not telling you to go scrape literally anything. I hold no responsibility if you get in trouble scraping. However, if you want to know the mechanics, here are the basics (taken from this <a href=' https://www.youtube.com/watch?v=TzZ3YOUhCxo' target='_blank'>helpful tutorial</a>).

```js
const puppeteer = require("puppeteer");

//puppeteer uses async functions to operate
//This makes sense given it queries a webpage over and over
async function scrapeUrl(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  //These strings are the XPath of the element -
  //easy to get by just right-clicking on the element in the DOM
  const [el] = await page.$x('//*[@id="sql-reference-reference"]');
  const txt = await el.getProperty("textContent");
  const pageTitle = await txt.jsonValue();

  //Notice I'm creating new variables each time - it breaks if you don't
  //Also note, these XPaths are honestly quite brittle. Be careful
  const [el2] = await page.$x("/html/body/div/main/div/div[3]/article/p[4]/a/img");
  const src = await el2.getProperty("src");
  const imagePath = await src.jsonValue();

  //textContent is getting me the text within the element
  const [el3] = await page.$x('//*[@id="quotes-quote"]');
  const txt3 = await el3.getProperty("textContent");
  const quote = await txt3.jsonValue();

  const [el4] = await page.$x('//*[@id="quotes-author"]');
  const txt4 = await el4.getProperty("textContent");
  const author = await txt4.jsonValue();

  //Just logging the objects to the console as objects for now
  console.log({ pageTitle, imagePath, quote, author });

  //Close the browser when you're done
  browser.close();
}

scrapeUrl("https://minerupset.github.io/intro-to-dbs/");
```

Here, I'm scraping this site and accessing an image and 3 different text elements on the given page, and finally logging them to the console. Note I am using the package 'puppeteer', which has to be installed with npm. To be clear, I have not yet done by homework on puppeteer, and am not sure that I am comfortable with all that it includes. However, it seems to be a legitimate enough package, and this is definitely an easy implementation. 

In general, JavaScript is a great language for this kind of work, as it is uniquely designed for quickly traversing the DOM and acquiring information. This step didn't include any level of writing values to a DB for later consumption, but that would be a logical next step.

<span style='font-size: 0.75em'>Accurate as of January 13, 2020</span>