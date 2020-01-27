# HTML and CSS - the Building Blocks

<hr>

## A Reminder about Tools

Web development can often look like a large, scary beast, with so many tools and steps and requirements and everything pulling every which way. This becomes true of any field, once you get deep enough into it. At the core though, it's all pretty simple: web browsers read HTML and CSS and make them look a certain way on a webpage (statically). Javascript can make your pages [dynamic<sup>1</sup>](`#`resources-and-references), but we don't need that right now. HTML and CSS are all you need to build the [Document Object Model (DOM)<sup>2</sup>](`#`resources-and-references) and make a webpage display in a browser.

Everything else on top of this - React components and Node servers and APIs and all that jazz, at the end of the day, resolve to someone somewhere having the right HTML and CSS put in front of them. _**Many of the core tools you'll use manipulate HTML and CSS in one way or another so that you're not manually typing out web pages.**_ Everything else, like video encoding, downloading files, and dynamic web apps are all details that come later.
<br>

## HTML - Your Structure

<hr>
[Hyper Text Markup Language<sup>3</sup>](`#`resources-and-references) is a means of encoding text that you write such that a browser can read it. Basic text files wouldn't work, because we have too many complicated objects to manipulate in a browser. Instead, you _tag_ various elements with different items in opening(< >) and closing(< />) angle brackets.

For example, the little header line you see above underneath the words 'HTML - Your Structure'. That's a simple header tag, given by wrapping the letters `hr` in our angle brackets. Paragraphs are given with `p` tags. Images, web links, videos, a lot of the web can be built with basic HTML.

HTML tags often have different attributes or identifiers in them. For example:

```html
<p class="myClass">This is a paragraph</p>
```

shows a paragraph that has the class attribute of `myClass`. This means then that we can reference our specific paragraph by finding the element of type myClass and doing some action to it. This concept is one of the core ideas behind how CSS, jQuery, and many other web technologies work; traversing the DOM, finding the elements with a given id or class, and then operating on them in some way.

It would be repetitive for me to list everything about HTML here. Suffice to say: it represents the building blocks of a webpage, it is created with tags in angle brackets, these tags have various attributes associated with them, and most of the tools you use will somehow manipulate HTML or the DOM in one form or another.
<br>

## CSS - Your Design

<hr>
If HTML is the structure of a page, then the Cascading Style Sheets represent the styling that you apply to that structure.

I sadly have a confession to make: I was tragically born without a sense of style. That may come as a shock, given how beautifully styled this blog is, but I felt the need to come clean.

CSS allows you to apply different styling rules (alignment, color, fonts, etc.) to your HTML elements based on their type, class, id, or other features. It's important to note that CSS is, as its name says, cascading.

Let's imagine you have a rule that applies a font size to every paragraph in a page, and you have a second rule that applies a different font size to the 5th paragraph. In this order, all of your paragraphs would take on the same rule, except for the 5th paragraph. It would have special rule. But if you instead listed the special rule first, and then listed the general rule, all of the paragraphs would look the same. CSS goes in order, applying each rule as it goes and overriding if necessary, so be sure and layout your rules in the order that makes the most sense.
<br>

## CSS - Reminders to myself:

### How to center things

<hr>
<br>

## Resources and References

<hr>

1. Yes, I know that HTML and CSS can have some dynamic elements to them too, but like any high level topic, we start with the simple lies and eventually build to uncomfortable truths.
2. Some more detail on the DOM available at <a href="https://www.w3schools.com/whatis/whatis_htmldom.asp" target="_blank">this link</a>
3. Great resource available at <a href="https://www.w3schools.com/html/default.asp" target="_blank">w3schools</a>
