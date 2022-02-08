---
title: Under the Hood&#58; Excel Files as Zip Folders
keywords: Excel, Zip, XML, Compression, Microsoft Office
description: Knowing how Excel files are actually constructed can help you in those times when you really need to dive in to the weeds
date: February 7th, 2022
duration: 12 mins
tags:
    - Excel
    - VBA
    - Software
hide:
    - navigation
    # - tags
    # - toc
---

# Under the Hood: Excel Files as Zip Folders

Dealing with the plumbing in Excel is like dealing with any other problem in plumbing: you don't think about it until something is leaking and stinking up the place, and then it's the only thing you can think about. I'm going to show you a bit of how Excel spreadsheets (but also Word and PPT files as well) are constructed so that you can work with them in some unsanitary ways when you have no other option.

## Markup Language for Office

If you've ever tried to open an Excel file with a note editor (Notepad, Notepad++, etc.) you'll notice that you don't get much of anything legible.

![Excel file in a text editor](../assets/images/2022/Excel-Files-As-Zip-Folders/Excel-as-text-file.JPG)

This is because when Excel saves your document, there's no clean way to represent a spreadsheet as a single text document: the relationships and features are too complex. Instead, you need to bring together a larger package of information, each one its own discrete text file, but combined into a greater picture.

The way Microsoft chose to tackle this problem was to use XML, or _eXtensible Markup Language_. Similar to how HyperText Markup Language (HTML) is the underlying language of a website, XML offers a way to organize content in a consistent, simple manner with different files handling different distinct elements of a workbook.

![Folder structure of a decompressed Excel file](../assets/images/2022/Excel-Files-As-Zip-Folders/Excel-as-folder.JPG)

This means that a single Excel file isn't actually a file: it's a zipped (compressed) folder of all of these various XML and other files that define what its components are and how they interact. Here is an example of one of the files, specifically a "rels" file that shows all the files relationships.

![Example XML structure detailing a file](../assets/images/2022/Excel-Files-As-Zip-Folders/Example-rels-XML.JPG)

XML is a particularly useful format for storing this kind of information: it naturally has a parent/child relationship outline allowing for the kind of nesting required for such a document structure, and it is relatively light on overall required material. Were people to create Excel today there would undoubtedly be a discussion about XML vs. JSON, but this is the route Microsoft chose back in the 2000s and it appears to have paid off.

## Diving in Deeper

There is far too much detail to go all the way through, but I'll point out a few of the key elements to keep track of.

### Overall Navigation

Take a look for yourself in the folder structure, but the bulk of what you're looking for is within the 'xl' folder: that contains the various sheet objects, styling guides, and all the other components that make up the workbook. These will be bound together by the relationship files, which define how these pieces fit interconnect.

### System Fragility

It's very easy to break these files by editing small elements of the underlying XML. If you do feel like tinkering, I recommend you make a copy of the Excel file, then change the file extension from ".xlsx" to ".zip" and extract the folder. You can reverse that process by zipping the folder and changing the extension back to ".xlsx", but depending on what you edit, the Excel file may not work as expected when you do.

### Shared Strings

If you type a string value into a cell, it's not actually stored 'in' the cell. Instead, the Excel document has an XML sheet that acts as a database of all the unique strings in the file, and the cell has a reference to whichever unique string it needs. This allows you to save space in the likely scenario that you are repeating content across multiple cells or sheets, but it makes tracking down values complicated.

### Calculations and Chains

The calculation chain for Excel presents a singularly large and complicated topic[^1]: at its core, Excel is a calculation engine. It's one of the secret sauces and part of why Microsoft has made so much money from the software. A key component of that calculation engine is the calculation chain, which is the ordered list of cells to process. It ignores cells with entered decimal values and instead determines which formulas must be calculated first so that you can always calculate in a straight line. This is what allows the Excel engine to detect circular references, and hopefully, optimize the chain.

## When Does This Come Up?

With any luck, you should never have to dive in and modify this garbage by hand. In the same way that you never need to write HTML to visit and use a website, you should never have to jump into XML in the normal day to day of any kind of Microsoft Office work. That being said, here are a few times where it may come up:

-   **Borked files**
    -   Excel has a built in repair functionality that should work, but if it's not and you need to go extract a specific value, then XML may be the way to go
-   **Hidden content**
    -   VBA projects are not rendered as XML files: instead, they're stored as binaries, and Microsoft has made it very hard to crack those open, for good reason. There are professional tools built in VBA that Microsoft doesn't want to make easy to decompile. In addition, a significant number of computer viruses are VBA based, and binary packages are treated differently by the system, allowing them to be sequestered so that you can consume a workbook without activating any underlying code.
-   **Programmatically creating Office documents**
    -   While there are some Python libraries that can edit Excel files, they come with significant trade offs of efficiency and capability. Microsoft's own Open XML SDK[^2] is the best way to edit these files at the native level, though it there is a significant learning curve to the system. You'll need to be experienced in C# or VB.NET, and already be comfortable with basic software development practices.

I hope this was helpful if you're finding yourself staring down the barrel of an ongoing or programmatic Excel problem. The underlying architecture is clunky, but it may be the best way to solve your particular problem (though I would always start with vanilla Excel or VBA).

[^1]: Further reading on the <a href='https://docs.microsoft.com/en-us/office/client-developer/excel/excel-recalculation' target='_blank'>Calculation Chain</a> available here
[^2]: The <a href='https://docs.microsoft.com/en-us/office/open-xml/open-xml-sdk' target='_blank'>Open XML SDK</a> is a .NET library for programmatically editing Excel files
