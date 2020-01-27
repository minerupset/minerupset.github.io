# JavaScript - Some Basics and Hello World

<hr>

## JavaScript Value Prop

<h3>Why JS is so useful:</h3>

Honestly, I can't really enumerate reasons here - I'm still learning it myself and it's hard to say. However, there are some key points about JavaScript that make it, at the very least, unavoidable:

- **It's the language of the web:** You'll hear that time and again, and it gets a bit old, but it doesn't make it any less true. JavaScript is the language of web browsers, case closed (narrowly beat out Visual Basic of all things back in the days of NetScape). Want proof? In literally any web page in Chrome of Firefox, open the developer tools and look at the console. You're looking at JavaScript.
- **It's used both front and back:** You'll hear all kinds of opinions on whether or not Python's Flask or C#'s ASP.NET or Java's Spring make the best API layer for a given page, and that's fine. But at the end of the day, the front of the web runs on JavaScript, and with NodeJS, so can the server layer too. That means that just one language can be used to build and deploy entire websites, soup to nuts. You can do similar things with Django in Python and Blazor/Razor pages in ASP.NET, but for true full stack development, you need to have JavaScript in your toolkit.

<h3>Challenges with JS</h3>

- **It wasn't built to last:** JavaScript was originally built in the space of 10 days by one developer (Brendan Eich). Now, Eich did a hell of a job, and there have been a lot of updates to JavaScript since then, but still, the foundations of the house weren't exactly planned out.
- **Time is no longer linear:** This is a product less of JavaScript itself but instead the way it's used. Think about it like this; if you send a request to a database for a list of movies on Netflix, does Netflix freeze for the next 2 seconds while it gets that info? No. It still shows you the screen and different buttons to click on, while a little spinning wheel sits there until that database call comes back. This means that things are constantly running asynchronously, with part of the page loading while another part is still being requested. This can make debugging a nightmare, as it's not a clean linear pattern like it is in most desktop-based systems.
  <br>

## Basic JavaScript Console App - Hello World

<hr>
Assuming you have:

- Downloaded VS Code
- Downloaded Node.js to your machine

Start a new folder in VS Code and add a file called `main.js` to your folder. There, type the following code:

```javascript
console.log("Hello World!");
```

To run this, have your terminal in your current VS Code folder and run `node main.js`.

Now, this is obviously an incredibly simple program; it accesses the console, uses the log method, and writes 'Hello World!'. Node and JS become significantly more complicated when they start getting into async functions and various API layers with databases, but we'll tackle that later on. For now though, we can quickly get a node module up and running, and it works.
<br>

## This seemed too easy - what's the catch?

<hr>
The catch is that JavaScript has a lot of magic principles with it, and it can get weird when you're looking at what's in the browser JavaScript engine vs. what's in the server side JavaScript. Node is a relatively new technology as far as JS is concerned, and while most of its wrinkles have been ironed out, it doesn't work the way you would expect a normal program to run, with [each line being executed one at a time<sup>1</sup>](`#`resources-and-references)
<br>

## Resources and References

<hr>

1. For a good video on how the asynchronous nature of Node works, check out <a href="https://www.youtube.com/watch?reload=9&v=8aGhZQkoFbQ" target="_blank">this video here</a>
