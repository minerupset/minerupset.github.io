# HTML - the Building Blocks

## A Reminder about Tools

Web development can often look like a large, scary beast, with so many tools and steps and requirements and everything pulling every which way. This becomes true of any field, once you get deep enough into it. At the core though, it's all pretty simple: web browsers read HTML and CSS and make them look a certain way on a webpage (statically). Javascript can make your pages [dynamic<sup>1</sup>](#resources-and-references), but we don't need that right now. HTML and CSS are all you need to build the [Document Object Model (DOM)<sup>2</sup>](#resources-and-references) and make a webpage display in a browser.

Everything else on top of this - React components and Node servers and APIs and all that jazz, at the end of the day, resolve to someone somewhere having the right HTML and CSS put in front of them. _**Many of the core tools you'll use manipulate HTML and CSS in one way or another so that you're not manually typing out web pages.**_ Everything else, like video encoding, downloading files, and dynamic web apps are all details that come later.
<br>

## HTML - Your Structure

[Hyper Text Markup Language<sup>3</sup>](#resources-and-references) is a means of encoding text that you write such that a browser can read it. Basic text files wouldn't work, because we have too many complicated objects to manipulate in a browser. Instead, you _tag_ various elements with different items in opening(< >) and closing(< />) angle brackets.

For example, the little header line you see above underneath the words 'HTML - Your Structure'. That's a simple header tag, given by wrapping the letters `hr` in our angle brackets. Paragraphs are given with `p` tags. Images, web links, videos, a lot of the web can be built with basic HTML.

HTML tags often have different attributes or identifiers in them. For example:

```html
<p class="myClass">This is a paragraph</p>
```

shows a paragraph that has the class attribute of `myClass`. This means then that we can reference our specific paragraph by finding the element of type myClass and doing some action to it. This concept is one of the core ideas behind how many web technologies work; traversing the DOM, finding the elements with a given id or class, and then operating on them in some way.

## HTML - Semantic vs. Non-Semantic

HTML can convey exactly what the page is doing by using **semantic** markers, or elements that actually describe what they are. For example, a `!#html header` tag is semantic: it's a header, it says what it is. On the other hand, a `!#html div` tag is not semantic: it literally just means division. SEO operates off of using semantic markers where it finds them, so when you have the option, using a semantic marker. 

Semantic Elements:
- 

Non-semantic Elements:

<br>

## Resources and References


1. Yes, I know that HTML and CSS can have some dynamic elements to them too, but like any high level topic, we start with the simple lies and eventually build to uncomfortable truths.
2. Some more detail on the DOM available at <a href="https://www.w3schools.com/whatis/whatis_htmldom.asp" target="_blank">this link</a>
3. Great resource available at <a href="https://www.w3schools.com/html/default.asp" target="_blank">w3schools</a>
