---
title: Web Scraping for Fun and Profit
description: Meta Description
date: February 14th, 2022
duration: 8 min
# original_date:
# specific_css:
# specific_js:
tags:
    - JavaScript
    - Software
hide:
    - navigation
---

# Web Scraping for Fun and Profit

In this time of information overload, it's been widely recognized that what we all need is not more information, but curated information. The right stuff, at the right time. Where this concept can get tricky is the old saying, "One man's trash is another man's treasure". Or put in terms here, not every website is going to be useful for everyone, and you need to know how to find the information you need.

While there are webscraper extensions available for the major browsers, knowing how to design and write one yourself is an incredibly valuable tool. When my partner and I were <a href='/2022/Dealing-With-An-Attempted-Scam' target='_blank'>fending off a home loan scam</a>, it was important for us to get regular updates on what our home loan company thought we owed. Instead of signing on every day, taking screenshots, and saving them down, I instead built a friendly little bot to do that for us.

**NOTE**

There is a fair amount of legal grey area when it comes to web scraping[^1]: in no way is this post a recommendation for you to commit an illegal act, and any and all consequences from such scraping are not my responsibility. What I'm showing here is how I have done it (legally) in the past, and how you might use it (legally) if the situation demands.

## Intro to Puppeteer

While there are plenty of coding languages that can do this, I prefer to use Javascript for something like this for two reasons:

1. Since we're dealing with the web, Javascript is more natively attuned to interfacing with web pages
2. It's what I'm most comfortable in

To do this with NodeJS, I use a library called 'Puppeteer'[^2]. This is a relatively straightforward API that allows you to interact with websites programmatically for all sorts of purposes. Below I've detailed some example code I've used, including comments on what is happening at the various stages. This example should run well on the Google home page, delivering us a screenshot of whatever they have up that day.

```js title='index.js'
// We're bringing in the puppeteer library, as well as the file system module
const puppeteer = require("puppeteer");
const fs = require("fs");

// Because puppeteer uses a Promise-based API, I'm using an async function
async function screenshotPage(url) {
    // Puppeteer has a number of configurations - here I'm asking for it to open the window as it's going, and for it to do so in slow motion (if it does any typing)
    // Cloud-based systems like Browserless.io exist as well. These are best if you're using a Raspberry Pi or something lightweight
    const browser = await puppeteer.launch({ headless: false, slowMo: 250 });

    // We've opened a new page in our browser and navigated to the URL from the argument
    const page = await browser.newPage();
    await page.goto(url);

    // Take a full page screenshot of the page as a buffer
    const pageBuffer = await page.screenshot({
        encoding: "binary",
        fullPage: true,
    });

    // Creating a path for us to save this screenshot buffer to
    // Puppeteer also has some built in methods for saving directly, I just prefer working with the stream myself
    const path = "/YOUR/PATH/HERE/example-node-server/screenShot.png";
    fs.createWriteStream(path).write(pageBuffer);

    //  ALWAYS close the browser when you're done so that the process effectively stops.
    // If you do any try-catch statements, make sure you close the browser in your catch statements (or use a finally statement)
    browser.close();
}

// Testing on Google
screenshotPage("https://google.com");
```

## More Advanced Scraping

Puppeteer has a very rich toolset, allowing you to access specific elements of a webpage, extract values from the DOM (Document Object Model), and even run Javascript on the page itself if the need should arise. It's a tool that's easy to get started with but very hard to master, so experiment with what you feel is most interesting. Like any coding project, the best way to do it is to try something you've never done and see how it breaks. Fix that problem, then onto the next.

You should note that many large websites have deterrents to this kind of programmatic scraping (Zillow, for example, will not allow you on with a bot-controlled browser), and the only advice I can give you is don't push your luck. If they've locked their sites to bots, then trying to circumvent that could put you in a world of legal trouble. That being said, if you want to test your own websites or verify information on a regular basis, this is one of the best custom solutions available to you.

[^1]: <a href='https://www.jdsupra.com/legalnews/web-scraping-watch-cases-set-to-clarify-9249962/' target='_blank'>Scrape at your own risk</a>
[^2]: <a href='https://pptr.dev/' target='_blank'>Puppeteer documentation</a>
