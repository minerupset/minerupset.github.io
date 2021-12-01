---
title: Unpopular Opinion - Why Excel & VBA are the best gateway to coding
description: Excel and VBA introduce important aspects of software development in an easy to use package with real world application and a project-focused mindset
date: Dec. 6, 2021
update_date: Dec. 13, 2021
tags:
  - Excel
  - VBA
  - Software
hide:
  - navigation
  # - toc
---

# Unpopular Opinion: Why Excel & VBA are the best gateway to coding

## The Right Tool for the Job

Spreadsheets get a lot of bad press in today's day and age, whether for drudgery or for scandal. Even though I occasionally laugh at the memes or cringe at the fraud, I think this general spreadsheet hate is a bit short-sighted. There is no doubt that data entry work is mind-numbing to the core, and that the modern spreadsheet has been implicated in the wrongdoings of executives at Theranos[^1], Enron[^2], and more.

However, I think this misses the point: Excel (and by extension, Google Sheets) is here to stay[^3], and as long as they are used in the business world, having a grounding in the capabilities and basic functions will be an advantage to just about any employee. But even more than that, I believe that for anyone looking to break into the world of software development, especially if you are coming from a more corporate job, that Excel combined with its back-end language Visual Basic for Applications (VBA) is one of the best tools out there to learn practical skills needed for software development.

Making this claim will likely make me enemies on both sides of the fence. Experienced developers can look down on the tinker-toys that Excel has to offer, with its static processing and point-and-click interface (not to mention the garbage pile that is VBA syntax compared to any modern language). Meanwhile, frustrated business users can point to Excel's inconsistent formula conventions and general feature sprawl as proof that Excel is simply too unwieldy to invest any more time than is necessary. To them I say: you're right (sort of).

Excel is hardly the be-all of software tools, nor should someone invest all of their time in only learning spreadsheets (unless they fancy themselves as a competitor in the Excel eSports realm [^4]). But as a practical tool for modeling the world and learning the basics of how software works, you'd be hard pressed to find something better. Here's why:

## No Making Apple Pies from Scratch

Carl Sagan once said, "If you wish to make an apple pie from scratch, you must first invent the universe."[^5] It's a funny thought, but it also holds an important lesson in the computer science realm. So many aspiring developers want to know exactly how something works, but eventually you have to just accept that some steps are magic steps, and the little wizard in the computer just makes things work.

I personally believe that step should be reached early: not because curiosity is bad, but because it spreads attention too thin. How can you truly learn a single concept if you're trying to learn every concept at once? In more traditional languages (Python, Java, C#, etc.) developers invest heavily in 'inventing the universe'. Before you can begin to explore function and methods for objects and their properties, you have to fully define every single one of those objects, all of its properties, and deal with the errors along the way. That is, at best, a tedious process.

With Excel, you have a ready-built environment to experiment with right away. Want to click a button that makes a cell change color? You don't need to define what a button is, what a cell is, what the color property is, or how a click function should operate. All of that just works.

```vbscript title="Change C3 background color to red" linenums="1"
'One line of code and you can see direct impact
Range("C3").Interior.Color = 3
```

## Practicality From the Beginning

When I was a freshman in college, I had a glorified view of what computer science must be, and took introductory computer science my very first term. It took less than a week for me to convince myself that this field wasn't for me (I've heard Java has that effect on people), and I barely touched anything coding related for 7 years.

Jump to my first _'real'_ job after after grad school, and I within 6 months of joining my company I was teaching myself how to code in the evenings to speed up my job and improve projects for our clients. It wasn't that I had more time on my hands (I didn't), nor was I suddenly smarter (I wasn't): what I had was a real and practical reason to be learning to code.

During that first course in Java, I remember one of our final projects for the year was building a maze solver that leveraged a number of different sorting algorithms. A generous friend of mine dragged me through that project kicking and screaming, largely because I couldn't see a practical application for the assignment. When would we ever need to solve a maze? Turns out he went on to become a software engineer for Garmin, so for him, that project was a phenomenal practice for his future career. For me, I may have preferred a root canal.

Because Excel is so widely used by individuals and businesses across so many projects, there is almost always a practical need for spreadsheets that are better, faster, & stronger. This means that there are training grounds as far as the eye can see, and you're only limited by your needs. Since I first started using Excel seriously, I've built retirement calculators, train schedule tools, an automated meeting scheduler, an investment portfolio tracker, a mortgage calculator, and countless others. I didn't go and convince myself that learning to send meeting invitations would somehow help me theoretically: I was staring down the barrel of needing to send 60+ unique but similar meeting emails every week for the foreseeable future, and I decided to spend my time solving a puzzle than completing a mindless task.

If I had built that scheduler with Python, it would have been too intimidating to even begin. But since Excel already has the necessary components built in and a simple interface for storing data, it was simply a matter of trial and error, connecting the dots, and refining the user experience until I had a tool that saved me hours and my company tens of thousands of dollars a year.

## Big Concepts, Bite-Sized Projects

- When done correctly, can introduce useful coding concepts (SRP, OOP, even web development concepts of front end, backend, and database)

[^1]: <a href='https://www.techtosee.com/the-holmes-trial-gets-to-the-heart-of-the-excel-topic/' target='_blank'>Excel at the heart </a>of Holmes' case
[^2]: <a href='https://incisive.com/spreadsheet-error-horror-stories/' target='_blank'>Spreadsheets played a role</a> for Enron too
[^3]: Even in 2021, <a href='https://www.investopedia.com/articles/personal-finance/032415/importance-excel-business.asp' target='_blank'>Excel is still going strong</a>
[^4]: Excel has its first (and probably not last) <a href='https://www.oneesports.gg/gaming/microsoft-excel-esports-real-tournament/' target='_blank'>eSports World Cup tournament</a>
[^5]: <a href='https://www.goodreads.com/quotes/32952-if-you-wish-to-make-an-apple-pie-from-scratch' target='_blank'>From _Cosmos_, the original series</a>

https://www.thisiscolossal.com/2017/12/tatsuo-horiuchi-excel-artist/
https://www.bbc.com/news/technology-21938171
