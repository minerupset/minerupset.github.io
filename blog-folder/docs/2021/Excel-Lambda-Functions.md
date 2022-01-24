---
title: Excel LAMBDA Function
description: The introduction of the Excel LAMBDA Function is a fundamental shift in what users could do with Excel as a statically calculating system
keywords: Excel, Functions
date: Dec. 27, 2021
duration: 10 min
# update_date:
tags:
    - Excel
hide:
    - navigation
---

# Excel LAMBDA Functions

## You Nerd

I hadn't planned on one of my first posts being a moderate geekout over a brand new Excel function[^1], but I'll just think of this as a holiday miracle. Thanks non-denominational gift-bearing elderly figure for this prize!

## Setting the Stage: Static Workbooks

In a typical Excel workbook (ignoring any VBA), you do not have dynamic calculations running: what you have is a static representation of your formulas. Or put another way, you can't _iterate_ in an Excel formula. There are a few things that can (Data tables, Goal Seeks, etc.) but a formula result is a formula result, and that's it.

Let me give an example of what I mean by 'you can't iterate':

```vbscript title='An Impossible formula'
' You cannot do this in an Excel Formula
=WHILE(A1 < 5, B1 = B1 + 1)

' No no not allowed
```

Once an Excel workbook is finished calculating, it needs to be static. You edit a cell, it recalculates, and then it stops. You edit another cell, it recalculates, then it stops. This is possible because Excel works off of a calculation chain to handle this order of events, called a dependency chain[^2]: if A1 depends on B2 which depends on C3, then C3 is calculated first, then B2, then A1. This is how Excel determines if you have any circular references in the workbook, and in particularly large and nasty Excel files, if you make a change you may see everything hang for 30 seconds while your computer fan spins up a jet engine to cool off.

## LAMBDA Function Breaks The Chain (Not Really)[^3]

In software development, a _lambda_ function is a construct used in many languages, including Python, JavaScript, C#, and others (though it's sometimes called an _anonymous function_). Originally comes from lambda calculus - thanks Wikipedia[^4] - lambda functions essentially allow a user to define a function, and then pass it around as a variable.

That is a boring definition.

Practically speaking, a lambda function allows you to define a function on the go, without the computer having known beforehand what exactly the function will do. The LAMBDA function in Excel allows a user to define their own function, and then call it whenever they want. Here's an example:

```vbscript title='Basic additive LAMBDA function'
=LAMBDA(x,y,x+y)(1,2)
```

Breaking down the components, you can see the arguments are made up of

-   The function call: `=LAMBDA(`
-   The parameters to the function: `x,y,`
-   The function formula: `x+y)`
-   and the specific values for this function `(1,2)`

So this would return the result of 1+2 or 3. This example on its own isn't that special, but the real beauty of the LAMBDA function is two fold:

1. You can name functions (using the Name Manager), so our function above could be called 'ADDTWOVALUES' if you'd like, and
2. _You can call functions recursively_

This second point is the real big change that Excel has never done before. Calling functions recursively is essentially a backdoor to writing new logical flow statements (while loops, for loops, etc.) that are more dynamic rather than Excel's traditional static structure. Let's look at some examples of what this would be like.

## Some Recursive LAMBDA Function Examples

Because you can call a function recursively, you can iterate in the function itself. For example:

```vbscript title='RECURSIVESUM - Sum numbers like a for loop'
=LAMBDA(max,IF(max<=1,1,RECURSIVESUM(max-1) + max)
```

```vbscript title='RECURSIVEPRODUCT - Multiply numbers like a for loop'
=LAMBDA(max,IF(max<=1,1,RECURSIVEPRODUCT(max-1) * max)
```

```vbscript title='REVERSESTRING - Read characters from front to back'
=LAMBDA(string,IF(string="",string,REVERSESTRING(RIGHT(string,LEN(string)-1))&LEFT(string,1)))
```

There are some helpful resources online for converting 'for loop' logic to recursive logic which I've linked in the footnotes[^5].

## How To Create a Named LAMBDA Function

As of now, you have to have the latest beta version of Excel installed on your machine. You can find instructions to do this in the footnotes[^1]. One you have it installed, the process is essentially:

-   Come up with a lambda function (like the 3 I have above)
-   Create a Named Range that is the exact name of what you have in your lambda expression (above, my 3 functions are named RECURSIVESUM, RECURSIVEPRODUCT, and REVERSESTRING, respectively)
-   Paste your lambda expression in the 'Refers To' section of the Named Range

That's it. You should now be able to type `=YOUR_FUNCTION_NAME()' into a cell and have it execute your new recursive function.

[^1]: <a href='https://techcommunity.microsoft.com/t5/excel-blog/announcing-lambda-turn-excel-formulas-into-custom-functions/ba-p/1925546' target='_blank'>Microsoft Announcement of the LAMBDA function</a>
[^2]: <a href='https://docs.microsoft.com/en-us/office/client-developer/excel/excel-recalculation' target='_blank'>Excel's documentation on recalculation</a>
[^3]: <a href='https://www.youtube.com/watch?v=JDG2m5hN1vo' target='_blank'>Stevie Nicks probably hates the LAMBDA function</a>
[^4]: <a href='https://en.wikipedia.org/wiki/Anonymous_function' target='_blank'>Anonymous (Lambda) functions aren't new</a>
[^5]: <a href='https://www.educative.io/collection/page/6151088528949248/4547996664463360/6292303276670976' target='_blank'>Converting For Loops to Recursion</a> - not a chapter in '7 Habits of Highly Successful People'
