---
title: Excel & VBA are Gateway Drugs
description: Excel and VBA introduce important aspects of software development in an easy-to-use package with real-world applications and a project-focused mindset
date: Dec. 13, 2021
#update_date: Dec. 20, 2021
duration: 15 min
tags:
  - Excel
  - VBA
  - Software
hide:
  - navigation
---

# Excel and VBA Are Gateway Drugs

## The Right Tool for the Job

Spreadsheets get a bad rap in today's day and age, most often for drudgery or for scandal. There is no doubt that data entry work is mind-numbing to the core, and the modern spreadsheet has been implicated in the wrongdoings of executives at Theranos[^1], Enron[^2], and more. That being said, I'm not joining the crowd to grab my torch and pitchfork just yet: Excel (and by extension, Google Sheets) is still one of the simplest and fastest ways for people to do practical math, and it is here to stay[^3]. As long as spreadsheet tools are used in the business world, having a firm grounding in the capabilities and basic functions will be an advantage to just about any employee.

More than that, I believe that for anyone looking to break into the world of software development, especially if you are coming from a more corporate job, Excel combined with its back-end language Visual Basic for Applications (VBA) is one of the best tools to learn practical skills and concepts needed for robust software development.

Making this claim will likely make me enemies on both sides of the fence. Experienced developers can look down on the tinker-toys that Excel has to offer, with its static processing, point-and-click interface, and the garbage pile that is VBA syntax compared to most modern languages. Meanwhile, frustrated business users can point to Excel's inconsistent formula conventions and general feature sprawl as proof that Excel is simply too unwieldy to invest any more time than is necessary. To them I say: you're right. But perfection is not what you're looking for in an introductory platform.

Excel is hardly the be-all of software tools, nor should someone invest all of their time in only learning spreadsheets (unless they fancy themselves as a competitor in the Excel eSports realm [^4]). But as a practical tool for modeling the world and learning the basics of how software works, you'd be hard pressed to find something better. Here's why:

## No Making Apple Pies from Scratch

Carl Sagan once said, "If you wish to make an apple pie from scratch, you must first invent the universe."[^5] It's a funny thought, but it also holds an important lesson in the computer science realm. So many aspiring developers want to know exactly how something works, but eventually you have to just accept that some steps are magic steps, and there is a small wizard in there executing 0s and 1s. There's nothing wrong with learning how to build compilers or write in Assembly, but it's foolhardy to try and become a jack of _all_ trades in software.

I personally believe this acceptance should be reached early: not because curiosity is bad, but because it spreads attention too thin. How can you truly learn a single concept if you're trying to learn every concept at once? In more traditional languages (Python, Java, C#, etc.) developers invest heavily in 'inventing the universe'. Before you can begin to explore functions and methods for objects and their properties, you have to fully define every single one of those objects, all of their properties, how they interact, and of course deal with the errors along the way. That is, at best, a tedious process.

With Excel, you have a ready-built environment to experiment with right away. Want to click a button that makes a cell change color? You don't need to define what a button is, what a cell is, what the color property is, or how a click function should operate. All of that just works, right out of the box.

```vbscript title="Change cell C3's background color to red"
'A few lines of code and you can see direct impact
Sub MakeC3Red()
    Range("C3").Interior.ColorIndex = 3
End Sub
```

## Practicality From the Beginning

When I was a freshman in college, I had a glorified view of software development and took Intro to Computer Science my very first term. In less than a week I was convinced the field wasn't for me (I've heard Java has that effect on people), and I barely touched anything coding related for 7 years.

Jump to my first 'real' job after after grad school, and within 6 months of joining I was teaching myself to code in the evenings, speeding up my job and improving outputs for clients. Within 2 years I had deployed multiple solutions company wide, automated several processes, and was leading the company training on Excel. It wasn't that I had more time on my hands (I didn't), nor was I suddenly smarter (I wasn't): instead, I had more problems that needed practical solutions.

During that first course in college, I remember our final project was building a maze solver based on different sorting algorithms. A generous friend of mine dragged me kicking and screaming through that project, largely because I couldn't see a practical application for the assignment. When would I ever need to solve a maze? My friend however, went on to become a software engineer at Garmin: for him, that project was phenomenal practice for his future career. For me, I may have preferred a root canal.

In the last few decades there has been a practical need for spreadsheets that are cleaner, faster, and more powerful, and I don't see that trend slowing yet. This means opportunities abound, and you're only limited by those practical needs. Since I first started using Excel seriously, I've built projects and models large and small, from retirement calculators and train schedule tools to an automated meeting scheduler, an investment portfolio tracker, a mortgage and budget calculator, and countless others. I didn't go and convince myself that learning to send meeting invitations would somehow help me in theory: I needed to send 60+ unique but mostly similar meeting emails every week for the foreseeable future, and I decided to spend my time solving a puzzle rather than completing a mindless task.

If I had built that scheduler with Python, it would have been too intimidating to even begin. But since Excel already has so many of the necessary components built-in and a simple interface for storing data, it was simply a matter of trial & error, refining the user experience until I had a tool that saved me hours and my company tens of thousands of dollars a year.

## Groundbreaking Concepts, Bite-Sized Projects

While Excel's claim to fame is financial modeling, its structure and backend language make it very useful for learning higher level software concepts quickly and easily. The Single Responsibility Principle (SRP), Object Oriented Programming (OOP), and even web-app application architectures such as a front end, back end, and database can be demonstrated in Excel and VBA.

Thanks to Excel's long (and frustrating) history in the world, there is no shortage of resources for the curious. I expect I'll put up a few tutorials myself, but if I put out anything new, it will be because I have stood on the shoulders of giants to get there. There are blogs and forums and StackOverflow posts as far as Google can see, with solutions to just about every problem under the sun. Not to mention, the skills developed in hunting down the right answer will pay dividends down the road with future projects.

It's not just Excel either: Google Sheets offers many of the same capabilities, only instead of VBA it utilizes JavaScript. JS is hardly everyone's favorite language, but if you're working with the web at all, you'll need the basics under your belt, and Google Sheets can offer an easy primer on how to use it.

## Not Old, but Classic

If you're an experienced developer, I wouldn't recommend diving into VBA: it has enough quirks and oddities to last a lifetime, and just seeing the IDE conjures the sound of a dial-up internet connection on your way to check AOL. But like I said at the beginning, this isn't about perfect: it's about a quick training ground for practical needs. If someone knows of a tool with the same level of functionality, depth of global support, ease of use for beginners, and breadth of applicability, I'm all ears. Until then though, I will simply Excel.

[^1]: <a href='https://www.techtosee.com/the-holmes-trial-gets-to-the-heart-of-the-excel-topic/' target='_blank'>Excel at the heart </a>of Holmes' case
[^2]: <a href='https://incisive.com/spreadsheet-error-horror-stories/' target='_blank'>Spreadsheets played a role</a> for Enron too
[^3]: Even in 2021, <a href='https://www.investopedia.com/articles/personal-finance/032415/importance-excel-business.asp' target='_blank'>Excel is still going strong</a>
[^4]: Excel has its first (and probably not last) <a href='https://www.oneesports.gg/gaming/microsoft-excel-esports-real-tournament/' target='_blank'>eSports World Cup tournament</a>
[^5]: <a href='https://www.goodreads.com/quotes/32952-if-you-wish-to-make-an-apple-pie-from-scratch' target='_blank'>From _Cosmos_, the original series</a>
