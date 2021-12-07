---
title: Unpopular Opinion - Why Excel & VBA are the best gateway to coding
description: Excel and VBA introduce important aspects of software development in an easy-to-use package with real-world applications and a project-focused mindset
date: Dec. 27, 2021
#update_date:
duration: 15 min
tags:
  - Excel
  - VBA
  - Software
hide:
  - navigation
---

# Unpopular Opinion: Why Excel & VBA are the Best Gateway to Coding

## The Right Tool for the Job

Spreadsheets get a lot of bad press in today's day and age, most often for drudgery or for scandal. There is no doubt that data entry work is mind-numbing to the core, and that the modern spreadsheet has been implicated in the wrongdoings of executives at Theranos[^1], Enron[^2], and more. However, I think this frustration with spreadsheets misses the point: Excel (and by extension, Google Sheets) is here to stay[^3], and as long as they are used in the business world, having a firm grounding in the capabilities and basic functions will be an advantage to just about any employee.

More than that, I believe that for anyone looking to break into the world of software development, especially if you are coming from a more corporate job, Excel combined with its back-end language Visual Basic for Applications (VBA) is one of the best tools to learn practical skills and concepts needed for robust software development.

Making this claim will likely make me enemies on both sides of the fence. Experienced developers can look down on the tinker-toys that Excel has to offer, with its static processing, point-and-click interface, and the garbage pile that is VBA syntax compared to most modern languages. Meanwhile, frustrated business users can point to Excel's inconsistent formula conventions and general feature sprawl as proof that Excel is simply too unwieldy to invest any more time than is necessary. To them I say: you're right (sort of).

Excel is hardly the be-all of software tools, nor should someone invest all of their time in only learning spreadsheets (unless they fancy themselves as a competitor in the Excel eSports realm [^4]). But as a practical tool for modeling the world and learning the basics of how software works, you'd be hard pressed to find something better. Here's why:

## No Making Apple Pies from Scratch

Carl Sagan once said, "If you wish to make an apple pie from scratch, you must first invent the universe."[^5] It's a funny thought, but it also holds an important lesson in the computer science realm. So many aspiring developers want to know exactly how something works, but eventually you have to just accept that some steps are magic steps, and the little wizard in the computer just makes things work.

I personally believe that step should be reached early: not because curiosity is bad, but because it spreads attention too thin. How can you truly learn a single concept if you're trying to learn every concept at once? In more traditional languages (Python, Java, C#, etc.) developers invest heavily in 'inventing the universe'. Before you can begin to explore function and methods for objects and their properties, you have to fully define every single one of those objects, all of its properties, and deal with the errors along the way. That is, at best, a tedious process.

With Excel, you have a ready-built environment to experiment with right away. Want to click a button that makes a cell change color? You don't need to define what a button is, what a cell is, what the color property is, or how a click function should operate. All of that just works, right out of the box.

```vbscript title="Change C3 background color to red"
'One line of code and you can see direct impact
Range("C3").Interior.Color = 3
```

## Practicality From the Beginning

When I was a freshman in college, I had a glorified view of what computer science must be, and took introductory computer science my very first term. In less than a week I was convinced the field wasn't for me (I've heard Java has that effect on people), and I barely touched anything coding related for 7 years.

Jump to my first _'real'_ job after after grad school, and within 6 months of joining I was teaching myself how to code in the evenings to speed up my job and improve projects for our clients. Within 2 years I had deployed multiple solutions company wide, automated several processes, and was leading the company training on Excel. It wasn't that I had more time on my hands (I didn't), nor was I suddenly smarter (I wasn't): what I had was more problems that needed solutions.

During that first course in Java, I remember one of our final projects for the year was building a maze solver that leveraged a number of different sorting algorithms. A generous friend of mine dragged me through that project kicking and screaming, largely because I couldn't see a practical application for the assignment. When would I ever need to solve a maze? For my friend, it was incredibly practical: turns out he went on to become a software engineer for Garmin, so for him that project was a phenomenal practice for his future career. For me, I may have preferred a root canal.

Because Excel is so widely used by individuals and businesses across so many projects, there is always a practical need for spreadsheets that are cleaner, faster, and more powerful. This means training grounds abound, and you're only limited by your needs. Since I first started using Excel seriously, I've built models and projects large and small, from retirement calculators and train schedule tools to an automated meeting scheduler, an investment portfolio tracker, a mortgage calculator, and countless others. I didn't go and convince myself that learning to send meeting invitations would somehow help me theoretically: I was staring down the barrel of needing to send 60+ unique but similar meeting emails every week for the foreseeable future, and I decided to spend my time solving a puzzle rather than completing a mindless task.

If I had built that scheduler with Python, it would have been too intimidating to even begin. But since Excel already has the necessary components built in and a simple interface for storing data, it was simply a matter of trial and error, connecting the dots, and refining the user experience until I had a tool that saved me hours and my company tens of thousands of dollars a year.

## Big Concepts, Bite-Sized Projects

While Excel's claim to fame is financial modeling, its structure and backend language make it very useful for learning some higher level software concepts quickly and easily. Concepts like the Single Responsibility Principle (SRP), Object Oriented Programming (OOP), and even application architecture considerations of a front end, back end, and a database can be utilized in Excel and VBA.

ANd it's not just Excel: Google Sheets offers many of the same capabilities, only instead of VBA you can utilize JavaScript. JS is hardly everyone's favorite language, but if you're working with the web at all, you'll need the basics under your belt, and Google Sheets can offer an easy primer on how to use it.

[^1]: <a href='https://www.techtosee.com/the-holmes-trial-gets-to-the-heart-of-the-excel-topic/' target='_blank'>Excel at the heart </a>of Holmes' case
[^2]: <a href='https://incisive.com/spreadsheet-error-horror-stories/' target='_blank'>Spreadsheets played a role</a> for Enron too
[^3]: Even in 2021, <a href='https://www.investopedia.com/articles/personal-finance/032415/importance-excel-business.asp' target='_blank'>Excel is still going strong</a>
[^4]: Excel has its first (and probably not last) <a href='https://www.oneesports.gg/gaming/microsoft-excel-esports-real-tournament/' target='_blank'>eSports World Cup tournament</a>
[^5]: <a href='https://www.goodreads.com/quotes/32952-if-you-wish-to-make-an-apple-pie-from-scratch' target='_blank'>From _Cosmos_, the original series</a>

https://www.thisiscolossal.com/2017/12/tatsuo-horiuchi-excel-artist/
https://www.bbc.com/news/technology-21938171
