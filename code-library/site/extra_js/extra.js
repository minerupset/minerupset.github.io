function addQuote() {
    let quotes = [];

    quotes.push({ quote: "Hello World!", author: "CS Students" });
    quotes.push({ quote: "That's all it is. You just begin. You do the math. You solve one problem, and you solve the next one, and the next. And if you solve enough problems, you get to come home.", author: "Mark Watney (Andy Weir)" });
    quotes.push({ quote: "You can know the name of a bird in every language, and not know anything about the bird. There is a difference between the name of a thing, and the thing itself", author: "Richard Feynman" });
    quotes.push({ quote: "One man calls you a horse, you punch him in the mouth. A second man does, you call him a jerk. A third man does, maybe it's time to buy a saddle", author: "`Jewish` saying" });
    quote.push({ quote: "Listen: Billy Pilgrim has come unstuck in time.", author: "Kurt Vonnegut Jr." });

    let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("quotes-quote").innerHTML = currentQuote.quote;
    document.getElementById("quotes-author").innerHTML = currentQuote.author;
}



function sayHiToConsoleGoers() {
    console.log(`Hello there, friend. I don't think you'll find too much interesting here, but it is good to look around to try and learn new things.
    
Isn't it kinda cool that you're just sending 0s and 1s through fiber optic and copper wires looped all around the world, but the 0s and 1s are coming at a speed your computer is programmed to handle so it can be decoded into actual valuable information? Or random cat videos, whichever you prefer`)
}

function addHeaderComment() {
    let comment = `Hullo`;
    document.prepend(document.createComment(comment));
}

addHeaderComment();
addQuote();
sayHiToConsoleGoers();