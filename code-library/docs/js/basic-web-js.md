# JavaScript - Basic Web Interaction

## What JS can do for you

Fundamentally, JavaScript is the language of the web. You'll see this again and again, but it is. Almost any dynamic element you see on a page, any form of interactivity, chances are it has some level of JavaScript at the wheel.

In the past, vanilla JavaScript (Vanilla JS) didn't have a strong enough API to be very user friendly, and so a number of libraries sprang up that helped to manage the code. jQuery has been a very popular one (often characterized by the use of `#!js $` before function calls) but the standard library has expanded to include many powerful elements that, while not rendering jQuery useless, do threaten its relevance. 

## Basic JS in the Web

When dealing with web JS (vs. say, NodeJS) you deal with the `#!js window` and `#!js document` objects and their associated scope. As well, you're in the ES6 environment, so the way you import code into your page is important. 

### Including JS on a page

```html
<body>
    <!-- Rest of body... -->
    <script type="module" src="./scripts/app.js"></script>
</body>
```

Using this construct is one means of guaranteeing that your code is loaded after your HTML. This helps reduce any errors from trying to parse the document and not finding the expected HTML element. You can also use the `#!js defer` tag in your script imports in your head to achieve the same thing. 

### Accessing elements on a webpage

Almost all of your DOM manipulation will work off of CSS selectors, taking this form:

```js
const someIdElement = document.querySelector("#some-id");
const someClassList = [...document.querySelectorAll(".some-class")];
//Because querySelectorAll returns a nodeList, not an array, 
//use the spread operator to convert it to an array
```

With this, you can begin to modify your elements, such as with `#!js .innerHTML`, `#!js .setAttribute`, or any other API call you might need

### Creating new elements

Often times you're not just modifying existing elements, but creating new elements as well. Here is an example of that process: we have a `#!html body` tag, we want to add to that tag a `#!html div` tag with a `#!html p` tag inside of it. 

```js
const bodyContainer = document.querySelector("body");

//Created our new elements
const newDiv = document.createElement("div");
const newPara = document.createElement("p");

//Let's give them some classes or ids, 
newDiv.classList.add("my-div-class");
newPara.setAttribute("id", "unique-paragraph");

//and some content for the paragraph
newPara.innerHTML = "Here is some text for our paragraph!";

//Add the paragraph to the div and the div to the body
newDiv.appendChild(newPara);
bodyContainer.appendChild(newDiv);
```

With this, it's easy to create new elements with all forms of identifying elements and content. Remember, don't add CSS via JavaScript. Instead, have CSS defined with classes, and simply add or remove classes from the `#!js classList` property of the new element.

### Binding `#!js this` correctly to functions in classes

Esoteric topic, but still very important. Let's say you have the following method and you want to link it to happen you click on a div

```js
makeFontRed(){
    const myElement = document.querySelector("object-to-color");
    //Remove then add guarantees it's there only the once
    myElement.classList.remove('.red-font');
    myElement.classList.add('.red-font');
}

document.querySelector("my-target-div").addEventListener("click", makeFontRed);
```

This worked great! You did this no problem, because there were just a couple fo free-floating lines of JS. But what happens in a class? You're going to have a collision of the word `#!js this`, because what is `#!js this`? Is it the JS class that contains the function you want to call, or is HTML element that is calling the function? 

Technically, the HTML element wins. But you don't want that, because the HTML element doesn't have the function we want. How do we `#!js bind` or `#!js apply` the correct `#!js this` keyword? With the `#!js bind` method!

```js
class Example{
    constructor(){
        //bound method created as a named variable
        this.boundRedMethod = this.makeFontRed.bind(this);
    }
    makeFontRed(){
        // Has a bunch of code containing our logic...
    }

    bindMakeRedFunction(){
        document.querySelector("my-target-div").addEventListener("click", this.boundRedMethod);
    }

    removeMakeRedFunction(){
       document.querySelector("my-target-div").removeEventListener("click", this.boundRedMethod); 
    }

}
```
So what did we do here? When we use the `#!js bind` method, we actually create an anonymous function. Now, in some cases this isn't a problem, but if we ever want to remove that event listener, we need to be able to find it again, and if it's anonymous, we're hosed. So we bound the method inside of a named variable. This gives us a pointer in memory so that when we want to remove the function later on, it can actually point at the correct function.

This may be a bit esoteric and a sudden jump in difficulty, but a deep understanding of this point will really help your ability to troubleshoot later problems of just what your JavaScript is doing to your HTML and how they two are crossing over. 
