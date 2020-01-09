const quotes = [
  {
    quote: "Hello World!",
    author: "CS students around the world"
  },
  {
    quote:
      "That's all it is. You just begin. You do the math. You solve one problem, and you solve the next one, and the next. And if you solve enough problems, you get to come home.",
    author: "Mark Watney (Andy Weir)"
  },
  {
    quote:
      "You can know the name of a bird in every language, and not know anything about the bird. There is a difference between the name of a thing, and the thing itself",
    author: "Richard Feynman"
  },
  {
    quote:
      "One man calls you a horse, you punch him in the mouth. A second man does, you call him a jerk. A third man does, maybe it's time to buy a saddle",
    author: "Jewish Proverb (from Lucky Number Slevin"
  },
  {
    quote: "Listen: Billy Pilgrim has come unstuck in time.",
    author: "Kurt Vonnegut Jr."
  },
  {
    quote:
      "Writing for a penny a word is ridiculous. If a man really wants to make a million dollars, the best way would be to start his own religion",
    author: "L. Ron Hubbard"
  },
  {
    quote: "The best revenge is not to be like that.",
    author: "Marcus Aurelius"
  },
  {
    quote: "An ounce of prevention is worth a pound of cure.",
    author: "Benjamin Franklin"
  },
  {
    quote:
      "Show all your work on math problems, hide all your work in English papers.",
    author: "Taylor Mali - What Teachers Make"
  },
  {
    quote:
      "If you and I exchange apples, we each still have an apple. But if we exchange ideas, we each have two ideas.",
    author: "Benjamin Franklin"
  },
  {
    quote:
      "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
    author: "Albus Percival Wulfric Brian Dumbledore"
  }
];

function addQuote() {
  let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("quotes-quote").innerHTML =
    '"' + currentQuote.quote + '"';
  document.getElementById("quotes-author").innerHTML = currentQuote.author;
}

function sayHiToConsoleGoers() {
  console.log(`Hello there, friend. I don't think you'll find too much interesting here, but it is good to look around to try and learn new things. If you're curious, this site is built with MkDocs, which has some great documentation at their site.
    
Isn't it kinda cool that you're just sending 0s and 1s through fiber optic and copper wires looped all around the world, but the 0s and 1s are coming at a speed your computer is programmed to handle so it can be decoded into actual valuable information? Or random cat videos, whichever you prefer`);
}

addQuote();
sayHiToConsoleGoers();
