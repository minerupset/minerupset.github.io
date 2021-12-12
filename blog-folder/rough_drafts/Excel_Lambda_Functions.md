---
title: Excel LAMBDA Function
description: The Introduction of the Excel LAMBDA Function is a fundamental shift in what users could do with Excel as a statically calculating system
date: Dec. 20, 2021
# update_date:
# specific_css:
# specific_js:
tags:
  - Excel
hide:
  - navigation
  # - toc
  - tags
---

# Excel Lambda Functions

## [First Heading]

I hadn't planned on one of my very first posts being a moderate geekout over a brand new Excel function[^1], but I guess as Mick Jagger once said, you can't always get what you want. And I think this new functionality will hold a special place in my heart, if only because it's so _cool_.

## Setting the Stage: Static Workbooks

In a typical Excel workbook (ignoring any VBA), you do not have dynamic calculations running: what you have is a static representation of your formulas. Or put another way, you can't _iterate_ in an Excel formula. There are a few things that can (Data tables, Goal Seeks, etc.) but a formula result is a formula result, and that's it.

Let me give an example of what I mean by you can't iterate:

```vbscript title='An Impossible formula'
' You cannot do this in an Excel Formula
=WHILE(A1 < 5, B1 = B1 + 1)
' No no not allowed
```

A way I've thought about this is that once an Excel workbook is finished calculating, it needs to be static. You edit a cell, it recalculates, and then it stops. You edit another cell, it recalculates, then it stops. This is possible because Excel works off of a calculation chain to handle this (this is way too big a topic to address here, but suffice to say that breaking the chain is bad)[^2]. This is why in particularly large and nasty Excel files, if you make a change, you sometimes see the workbook hang for 30 seconds while your computer fan spins up a jet engine to cool off.

## LAMBDA Function Breaks The Chain (Not Really)[^3]

In software development, a lambda function is a construct used in many languages, including Python, JavaScript, C#, and others (though it's sometimes called an _anonymous function_). Originally comes from lambda calculus - thanks Wikipedia[^4] - lambda functions essentially allow a user to define a function, and then pass it around as a variable.

That is a boring definition.

Practically speaking, the LAMBDA function in Excel allows a user to define their own function, and then call it whenever they want. Here's an example:

SHOW A SCREENSHOT OF A SIMPLE ADDITIVE EXAMPLE

Now this example on its own isn't that special, but the real beauty of the LAMBDA function is two fold:

1. You can name functions (using the Name Manager), so you can make a function called 'ADDTWOVALUES' if you'd like, and
2. _You can call functions recursively_

This second point is the real big change that

## LAMBDA in action: reversing a string

TODO: WRITE THIS BAD BOY OUT
`LAMBDA(string,IF(string="",string,REVERSESTRING(RIGHT(string,LEN(string)-1))&LEFT(string,1)))`

[^1]: <a href='https://techcommunity.microsoft.com/t5/excel-blog/announcing-lambda-turn-excel-formulas-into-custom-functions/ba-p/1925546' target='_blank'>Microsoft Announcement of the LAMBDA function</a>
[^2]: <a href='https://docs.microsoft.com/en-us/office/client-developer/excel/excel-recalculation' target='_blank'>Excel's documentation on recalculation</a>
[^3]: <a href='https://www.youtube.com/watch?v=JDG2m5hN1vo' target='_blank'>Stevie Nick probably hates the LAMBDA function</a>
[^4]: <a href='https://en.wikipedia.org/wiki/Anonymous_function' target='_blank'>Anonymous (Lambda) functions aren't new</a>
[^5]: <a href='https://www.educative.io/collection/page/6151088528949248/4547996664463360/6292303276670976' target='_blank'>Converting For Loops to Recursion</a> - not a chapter in '7 Habits of Highly Successful People'
