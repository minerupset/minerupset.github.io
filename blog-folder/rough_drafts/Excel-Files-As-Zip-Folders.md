---
title: Under the Hood&#58; Excel Files as Zip Folders
keywords: Excel, Zip, XML, Compression, Microsoft Office
description: Knowing how Excel files are actually constructed can help you in those times when you really need to dive in to the weeds
date: February 7th, 2022
duration: 12 mins
# original_date:
# specific_css:
# specific_js:
tags:
  - Excel
  - VBA
hide:
  - navigation
  # - tags
  # - toc
---

# Under the Hood: Excel Files as Zip Folders

Dealing with the plumbing in Excel is like dealing with any other problem in plumbing: you don't think about it until something is leaking and stinking up the place, and then it's the only thing you can think about. I'm going to show you a bit of how Excel spreadsheets (but also Word and PPT files as well) are constructed so that you can work with them in some unsanitary ways when you have no other option.

## Markup Language for Office

If you've ever tried to open an Excel file with a note editor (Notepad, Notepad++, etc.) you'll notice that you don't get much of anything legible. (INSERT PHOTO). This is because when Excel saves your document, there's no clean way to represent a spreadsheet as a single text document: the relationships and features are too complex. Instead, you need to bring together a larger package of information, each one its own discrete text file, but combined into a greater picture.

The way Microsoft chose to tackle this problem was to use XML, or eXtensible Markup Language. Similar to how HyperText Markup Language (HTML) is the underlying language of a website, XML offers a way to organize content in a consistent, simple manner with different files handling different distinct elements of a workbook.

Why does this matter? Because you can't treat Excel files like normal files (can't edit without Excel, can't use git, etc.)
What does it mean?
How will you use it?

## When Does This Come Up?

With any luck, you should never have to dive in and modify this garbage by hand. In the same way that you never need to write HTML to visit and use a website, you should never have to jump into XML in the normal day to day of any kind of Microsoft Office work. That being said, here are a few times where it may come up:

- Borked files (repair should work, btu you can log in an find a value if you dig well enough)
- Hidden content (can't access VBA, but can access hidden rows)
- Programmatically creating Office documents (OpenXML SDK)

## [First Heading]

[^1]:
