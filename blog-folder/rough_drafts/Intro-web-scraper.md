---
title: Web Scraping for Fun and Profit
description: Meta Description
date: January 24, 2022
# update_date:
# specific_css:
# specific_js:
tags:
  - JavaScript
  - Software
hide:
  - navigation
---

# Article Title

- What and Why
- Intro the tech: Working with JS makes this easy since it's already in the web puppeteer is great for this
- Intro to puppeteer - show screenshotting Google
- Talk about extracting values based on XPaths and CSS Selectors

## Intro to Puppeteer

```js title='index.js'
const puppeteer = require("puppeteer");
const fs = require("fs");

async function screenshotPage(url) {
  // Puppeteer has a number of configurations
  const browser = await puppeteer.launch({ headless: false, slowMo: 250 });

  // Cloud-based systems like Browserless.io exist as well. These are best if you're using a Raspberry Pi or something lightweight
  const page = await browser.newPage();
  await page.goto(url);

  // Take a screenshot
  const pageBuffer = await page.screenshot({
    encoding: "binary",
    fullPage: true,
  });

  const path = "/home/minerupset/Coding/example-node-server/screenShot.png";
  fs.createWriteStream(path).write(pageBuffer);

  //   Close the browser when you're done
  browser.close();
}

// Testing on Google
screenshotPage("https://google.com");
```

## [First Heading]

[^1]:
