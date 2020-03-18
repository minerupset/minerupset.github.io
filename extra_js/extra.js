const quotes = [
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
      "Sucking at something is the first step to being sort of good at something.",
    author: "Jake the Dog"
  },
  {
    quote:
      "Show all your work on math problems, hide all your work in English papers.",
    author: "Taylor Mali - What Teachers Make"
  },
  {
    quote:
      "If you and I exchange apples, we each have an apple. But if we exchange ideas, we each have two ideas.",
    author: "Anonymous"
  },
  {
    quote:
      "A lump in the oatmeal, a lump in the throat, and a lump in the breast are not the same kind of lump. One needs to learn the difference.",
    author: "Anonymous"
  },
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    author: "Albus Percival Wulfric Brian Dumbledore"
  },
  {
    quote:
      "Out of the night that covers me, black as the pit from pole to pole, I thank whatever gods may be, for my unconquerable soul.",
    author: "William Ernest Henley"
  },
  {
    quote:
      "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
    author: "Albus Percival Wulfric Brian Dumbledore"
  },
  {
    quote:
      "Remember: if you can't be replaced, you can't be promoted. So train your replacement and prove you can be a good manager. ",
    author: "Unsourced (Anonymous)"
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
